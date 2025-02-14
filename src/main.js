import { createApp } from 'vue';
import App from './App.vue';

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons (example: solid icons)
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

// Import Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faAnglesLeft);

const app = createApp(App);

// Register FontAwesome globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
