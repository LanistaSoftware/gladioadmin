/* eslint-disable no-empty-pattern */
import api from '../api'
const state = {
    blogs: [],
    content: '',
    updateContent:'',
    updateId:'',
    addBlogContent:'',
    close:false,
    edit:false,
    showedit:true,
}
//Getters
const getters = {
    getBlogs(state) {
        return state.blogs;
    },
    getContent(state) {
        return state.content
    },
    getUpdateContent(state) {
        return state.updateContent
    },
    getUpdateId(state){
        return state.updateId
    },
    getAddBlogContent(state){
        return state.addBlogContent
    },
    close(state){
        return state.close
    },
    data(state){
        return state.edit
    },
    showedit(state){
        return state.showedit
    }
}
//Mutations
const mutations = {
    setBlogs(state, blogs) {
        return state.blogs = blogs
    },
    setContent(state, content) {
        return state.content = content
    },
    setUpdateContent(state,con){
        return state.updateContent=con
    },
    setUpdateId(state,id){
        return state.updateId=id
    },
    setAddBlogContent(state,content){
        return state.addBlogContent=content
    },
    setClose(state,value){
        return state.close=value
    },
    setData(state,value){
        return state.edit=value
    },
    setShowEdit(state,value){
        return state.showedit=value
    }
}
//Actions
const actions = {
    addBlog({},content) {
        return api().post('blog', content).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    getBlog({
        commit
    }) {  
        return api().get('blog').then(res => {
            let blogs = res.data.blogs

            commit("setBlogs", blogs)
        }).catch(err => {
            alert(err)
        })
    },
    deleteBlog({},id) {
        return api().delete('blog/' + id).then(res => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    updateBlog({},{id,content}) {
        return api().put('blog/'+id,{content}).then((res) => {
            alert(res.statusText)
        }).catch(err => {
            alert(err)
        })
    },
    getContentAction({ commit}, content) {
        return commit("setContent", content)
    },
    getUpdateContent2({commit},updatecon){
        return commit("setUpdateContent", updatecon)
    },
    getUpdateId({commit},id){
        return commit("setUpdateId", id)
    }
}
export default {
    state,
    getters,
    mutations,
    actions

}
