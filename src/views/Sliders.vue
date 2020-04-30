<template>
  <div class="sliders">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Sliders',
  components: {

  },
  mixins:[setTabMixins],
      created() {
    this.setTabs(this.getTabList.sliders)
  }
}
</script>
