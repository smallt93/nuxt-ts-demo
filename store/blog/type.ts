export interface BlogDetail {
  id?: number
  title?: string
  subTitle?: string
  content?: string
}

export interface BlogState {
  blogDetail: BlogDetail
  blogList: Array<BlogDetail>
}

export interface BlogGetters {
  blogDetail: BlogDetail,
  blogList: Array<BlogDetail>
}

export interface BlogMutations {
  setBlogDetail: BlogDetail,
  setBlogList: Array<BlogDetail>,
  updateBlogList: BlogDetail
}

export interface BlogActions {
  updateBlogDetail: BlogDetail,
  updateBlogList: BlogDetail,
  fetchBlogList: Array<BlogDetail>
}