<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Genre</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(book, idx) of bookList"
          :key="book.id"
          @click="onBookDetail(book.id)"
        >
          <td>{{ idx + 1 }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.genre }}</td>
          <td>{{ book.author.name }}</td>
          <td><a href="#">Buy Now</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { BookDetail, BookState, BookActions } from '../store/book/type'
import { ActionMap } from '../utils/storeHelper'

const BookStore = namespace('book')

@Component
export default class BookList extends Vue {
  @BookStore.Getter('bookList')
  bookList!: BookState['bookList']

  @BookStore.Action('updateBookDetail')
  updateBookDetail!: ActionMap<BookActions['updateBookDetail']>

  private onBookDetail(id: string | number): void {
    const bookDetail: BookDetail = this.bookList.find(
      (book) => book.id?.toString() == id
    )!
    this.updateBookDetail(bookDetail)
    this.$router.push('/book/detail')
  }
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
table thead {
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
}
table th {
  border: 1px solid #ddd;
  padding: 14px 12px;
  color: #fff;
  z-index: 5;
  font-size: 16px;
}

table tbody tr:hover {
  cursor: pointer;
  background-color: #cbcaca !important;
}

table tbody td {
  border: 1px solid #ddd;
}

table tr:nth-child(even) {
  background-color: rgba(237, 237, 237, 0.5);
}

table tbody td a {
  display: block;
  padding: 10px;
  text-decoration: none;
}
</style>
