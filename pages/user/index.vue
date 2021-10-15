<template>
  <div class="m-3">
    <div>
      <button class="btn btn-success mb-3" @click.prevent="toggleModal">
        + New User
      </button>
      <create-user-modal
        v-if="visible"
        @on-submit="onSubmit"
        @on-close="toggleModal"
      />
      <user-list />
    </div>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class'
import { Vue, Component } from 'vue-property-decorator'
import { UserDetail } from '../../store/user/type'

@Component({
  layout: 'user'
})
export default class UserPage extends Vue {
  public visible: boolean = false

  @Action('user/updateUserList')
  updateUserList!: (userData: UserDetail) => void

  private toggleModal() {
    this.visible = !this.visible
  }

  private onSubmit(userData: UserDetail) {
    this.updateUserList(userData)
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
ul li a {
  color: black;
  text-decoration: none;
  margin-right: 10px;
}
</style>
