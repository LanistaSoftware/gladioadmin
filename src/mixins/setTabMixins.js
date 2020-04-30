import {
    mapMutations,
    mapGetters

} from 'vuex'
export const setTabMixins = {
    computed: {
        ...mapGetters({
            getTabList: "getTabList",
        })
    },
    methods: {
        ...mapMutations({
            setTabs: "setTabs",
        })
    }
}