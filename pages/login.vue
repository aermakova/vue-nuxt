<template>
  <div class="login-page">
    <div class="alert alert-danger mb-4" v-if="$route.query.message">
      Need login
    </div>
    <b-form @submit.prevent="onSubmit" class="login">
      <h1>LOGIN PAGE</h1>
      <b-form-group
        id="input-group-1"
        label="Login:"
        label-for="input-1"
        description="Enter you login."
      >
        <b-form-input
          id="input-1"
          v-model="form.login"
          type="text"
          required
          placeholder="Enter login"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          login: '',
        },
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('login');
        this.$router.push('/');
      },
    }
  }
</script>

<style>
  .login{
    box-shadow: 0 0 7px 0 #d2cece;
    padding: 20px;
  }
  .login-page{
    width: 500px;
    margin: 20px auto;
  }
</style>
