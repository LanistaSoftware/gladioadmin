
import {
    mapGetters
} from 'vuex'
export const setTabMixin = {

    computed: {
        ...mapGetters({
            getTabs: "getTabs",
        })
    },
    watch: {
        getTabs(){
            this.tabs=this.getTabs
        }
    }
}


