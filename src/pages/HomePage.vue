<template>
  <div class="posts-container">
    <div v-for="p in posts" :key="p.id">
      <PostCard :post="p"/>
    </div>
  </div>

  <button :disabled="!previous" @click="changePage(previous)">Older</button>
  <button :disabled="!next" @click="changePage(next)">Newer</button>
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
      previous: computed(()=> AppState.postPrevPage),
      next: computed(()=> AppState.postNextPage),

      async changePage(value){
      try {
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
.posts-container{
  padding: 0.5rem 0 0 0.5rem;
}
</style>
