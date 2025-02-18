import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons (example: solid icons)
import { faAnglesLeft, faHome, faUser, faHandsHoldingChild, faUserDoctor, faCalendar, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

// Import Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faAnglesLeft, faHome, faUser, faHandsHoldingChild, faUserDoctor, faCalendar, faFileInvoiceDollar);

const app = createApp(App);

// Register FontAwesome globally
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
