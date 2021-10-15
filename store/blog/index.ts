import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'
import { BlogState, BlogDetail, BlogGetters, BlogMutations, BlogActions } from './type'
import { getBlogApi } from './api';


export const state = (): BlogState => ({
  blogDetail: {},
  blogList: []
})

export const getters: DefineGetters<BlogGetters, BlogState> = {
  blogDetail: state => state.blogDetail,
  blogList: state => state.blogList
}

export const mutations: DefineMutations<BlogMutations, BlogState> = {
  setBlogList(state: BlogState, blogData: Array<BlogDetail>) {
    state.blogList = blogData
  },
  setBlogDetail(state: BlogState, blogDetail: BlogDetail) {
    state.blogDetail = blogDetail
  },
  updateBlogList(state: BlogState, bookData: BlogDetail) {
    state.blogList = [...state.blogList, bookData]
  }
}

export const actions: DefineActions<BlogActions, BlogState, BlogMutations, BlogGetters> = {
  async fetchBlogList({ commit }) {
    const api = getBlogApi()
    try {
      const result = await api.getBlogList()
      if (result.BlogList) {
        commit('setBlogList', result.BlogList)
      }
    } catch (error) {
      console.log('error', error)
    }
  },
  updateBlogDetail({ commit }, blogDetail: BlogDetail) {
    commit('setBlogDetail', blogDetail)
  },
  updateBlogList({ commit }, blogData: BlogDetail) {
    commit('updateBlogList', blogData)
  }
}