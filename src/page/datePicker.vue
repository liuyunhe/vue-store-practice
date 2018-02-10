<template>
  <div>
      <vue-datepicker-local v-model="emptyRange" clearable></vue-datepicker-local>
      <div>{{ emptyRange }}</div>
  </div>
</template>

<style>
    body {

    }
</style>

<script>
    import VueDatepickerLocal from 'vue-datepicker-local'

    export default {
      components: {
        VueDatepickerLocal,
      },
      data() {
          return {
            time: new Date(),
            emptyRange: []
          }
      },

    }
</script>
