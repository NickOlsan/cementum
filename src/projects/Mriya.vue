<template>
  <div class="npm run dev">
    <Header />
    <div class="page-project">
      <div class="project-banner" style="background: url('/images/projects/mriya/banner.png');background-size: cover;">
        <img src="/images/arch.jpg" class="project-logo" alt="" title="">
        <div class="project-title">Mriya</div>
        <div class="project-status">
          <span class="project-status-selling">{{ $t('selling') }}</span>
        </div>
      </div>
      <div class="page-project-container">
        <!--      <div class="tabs">-->
        <!--        <button-->
        <!--            class="tab tab-service"-->
        <!--            :class="{ active: activeTab === 'tab1' }"-->
        <!--            @click="setActiveTab('tab1')"-->
        <!--        >-->
        <!--          {{ $t('offering') }}-->
        <!--        </button>-->
        <!--        <button-->
        <!--            class="tab tab-service"-->
        <!--            :class="{ active: activeTab === 'tab2' }"-->
        <!--            @click="setActiveTab('tab2')"-->
        <!--        >-->
        <!--          {{ $t('info') }}-->
        <!--        </button>-->
        <!--        <button-->
        <!--            class="tab tab-service"-->
        <!--            :class="{ active: activeTab === 'tab3' }"-->
        <!--            @click="setActiveTab('tab3')"-->
        <!--        >-->
        <!--          {{ $t('cam') }}-->
        <!--        </button>-->
        <!--        <button-->
        <!--            class="tab tab-service"-->
        <!--            :class="{ active: activeTab === 'tab4' }"-->
        <!--            @click="setActiveTab('tab4')"-->
        <!--        >-->
        <!--          {{ $t('photo') }}-->
        <!--        </button>-->
        <!--      </div>-->
        <!--      <div class="tab-container" :class="{ active: activeTab === 'tab1' }">-->
        <!--        -->
        <!--      </div>-->

        <div class="project-stat-container">
          <div class="project-stat-item">
            <span class="project-stat-item-value">500k $UIC</span>
            <span class="project-stat-item-name">{{ $t('fundraising') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">530k $UIC</span>
            <span class="project-stat-item-name">{{ $t('totalAllocation') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">8</span>
            <span class="project-stat-item-name">{{ $t('duration') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">-</span>
            <span class="project-stat-item-name">{{ $t('roi') }}</span>
          </div>
        </div>

        <div class="page-project-description">
          <h1>Mriya Project — Successfully Delivered Real Estate Investment</h1>
          <h2>Capital Secured • Proven Track Record • Attractive Returns</h2>
          <ul>
            <li>Investment Amount: $510,000 in $UIC</li>
            <li>Construction Timeline: 8 months</li>
            <li>Sales Status: Two sections already sold</li>
            <li>Projected Gross Revenue: $685,000</li>
          </ul>
          <h2>Investment Overview</h2>
          <p>The Mriya Project is a successfully completed real estate development with a proven track record. Initial investor funds of $510,000 were deployed over an 8-month construction period. With two sections already sold, the project is on track to deliver strong returns.</p>
          <h2>Key Advantages</h2>
          <ul>
            <li>Capital Security — Funds were efficiently used to complete the project on schedule.</li>
            <li>Sales Progress — Two sections sold, confirming market demand.</li>
            <li>Attractive Returns — Projected gross revenue of $685,000 ensures profitable exit.</li>
            <li>Transparency — Investors have clear visibility on sales and project milestones.</li>
          </ul>
          <h2>ROI Realization</h2>
          <p>With a projected revenue of $685,000 from an initial investment of $510,000, the Mriya Project delivers a solid return within a proven timeframe.</p>
          <p>Partner with us to leverage successful projects and realize tangible profits in real estate investment.</p>
        </div>

        <div class="project-timeline">
          <div class="project-timeline-title">{{ $t('timeLine') }}</div>
          <div class="project-timeline-bar">

            <div class="project-timeline-point point-left active" style="top:0;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint1') }}</div>
            </div>
            <div class="project-timeline-point point-right active" style="top:100px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint2') }}</div>
            </div>
            <div class="project-timeline-point point-left active" style="top:200px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint3') }}</div>
            </div>
            <div class="project-timeline-point point-right " style="top:300px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint4') }}</div>
            </div>
          </div>
        </div>

        <div class="project-video">
          <video controls width="600">
            <source src="/images/projects/mriya/video.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="photo-container">
          <div ref="galleryRef" class="gallery photo-container-elements">
            <div href="/images/projects/mriya/1.jpg" class="photo-container-element">
              <img src="/images/projects/mriya/1.jpg" />
            </div>
            <div href="/images/projects/mriya/2.jpg" class="photo-container-element">
              <img src="/images/projects/mriya/2.jpg" />
            </div>
          </div>
        </div>


      </div>

    </div>
    <Footer />
  </div>
  <div class="toasty1"><img src="/images/projects/mriya/toasty1.png" alt="" class="img"></div>
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
</script>


