<template>
  <div>
    <div v-if="checkDetail" class="card-wrapper">
      <div class="main-window focus" id="main-window">
        <div class="user-image">
          <div class="add-button">+</div>
          <div class="username">{{ bookDetail.author.name }}</div>
        </div>
        <div class="user-info">
          <div class="quote">{{ bookDetail.name }}</div>
        </div>

        <div class="social-info">
          <div class="social-info-elm">
            TYPE<br /><span class="lg">{{ bookDetail.genre }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <div class="p-3 text-uppercase font-weight-bold text-center h4 m-0">
        You have to select book detail in book list
      </div>
      <nuxt-link to="/book">-> Back to Book list</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { namespace } from 'vuex-class'
import { Vue, Component } from 'vue-property-decorator'
import { BookState } from '../../../store/book/type'

const BookStore = namespace('book')

@Component({
  layout: 'book'
})
export default class BookDetail extends Vue {
  @BookStore.Getter('bookDetail')
  bookDetail!: BookState['bookDetail']

  private get checkDetail() {
    return Object.keys(this.bookDetail).length > 0
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  width: 400px;
  height: 500px;
  margin: 30px auto;
}
.main-window {
  background: #fff;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 100%;
  position: relative;
  z-index: 20;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.user-image {
  background: url('https://bigseventravel.com/wp-content/uploads/2020/03/Books-to-read-in-self-isolation-1920x1514.png');
  background-size: cover;
  height: 70%;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;
}

.add-button {
  height: 40px;
  width: 40px;
  background: #ec407a;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  bottom: -20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-size: 1.5rem;
  font-weight: 500;
  z-index: 5;
  display: flex;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.username {
  position: absolute;
  bottom: 0px;
  width: 100%;
  color: #fff;
  font-size: 27px;
  font-size: 1.7rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 35px;
  padding-left: 80px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.4);
  height: 40px;
  z-index: 1;
}

.quote {
  padding: 20px 25px;
  box-sizing: border-box;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}

.social-info {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
}

.social-info-elm {
  color: #999;
  width: 33.3333%;
  text-align: center;
  font-weight: 300;
}

.focus {
  transform: translate(0px, 0px);
  transition: all 0.3s ease-in;
  z-index: 40;
}
</style>
