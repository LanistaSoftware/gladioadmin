/* eslint-disable no-empty-pattern */
import api from '../api'


const state ={
    content:{},
}
const getters ={
    getterContent(state){
        return state.content
    }
}
const mutations={
    setContent(state,con){
        return state.content = con
    }
}
const actions ={
    getAbout({commit}){
        return api().get('aboutUs').then((res)=>{
            commit("setContent",res.data.aboutUsContent[0])
        })
    },
    postAbout({},content){
        return api().post('aboutUs',content).then(res=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    postImage({},image){
        return api().post('aboutUs/image',image,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}