<template>
  <div>
      <div>{{ $route.params.id }}</div>
      <div>{{ username }}</div>
      <router-view></router-view>
  </div>
</template>

<style>
    body {

    }
</style>

<script>
    export default {

      data() {
          return {
              username:''
          }
      },
      mounted() {
        this.username = this.$route.params.id
      },
    }
</script>
