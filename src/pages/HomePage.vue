<template>
  <div v-for="p in posts" :key="p.id">
    <PostCard :post="p"/>
  </div>
  <button @click="changePage('prev')">Older</button>
  <button @click="changePage('next')">Newer</button>
</template>

<script>
import Pop from '../utils/Pop'
import { postsService } from '../services/PostsService.js'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    async function getPostsFromApi() {
      try {
        await postsService.getPostsFromApi()
      } catch (error) {
        Pop.error(error, '[Getting Posts]')
      }
    }

    onMounted(() => {
      getPostsFromApi()
    })

    return {
      posts: computed(() => AppState.posts),

      async changePage(which){
      try {
        let value = ''
        if(which == 'next'){ value = AppState.postNextPage }
        else{ value = AppState.postPrevPage }
        await postsService.changePage(value)
      } catch (error) {
        Pop.error(error)
      }
    }

    }
  }
}
</script>

<style scoped lang="scss">

</style>
