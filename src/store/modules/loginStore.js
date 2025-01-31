/* eslint-disable no-empty-pattern */
import api from '../api'

const state = {
  isLogined:false,
  token:'',  
  authorization: null
}
const getters = {
    getLogin(state) {
        return state.token !== ""
    },
    getAuth(state) {
        return state.authorization
    }

}
const mutations = {
    setLogin(state, login) {
        return state.isLogined = login
     },
     setToken(state,token){
        return state.token = token
     },
     clearToken(state){
        state.token = ""
    },
    setAuth(state, auth) {
        return state.authorization = auth
    }
}

const actions = {
    initAuth({commit}){
        let token = localStorage.getItem("token")
        if (token) {
            commit("setToken",token)
        }
    },
    logout({ commit}){
        commit("clearToken")
        localStorage.removeItem("token")
        this.$router.replace("/")
    },
    loginPost({commit},item) {
        return api().post('login', item).then((res) => {
            if (res.status==200) {
               if (res.data.message =='Giriş Başarılı') {
                alert(res.data.message)
                commit("setLogin",true)
                commit("setToken",res.data.token)
                localStorage.setItem("token",res.data.token)
               }else{
                   alert(res.data)
               }
            }else{
                
                alert(res.data)
            }
           
        }).catch(err => {
            alert(err.message)
        })
    },
    // getAuth({
    //     commit
    // }) {
    //     {
    //         return api().get('/user').then(res => {
    //             let users = [];
    //             users = res.data.users

    //             commit("setUser", users)
    //         }).catch(err => {
    //             alert(err)
    //         })
    //     }
    // }
}
export default {
    state,
    getters,
    mutations,
    actions

}