/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    employes:'',
}
const getters ={
    getterEmployes(state){
        return state.employes
    },
}
const mutations ={
    setEmployes(state,ref){
        return state.employes= ref
    }
}

const actions= {
    addEmploye({},reference){
       return api().post('employe',reference).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
   addImageEmploye({},image){
       return api().post('employe/image',image,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
           alert(res.statusText)
       }).catch(err=>{alert(err)})
   },
   getEmploye({commit}){
       return api().get('employe').then((res)=>{
        commit("setEmployes",res.data.employes)
       })
   },
   updateEmploye({},{id,item,dltimg}){
    return api().put('employe/'+id+'/'+dltimg,item).then((res)=>{
        alert(res.statusText)
    }).catch(err=>{alert(err)})
   },
   deleteEmploye({},id){
       return api().delete('employe/'+id).then(res=>{
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