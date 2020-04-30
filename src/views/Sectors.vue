<template>
  <div class="sectors">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Sectors',
  components: {

  },
  mixins:[setTabMixins],
      created() {
    this.setTabs(this.getTabList.sectors)
  }
}
</script>
