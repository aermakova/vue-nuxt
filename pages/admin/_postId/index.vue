<template>
  <div class="admin-post-page">
    <AdminPostForm :post="loadedPost"/>
  </div>
</template>

<script>
  import AdminPostForm from "~/components/Admin/AdminPostForm";

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost: {
          author: 'Lina',
          title: 'Lina Post',
          content: 'Amazing Post',
          thumbnailLink: 'https://picsum.photos/600/300/?image=25'
        }
      }
    }
  };
</script>
