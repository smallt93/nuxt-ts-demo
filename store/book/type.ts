export interface BookDetail {
  id?: number
  name?: string
  title?: string
  description?: string
  thumbnail?: string
}

export interface BookState {
  bookDetail: BookDetail
  bookList: Array<BookDetail>
}

export interface BookGetters {
  bookDetail: BookDetail,
  bookList: Array<BookDetail>
}

export interface BookMutations {
  setBookDetail: BookDetail,
  setBookList: Array<BookDetail>,
  updateBookList: BookDetail
}

export interface BookActions {
  updateBookDetail: BookDetail,
  updateBookList: BookDetail
  fetchBookList: Array<BookDetail>
}