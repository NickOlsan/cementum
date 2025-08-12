<template>
  <div class="npm run dev">
    <Header />
    <div class="page-project">
      <div class="project-banner" style="background: url('/images/projects/baloo/banner.png');background-size: cover;">
        <img src="/images/arch.jpg" class="project-logo" alt="" title="">
        <div class="project-title">Baloo</div>
      </div>
      <div class="page-project-container">

        <StakingComponent contractAddress="0x203B987822d8Be3B1Ae119F9CED2D852F00089f5" />

        <div class="page-project-description">
          <h1>Baloo Project — High-Potential Real Estate Investment</h1>
          <h2>Secure Capital • Transparent Process • Attractive ROI</h2>
          <ul>
            <li>Funding Requirement: $650,000 in $UIC</li>
            <li>Construction Timeline: 7–8 months</li>
            <li>Sales Period: 1–2 months</li>
            <li>Projected Gross Revenue: $945,000</li>
          </ul>
          <h2>Investment Overview</h2>
          <p>The Baloo Project offers a structured and secure investment opportunity in the real estate sector. Investor funds are held in staking for the entire duration of the project, ensuring capital security while generating staking rewards. Upon project completion and property sale, investors receive their full principal along with accumulated staking yields.</p>
          <h2>Key Advantages</h2>
          <ul>
            <li>* Capital Protection: Funds remain staked until project closure.</li>
            <li>* Fixed Timeline: Total duration of 8–10 months.</li>
            <li>* Profit-Driven: Targeted sale price exceeds construction cost by a significant margin.</li>
            <li>* Dual Returns: Capital appreciation from property sale + staking rewards</li>
          </ul>
          <h2>ROI Potential</h2>
          <p>With a projected sale value of $945,000 against a $650,000 investment requirement, the Baloo Project is positioned to deliver competitive returns within a short investment cycle.</p>
          <p>Partner with us to turn strategic capital allocation into tangible profits.</p>
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
            <div href="/images/projects/baloo/1.jpg" class="photo-container-element">
              <img src="/images/projects/baloo/1.jpg" />
            </div>
            <div href="/images/projects/baloo/2.jpg" class="photo-container-element">
              <img src="/images/projects/baloo/2.jpg" />
            </div>
            <div href="/images/projects/baloo/3.jpg" class="photo-container-element">
              <img src="/images/projects/baloo/3.jpg" />
            </div>
            <div href="/images/projects/baloo/4.jpg" class="photo-container-element">
              <img src="/images/projects/baloo/4.jpg" />
            </div>
            <div href="/images/projects/baloo/5.jpg" class="photo-container-element">
              <img src="/images/projects/baloo/5.jpg" />
            </div>
            <div href="/images/projects/baloo/6.jpg" class="photo-container-element">
              <img src="/images/projects/baloo/6.jpg" />
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
</script>

