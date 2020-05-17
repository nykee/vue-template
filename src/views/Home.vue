<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Comments></Comments>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Comments from '@/components/Comments.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,Comments
  }
}
</script>
