/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    slide:'',
    sliders:'',
    activeOne:'',
    videoId:'',
}
//Getters
const getters = {
   getASlide(state){
       return state.slide
   },
   getAllSlide(state){
    return state.sliders
},
    getterActiveSlide(state){
        return state.activeOne
    },
    getterVideoId(state){
        return state.videoId
    }
}
//Mutations
const mutations = {
  setslide(state,slide){
    return state.slide = slide 
  },
  setAllslide(state,sliders){
    return state.sliders = sliders 
  },
  setActiveSlide(state,slideone){
      return state.activeOne = slideone
  },
  setVideoId(state,Id){
      return state.videoId = Id
  }
}
//Actions
const actions = {
    addSlide({},slideset) {
        return api().post('slide', slideset,{ headers: {
            'Content-Type': 'application/json'
        }}).then((res) => {
            
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    addSlideimage({},form) {
       
        return api().post('slide/image', form,{ headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Headers':'Content-Type'
        }}).then((res) => {
         
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    getAllSlide({commit}) {  
        return api().get('slide').then(res => {
         
            let slide = res.data.sliders
            commit("setAllslide", slide)
        }).catch(err => {
            alert(err)
        })},
    getSlide({commit},id) {  
        return api().get('slide/' + id).then(res => {
            let slide = res.data.sliders
           
            commit("setslide", slide)
        }).catch(err => {
            alert(err)
        })},    
        updateSlide({},{id,slideset}) {
            return api().put('slide/'+id,slideset).then(res => {
                alert(res.statusText)
            }).catch(err => {
                alert(err)
            })
        },
    deleteSlide({},id) {
        return api().delete('slide/' + id).then(res => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    activeSlide({},id){
        return api().post('slide/active/' +id).then(res=>{
            alert(res.statusText)
        }).catch(err=>{
            alert(err)
        })
    },
    getActiveSlide({commit},slide){
        return api().get('slide/active/slide',{ headers: {
            'Content-Type': 'application/json'
        }}).then(res=>{
             slide = res.data.slide
       
           
            commit("setActiveSlide",slide[0])
        }).catch(err=>{
                alert(err)
        })
    },
    updateVideo({},videopath){
        return api().post('video',{videopath}).then((res)=>{
            alert(res.statusText)
        }).catch((err)=>{
            alert(err)
        })
    },
    getVideo({commit},Id){
        return api().get('video').then((res)=>{
            Id=res.data.sliders[0].videopath
            commit("setVideoId",Id)
        }).catch((err)=>{
            alert(err)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
