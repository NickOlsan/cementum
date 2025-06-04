<template>
  <div class="npm run dev">
    <Header />
    <div class="page">
      <h1 class="page-title">{{ $t('pageWhitePaperTitle') }}</h1>
      <div class="page-content">
        <h2>Introduction</h2>
        <p>United Investment Company (UIC) is an investment platform specializing in attracting and managing private capital in the construction sector. We connect investors seeking stable returns with high-potential construction projects in Ukraine and beyond.</p>
        <h2>Relevance</h2>
        <p>The current real estate and infrastructure development market is experiencing a critical shortage of financial resources. Bank lending in this sector is declining, while demand for residential, commercial, and industrial properties continues to grow. United Investment Company offers a modern alternative — direct investments in the real sector under the supervision of a professional team.</p>
        <h2>Mission</h2>
        <p>To create a transparent, reliable, and profitable model for investors interested in financing residential, commercial, and infrastructure construction projects.</p>
        <h2>How It Works</h2>
        <ul>
          <li>Project selection</li>
          <li>Investor acquisition</li>
          <li>Legal structuring</li>
          <li>Project implementation monitoring</li>
          <li>Investor exit</li>
        </ul>
        <h2>Investment Products</h2>
        <ul>
          <li>Equity participation</li>
          <li>Structured bonds</li>
          <li>Collective investment funds</li>
          <li></li>
          <li></li>
        </ul>
        <h2>Advantages of UIC</h2>
        <ul>
          <li>Full project cycle: from analysis to commissioning</li>
          <li>Low entry threshold — starting from $100</li>
          <li>Returns starting at 18% annually</li>
          <li>Transparency and reporting</li>
          <li>Experienced team</li>
        </ul>
        <h2>Project Examples</h2>
        <ul>
          <li>Residential complex “Maximus”,— 32% annual return</li>
          <li>Shopping mall “Tempo”, — 29%</li>
          <li>Sport club “Ulysses”, Warsaw — 35%</li>
        </ul>
        <h2>Business Model</h2>
        <ul>
          <li>Investment commission: 2–5%</li>
          <li>Success fee: percentage of profits</li>
          <li>Consulting services for developers</li>
        </ul>
        <h2>Investment Security</h2>
        <ul>
          <li>Legal structuring through SPVs</li>
          <li>Options for collateral or insurance</li>
          <li>Project audits</li>
          <li>Online reporting</li>
        </ul>
        <h2>Financial Projections</h2>
        <ul>
          <li>2025: $15 million in investments, 10 projects, 20% return</li>
          <li>2026: $40 million, 25 projects, 21% return</li>
          <li>2027: $75 million, 45 projects, 23% return</li>
        </ul>
        <h2>Conclusion</h2>
        <p>United Investment Company represents a new standard of trust, efficiency, and capital growth. We invite partners and investors to join a future that is being built today.</p>
        <h2>Tokenomics</h2>
        <p>UIC Token is an investment utility token designed to provide access to construction projects and generate returns through the United Investment Company platform.</p>
        <p>Key Information:</p>
        <ul>
          <li>Token name: United Investment Coin</li>
          <li>Symbol: UIC</li>
          <li>Standard: ERC-20 (Ethereum)</li>
          <li>Total supply: 10,000,000 UIC</li>
          <li>Token type: Investment / Utility</li>
          <li>Blockchain: Ethereum (multi-chain capable)</li>
        </ul>
        <p>Token Distribution:</p>
        <ul>
          <li>100% of the total supply is allocated to investors</li>
        </ul>
        <p>Token Utility:</p>
        <ul>
          <li>Participation in investment projects</li>
          <li>Access to private investment rounds</li>
          <li>Income generation opportunities</li>
          <li>Listing and trading on DEX/CEX</li>
        </ul>
        <p>Investor Protection:</p>
        <ul>
          <li>Potential implementation of a soft-vesting mechanism</li>
          <li>Transparency via smart contracts</li>
          <li>Integration of the token into the platform’s infrastructure</li>
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
