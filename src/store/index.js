import Vue from 'vue'
import Vuex from "vuex"
import user from './modules/userStore'
import blog from './modules/blogStore'
import slider from './modules/sliderStore'
import reference from './modules/referenceStore'
import sector from './modules/sectorStore'
import aboutUs from './modules/aboutUs'
import product from './modules/productStore'
import pigment from './modules/pigmentStore'
import employe from './modules/employeStore'
import contact from './modules/contactStore'
import login from './modules/loginStore'
import uiElements from './modules/uiElements'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
      user,
      blog,
      slider,
      reference,
      sector,
      aboutUs,
      product,
      pigment,
      employe,
      contact,
      login,
      uiElements
  }
})