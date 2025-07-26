import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import './assets/base.css';
import './assets/styles.css';

import router from './router';
import i18n from './i18n';

createApp(App)
  .use(router)
  .use(i18n)
  .use(createPinia())
  .mount('#app');