<template>
  <div>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Description</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, idx) of userList"
          :key="user.id"
          @click="onUserDetail(user.id)"
        >
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.description }}</td>
          <td><img :src="user.thumbnail" width="150" height="150" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { UserDetail, UserState, UserActions } from '../store/user/type'
import { ActionMap } from '../utils/storeHelper'

const UserStore = namespace('user')

@Component
export default class UserList extends Vue {
  @UserStore.Getter('userList')
  userList!: UserState['userList']

  @UserStore.Action('updateUser')
  updateUser!: ActionMap<UserActions['updateUser']>

  private onUserDetail(id: string | number): void {
    const userDetail: UserDetail = this.userList.find(
      user => user.id.toString() == id
    )!
    this.updateUser(userDetail)
    this.$router.push('/user/detail')
  }
}
</script>

<style></style>
