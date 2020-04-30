<template>
  <div class="teams">
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Teams',
  components: {

  },
  mixins:[setTabMixins],
      created() {
    this.setTabs(this.getTabList.teams)
  }
}
</script>
