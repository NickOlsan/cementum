<template>
    <div class="staking-container">
        <h2>Информация о контракте</h2>
        <div v-if="contractStats" class="stats-box">
            <p>Сумма сбора: {{ formatBigInt(contractStats.maxStakingAmount) }}</p>
            <p>Всего застейкано: {{ formatBigInt(contractStats.totalStaked) }}</p>
            <p>Всего наград: {{ formatBigInt(contractStats.totalRewards) }}</p>
            <p>Количество стейкеров: {{ formatBigInt(contractStats.stakersCount, 0) }}</p>
            <p>Время начала стейкинга: {{
                    new Date(Number(contractStats.stakingStartTime) * 1000).toLocaleString()
                }}</p>
            <p>Продолжительность стейкинга: {{ Number(contractStats.stakingDuration) / 86400 }} дней</p>
            <p>Токен стейкинга: {{ contractStats.stakingToken }}</p>
            <p>Токен наград: {{ contractStats.rewardsToken }}</p>
            <p>Наград выдано: {{ formatBigInt(contractStats.totalClaimedRewards) }}</p>
        </div>

        <h2>Ваша информация</h2>
        <div v-if="userInfo" class="user-box">
            <p>Адрес кошелька: {{ walletAddress }}</p>
            <p>Сумма стейка: {{ formatBigInt(userInfo.amount) }}</p>
            <p>Награда: {{ formatBigInt(userInfo.reward) }}</p>
            <p>Награды собраны: {{ userInfo.hasWithdrawn ? 'Да' : 'Нет' }}</p>
        </div>

        <h2>Действия</h2>
        <button v-if="!walletAddress" class="project-status-coming-soon" @click="connectWallet()">Connect Wallet</button>
        <form v-else>
            <label>Сумма для стейкинга</label>
            <input v-model="stakeAmount" type="text" required />
            <button v-if="!isApproved" class="project-status-coming-soon" type="button" :disabled="approving" @click="approve()">Approve</button>
            <button v-else class="project-status-coming-soon" type="button" :disabled="!isStakingActive" @click="stake()">Stake</button>
            <button class="project-status-coming-soon" type="button" :disabled="!userInfo?.canClaimAll" @click="claimAll()">Claim all</button>
        </form>
        <div class="status" :class="{ error: statusError, success: !statusError }">{{ status }}</div>
    </div>
</template>

<script setup>
import {ref, onMounted, watch, computed} from 'vue';
import Web3 from 'web3';
import {useWalletStore} from '../stores/wallet';
import {stakingAbi, erc20Abi} from '../abis/stakingAbi.js';
import {storeToRefs} from "pinia";

const props = defineProps({
    contractAddress: {
        type: String,
        required: true
    }
});

const walletStore = useWalletStore();
const {walletAddress} = storeToRefs(walletStore);
console.log({walletAddress: walletAddress.value});
const connectWallet = walletStore.connectWallet;

const web3 = new Web3(window.ethereum);
const stakingContract = new web3.eth.Contract(stakingAbi, props.contractAddress);
const contractStats = ref(null);
const userInfo = ref(null);
const stakeAmount = ref('');
const status = ref('');
const statusError = ref(false);
const allowance = ref('0');
const isApproved = ref(false);
const approving = ref(false);
let stakingTokenContract;
const isStakingActive = computed(() => {
  if (!contractStats.value) return false;
  const now = Math.floor(Date.now() / 1000);
  const start = Number(contractStats.value.stakingStartTime);
  const end = start + Number(contractStats.value.stakingDuration);
  return now >= start && now <= end;
});

function formatBigInt(value, unit = 'ether') {
  return web3.utils.fromWei(value, unit);
}

async function updateStats() {
    console.log('updateStats started');

    try {
        const rawStats = await stakingContract.methods.getContractStats().call();
        console.log('rawStats:', rawStats);
        const stats = {};
        for (const [key, value] of Object.entries(rawStats)) {
            const normalizedKey = key.endsWith('_') ? key.slice(0, -1) : key;
            stats[normalizedKey] = value;
        }
        contractStats.value = stats;
        console.log('Processed stats:', stats);
    } catch (err) {
        console.error('updateStats error:', err);
        status.value = 'Ошибка загрузки статистики';
        statusError.value = true;
    }
    console.log('updateStats ended');
}

async function getUserInfo() {
    console.log('getUserInfo started for wallet:', walletAddress.value);
    if (!walletAddress.value) {
        console.log('getUserInfo: No wallet address');
        return;
    }
    try {
        const rawInfo = await stakingContract.methods.getUserInfo(walletAddress.value).call();
        console.log('rawInfo:', rawInfo);
        const info = {};
        for (const [key, value] of Object.entries(rawInfo)) {
            const normalizedKey = key.endsWith('_') ? key.slice(0, -1) : key;
            info[normalizedKey] = value;
        }
        userInfo.value = info;
        console.log('Processed userInfo:', info);
    } catch (err) {
        console.error('getUserInfo error:', err);
        status.value = 'Ошибка загрузки информации пользователя';
        statusError.value = true;
    }
    console.log('getUserInfo ended');
}

async function stake() {
    console.log('stake started with amount:', stakeAmount.value);
    if (!walletAddress.value) {
        console.log('stake: No wallet address');
        return;
    }
    try {
        let cleanedAmount = stakeAmount.value;
        const amountInWei = web3.utils.toWei(cleanedAmount, 'ether');
        console.log('amountInWei:', amountInWei);
        await stakingContract.methods.stake(amountInWei).send({from: walletAddress.value});
        console.log('Stake transaction successful');
        status.value = 'Стейк успешен';
        statusError.value = false;
        stakeAmount.value = '';
        await updateStats();
        await getUserInfo();
    } catch (err) {
        console.error('stake error:', err);
        status.value = `Ошибка стейкинга: ${err.message}`;
        statusError.value = true;
    }
    console.log('stake ended');
}

async function claimAll() {
    console.log('claimAll started');
    if (!walletAddress.value) {
        console.log('claimAll: No wallet address');
        return;
    }
    try {
        await stakingContract.methods.claimAll().send({from: walletAddress.value});
        console.log('claimAll transaction successful');
        status.value = 'Заявка наград успешна';
        statusError.value = false;
        await updateStats();
        await getUserInfo();
    } catch (err) {
        console.error('claimAll error:', err);
        status.value = `Ошибка заявки: ${err.message}`;
        statusError.value = true;
    }
    console.log('claimAll ended');
}

async function getUserBalance() {
  console.log('getUserBalance started');
  if (!stakingTokenContract || !walletAddress.value) {
    console.log('getUserBalance: Missing contract or wallet');
    return BigInt(0);
  }
  try {
    const balance = await stakingTokenContract.methods.balanceOf(walletAddress.value).call();
    console.log('User balance:', balance);
    return BigInt(balance);
  } catch (err) {
    console.error('getUserBalance error:', err);
    return BigInt(0);
  } finally {
      console.log('getUserBalance ended');
  }
}

async function setMaxStakeAmount() {
  console.log('setMaxStakeAmount started');
  if (!contractStats.value) {
    console.log('setMaxStakeAmount: No contract stats');
    return;
  }
  const balance = await getUserBalance();
  const maxStaking = BigInt(contractStats.value.maxStakingAmount);
  const totalStaked = BigInt(contractStats.value.totalStaked);
  const capacity = maxStaking - totalStaked;
  const maxPossible = balance < capacity ? balance : capacity;
  stakeAmount.value = web3.utils.fromWei(maxPossible.toString(), 'ether');
  console.log('Set stakeAmount to:', stakeAmount.value);
  console.log('setMaxStakeAmount ended');
}
onMounted(async () => {
    console.log('onMounted started');
    await updateStats();
    if (contractStats.value && contractStats.value.stakingToken) {
      console.log('Creating stakingTokenContract with address:', contractStats.value.stakingToken);
      stakingTokenContract = new web3.eth.Contract(erc20Abi, contractStats.value.stakingToken);
      if (walletAddress.value) await checkAllowance();
    }
    await getUserInfo();
    console.log('onMounted ended');
    await setMaxStakeAmount();
});

watch(walletAddress, async (newVal) => {
    console.log('walletAddress watcher triggered with new value:', newVal);
    await getUserInfo();
    await setMaxStakeAmount();
});

watch(contractStats, async (stats) => {
    console.log('contractStats watcher triggered with stats:', stats);
  if (stats && stats.stakingToken && walletAddress.value) {
    if (!stakingTokenContract) {
      console.log('Creating stakingTokenContract in contractStats watcher');
      stakingTokenContract = new web3.eth.Contract(erc20Abi, stats.stakingToken);
    }
    await checkAllowance();
  }
  await setMaxStakeAmount();
});

watch(walletAddress, async (newVal) => {
    console.log('walletAddress watcher for allowance triggered with new value:', newVal);
  if (contractStats.value && contractStats.value.stakingToken && newVal) {
    if (!stakingTokenContract) {
      console.log('Creating stakingTokenContract in walletAddress watcher');
      stakingTokenContract = new web3.eth.Contract(erc20Abi, contractStats.value.stakingToken);
    }
    await checkAllowance();
  }
  await setMaxStakeAmount();
});

async function checkAllowance() {
    console.log('checkAllowance started');
  if (!stakingTokenContract || !walletAddress.value) {
      console.log('checkAllowance: Missing contract or wallet');
      return;
  }
  try {
    const result = await stakingTokenContract.methods.allowance(walletAddress.value, props.contractAddress).call();
    console.log('Allowance result:', result);
    allowance.value = result;
    const amountInWei = web3.utils.toWei(stakeAmount.value || '0', 'ether');
    console.log('amountInWei for check:', amountInWei);
    isApproved.value = result >= amountInWei;
    console.log('isApproved:', isApproved.value);
  } catch (err) {
      console.error('checkAllowance error:', err);
  }
    console.log('checkAllowance ended');
}

watch(stakeAmount, async (newVal) => {
    console.log('stakeAmount watcher triggered with new value:', newVal);
  await checkAllowance();
});

async function approve() {
    console.log('approve started with amount:', stakeAmount.value);
  if (!stakingTokenContract || !walletAddress.value) {
      console.log('approve: Missing contract or wallet');
      return;
  }
  approving.value = true;
  try {
    const amountInWei = web3.utils.toWei(stakeAmount.value, 'ether');
    console.log('approve amountInWei:', amountInWei);
    await stakingTokenContract.methods.approve(props.contractAddress, amountInWei).send({from: walletAddress.value});
    console.log('Approve transaction successful');
    await checkAllowance();
    status.value = 'Аппрув успешен';
    statusError.value = false;
  } catch (err) {
    console.error('approve error:', err);
    status.value = `Ошибка аппрува: ${err.message}`;
    statusError.value = true;
  }
  approving.value = false;
    console.log('approve ended');
}

watch(stakeAmount, (newVal) => {
    console.log('stakeAmount cleaning watcher triggered with newVal:', newVal);
    let cleaned = newVal
        .replace(/[^0-9.]/g, '')
        .replace(/\./g, function (match, offset, string) {
            return (string.indexOf('.') === offset) ? '.' : '';
        });
    if (cleaned !== newVal) {
        stakeAmount.value = cleaned;
        console.log('Cleaned stakeAmount to:', cleaned);
    }
});
</script>

<style scoped>
 .staking-container {
     color: white;
 }
</style>