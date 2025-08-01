<template>
  <div class="npm run dev">
    <Header />
    <div class="page">
      <div class="page-title">{{ $t('pageOurTeamTitle') }}</div>
      <div class="page-content">
        <p>The Cementum team unites seasoned professionals from across the construction and tech industries, forming a multidisciplinary core that drives the platform’s innovation and reliability.</p>
        <ul>
          <li>Construction Auditors: Our experienced auditors oversee every stage of the building process, ensuring that projects adhere to the highest standards of quality, safety, and cost-efficiency.</li>
          <li>Architects: Visionary architects design residential spaces that combine functionality, aesthetics, and environmental sustainability — tailored to modern living standards.</li>
          <li>Developers & Programmers: The tech team includes blockchain engineers and software developers with proven expertise in Web3, smart contracts, and secure infrastructure. Their work ensures the platform is reliable, scalable, and transparent.</li>
          <li>Legal Advisors: A dedicated group of legal professionals supports the platform with regulatory compliance, investor protection, and contract structuring. Their expertise bridges the gap between decentralized finance and real-world property law.</li>
        </ul>
        <h2>Track Record</h2>
        <p>Each member of the team brings a portfolio of successful construction and development projects, with years of experience in delivering residential properties and digital solutions across various markets.</p>
        <p>Together, we build more than homes — we build trust, transparency, and financial opportunity.</p>
      </div>


      <div class="team-elements">
        <a href="https://www.instagram.com/nick_olsan" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-1.jpg"/></div>
          <div class="team-element-name">Nick Olsan</div>
          <div class="team-element-position">Developer</div>
        </a>
        <a href="https://www.instagram.com/alexander_builder" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-2.jpg"/></div>
          <div class="team-element-name">Alex Alexashenko</div>
          <div class="team-element-position">-</div>
        </a>
        <a href="https://www.linkedin.com/in/oleh-sivalnov-8a0b89b7/?originalSubdomain=pl"  target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-3.jpg"/></div>
          <div class="team-element-name">Oleh Sivalnov</div>
          <div class="team-element-position">-</div>
        </a>
        <a href="https://archingroup.com/en/about-us" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-4.jpg"/></div>
          <div class="team-element-name">Eugene Sivalnov</div>
          <div class="team-element-position">CEO</div>
        </a>
        <a href="https://www.facebook.com/ruslan.kozub.7" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-5.jpg"/></div>
          <div class="team-element-name">Ruslan Kozub</div>
          <div class="team-element-position">Blockchain engineer</div>
        </a>
        <a href="https://www.instagram.com/dogma_group2021?igsh=MXNmdGlvNWh5ZWc0ag%3D%3D" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-6.jpg"/></div>
          <div class="team-element-name">Max Dogaru</div>
          <div class="team-element-position">-</div>
        </a>
        <a href="https://www.instagram.com/viz.3d?igsh=YXUxZzBwcWVuN2ln" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-7.jpg"/></div>
          <div class="team-element-name">Sergio Kochmar</div>
          <div class="team-element-position">-</div>
        </a>
        <a href="https://www.instagram.com/aleksei.khandozhko" target="_blank" class="team-element">
          <div class="team-element-image"><img src="/images/team/-8.jpg"/></div>
          <div class="team-element-name">Aleks Khandozhko</div>
          <div class="team-element-position">-</div>
        </a>
      </div>

<!--      <div class="team-elements">-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/11.jpg"/></div>-->
<!--          <div class="team-element-name">Eugene</div>-->
<!--          <div class="team-element-position">CEO</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/2.jpg"/></div>-->
<!--          <div class="team-element-name">Michael</div>-->
<!--          <div class="team-element-position">Chief of Staff</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/1.jpg"/></div>-->
<!--          <div class="team-element-name">Russell</div>-->
<!--          <div class="team-element-position">Blockchain engineer</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/10.jpg"/></div>-->
<!--          <div class="team-element-name">Nicholas</div>-->
<!--          <div class="team-element-position">Developer</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/3.jpg"/></div>-->
<!--          <div class="team-element-name">Ethan</div>-->
<!--          <div class="team-element-position">Construction Manager</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/4.jpg"/></div>-->
<!--          <div class="team-element-name">Daniel</div>-->
<!--          <div class="team-element-position">Construction Administrator</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/9.jpg"/></div>-->
<!--          <div class="team-element-name">Daniel</div>-->
<!--          <div class="team-element-position">3D Visualizer</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/6.jpg"/></div>-->
<!--          <div class="team-element-name">Jessica</div>-->
<!--          <div class="team-element-position">Designer</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/5.jpg"/></div>-->
<!--          <div class="team-element-name">Emma</div>-->
<!--          <div class="team-element-position">General Counsel</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/12.jpg"/></div>-->
<!--          <div class="team-element-name">Andre</div>-->
<!--          <div class="team-element-position">Accounter</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/7.jpg"/></div>-->
<!--          <div class="team-element-name">Juliya</div>-->
<!--          <div class="team-element-position">Fotographer</div>-->
<!--        </div>-->
<!--        <div class="team-element">-->
<!--          <div class="team-element-image"><img src="/images/team/8.jpg"/></div>-->
<!--          <div class="team-element-name">Massoud</div>-->
<!--          <div class="team-element-position">Support</div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";
</script>
