<template>
  <div class="partner-container">
    <div class="partner-title">
      {{ $t('partnerTitle') }}
    </div>
    <div class="partner-elements">
      <div class="partner-element">
        <span class="partner-element-logo"><img src="/public/images/arch.jpg"></span>
        <span class="partner-element-name">{{ $t('partnerArch') }}</span>
      </div>
      <div class="partner-element">
        <span class="partner-element-logo"><img src="/public/images/rk.jpg"></span>
        <span class="partner-element-name">{{ $t('partnerRk') }}</span>
      </div>
      <div class="partner-element">
        <span class="partner-element-logo"><img src="/public/images/dogma.jpg"></span>
        <span class="partner-element-name">{{ $t('partnerDogma') }}</span>
      </div>
      <div class="partner-element">
        <span class="partner-element-logo"><img src="/public/images/vizart.jpg"></span>
        <span class="partner-element-name">{{ $t('partnerVizArt') }}</span>
      </div>
    </div>
  </div>
</template>