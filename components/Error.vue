<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <h1>Page not found {{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
    </div>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object
    }
  }
}
</script>
