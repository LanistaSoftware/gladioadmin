/* eslint-disable no-empty-pattern */
import api from '../api'


const state={
    products:'',
}
const getters={
    getterProduct(state){
        return state.products
    }
}
const mutations={
    setProduct(state,value){
        return state.products=value
    }
}
const actions={
    addProduct({},product){
        return api().post('product',product).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    getProduct({commit}){
        return api().get('product').then(res=>{
            commit("setProduct",res.data.products)
        }).catch(err=>{alert(err)})
    },
    updateProduct({},{id,item}){
        return api().put('product/'+id,item).then((res)=>{
            alert(res.statusText)
        }).catch(err=>{alert(err)})
    },
    deleteProduct({},id){
        return api().delete('product/'+id).then((res)=>{
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