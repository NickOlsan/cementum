<template>
  <footer class="footer">
    <div class="footer-container">
      <nav class="footer-nav">
        <router-link to="/white-paper">{{ $t('navWhitePaper') }}</router-link>
        <router-link to="/tokenomics">{{ $t('navTokenomics') }}</router-link>
        <router-link to="/our-team">{{ $t('navOurTeam') }}</router-link>
        <router-link to="/privacy-policy">{{ $t('PrivacyPolicy') }}</router-link>
        <router-link to="/terms-of-use">{{ $t('TermsOfUse') }}</router-link>
      </nav>
      <div class="footer-social">
        <a href="https://telegram.me//uic_community" target="_blank">{{ $t('telegram') }}</a>
        <a href="https://x.com/Cementum_UIC" target="_blank">X.com</a>
        <a href="mailto:info@cementum.io" target="_blank">{{ $t('email') }}</a>
      </div>
    </div>
  </footer>
</template>