/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    references:'',
}
const getters ={
    getterReferences(state){
        return state.references
    },
}
const mutations ={
    setReferences(state,ref){
        return state.references= ref
    }
}

const actions= {
    addReference({},reference){
       return api().post('reference',reference).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
   addImage({},image){
       return api().post('reference/image',image,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
           alert(res.statusText)
       }).catch(err=>{alert(err)})
   },
   getReference({commit}){
       return api().get('reference').then((res)=>{
        
        commit("setReferences",res.data.references)
       })
   },
   updateReference({},{id,item,dltimg}){
    return api().put('reference/'+id+'/'+dltimg,item).then((res)=>{
        alert(res.statusText)
    }).catch(err=>{alert(err)})
   },
   deleteReference({},id){
       return api().delete('reference/'+id).then(res=>{
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