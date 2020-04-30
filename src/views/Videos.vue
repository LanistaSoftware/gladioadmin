<template>
  <div class="videos">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Videos',
  components: {

  },
  mixins: [setTabMixins],
  created() {
    this.setTabs(this.getTabList.videos)
  }
}
</script>
