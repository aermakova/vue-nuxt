<template>
  <div class="home-page">
    <section class="text-center">
      <b-jumbotron header="News" lead="interesting news">
        <p>For more information visit website</p>
        <NLink to="/posts"
               style="font: inherit;
                      background-color: black;
                      color: white;
                      padding: 5px;
                      cursor: pointer;
                      border: 1px solid black;"
        >More Info</NLink>
      </b-jumbotron>
    </section>
    <section class="row pl-4 pr-4">
      <div class="col-lg-9">
        <PostList :posts="loadedPosts"/>
      </div>
      <div class="col-lg-3 aside">
        <p>Users online</p>
        <ul class="users-online">
          <li class="users-online-item"
              v-for="user in users"
              :key="user.id"
              style="font-weight: bold"
          >
<!--            <NLink :to="'/user/' + user.id">{{ user.username }}</NLink>-->
            <a href="#" @click.prevent="openUser(user.id)">{{ user.username }}</a>
            <small style="display: block">from: {{ user.address.city }}</small>
          </li>
        </ul>
      </div>
    </section>
    <div>


      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList.vue';
  export default {
    components: {
      PostList
    },
    async fetch({ store }) {
      if (store.getters['users/users'].length === 0) {
        // store.dispatch('users/fetch') users/ - это название файла потому что накст использует модули для вьикс и название модуля === названию файла
        await store.dispatch('users/fetch')
      }
    },
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
    computed: {
      users() {
        return  this.$store.getters['users/users'];
      }
    },
    methods: {
      openUser(id) {
        this.$router.push('user/' + id)
      }
    }
  }
</script>

<style>
  .jumbotron{
    background: #fff;
    background-size: cover;
  }
  a:hover .post-content,
  a:active .post-content {
    background-color: #ccc;
  }
  img{
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .users-online{
    list-style: none;
    padding: 0;
    /*height: 300px;*/
    /*overflow: scroll;*/
  }
  .users-online-item{
    position: relative;
  }
  /*.users-online-btn{*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  right: 0;*/
  /*  display: none;*/
  /*}*/
  /*.users-online-item:hover .users-online-btn{*/
  /*  display: block;*/
  /*}*/
</style>
