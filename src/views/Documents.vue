<template>
  <div class="documents">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import {
  setTabMixins
} from '../mixins/setTabMixins'

export default {
  name: 'Documents',
  components: {
  },
  mixins:[setTabMixins],
    created() {
    this.setTabs(this.getTabList.documents)
  }
}
</script>
