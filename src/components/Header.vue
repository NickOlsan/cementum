<!-- src/components/Header.vue -->
<template>
  <header :class="{ active: isActive }" class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
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
        <a href="" class="connected-button"><img src="/public/images/icon-wallet.png" class="img" alt=""/><span>{{ $t('connectWallet') }}</span></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
}

const currentLocale = computed(() => locale.value)




import { ref, onMounted, onUnmounted } from 'vue';

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
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

