<template>
  <div>
      <div>{{ id }}</div>
      <div>{{ username }}</div>
      <router-link :to="{path:`/user/${username}/ccc`}">跳转</router-link>
      <router-view></router-view>
  </div>
</template>

<style>
    body {

    }
</style>

<script>
    export default {
      props:{
        id:{
          type:String,
          default:''
        }
      },
      data() {
          return {
              username:''
          }
      },
      mounted() {
        this.username = this.id;
//        注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。
//        取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：
//        const userId = 123
//        router.push({ name: 'user', params: { userId }}) // -> /user/123
//        router.push({ path: `/user/${userId}` }) // -> /user/123
//        这里的 params 不生效:
//        router.push({ path: '/user', params: { userId }}) // -> /user
        console.log(this.$route.params)
      },
    }
</script>
