<template>
  <div class="npm run dev">
    <Header />
    <div class="page-project">
      <div class="project-banner" style="background: url('/images/projects/wood/banner.png');background-size: cover;">
        <img src="/images/rk.jpg" class="project-logo" alt="" title="">
        <div class="project-title">Wood</div>
      </div>
      <div class="page-project-container">

        <StakingComponent contractAddress="0x01A66144Fe13D9B0340cc809B2484372E54d4E92" />

        <div class="page-project-description">
          <h1>Wood Project — Promising Real Estate Investment Opportunity</h1>
          <h2>Secure Capital • Transparent Process • Attractive ROI</h2>
          <ul>
            <li>Funding Requirement: $350,000 in $UIC</li>
            <li>Construction Timeline: 4–5 months</li>
            <li>Sales Period: 1–2 months</li>
            <li>Projected Gross Revenue: $505,000</li>
          </ul>
          <h2>Investment Overview</h2>
          <p>The Wood Project presents a secure and well-structured real estate investment opportunity. Investor funds are held in staking for the entire project duration, ensuring capital security while generating passive staking rewards. Upon completion and sale, investors receive their full principal plus all accrued staking yields.</p>
          <h2>Key Advantages</h2>
          <ul>
            <li>Capital Protection — Funds remain staked until project closure.</li>
            <li>Short Timeline — Total duration of 5–7 months from start to exit.</li>
            <li>Profit-Driven — Projected sale price significantly exceeds initial investment.</li>
            <li>Dual Returns — Capital growth from property sale plus staking income.</li>
          </ul>
          <h2>ROI Potential</h2>
          <p>With a projected sale value of $505,000 against a funding requirement of $350,000, the Wood Project is designed to deliver competitive returns within a concise investment cycle.</p>
          <p>Join us to transform your capital into real estate gains backed by secure staking rewards.</p>
        </div>


        <div class="project-stat-container">
          <div class="project-stat-item">
            <span class="project-stat-item-value">350k $UIC</span>
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
import StakingComponent from "@/components/StakingComponent.vue";

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

