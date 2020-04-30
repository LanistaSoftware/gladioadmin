<template>
  <div class="settings">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Settings',
  components: {

   },
  mixins:[setTabMixins],
       created() {
    this.setTabs(this.getTabList.settings)
  }
}
</script>
