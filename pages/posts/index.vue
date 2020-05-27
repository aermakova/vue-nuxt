<template>
  <div class="mt-5">
    <PostList />
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList.vue';
  export default {
    data() {
      return {

      }
    },
    components: {
      PostList
    }
  }
</script>

<style>
  .posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 -100px;
    padding: 0 100px;
  }
</style>
