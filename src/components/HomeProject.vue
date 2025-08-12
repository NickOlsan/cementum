<template>
  <div class="live-project-container">
    <div class="live-project-title">Live projects</div>
    <div class="live-project-elements">
      <router-link to="/baloo" class="live-project-element" style="background: url('/images/projects/baloo/cover.jpg');background-size: cover;">
          <div class="live-project-element-status-live">LIVE</div>
          <div class="live-project-element-brand"><img src="/images/arch.jpg" alt="" title=""/></div>
          <div class="live-project-element-name">Baloo</div>
          <div class="live-project-element-stake"><span>Stake $UIC</span></div>
          <div class="live-project-element-widget-right-top">
            <div class="live-project-element-chain"><img src="/images/bnb-logo.png" alt="" title=""/><span>BSC</span></div>
            <div class="live-project-element-fundraising"><span>650K</span><small>$UIC STAKED</small></div>
          </div>
      </router-link>
      <router-link to="/wood" class="live-project-element" style="background: url('/images/projects/wood/cover.jpg');background-size: cover;">
        <div class="live-project-element-status-live">LIVE</div>
        <div class="live-project-element-brand"><img src="/images/rk.jpg" alt="" title=""/></div>
        <div class="live-project-element-name">Wood</div>
        <div class="live-project-element-stake"><span>Stake $UIC</span></div>
        <div class="live-project-element-widget-right-top">
          <div class="live-project-element-chain"><img src="/images/bnb-logo.png" alt="" title=""/><span>BSC</span></div>
          <div class="live-project-element-fundraising"><span>350K</span><small>$UIC STAKED</small></div>
        </div>
      </router-link>
      <router-link to="/mriya" class="live-project-element" style="background: url('/images/projects/mriya/cover.jpg');background-size: cover;">
        <div class="live-project-element-status-selling">SELLING</div>
        <div class="live-project-element-brand"><img src="/images/arch.jpg" alt="" title=""/></div>
        <div class="live-project-element-name">Mriya</div>
        <div class="live-project-element-stake"><span>Stake $UIC</span></div>
        <div class="live-project-element-widget-right-top">
          <div class="live-project-element-chain"><img src="/images/bnb-logo.png" alt="" title=""/><span>BSC</span></div>
          <div class="live-project-element-fundraising"><span>500k</span><small>$UIC STAKED</small></div>
        </div>
      </router-link>
    </div>

  </div>
  <div class="future-container">
    <div class="future-title">
      {{ $t('featuredTitle') }}
    </div>
    <div class="future-elements">
      <router-link class="future-element" to="/baloo">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-live">{{ $t('live') }}</span>
          <img src="/images/projects/baloo/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/arch.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Baloo
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>650k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>7 month</span>
            <small>{{ $t('duration') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/wood">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-live">{{ $t('live') }}</span>
          <img src="/images/projects/wood/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/rk.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Wood
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>350k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>4 month</span>
            <small>{{ $t('duration') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/mriya">
          <div class="future-element-avatar">
            <span class="future-element-label future-element-selling">{{ $t('selling') }}</span>
            <img src="/images/projects/mriya/preview.jpg" class="future-element-image img" alt="" title=""/>
            <img src="/images/arch.jpg" class="future-element-brand" alt="" title=""/>
          </div>
          <div class="future-element-name">
            Mriya
          </div>
          <div class="future-element-footer">
            <div class="future-element-price">
              <span>410k $UIC</span>
              <small>{{ $t('fundraising') }}</small>
            </div>
            <div class="future-element-date">
              <span>8 month</span>
              <small>{{ $t('duration') }}</small>
            </div>
          </div>
          <div class="future-element-control">
            <span class="future-element-control-more">{{ $t('details') }}</span>
          </div>
      </router-link>
      <router-link class="future-element" to="/andre">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/andre/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/rk.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Andre
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>420k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>680k $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>62%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/grande">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/grande/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/vizart.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Grande
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>510k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>680k $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>33%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/tempo">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/tempo/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/rk.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Tempo
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>760k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>1.1m $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>45%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/twins">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/twins/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/arch.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Twins
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>228k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>370k $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>62%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/gym">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/gym/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/dogma.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Gym
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>215k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>365k $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>70%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/maximus">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/maximus/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/dogma.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Maximus
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>640k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>890k $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>39%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
      <router-link class="future-element" to="/chalet-marron">
        <div class="future-element-avatar">
          <span class="future-element-label future-element-completed">{{ $t('completed') }}</span>
          <img src="/images/projects/chalet-marron/preview.jpg" class="future-element-image img" alt="" title=""/>
          <img src="/images/arch.jpg" class="future-element-brand" alt="" title=""/>
        </div>
        <div class="future-element-name">
          Chalet Marron
        </div>
        <div class="future-element-footer">
          <div class="future-element-price">
            <span>165k $UIC</span>
            <small>{{ $t('fundraising') }}</small>
          </div>
          <div class="future-element-date">
            <span>245k $UIC</span>
            <small>{{ $t('realization') }}</small>
          </div>
          <div class="future-element-date">
            <span>48%</span>
            <small>{{ $t('roi') }}</small>
          </div>
        </div>
        <div class="future-element-control">
          <span class="future-element-control-more">{{ $t('details') }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>