<template>
  <footer class="footer">
    <div class="footer-container">
      <nav class="footer-nav">
        <router-link to="/about">{{ $t('navAbout') }}</router-link>
        <router-link to="/white-paper">{{ $t('navWhitePaper') }}</router-link>
      </nav>
      <div class="footer-social">
        <a href="#">{{ $t('telegram') }}</a>
        <a href="#">{{ $t('instagram') }}</a>
        <a href="#">{{ $t('tikTok') }}</a>
        <a href="mailto:info@cementum.io">{{ $t('email') }}</a>
      </div>
    </div>
  </footer>
</template>