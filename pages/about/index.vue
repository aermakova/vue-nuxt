<template>
  <div class="about-page">
    <h1>This is my absolutely fantastic "About Me" Page!</h1>
    <p>dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit, numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt aspernatur commodi?</p>
  </div>
</template>

<script>
  export default {
    // middleware: ['auth'] если нужен еще один то через запятую ['auth', 'aut] порядок важен накст вызывает их слева направо поочереди
    middleware: ['auth']
  }
</script>

<style scoped>
  .about-page {
    text-align: center;
    padding: 30px;
    background: url("~assets/image/bg.jpg") no-repeat center/cover;
  }
</style>
