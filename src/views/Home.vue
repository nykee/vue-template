<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Comments></Comments>
  </div>
</template>

<script>
// @ is an alias to /src
import Comments from '@/components/Comments.vue'

export default {
  name: 'Home',
  components: {
    Comments
  }
}
</script>
