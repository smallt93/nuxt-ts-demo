export interface UserDetail {
  id: number
  name: string
  title?: string
  description?: string
  thumbnail?: string
}

export interface UserState {
  userDetail: UserDetail
  userList: Array<UserDetail>
}

export interface UserGetters {
  userDetail: UserDetail,
  userList: Array<UserDetail>
}

export interface UserMutations {
  updateUserDetail: UserDetail,
  updateUserList: UserDetail
}

export interface UserActions {
  updateUser: UserDetail,
  updateUserList: UserDetail
}