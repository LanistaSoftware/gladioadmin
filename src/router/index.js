import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    children: [{
      path: '/about',
      name: 'AboutContent',
      component: () => import( /* webpackChunkName: "about" */ '../components/about/AboutContent.vue')
    }],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/blogs',
    name: 'Blogs',
    children: [{
        path: '/blogs',
        name: 'BlogList',
        component: () => import( /* webpackChunkName: "about" */ '../components/blogs/BlogList.vue')
      },
      {
        path: '/blogs/addblog',
        name: 'AddBlog',
        component: () => import( /* webpackChunkName: "about" */ '../components/blogs/AddBlog.vue')

      }
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Blogs.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    children: [{
      path: '/contact',
      name: 'ContactContent',
      component: () => import( /* webpackChunkName: "about" */ '../components/contact/ContactContent.vue')
    }],
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/documents',
    name: 'Documents',
    children: [{
        path: '/documents',
        name: 'DocumentList',
        component: () => import( /* webpackChunkName: "about" */ '../components/documents/DocumentList.vue')
      },
      {
        path: '/documents/adddocument',
        name: 'AddDocument',
        component: () => import( /* webpackChunkName: "about" */ '../components/documents/AddDocument.vue')
      },
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Documents.vue')
  },

  {
    path: '/products',
    name: 'Products',
    children: [{
        path: '/products',
        name: 'ContentProduct',

        component: () => import( /* webpackChunkName: "about" */ '../components/products/ProductList.vue')
      },
      {
        path: '/products/pigments',
        name: 'Pigments',
        component: () => import( /* webpackChunkName: "about" */ '../components/products/Pigments.vue')
      }
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Products.vue')
  },

  {
    path: '/references',
    name: 'References',
    children: [{
        path: '/references',
        name: 'ReferenceList',
        component: () => import( /* webpackChunkName: "about" */ '../components/references/ReferenceList.vue')

      },
      {
        path: '/references/addreference',
        name: 'AddReference',
        component: () => import( /* webpackChunkName: "about" */ '../components/references/AddReference.vue')

      }
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/References.vue')
  },

  {
    path: '/sectors',
    name: 'Sectors',
    children: [{
        path: '/sectors',
        name: 'SectorList',
        component: () => import( /* webpackChunkName: "about" */ '../components/sectors/SectorList.vue')

      },
      {
        path: '/sectors/sectorgalery',
        name: 'SectorGalery',
        component: () => import( /* webpackChunkName: "about" */ '../components/sectors/SectorGalery.vue')

      }
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Sectors.vue')
  },

  {
    path: '/settings',
    name: 'Settings',
    children: [{
        path: '/settings',
        name: 'CompanyInfo',
        component: () => import( /* webpackChunkName: "about" */ '../components/settings/CompanyInfo.vue')

      },
      {
        path: '/settings/companylogo',
        name: 'CompanyLogo',
        component: () => import( /* webpackChunkName: "about" */ '../components/settings/CompanyLogo.vue')

      }
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Settings.vue')
  },

  {
    path: '/sliders',
    name: 'Sliders',
    children: [{
        path: '/sliders/addslides',
        name: 'AddSlides',
        component: () => import( /* webpackChunkName: "about" */ '../components/sliders/AddSlides.vue')

      },
      {
        path: '/sliders/editslides',
        name: 'EditSlides',
        component: () => import( /* webpackChunkName: "about" */ '../components/sliders/EditSlide.vue')

      },
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Sliders.vue')
  },

  {
    path: '/teams',
    name: 'Teams',
    children: [{
        path: '/teams',
        name: 'TeamList',
        component: () => import( /* webpackChunkName: "about" */ '../components/teams/TeamList.vue')
      },
      {
        path: '/teams/addemployee',
        name: 'AddEmployee',
        component: () => import( /* webpackChunkName: "about" */ '../components/teams/AddEmployee.vue')

      },
    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Teams.vue')
  },

  {
    path: '/users',
    name: 'Users',
    children: [{
        path: '/users',
        name: 'UserList',
        component: () => import( /* webpackChunkName: "about" */ '../components/users/UserList.vue')
      }

    ],
    component: () => import( /* webpackChunkName: "about" */ '../views/Users.vue')
  },

  {
    path: '/videos',
    name: 'Videos',
    children: [{
      path: '/videos',
      name: 'VideoSettings',
      component: () => import( /* webpackChunkName: "about" */ '../components/videos/VideoSettings.vue')
    }],
    component: () => import( /* webpackChunkName: "about" */ '../views/Videos.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router