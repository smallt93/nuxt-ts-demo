import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'
import { BookState, BookDetail, BookGetters, BookMutations, BookActions } from './type'
import { getBookApi } from './api';


export const state = (): BookState => ({
  bookDetail: {},
  bookList: []
})

export const getters: DefineGetters<BookGetters, BookState> = {
  bookDetail: state => state.bookDetail,
  bookList: state => state.bookList
}

export const mutations: DefineMutations<BookMutations, BookState> = {
  setBookList(state: BookState, bookList: Array<BookDetail>) {
    state.bookList = bookList
  },
  setBookDetail(state: BookState, bookDetail: BookDetail) {
    state.bookDetail = bookDetail
  },
  updateBookList(state: BookState, bookData: BookDetail) {
    state.bookList = [...state.bookList, bookData]
  }
}

export const actions: DefineActions<BookActions, BookState, BookMutations, BookGetters> = {
  async fetchBookList({ commit }) {
    const api = getBookApi()
    try {
      const result = await api.getBookList()
      if (result.BookList) {
        commit('setBookList', result.BookList)
      }
    } catch (error) {
      console.log('error', error)
    }
  },
  updateBookList({ commit }, bookData: BookDetail) {
    commit('updateBookList', bookData)
  },
  updateBookDetail({ commit }, bookDetail: BookDetail) {
    commit('setBookDetail', bookDetail)
  }
}