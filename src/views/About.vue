<template>
  <div class="about">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'About',
  mixins:[setTabMixins],
  created() {
    this.setTabs(this.getTabList.about)
  }

}
</script>
