<template>
  <div class="npm run dev">
    <Header />
    <div class="page">
      <h1 class="page-title">{{ $t('pageWhitePaperTitle') }}</h1>
      <div class="page-content">
        <h2>Version 1.0 | June 2025</h2>
        <h2>Introduction</h2>
        <p>Cementum is a next-generation investment platform that provides decentralized access to the construction and real estate market. Using the $UIC token, anyone can invest in real-world housing development projects and earn profits from their completion and sale. Cementum combines blockchain transparency, security, and efficiency with the traditional industry of residential construction.</p>
        <h2>Mission</h2>
        <p>To make construction investments accessible, transparent, and profitable for everyone — regardless of geography, capital size, or experience.</p>
        <h2>The Problem</h2>
        <p>The residential construction market has traditionally been closed to small investors. It requires large capital, long waiting periods, and suffers from a lack of transparency. Cementum addresses this by:</p>
        <ul>
          <li>Simplifying access through a digital token</li>
          <li>Ensuring full transparency of all transactions</li>
          <li>Enabling investment diversification across multiple projects</li>
        </ul>
        <h2>How It Works</h2>
        <h3>1. Buy UIC Token</h3>
        <p>Investors purchase the United Investment Coin (UIC) through the Cementum platform. This token is the internal investment tool that grants access to active projects.</p>
        <h3>2. Select a Project</h3>
        <p>The platform features a curated list of housing development projects (homes, cottages, settlements). Investors choose where to allocate their tokens.</p>
        <h3>3. Invest in a Project</h3>
        <p>UIC tokens are allocated to a selected project. The investor receives a digital confirmation of their share in the project.</p>
        <h3>4. Construction & Sale</h3>
        <p>Upon completion, the property is sold on the market.</p>
        <h3>5. Return & Dividends</h3>
        <p>After the sale, the investor receives their initial UIC tokens back, along with profit-based dividends, proportional to the project’s net revenue.</p>
        <h2>Tokenomics</h2>
        <table>
          <thead>
          <tr>
            <td>Parameter</td>
            <td>Value</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Token Name</td>
            <td>United Investment Coin</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>UIC</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>BEP-20</td>
          </tr>
          <tr>
            <td>Total Supply</td>
            <td>10,000,000 UIC</td>
          </tr>
          <tr>
            <td>Initial Distribution</td>
            <td>100% released into circulation</td>
          </tr>
          <tr>
            <td>Buyback & Burn</td>
            <td>Token buyback and burn post-sale</td>
          </tr>
          <tr>
            <td>Smart Contract Address</td>
            <td>0x12ce6A31AAA2e0f2efc653A838037a533BEcFF24</td>
          </tr>
          </tbody>
        </table>

        <p>Note: All tokens are released into circulation from day one. As each property is sold, Cementum uses a portion of the proceeds to buy UIC back from the market and burn it — creating a deflationary token model.</p>
        <h2>Cementum Advantages</h2>
        <ul>
          <li>Transparency: All transactions are recorded on-chain.</li>
          <li>Accessibility: Low entry threshold for investors.</li>
          <li>Flexibility: Investors choose specific projects.</li>
          <li>Profitability: Real-estate-backed investment returns.</li>
          <li>Security: Backed by tangible real estate assets.</li>
        </ul>
        <h2>Featured Projects</h2>
        <p>Cementum has already launched several pilot developments, including:</p>
        <ul>
          <li>Mriya Townhouse</li>
          <li>Chalet Marron</li>
          <li>Baloo Eco-House</li>
        </ul>
        <p>Each project has a detailed page with financial projections, construction timelines, and return estimates.</p>
        <h2>Roadmap</h2>
        <table>
          <thead>
          <tr>
            <td>Period</td>
            <td>Milestones</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Q2 2025</td>
            <td>Platform launch, smart contracts deployed, UIC token issued</td>
          </tr>
          <tr>
            <td>Q3 2025</td>
            <td>First pilot construction projects launched</td>
          </tr>
          <tr>
            <td>Q1 2026</td>
            <td>Geographic expansion and increased number of projects</td>
          </tr>
          <tr>
            <td>2026–2027</td>
            <td>Listing of UIC on major DEXs and CEXs, global scaling</td>
          </tr>
          </tbody>
        </table>
        <h2>The Team</h2>
        <p>Cementum is led by a team of professionals with backgrounds in construction, finance, and blockchain development. Together, they bridge the gap between real-world housing and digital investment solutions.</p>
        <h2>Security & Audits</h2>
        <p>All smart contracts undergo independent audits. The platform adheres to industry best practices for Web3 and DeFi project security.</p>
        <h2>Conclusion</h2>
        <p>Cementum offers an innovative way to invest in real estate development, combining the reliability of physical assets with the benefits of blockchain. The platform is open to anyone who wants to invest in the future of housing — and profit from it.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";
</script>
