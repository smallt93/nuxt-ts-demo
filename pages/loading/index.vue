<template>
  <div>
    <p>Custom loading</p>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
}
</script>

<style></style>
