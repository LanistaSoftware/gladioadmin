/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    Users: [],
    password:null,
    oldpass:null,
    editpass:false,
}
const getters = {
    getUser(state) {
        return state.Users;
    },
    getPassword(state){
        return state.password
    },
    getOldPass(state){
        return state.oldpass
    },
    editPass(state){
        return state.editpass
    },
}
const mutations = {
    setTabs(state, tab) {
        return state.tabs = tab
    },
    setUser(state, users) {
        return state.Users = users
    },
    setPassword(state, password){
        return state.password = password
    },
    setOldPass(state, password){
        return state.oldpass = password
    },
    setEditpass(state,edit){
        return state.editpass=edit
    }
}

const actions = {
    getUser({
        commit
    }) {
        return api().get('/user').then(res => {
            let users = [];
            users = res.data.users

            commit("setUser", users)
        }).catch(err => {
            alert(err)
        })
    },
    addUser({},item) {
        return api().post('/user', item).then((res) => {
            alert(res.statusText)

        }).catch(err => {
            alert(err.message)
            alert(err.message)
        })
    },
    updateUser({},{id,edit,oldpass}) {
        return api().put('/user/' + id,{ edit,oldpass}).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            alert(err.message)    
        })
    },
    deleteUser({},id) {
        return api().delete('/user/' + id).then(res => {
            alert(res.statusText)

        }).catch(err => {
            alert(err.message)
        })
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}