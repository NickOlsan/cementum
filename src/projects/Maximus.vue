<template>
  <div class="npm run dev">
    <Header />
    <div class="page-project">
      <div class="project-banner" style="background: url('/images/projects/maximus/banner.png');background-size: cover;">
        <img src="/images/dogma.jpg" class="project-logo" alt="" title="">
        <div class="project-title">Maximus</div>
        <div class="project-status">
          <span class="project-status-completed">{{ $t('completed') }}</span>
        </div>
      </div>
      <div class="page-project-container">

        <div class="project-stat-container">
          <div class="project-stat-item">
            <span class="project-stat-item-value">640k $UIC</span>
            <span class="project-stat-item-name">{{ $t('fundraising') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">890k $UIC</span>
            <span class="project-stat-item-name">{{ $t('realization') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">15 month</span>
            <span class="project-stat-item-name">{{ $t('duration') }}</span>
          </div>
          <div class="project-stat-item">
            <span class="project-stat-item-value">39%</span>
            <span class="project-stat-item-name">{{ $t('roi') }}</span>
          </div>
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
            <div class="project-timeline-point point-right active" style="top:300px;">
              <div class="project-timeline-point-name">{{ $t('timeLinePoint4') }}</div>
            </div>
          </div>
        </div>

        <div class="photo-container">
          <div ref="galleryRef" class="gallery photo-container-elements">
            <div href="/images/projects/maximus/1.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/1.jpg" />
            </div>
            <div href="/images/projects/maximus/2.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/2.jpg" />
            </div>
            <div href="/images/projects/maximus/3.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/3.jpg" />
            </div>
            <div href="/images/projects/maximus/4.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/4.jpg" />
            </div>
            <div href="/images/projects/maximus/5.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/5.jpg" />
            </div>
            <div href="/images/projects/maximus/6.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/6.jpg" />
            </div>
            <div href="/images/projects/maximus/7.jpg" class="photo-container-element">
              <img src="/images/projects/maximus/7.jpg" />
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
</script>

