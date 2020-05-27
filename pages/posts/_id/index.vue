<template>
  <div class="row">
    <div class="col-12">
      <b-card
        title="Bla"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="width: 100%;"
        class="mb-2"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, illo saepe aperiam, ducimus modi neque iure culpa minus deserunt fuga minima, vel optio voluptates unde suscipit quos, voluptatum esse. Est dolorem iusto nobis vitae corrupti ducimus ex mollitia eum similique dolor reprehenderit officiis nam molestias omnis voluptates qui laborum ipsam, totam sunt labore beatae. Reiciendis odio quas quidem animi facilis ullam repudiandae esse, provident ea, nostrum consequuntur! Voluptatem dignissimos quaerat, doloremque voluptate impedit quos autem dolorum iste nihil ipsa id corporis, fugit dolores! Incidunt eius culpa illo, reprehenderit molestias ad eos, porro! Perspiciatis incidunt, ex quod. Suscipit, recusandae laboriosam temporibus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, illo saepe aperiam, ducimus modi neque iure culpa minus deserunt fuga minima, vel optio voluptates unde suscipit quos, voluptatum esse. Est dolorem iusto nobis vitae corrupti ducimus ex mollitia eum similique dolor reprehenderit officiis nam molestias omnis voluptates qui laborum ipsam, totam sunt labore beatae. Reiciendis odio quas quidem animi facilis ullam repudiandae esse, provident ea, nostrum consequuntur! Voluptatem dignissimos quaerat, doloremque voluptate impedit quos autem dolorum iste nihil ipsa id corporis, fugit dolores! Incidunt eius culpa illo, reprehenderit molestias ad eos, porro! Perspiciatis incidunt, ex quod. Suscipit, recusandae laboriosam temporibus?
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<style>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
