/* eslint-disable no-empty-pattern */
import api from '../api'


const state={
    pigments:'',
}
const getters={
    getterPigment(state){
        return state.pigments
    }
}
const mutations={
    setPigment(state,value){
        return state.pigments=value
    }
}
const actions={
    addPigment({},product){
        return api().post('pigment',product).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    getPigment({commit}){
        return api().get('pigment').then(res=>{
            commit("setPigment",res.data.pigments)
        }).catch(err=>{alert(err)})
    },
    updatePigment({},{id,item}){
        return api().put('pigment/'+id,item).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    deletePigment({},id){
        return api().delete('pigment/'+id).then((res)=>{
            alert(res.statusText)
        })
    },
}

export default { 
    state,
    getters,
    mutations,
    actions
}