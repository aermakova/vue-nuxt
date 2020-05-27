<template>
  <div class="admin-page">
    <div class="admin-new-post mt-5">
      <AppButton
        type="button"
        class="mb-4"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="$router.push('admin/new-post')">Create post</AppButton>
    </div>
    <br/>
    <div class="admin-existing-post">
      <PostList isAdmin :posts="loadedPosts" />
    </div>
  </div>
</template>
<script>
  import PostList from '~/components/Posts/PostList.vue';
  import AppButton from '~/components/UI/AppButton.vue';
  export default {

    layout: 'admin',
    data() {
      return {
        loadedPosts: [
          {
            id: '1',
            author: 'Lina',
            title: 'Lina Post',
            previewText: 'Amazing Post',
            thumbnail: 'https://picsum.photos/600/300/?image=25'
          },
          {
            id: '2',
            author: 'Lina 2',
            title: 'Lina Post 2',
            previewText: 'Amazing Post 2',
            thumbnail: 'https://picsum.photos/600/300/?image=25'
          },
        ]
      }
    },
    components: {
      PostList,
      AppButton
    },
  }
</script>
