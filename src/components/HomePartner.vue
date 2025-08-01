<template>
  <div class="partner-container">
    <div class="partner-title">
      {{ $t('partnerTitle') }}
    </div>
    <div class="partner-elements">
      <div
          class="partner-element"
          v-for="(partner, index) in partners"
          :key="index"
          @click="openModal(partner)"
      >
      <span class="partner-element-logo">
        <img :src="partner.image" alt="" />
      </span>
        <span class="partner-element-name">{{ $t(partner.nameKey) }}</span>
      </div>
    </div>

    <!-- Модальное окно -->
    <div class="modal-backdrop" v-if="selectedPartner" @click.self="closeModal">
      <div class="modal">
        <h3>{{ $t(selectedPartner.nameKey) }}</h3>
        <p>{{ $t(selectedPartner.descriptionKey) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const partners = [
  {
    image: '/public/images/arch.jpg',
    nameKey: 'partnerArch',
    descriptionKey: 'Arch Innovation Group (archingroup.com (http://archingroup.com/)) is an architectural and design studio specializing in the development of private residences, commercial buildings, and interior spaces. The team delivers tailored solutions that reflect the client’s style and needs, overseeing each project from concept to completion.',
  },
  {
    image: '/public/images/rk.jpg',
    nameKey: 'partnerRk',
    descriptionKey: 'RK341(@aleksei.khandozhko) is an architect with over 20 years of experience specializing in residential and commercial real estate projects. His extensive career encompasses architectural design, project management, and 3D visualization, combining deep industry knowledge with creative innovation. Aleksei’s work reflects a commitment to functional, aesthetic, and sustainable solutions tailored to client needs across diverse property types.',
  },
  {
    image: '/public/images/dogma.jpg',
    nameKey: 'partnerDogma',
    descriptionKey: 'Dogma (@dogma_group2021) focuses on developing unique architectural solutions, including the design of structural elements and the use of modern materials in design.\n',
  },
  {
    image: '/public/images/vizart.jpg',
    nameKey: 'partnerVizArt',
    descriptionKey: 'VIZ3D (@viz.3d) is a specialized studio and creative team focused on designing and developing complex architectural solutions. They combine advanced 3D visualization techniques with innovative design approaches to transform intricate architectural concepts into clear, practical models. Their expertise spans residential, commercial, and public spaces, delivering tailored solutions that balance aesthetics, functionality, and structural integrity. By leveraging cutting-edge technology and a deep understanding of architectural challenges, @viz.3d helps clients visualize and realize sophisticated projects from initial concepts through to detailed execution.',
  },
];

const selectedPartner = ref(null);

function openModal(partner) {
  selectedPartner.value = partner;
}

function closeModal() {
  selectedPartner.value = null;
}
</script>