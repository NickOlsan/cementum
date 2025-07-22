<!-- src/components/Header.vue -->
<template>
  <header :class="{ active: isActive }" class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <img src="/images/logo.svg" alt="" title="" />
          <span>Cementum</span>
          <small>United Investment Company</small>
        </router-link>

      </div>
      <div class="header-panel">

<!--        <nav class="navigation">-->
<!--          <router-link to="/about">{{ $t('navAbout') }}</router-link>-->
<!--        </nav>-->
<!--        <div class="language">-->
<!--          <button :class="{ active: locale === 'en' }" @click="changeLanguage('en')">EN</button>-->
<!--          <button :class="{ active: locale === 'uk' }" @click="changeLanguage('uk')">UA</button>-->
<!--        </div>-->
        <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x12ce6A31AAA2e0f2efc653A838037a533BEcFF24" class="buy-button" target="_blank"><span>{{ $t('buyUic') }}</span></a>
        <button class="connect-button" v-if="!walletAddress" @click="connectWallet"><img src="/public/images/icon-wallet.png" class="img" alt=""/><span>{{ $t('connectWallet') }}</span></button>
        <span v-if="walletAddress" class="connected-button">
          <img src="/public/images/icon-wallet.png" class="img" alt=""/>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import Web3 from 'web3';

// --- Языки
const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('language', lang);
};

const currentLocale = computed(() => locale.value);

// --- Скролл эффект
const isActive = ref(false);
let lastScrollTop = 0;

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > 50 && currentScroll > lastScrollTop) {
    isActive.value = true;
  } else if (currentScroll < lastScrollTop) {
    isActive.value = false;
  }

  lastScrollTop = Math.max(0, currentScroll);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  checkSession(); // Проверяем сессию при загрузке
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// --- Авторизация MetaMask
const walletAddress = ref('');

const connectWallet = async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask не установлен!');
    return;
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts[0];

    const message = 'Подтвердите вход на сайт';

    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, address, ''],
    });

    const response = await fetch('https://cementum.io/wallet-auth.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, signature }),
    });

    // ✅ читаем body только один раз
    const result = await response.json();

    if (result.status === 'ok') {
      walletAddress.value = address;
      localStorage.setItem('walletAddress', address);
      alert(`Вы успешно вошли как ${address}`);
    } else {
      alert('Ошибка авторизации на сервере');
    }
  } catch (err) {
    console.error('MetaMask Error:', err);
    alert(`Ошибка авторизации: ${err.message || err}`);
  }
};

const checkSession = async () => {
  try {
    const res = await fetch('https://cementum.io/check-session.php');
    const data = await res.json();
    if (data.wallet) {
      walletAddress.value = data.wallet;
    }
  } catch (err) {
    console.warn('Не удалось проверить сессию:', err);
  }
};
</script>

