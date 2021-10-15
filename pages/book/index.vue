<template>
  <div class="m-3">
    <div>
      <button class="btn btn-success mb-3" @click.prevent="toggleModal">
        + New Book
      </button>
      <create-book-modal
        v-if="visible"
        @on-submit="onSubmit"
        @on-close="toggleModal"
      />
      <book-list />
    </div>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class'
import { Vue, Component } from 'vue-property-decorator'
import { BookDetail } from '../../store/book/type'

@Component({
  layout: 'book',
  async fetch({ store }) {
    await store.dispatch('book/fetchBookList')
  }
})
export default class BookPage extends Vue {
  public visible: boolean = false

  @Action('book/updateBookList')
  updateBookList!: (bookData: BookDetail) => void

  private toggleModal() {
    this.visible = !this.visible
  }

  private onSubmit(bookData: BookDetail) {
    this.updateBookList(bookData)
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
