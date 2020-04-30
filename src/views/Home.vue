<template>
  <div class="home">
    <h1>Tüm işlemleriniz için sol menüyü kullanabilirsiniz.</h1>
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Home',
  components: {

  },
    mixins: [setTabMixins],
  created() {
    let homeTab = [
      {
        link:"/",
        label:"Ana Sayfa"
      }
    ]
    this.setTabs(homeTab)
  }
}
</script>
