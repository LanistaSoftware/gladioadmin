<template>
  <div class="users">
    <router-view />
  </div>
</template>

<script>
import {
  setTabMixins
} from '../mixins/setTabMixins'
export default {
  name: 'Users',
  mixins: [setTabMixins],
  created() {

    this.setTabs(this.getTabList.users)
  }
}

</script>
