<template>
  <div class="future-container">
    <div class="future-title">
      {{ $t('featuredTitle') }}
    </div>
    <div class="future-elements">
      <router-link class="future-element" to="/wood">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-coming-soon">{{ $t('comingSoon') }}</span>
          <img src="/public/images/projects/wood/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/rk.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Wood
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>350k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>-</span>
            <small>{{ $t('duration') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/baloo">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-coming-soon">{{ $t('comingSoon') }}</span>
          <img src="/public/images/projects/baloo/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/arch.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Baloo
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>650k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>-</span>
            <small>{{ $t('duration') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/mriya">
          <div class="future-element-avatar">
            <span class="future-element-label future-element-selling">{{ $t('selling') }}</span>
            <img src="/public/images/projects/mriya/preview.jpg" class="future-element-image img" alt="" title=""/>
            <img src="/public/images/arch.jpg" class="future-element-brand" alt="" title=""/>
          </div>
          <div class="future-element-name">
            Mriya
          </div>
          <div class="future-element-footer">
            <div class="future-element-price">
              <span>410k UIC</span>
              <small>{{ $t('fundraising') }}</small>
            </div>
            <div class="future-element-date">
              <span>8 month</span>
              <small>{{ $t('duration') }}</small>
            </div>
          </div>
          <div class="future-element-control">
            <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
          </div>
      </router-link>
      <router-link class="future-element" to="/andre">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/andre/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/rk.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Andre
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>420k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>1.15m UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>174</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/grande">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/grande/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/vizart.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Grande
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>510k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>1.4m UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>175</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/tempo">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/tempo/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/rk.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Tempo
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>390k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>760m UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>95</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/twins">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/twins/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/arch.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Twins
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>220k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>380k UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>73</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/gym">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/gym/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/dogma.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Gym
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>215k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>390k UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>81</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/maximus">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/maximus/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/dogma.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Maximus
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>640k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>1.48m UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>132</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
      <router-link class="future-element" to="/chalet-marron">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/public/images/projects/chalet-marron/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/public/images/arch.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Chalet Marron
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>165k UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>285k UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>73</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <a href="#" class="future-element-control-more">{{ $t('details') }}</a>
        </div>
      </router-link>
    </div>
  </div>
</template>