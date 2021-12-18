import { createApp } from 'vue';

import './assets/scss/main.scss';

import BaseContainer from './components/UI/BaseContainer.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import ColorChips from './components/UI/ColorChips/ColorChips.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-container', BaseContainer);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('color-chips', ColorChips);

app.mount('#app');
