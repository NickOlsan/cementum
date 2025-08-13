<template>



    <div class="staking-container">
      <div class="staking-container-a">
        <div class="staking-container-stat" v-if="timeUntilStakingStartInDays !== 0">
          <span class="staking-container-stat-name">Coming Soon</span>
          <span class="staking-container-stat-value">Start in {{ timeUntilStakingStartInDays }} day<span v-if="timeUntilStakingStartInDays > 1">s</span></span>
        </div>
        <div class="staking-container-stat" v-else>
          <div v-if="userInfo.hasWithdrawn != true">
            <span class="staking-container-stat-name">Live</span>
            <span class="staking-container-stat-value">Duration {{ Number(contractStats.stakingDuration) / 86400 }} day</span>
          </div>
          <div v-else>
            <span class="staking-container-stat-name">Completed</span>
            <span class="staking-container-stat-value"></span>
          </div>
        </div>

        <div class="staking-container-stat">
          <span class="staking-container-stat-name">Fundraising</span>
          <span class="staking-container-stat-value">{{ formatBigInt(contractStats?.maxStakingAmount) }} ${{ stakeTokenInfo.symbol }}</span>
        </div>
        <div class="staking-container-stat">
          <span class="staking-container-stat-name">Chain</span>
          <span class="staking-container-stat-value"><img src="/images/bnb-logo.png" alt="" title=""/><span>BSC</span></span>
        </div>
        <div class="staking-container-stat">
          <span class="staking-container-stat-name">Stakes</span>
          <span class="staking-container-stat-value">{{ Number(formatBigInt(contractStats?.totalStaked)).toFixed(2) }} ${{ stakeTokenInfo.symbol }}</span>
        </div>
      </div>
      <div class="staking-container-b">
        <div class="staking-container-b-header">
          <div class="staking-container-b-title">Unlock power of your {{ stakeTokenInfo.symbol }} tokens</div>
        </div>
        <div class="staking-container-b-body">
          <div class="staking-container-b-body-row">
            <span>Staked</span>
            <span>{{ Number(formatBigInt(userInfo?.amount)).toFixed(2) }} ${{ stakeTokenInfo.symbol }}</span>
          </div>
          <div class="staking-container-b-body-row">
            <span>Yield</span>
            <span>{{ Number(formatBigInt(userInfo?.reward)).toFixed(2) }} ${{ rewardTokenInfo.symbol }}</span>
          </div>
        </div>

<!--        <div v-if="contractStats" class="stats-box">-->
<!--          <p>Сумма сбора: {{ formatBigInt(contractStats.maxStakingAmount) }}</p>-->
<!--          <p>Всего застейкано: {{ formatBigInt(contractStats.totalStaked) }}</p>-->
<!--          <p>Всего наград: {{ formatBigInt(contractStats.totalRewards) }}</p>-->
<!--          <p>Количество стейкеров: {{ formatBigInt(contractStats.stakersCount, 0) }}</p>-->
<!--          <p>Время начала стейкинга: {{-->
<!--              new Date(Number(contractStats.stakingStartTime) * 1000).toLocaleString()-->
<!--            }}</p>-->
<!--          <p>Продолжительность стейкинга: {{ Number(contractStats.stakingDuration) / 86400 }} дней</p>-->
<!--          <p>Токен стейкинга: {{ contractStats.stakingToken }}</p>-->
<!--          <p>Токен наград: {{ contractStats.rewardsToken }}</p>-->
<!--          <p>Наград выдано: {{ formatBigInt(contractStats.totalClaimedRewards) }}</p>-->
<!--        </div>-->


<!--        <div v-if="userInfo" class="user-box">-->
<!--          <p>Адрес кошелька: {{ walletAddress }}</p>-->
<!--          <p>Сумма стейка: {{ formatBigInt(userInfo.amount) }}</p>-->
<!--          <p>Награда: {{ formatBigInt(userInfo.reward) }}</p>-->
<!--          <p>Награды собраны: {{ userInfo.hasWithdrawn ? 'Да' : 'Нет' }}</p>-->
<!--        </div>-->

        <div v-if="userInfo.hasWithdrawn != true">
          <button v-if="!walletAddress" @click="connectWallet()" class="staking-form-button-connect-wallet button" :disabled="isBeforeStakingStart">Connect Wallet</button>
          <form class="staking-form" v-else>

            <label class="staking-form-label">Amount {{formatBigInt(userBalance)}} {{ stakeTokenInfo.symbol }}
                <a
                    v-if="!userBalance"
                    :href="`https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=${contractStats.stakingToken}`"
                    target="_blank"
                >Buy {{ stakeTokenInfo.symbol }}</a></label>
            <input class="staking-form-input" v-model="stakeAmount" type="text" required />
            <button v-if="!isApproved && isStakingActive" class="staking-form-button-approve button" type="button" :disabled="approving" @click="approve()">Approve</button>
            <button v-else class="staking-form-button-stake button" type="button" :disabled="!isStakingActive" @click="stake()">Stake</button>
            <br/>
            <button class="staking-form-button-claim-all button" type="button" :disabled="!canClaimAll" @click="claimAll()">Claim all</button>
          </form>
          <div class="staking-message status" :class="{ error: statusError, success: !statusError }">{{ status }}</div>
        </div>





      </div>
    </div>
</template>

<script setup>
import {ref, onMounted, watch, computed} from 'vue';
import Web3 from 'web3';
import {useWalletStore} from '../stores/wallet';
import {stakingAbi, tokenAbi} from '../abis/stakingAbi.js';
import {storeToRefs} from "pinia";

const props = defineProps({
    contractAddress: {
        type: String,
        required: true
    }
});

const walletStore = useWalletStore();
const {walletAddress} = storeToRefs(walletStore);
const connectWallet = walletStore.connectWallet;

const web3 = new Web3('https://bsc-dataseed.bnbchain.org');
const stakingContract = new web3.eth.Contract(stakingAbi, props.contractAddress);
const contractStats = ref({ totalStaked: 0});
const userInfo = ref({ amount: 0, reward: 0});
const stakeAmount = ref('');
const status = ref('');
const statusError = ref(false);
const allowance = ref('0');
const isApproved = ref(false);
const approving = ref(false);
let stakingTokenContract;
const userBalance = ref(BigInt(0));
const stakeTokenInfo = ref({});
const rewardTokenInfo = ref({});

async function getTokenInfo(tokenAddress) {
  const cacheKey = `token_info_${tokenAddress}`;
  const cachedInfo = localStorage.getItem(cacheKey);

  if (cachedInfo) {
    return JSON.parse(cachedInfo);
  }

  try {
    const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
    const [name, symbol, decimals] = await Promise.all([
      tokenContract.methods.name().call(),
      tokenContract.methods.symbol().call(),
      tokenContract.methods.decimals().call()
    ]);

    const tokenInfo = { name, symbol, decimals: Number(decimals) };

    localStorage.setItem(cacheKey, JSON.stringify(tokenInfo));

    return tokenInfo;
  } catch (error) {
    console.error(`Error fetching token info for ${tokenAddress}:`, error);
    return { name: 'Unknown', symbol: 'UNK', decimals: 18 };
  }
}

const isStakingActive = computed(() => {
  if (!contractStats.value || !stakeAmount.value) return false;
  const now = Math.floor(Date.now() / 1000);
  const start = Number(contractStats.value.stakingStartTime);

  const end = start + Number(contractStats.value.stakingDuration);
  let amountInWei;
  try {
    amountInWei = web3.utils.toWei(stakeAmount.value, 'ether');
  } catch (e) {
    return false;
  }

  const bigAmount = BigInt(amountInWei);
  return now >= start && now <= end && bigAmount > BigInt(0) && bigAmount <= userBalance.value;

});

//timer start
const timeUntilStakingStartInDays = computed(() => {
  if (!contractStats.value || contractStats.value.stakingStartTime == null) return null;

  const now = Math.floor(Date.now() / 1000);
  const start = Number(contractStats.value.stakingStartTime);

  if (now >= start) return 0;

  const secondsLeft = start - now;
  const daysLeft = Math.ceil(secondsLeft / (60 * 60 * 24));
  return daysLeft;
});

const isBeforeStakingStart = computed(() => {
  if (!contractStats.value || contractStats.value.stakingStartTime == null) return true;

  const now = Math.floor(Date.now() / 1000);
  const start = Number(contractStats.value.stakingStartTime);

  return now < start;
});
//timer end

const canClaimAll = computed(() => {
    if (!contractStats.value) {
        return false;
    }

    const unlockTimestamp = Number(contractStats.value.unlockTime) * 1000;

    return userInfo.value.reward && !userInfo.value.hasWithdrawn && (contractStats.value.withdrawalsEnabled || unlockTimestamp < Date.now());
});

function formatBigInt(value, unit = 'ether') {
  return web3.utils.fromWei(value || 0n, unit);
}

async function updateStats() {
    try {
        const rawStats = await stakingContract.methods.getContractStats().call();
        const stats = {};
        for (const [key, value] of Object.entries(rawStats)) {
            const normalizedKey = key.endsWith('_') ? key.slice(0, -1) : key;
            stats[normalizedKey] = value;
        }
        contractStats.value = stats;
        if (stats.stakingToken && !stakeTokenInfo.value.name) {
            stakeTokenInfo.value = await getTokenInfo(stats.stakingToken);
        }

        if (stats.rewardsToken && !rewardTokenInfo.value.name) {
            rewardTokenInfo.value = await getTokenInfo(stats.rewardsToken);
        }

    } catch (err) {
        console.error('updateStats error:', err);
        status.value = 'Error loading statistics';
        statusError.value = true;
    }
}

async function getUserInfo() {
    if (!walletAddress.value) {
        return;
    }
    try {
        const rawInfo = await stakingContract.methods.getUserInfo(walletAddress.value).call();
        const info = {};
        for (const [key, value] of Object.entries(rawInfo)) {
            const normalizedKey = key.endsWith('_') ? key.slice(0, -1) : key;
            info[normalizedKey] = value;
        }
        userInfo.value = info;
    } catch (err) {
        console.error('getUserInfo error:', err);
        status.value = 'Error loading user information';
        statusError.value = true;
    }
}

async function stake() {
    if (!walletAddress.value) {
        return;
    }
    try {
        let cleanedAmount = stakeAmount.value;
        const amountInWei = web3.utils.toWei(cleanedAmount, 'ether');
        const estimatedGas = await stakingContract.methods.stake(amountInWei).estimateGas({from: walletAddress.value});
        const gasWithBuffer = Math.ceil(Number(estimatedGas) * 1.05);
        const gasPrice = await web3.eth.getGasPrice();
        await stakingContract.methods.stake(amountInWei).send({from: walletAddress.value, gas: gasWithBuffer, gasPrice: gasPrice});
        status.value = 'The steak is a success';
        statusError.value = false;
        stakeAmount.value = '';
        await updateStats();
        await getUserInfo();
    } catch (err) {
        console.error('stake error:', err);
        status.value = `Staking error: ${err.message}`;
        statusError.value = true;
    }
}

async function claimAll() {
    if (!walletAddress.value) {
        return;
    }
    try {
        const estimatedGas = await stakingContract.methods.claimAll().estimateGas({from: walletAddress.value});
        const gasWithBuffer = Math.ceil(Number(estimatedGas) * 1.05);
        const gasPrice = await web3.eth.getGasPrice();
        await stakingContract.methods.claimAll().send({from: walletAddress.value, gas: gasWithBuffer, gasPrice: gasPrice});
        status.value = 'Award application successful';
        statusError.value = false;
        await updateStats();
        await getUserInfo();
    } catch (err) {
        console.error('claimAll error:', err);
        status.value = `Application error: ${err.message}`;
        statusError.value = true;
    }
}

async function getUserBalance() {
  if (!stakingTokenContract || !walletAddress.value) {
    return BigInt(0);
  }
  try {
    const balance = await stakingTokenContract.methods.balanceOf(walletAddress.value).call();
    return BigInt(balance);
  } catch (err) {
    console.error('getUserBalance error:', err);
    return BigInt(0);
  }
}

async function setMaxStakeAmount() {
  if (!contractStats.value) {
    return;
  }
  const balance = await getUserBalance();
  userBalance.value = balance;
  const maxStaking = BigInt(contractStats.value.maxStakingAmount);
  const totalStaked = BigInt(contractStats.value.totalStaked);
  const capacity = maxStaking - totalStaked;
  const maxPossible = balance < capacity ? balance : capacity;
  stakeAmount.value = web3.utils.fromWei(maxPossible.toString(), 'ether');
}
onMounted(async () => {
    await updateStats();
    if (contractStats.value && contractStats.value.stakingToken) {
      stakingTokenContract = new web3.eth.Contract(tokenAbi, contractStats.value.stakingToken);
      if (walletAddress.value) await checkAllowance();
    }
    await getUserInfo();
    await setMaxStakeAmount();
});

watch(walletAddress, async (newVal) => {
    await getUserInfo();
    await setMaxStakeAmount();
});

watch(contractStats, async (stats) => {
  if (stats && stats.stakingToken && walletAddress.value) {
    if (!stakingTokenContract) {
      stakingTokenContract = new web3.eth.Contract(tokenAbi, stats.stakingToken);
    }
    await checkAllowance();
  }
  await setMaxStakeAmount();
});

watch(walletAddress, async (newVal) => {
  if (contractStats.value && contractStats.value.stakingToken && newVal) {
    if (!stakingTokenContract) {
      stakingTokenContract = new web3.eth.Contract(tokenAbi, contractStats.value.stakingToken);
    }
    await checkAllowance();
  }
  await setMaxStakeAmount();
});

async function checkAllowance() {
  if (!stakingTokenContract || !walletAddress.value) {
      return;
  }
  try {
    const result = await stakingTokenContract.methods.allowance(walletAddress.value, props.contractAddress).call();
    allowance.value = result;
    const amountInWei = web3.utils.toWei(stakeAmount.value || '0', 'ether');
    isApproved.value = result >= amountInWei;
  } catch (err) {
      console.error('checkAllowance error:', err);
  }
}

watch(stakeAmount, async (newVal) => {
  await checkAllowance();
});

async function approve() {
  if (!stakingTokenContract || !walletAddress.value) {
      return;
  }
  approving.value = true;
  try {
    const amountInWei = web3.utils.toWei(stakeAmount.value, 'ether');
    const estimatedGas = await stakingTokenContract.methods.approve(props.contractAddress, amountInWei).estimateGas({from: walletAddress.value});
    const gasWithBuffer = Math.ceil(Number(estimatedGas) * 1.05);
    const gasPrice = await web3.eth.getGasPrice();
    await stakingTokenContract.methods.approve(props.contractAddress, amountInWei).send({from: walletAddress.value, gas: gasWithBuffer, gasPrice: gasPrice});
    await checkAllowance();
    status.value = 'Approval successful';
    statusError.value = false;
  } catch (err) {
    console.error('approve error:', err);
    status.value = `Approval error: ${err.message}`;
    statusError.value = true;
  }
  approving.value = false;
}

watch(stakeAmount, (newVal) => {
    let cleaned = newVal
        .replace(/[^0-9.]/g, '')
        .replace(/\./g, function (match, offset, string) {
            return (string.indexOf('.') === offset) ? '.' : '';
        });
    if (cleaned !== newVal) {
        stakeAmount.value = cleaned;
    }
});

</script>

<style scoped>
 .staking-container {
     color: white;
 }
</style>