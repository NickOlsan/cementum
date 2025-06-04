<template>
  <div class="npm run dev">
    <Header />
    <div class="page">
      <div class="page-title">{{ $t('pageAboutTitle') }}</div>
      <div class="page-content">
        <p>At the heart of United Investment Company is a multidisciplinary team of professionals with deep expertise in investment management, construction, legal structuring, and risk assessment. Our team brings together decades of combined experience in delivering successful development projects and managing investor capital with transparency and accountability.</p>
        <h2>Key Competencies</h2>
        <p>Investment Management: Our financial strategists design and oversee profitable investment models, ensuring optimal capital allocation and return on investment for our clients.</p>
        <p>Real Estate and Construction: UIC’s development team has a proven track record in residential, commercial, and industrial construction projects across diverse markets.</p>
        <p>Legal and Regulatory Compliance: Experienced legal advisors structure deals through SPVs and ensure full compliance with local and international investment laws.</p>
        <h2>Risk and Audit:</h2>
        <p>Internal auditors and risk analysts monitor every stage of each project, providing investors with regular updates and real-time reporting through our digital platform.</p>
        <h2>Investor Relations:</h2>
        <p>We prioritize communication and trust by offering transparent onboarding, dedicated account managers, and ongoing support to all our investors.</p>
        <h2>Leadership Philosophy:</h2>
        <p>We believe that successful investment begins with integrity, expertise, and long-term vision. Our team is committed to building not only high-yield projects, but also long-term partnerships with our investors.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";
</script>
