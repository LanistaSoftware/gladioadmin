/* eslint-disable no-empty-pattern */
import api from '../api'
const state={
    contact:{},
    logo:'',
}
const getters={
    getterContact(state){
        return state.contact
    },
    getterLogo(state){
        return state.logo
    }
}
const mutations={
    setContact(state,value){
        return state.contact=value
    },
    setLogo(state,value){
        return state.logo=value
    }
}
const actions={
    addContact({},contact){
        return api().post('contact',contact).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    getContact({commit}){
        return api().get('contact').then(res=>{
            commit("setContact",res.data.contacts[0])
        }).catch(err=>{alert(err)})
    },
    getLogo({commit}){
        return api().get('logo').then((res)=>{
            alert(res.data.CompanyLogo)
            commit("setLogo",res.data.CompanyLogo[0].Logoname)
        })
    },

    addLogo({},logo){
         return api().post('logo',logo,{headers:{'Content-Type': 'application/json'}}).then((res)=>{
            alert(res.statusText)
            
        }).catch(err=>{alert(err)})
    },
    addLogoImage({},image){
        return api().post('logo/image',image,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
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