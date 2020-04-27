const state = {
    tabs: [{
            link: '/blogs',
            label: 'Makaleler'
        },
        {
            link: '/addblog',
            label: 'Makale Ekle'
        }
    ],
    navs: [{
            to: '/users',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-users',
            linkClass: 'nav-link',
            linkLabel: 'Kullanıcılar'
        },
        {
            to: '/blogs',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-book-open',
            linkClass: 'nav-link',
            linkLabel: 'Makaleler'
        },
        {
            to: '/contact',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-envelope',
            linkClass: 'nav-link',
            linkLabel: 'İletişim'
        },
        {
            to: '/sliders',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-photo-video',
            linkClass: 'nav-link',
            linkLabel: 'Slaytlar'
        },
        {
            to: '/videos',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-video',
            linkClass: 'nav-link',
            linkLabel: 'Videolar'
        },
        {
            to: '/references',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-asterisk',
            linkClass: 'nav-link',
            linkLabel: 'Referanslar'
        },
        {
            to: '/products',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-boxes',
            linkClass: 'nav-link',
            linkLabel: 'Ürünler'
        },
        {
            to: '/sectors',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-bezier-curve',
            linkClass: 'nav-link',
            linkLabel: 'Sektörler'
        },
        {
            to: '/about',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-address-card',
            linkClass: 'nav-link',
            linkLabel: 'Hakkımızda'
        },
        {
            to: '/teams',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-users',
            linkClass: 'nav-link',
            linkLabel: 'Ekibimiz'
        },
        {
            to: '/settings',
            tag: 'li',
            tagClass: 'navigation-item',
            activeClass: 'nav-active',
            iconSpanClass: 'nav-icon',
            iconClass: 'fas fa-cogs',
            linkClass: 'nav-link',
            linkLabel: 'Ayarlar'
        },
    ],

}
const getters = {
    getTabs(state) {
        return state.tabs;
    },
    getNavs(state) {
        return state.navs;
    }
}
const mutations = {
    setTabs(state, tab) {
        return state.tabs = tab
    },
    setNavs(state, tab) {
        return state.navs = tab
    }
}

export default {
    state,
    getters,
    mutations,

}