<template>
  <div class="form">
    <b-form-input v-model="userId" placeholder="Enter user Id"></b-form-input>
    <b-button variant="success" class="mt-4" @click="onLoadUser">Load User</b-button>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userId)
      }
    },
    transition: 'bounce',
    layout: 'users'
  }
</script>
