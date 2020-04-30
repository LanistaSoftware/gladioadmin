<template>
  <div class="blogs">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {
  setTabMixins
} from '../mixins/setTabMixins'

export default {

  name: 'Blogs',
  components: {

  },
  mixins: [setTabMixins],
  created() {
    this.setTabs(this.getTabList.blogs)
  }

}
</script>
