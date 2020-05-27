<template>
  <div>
    <p>user id: {{ $route.params.id }}</p>
    <p>this component in /users/_id/index.vue</p>
  </div>
</template>
<script>
  export default {
    validate(data) {
      return /^\d+$/.test(data.params.id)
    },
    // или так как ниже
    // validate({params}) {
    //   return /^\d+$/.test(params.id)
    // },
    transition: 'bounce'
  }
</script>
