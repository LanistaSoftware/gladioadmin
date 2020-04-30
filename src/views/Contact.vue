<template>
  <div class="contact">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'

export default {
  name: 'Contact',
  components: {
  },
  mixins:[setTabMixins]
  ,
    created() {
    this.setTabs(this.getTabList.contact)
  }
}
</script>
Contact