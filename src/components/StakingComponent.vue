<template>
  <div class="staking-container">
    <h2>Информация о контракте</h2>
    <div v-if="contractStats" class="stats-box">
      <p>Общий стейк: {{ contractStats.totalStaked / 1e18 }}</p>
      <p>Общие награды: {{ contractStats.totalRewards  / 1e18 }}</p>
      <p>Максимальный стейк: {{ contractStats.maxStakingAmount  / 1e18 }}</p>
      <p>Количество стейкеров: {{ contractStats.stakersCount }}</p>
      <p>Не востребованные награды: {{ contractStats.unclaimedRewardsCount }}</p>
      <p>Время начала стейкинга: {{ contractStats.stakingStartTime }}</p>
      <p>Продолжительность стейкинга: {{ contractStats.stakingDuration }}</p>
      <p>Время разблокировки: {{ contractStats.unlockTime }}</p>
      <p>Вывод разрешен: {{ contractStats.withdrawalsEnabled ? 'Да' : 'Нет' }}</p>
      <p>Награды установлены: {{ contractStats.rewardsSet ? 'Да' : 'Нет' }}</p>
      <p>Токен стейкинга: {{ contractStats.stakingToken }}</p>
      <p>Токен наград: {{ contractStats.rewardsToken }}</p>
      <p>Общие заявленные награды: {{ contractStats.totalClaimedRewards }}</p>
    </div>

    <h2>Ваша информация</h2>
    <div v-if="userInfo" class="user-box">
      <p>Сумма стейка: {{ userInfo.amount }}</p>
      <p>Время стейкинга: {{ userInfo.stakedAt }}</p>
      <p>Вывод произведен: {{ userInfo.hasWithdrawn ? 'Да' : 'Нет' }}</p>
      <p>Награда заявлена: {{ userInfo.hasClaimedReward ? 'Да' : 'Нет' }}</p>
      <p>Награда: {{ userInfo.reward }}</p>
      <p>Можно заявить все: {{ userInfo.canClaimAll ? 'Да' : 'Нет' }}</p>
    </div>

    <h2>Действия</h2>
    <form @submit.prevent="stake">
      <label>Сумма для стейкинга</label>
      <input v-model="stakeAmount" type="number" placeholder="Введите сумму" required />
      <button type="submit" :disabled="!walletAddress" @click="!walletAddress && connectWallet()">Стейк</button>
      <button type="button" :disabled="!walletAddress" @click="!walletAddress ? connectWallet() : claimAll()">Заявить все</button>
    </form>
    <div class="status" :class="{ error: statusError, success: !statusError }">{{ status }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Web3 from 'web3';
import { useWalletStore } from '../stores/wallet';

const props = defineProps({
  contractAddress: {
    type: String,
    required: true
  }
});

const walletStore = useWalletStore();
const walletAddress = walletStore.walletAddress;
const connectWallet = walletStore.connectWallet;

const web3 = new Web3(window.ethereum);
const stakingContract = new web3.eth.Contract(stakingAbi, props.contractAddress);
const contractStats = ref(null);
const userInfo = ref(null);
const stakeAmount = ref('');
const status = ref('');
const statusError = ref(false);

import { stakingAbi } from '../abis/stakingAbi.js';

async function updateStats() {
    console.log('updateStats');

  try {
    const rawStats = await stakingContract.methods.getContractStats().call();
    const stats = {};
    for (const [key, value] of Object.entries(rawStats)) {
      const normalizedKey = key.endsWith('_') ? key.slice(0, -1) : key;
      stats[normalizedKey] = value;
    }
    contractStats.value = stats;
      console.log({stats});
  } catch (err) {
    console.error(err);
    status.value = 'Ошибка загрузки статистики';
    statusError.value = true;
  }
}

async function getUserInfo() {
  if (!walletAddress) return;
  try {
    const rawInfo = await stakingContract.methods.getUserInfo(walletAddress).call();
    const info = {};
    for (const [key, value] of Object.entries(rawInfo)) {
      const normalizedKey = key.endsWith('_') ? key.slice(0, -1) : key;
      info[normalizedKey] = value;
    }
    userInfo.value = info;
  } catch (err) {
    console.error(err);
    status.value = 'Ошибка загрузки информации пользователя';
    statusError.value = true;
  }
}

async function stake() {
  if (!walletAddress) return;
  try {
    await stakingContract.methods.stake(stakeAmount.value).send({ from: walletAddress });
    status.value = 'Стейк успешен';
    statusError.value = false;
    stakeAmount.value = '';
    await updateStats();
    await getUserInfo();
  } catch (err) {
    status.value = `Ошибка стейкинга: ${err.message}`;
    statusError.value = true;
  }
}

async function claimAll() {
  if (!walletAddress) return;
  try {
    await stakingContract.methods.claimAll().send({ from: walletAddress });
    status.value = 'Заявка наград успешна';
    statusError.value = false;
    await updateStats();
    await getUserInfo();
  } catch (err) {
    status.value = `Ошибка заявки: ${err.message}`;
    statusError.value = true;
  }
}

onMounted(async () => {
  await updateStats();
  await getUserInfo();
});
</script>

<style scoped>
/* Добавьте стили аналогично staking_demo.html */
</style>