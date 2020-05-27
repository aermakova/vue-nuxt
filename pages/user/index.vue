<template>
  <div class="user-account-page">
    <h2>THIS IS USER ACCOUNT PAGE</h2>
    <div class="row">
      <div class="col-lg-8 block">
        <div>
          <nuxt-child />
        </div>
      </div>
      <div class="col-lg-4 block">
        <div>kdkdkdkd</div>
      </div>
      <div class="col-lg-12 block">
        <div>kdkdkdkd</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .user-account-page{
    background-color: #e9ebee;
    min-height: 100vh;
    padding: 20px;
  }
  .block{
    width: 100%;
    padding: 15px;
  }
  .block div{
    border-radius: 5px;
    background-color: #fff;
  }
</style>
