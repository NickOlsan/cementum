<template>
  <div class="npm run dev">
    <Header />
    <div class="page-project">
      <div class="project-banner" style="background: url('/images/projects/baloo/banner.png');background-size: cover;">
        <img src="/images/arch.jpg" class="project-logo" alt="" title="">
        <div class="project-title">Baloo</div>
        <div class="project-status">
          <span class="project-status-coming-soon">{{ $t('comingSoon') }}</span>
        </div>
      </div>
      <div class="page-project-container">

<!--        <div class="project-offer">-->
<!--          <div class="project-offer-container">-->
<!--            <div class="project-offer-sidebar">-->
<!--              <div class="project-offer-sidebar-item">-->
<!--                <div class="project-offer-sidebar-item-value">Open</div>-->
<!--                <div class="project-offer-sidebar-item-name">{{ $t('status') }}</div>-->
<!--              </div>-->
<!--              <div class="project-offer-sidebar-item">-->
<!--                <div class="project-offer-sidebar-item-value">500k UIC</div>-->
<!--                <div class="project-offer-sidebar-item-name">{{ $t('fundraising') }}</div>-->
<!--              </div>-->
<!--              <div class="project-offer-sidebar-item">-->
<!--                <div class="project-offer-sidebar-item-value">530k UIC</div>-->
<!--                <div class="project-offer-sidebar-item-name">{{ $t('totalAllocation') }}</div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="project-offer-content">-->

<!--            </div>-->

<!--          </div>-->
<!--        </div>-->


            <StakingComponent months="8" contractAddress="0xbF810423E8444bb1F9857280eD49Ab1a702580E7" />

        <div class="project-stat-container">
          <div class="project-stat-item">
            <span class="project-stat-item-value">650k UIC</span>
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

