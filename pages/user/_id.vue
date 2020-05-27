<template>
  <div>
    <p>user id: {{ $route.params.id }}</p>
    <h2>{{ user.name }}</h2>
    <hr>
    <p></p>
  </div>
</template>
<script>
  export default {
    async asyncData({$axios, params}) {
      const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id);
      return { user }
    },
    transition: 'bounce'
  }
</script>
