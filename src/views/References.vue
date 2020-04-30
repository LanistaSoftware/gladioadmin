<template>
  <div class="references">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'References',
  components: {

  },

  mixins:[setTabMixins],
      created() {
    this.setTabs(this.getTabList.references)
  }
}
</script>
