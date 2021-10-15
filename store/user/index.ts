import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'
import { UserState, UserDetail, UserGetters, UserMutations, UserActions } from './type'

export const state = (): UserState => ({
  userDetail: {
    id: 1,
    name: 'James'
  },
  userList: [
    {
      id: 1,
      name: 'James',
      title: 'Scrum Master',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      thumbnail:
        'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/122794702_1320312194976484_5517574261791830055_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kk6kxXYAwboAX-Hc9AH&_nc_ht=scontent.fsgn5-4.fna&oh=bbdb7650c0744a11b301f39bd5fc947c&oe=6189C769'
    },
    {
      id: 2,
      name: 'James 2',
      title: 'Quality Assurance',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      thumbnail:
        'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/122794702_1320312194976484_5517574261791830055_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kk6kxXYAwboAX-Hc9AH&_nc_ht=scontent.fsgn5-4.fna&oh=bbdb7650c0744a11b301f39bd5fc947c&oe=6189C769'
    },
    {
      id: 3,
      name: 'James 3',
      title: 'Software Engineer',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      thumbnail:
        'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.6435-9/122794702_1320312194976484_5517574261791830055_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kk6kxXYAwboAX-Hc9AH&_nc_ht=scontent.fsgn5-4.fna&oh=bbdb7650c0744a11b301f39bd5fc947c&oe=6189C769'
    }
  ]
})

export const getters: DefineGetters<UserGetters, UserState> = {
  userDetail: state => state.userDetail,
  userList: state => state.userList
}

export const mutations: DefineMutations<UserMutations, UserState> = {
  updateUserDetail(state: UserState, userDetail: UserDetail) {
    state.userDetail = userDetail
  },
  updateUserList(state: UserState, userData: UserDetail) {
    state.userList = [...state.userList, userData]
  }
}

export const actions: DefineActions<UserActions, UserState, UserMutations, UserGetters> = {
  updateUser({ commit }: { commit: any }, userDetail: UserDetail) {
    commit('updateUserDetail', userDetail)
  },
  updateUserList({ commit }: { commit: any }, userData: UserDetail) {
    commit('updateUserList', userData)
  }
}