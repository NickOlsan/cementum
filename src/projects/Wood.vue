<template>
  <div class="npm run dev">
    <Header />
    <div class="page-project">
      <div class="project-banner" style="background: url('/images/projects/wood/banner.png');background-size: cover;">
        <img src="/images/rk.jpg" class="project-logo" alt="" title="">
        <div class="project-title">Wood</div>
        <div class="project-status">
          <span class="project-status-coming-soon">{{ $t('comingSoon') }}</span>
        </div>
      </div>
      <div class="page-project-container">

        <div class="staking-container">
          <div class="staking-section">
            <h2 class="staking-section-title">Deploy CementumStaking Contract</h2>
            <div class="staking-field-container">
            <form id="deployForm">
                <label class="staking-field-label">Owner Address</label>
                <div class="staking-field-controls">
                  <input type="text" id="ownerAddress" class="staking-field-input" placeholder="0x..." required />
                  <button type="submit" class="staking-field-button">Deploy Contract</button>
                  <div class="status" id="deployStatus"></div>
                </div>
            </form>
            </div>
            <div class="staking-field-container">
              <label for="connectContractAddress" class="staking-field-label">Or connect to existing contract:</label>
              <div class="staking-field-controls">
                <input type="text" id="connectContractAddress" placeholder="0x..." value="0xcd81995A0E402AA87C7656d457424Ab0E665D981" class="staking-field-input" />
                <button id="connectContractBtn" class="staking-field-button">Connect Contract</button>
                <div class="status" id="connectContractStatus"></div>
              </div>
            </div>
          </div>

          <div class="staking-section">
            <h2 class="staking-section-title">Staking & Claim</h2>
            <form id="stakeForm">
              <div class="staking-field-container">
                <label class="staking-field-label">Amount to Stake</label>
                <div class="staking-field-controls">
                  <input type="number" id="stakeAmount" class="staking-field-input" placeholder="1000000000000000000" required />
                  <button type="submit" class="staking-field-button">Stake</button>
                  <button type="button" id="claimAllBtn" class="staking-field-button">Claim All</button>
                </div>
              </div>
              <div class="status" id="stakeStatus"></div>
            </form>
          </div>


          <h2>Статистика контракта</h2>
          <div id="statsBox" style="background:#f3f6fa;padding:16px;border-radius:8px;margin-bottom:24px;font-size:15px;"></div>
          <h2>Ваша информация</h2>
          <div id="userBox" style="background:#f3f6fa;padding:16px;border-radius:8px;margin-bottom:24px;font-size:15px;"></div>
          <button id="refreshBtn" style="margin-bottom:32px;">Обновить статистику</button>
          <div class="status" id="accountStatus"></div>


        </div>

        <div class="project-stat-container">
          <div class="project-stat-item">
            <span class="project-stat-item-value">350k UIC</span>
            <span class="project-stat-item-name">{{ $t('fundraising') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">-</span>
            <span class="project-stat-item-name">{{ $t('realization') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">-</span>
            <span class="project-stat-item-name">{{ $t('duration') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">-</span>
            <span class="project-stat-item-name">{{ $t('roi') }}</span>
          </div>
        </div>

        <div class="project-timeline">
          <div class="project-timeline-title">{{ $t('timeLine') }}</div>
          <div class="project-timeline-bar">
            <div class="project-timeline-point point-left active" style="top:0;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint1') }}</div>
            </div>
            <div class="project-timeline-point point-right" style="top:100px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint2') }}</div>
            </div>
            <div class="project-timeline-point point-left" style="top:200px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint3') }}</div>
            </div>
            <div class="project-timeline-point point-right" style="top:300px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint4') }}</div>
            </div>
          </div>
        </div>

        <div class="photo-container">
          <div ref="galleryRef" class="gallery photo-container-elements">
            <div href="/images/projects/wood/1.jpg" class="photo-container-element">
              <img src="/images/projects/wood/1.jpg" />
            </div>
            <div href="/images/projects/wood/2.jpg" class="photo-container-element">
              <img src="/images/projects/wood/2.jpg" />
            </div>
            <div href="/images/projects/wood/3.jpg" class="photo-container-element">
              <img src="/images/projects/wood/3.jpg" />
            </div>
            <div href="/images/projects/wood/4.jpg" class="photo-container-element">
              <img src="/images/projects/wood/4.jpg" />
            </div>
            <div href="/images/projects/wood/5.jpg" class="photo-container-element">
              <img src="/images/projects/wood/5.jpg" />
            </div>
            <div href="/images/projects/wood/6.jpg" class="photo-container-element">
              <img src="/images/projects/wood/6.jpg" />
            </div>
            <div href="/images/projects/wood/7.jpg" class="photo-container-element">
              <img src="/images/projects/wood/7.jpg" />
            </div>
            <div href="/images/projects/wood/8.jpg" class="photo-container-element">
              <img src="/images/projects/wood/8.jpg" />
            </div>
          </div>
        </div>

      </div>

    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue"
import { ref, onMounted } from 'vue'

import lightGallery from 'lightgallery'

// Стили LightGallery
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// Плагины
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

const activeTab = ref('tab1')

function setActiveTab(key) {
  activeTab.value = key
}

// Ссылка на контейнер галереи
const galleryRef = ref(null)

onMounted(() => {
  if (galleryRef.value) {
    lightGallery(galleryRef.value, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
    })
  }
})


////////////////////////////////////////////////

////////////////////////////////////////////////

</script>

