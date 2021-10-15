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
          <h3>Create Book</h3>
          <span class="modal__close" @click="closeModal">x</span>
        </div>
        <form>
          <div class="form__group">
            <div class="input-group mb-3">
              <span id="basic-addon1" class="input-group-text">Book name</span>
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Bookname"
                aria-label="Bookname"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span id="basic-addon2" class="input-group-text">Genre</span>
              <input
                v-model="genre"
                type="text"
                class="form-control"
                placeholder="Genre"
                aria-label="Genre"
                aria-describedby="basic-addon2"
              />
            </div>
            <div class="input-group mb-3">
              <span id="basic-addon3" class="input-group-text"> Author </span>
              <input
                v-model="author"
                type="text"
                class="form-control"
                placeholder="Author"
                aria-label="Author"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div class="form-group d-flex justify-content-end">
            <button class="btn btn-danger" @click="closeModal">Cancel</button>
            <button class="btn btn-success ml-2" @click.prevent="submitForm">
              Create
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
export default class CreateBookModal extends Vue {
  private name: string = ''
  private genre: string = ''
  private author: string = ''
  $modal: any

  private closeModal(): void {
    this.$emit('on-close')
  }

  private submitForm(): void {
    this.$emit('on-submit', {
      id: uuidv4(),
      name: this.name,
      genre: this.genre,
      author: this.author
    })

    this.name = ''
    this.genre = ''
    this.author = ''
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
