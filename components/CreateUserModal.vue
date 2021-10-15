<template>
  <div class="modal__container" modal="true">
    <div
      aria-modal="true"
      data-reach-dialog-content="true"
      tabIndex="-1"
      class="modal__wrapper"
    >
      <div class="modal__body p-4">
        <div
          class="
            modal__header
            d-flex
            align-items-center
            justify-content-between
            pb-3
          "
        >
          <h3>Create User</h3>
          <span class="modal__close" @click="closeModal">x</span>
        </div>
        <form>
          <div class="form__group">
            <div class="input-group mb-3">
              <span id="basic-addon1" class="input-group-text">Username</span>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span id="basic-addon2" class="input-group-text"> Title </span>
              <input
                v-model="title"
                type="text"
                class="form-control"
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon2"
              />
            </div>
            <div class="input-group mb-3">
              <span id="basic-addon3" class="input-group-text">
                Description
              </span>
              <input
                v-model="description"
                type="text"
                class="form-control"
                placeholder="Description"
                aria-label="Description"
                aria-describedby="basic-addon3"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Upload</span>
              </div>
              <div class="custom-file">
                <input
                  id="inputGroupFile01"
                  type="file"
                  class="custom-file-input"
                  @change="onChangeThumbnail"
                />
                <label class="custom-file-label" for="inputGroupFile01"
                  >Avatar</label
                >
              </div>
            </div>
          </div>
          <div class="form-group d-flex justify-content-end">
            <button class="btn btn-danger" @click="closeModal">Cancel</button>
            <button class="btn btn-success ml-2" @click.prevent="submitForm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { v4 as uuidv4 } from 'uuid'

@Component
export default class CreateUserModal extends Vue {
  private username: string = ''
  private title: string = ''
  private description: string = ''
  private thumbnail: string = ''
  $modal: any

  private closeModal(): void {
    this.$emit('on-close')
  }

  private onChangeThumbnail(e: any): void {
    const files = e.target.files
    if (files.length) this.createImage(files[0])
  }

  private createImage(file: any): void {
    const reader = new FileReader()
    const vm = this

    reader.onload = (e: any) => {
      vm.thumbnail = e.target.result
    }
    reader.readAsDataURL(file)
  }

  private submitForm(): void {
    this.$emit('on-submit', {
      id: uuidv4(),
      name: this.username,
      title: this.title,
      description: this.description,
      thumbnail: this.thumbnail
    })

    this.username = ''
    this.title = ''
    this.description = ''
    this.thumbnail = ''
    this.closeModal()
  }
}
</script>

<style lang="scss" scoped>
.modal__container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #0000005c;
  top: 0;
  left: 0;
}
.modal__wrapper {
  position: absolute;
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 4px 1px #ddd;
}
.modal__close {
  cursor: pointer;
}
</style>
