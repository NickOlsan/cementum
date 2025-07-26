<template>
  <div class="npm run dev">
    <Header />
    <div class="page">
      <div class="page-title">{{ $t('pageTokenomicsTitle') }}</div>
      <div class="page-content">
        <h2>Total Supply: 10,000,000 UIC</h2>
        <p>All tokens are released into circulation from day one.<br/>
          No vesting. No allocations for the team, marketing, or ecosystem funds.<br/>
          <b>100% of tokens are available to investors.</b>
        </p>
        <h2>What Happens After the Token Sale?</h2>
        <p>Once all UIC tokens are sold, Cementum launches a Buyback and Burn Program:</p>
        <h3>Buyback</h3>
        <p>A portion of profits from completed real estate development projects is used to buy back UIC tokens from the open market (both DEXs and CEXs).</p>
        <h3>Burn</h3>
        <p>All repurchased tokens are permanently burned, reducing total supply and increasing token scarcity.</p>
        <h2>Why This Model?</h2>
        <ul>
          <li>Fair Distribution – All tokens go directly to investors</li>
          <li>Deflationary Design – Total supply decreases over time</li>
          <li>Market Support – Buybacks help stabilize and support token value</li>
          <li>Real Utility – UIC is used to invest in real estate projects via cementum.io></li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";
</script>
