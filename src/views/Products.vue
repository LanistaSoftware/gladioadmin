<template>
  <div class="products">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Products',
  components: {},

  mixins: [setTabMixins],
  created() {
    this.setTabs(this.getTabList.products)
  }
}
</script>
