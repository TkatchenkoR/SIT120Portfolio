getDate = ()=> {
    document.getElementById('date').innerHTML = Date();
};

import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')