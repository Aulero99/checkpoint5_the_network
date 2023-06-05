<template>
  <div class="posts-container">
    <form class="form-inline d-flex flex-row searchbar" @submit.prevent="handleSubmit">
      <input 
      class="form-control mr-sm-2 rounded-0 rounded-start-2" 
      type="search" 
      placeholder="Search" 
      aria-label="Search"
      name="search"
      required 
      v-model="editable.search"
      >
      <button class="btn btn-dark my-2 my-sm-0 rounded-0 rounded-end-2" type="submit">Search</button>
    </form>

  <!-- <div v-if="profiles">
    <div v-for="p in profiles" :key="p.id">
      <ProfileCard :profile="p"/>
    </div>
  </div> -->

  <div v-if="posts">
    <div v-for="p in posts" :key="p.id">
      <PostCard :post="p"/>
    </div>
  </div>

  <div v-if="!posts && search">
      <Spinner/>
  </div>

  <div v-if="posts">
    <InfiniteScroll/>
  </div>

  </div>
</template>
  
<script>
import { computed, onMounted, watchEffect, ref } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { profilesService } from '../services/ProfilesService'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'



  export default {
    setup() {
      const editable = ref({})

      watchEffect(() => {
        editable.value = { ...AppState.searchQuery }
      })

      // async function getProfilesBySearch(){
      //       try {
      //           await profilesService.getProfileBySearch(route)
      //       } catch (error) {
      //           Pop.error(error)
      //       }
      //   }

      async function getPostsBySearch(){

        AppState.posts = null
        let search = AppState.searchQuery

          try {
              logger.log('the search parameter is', search)
              await postsService.getPostsBySearch(search)
          } catch (error) {
              Pop.error(error)
          }
      }

      onMounted(()=>{
            AppState.searchQuery = null
            AppState.posts = null
            AppState.profiles = null
        })
        

      return {
        search: computed(()=>AppState?.searchQuery),
        profiles: computed(() => AppState?.profiles),
        posts: computed(() => AppState?.posts),

        editable,
        async handleSubmit() {
            try {
            AppState.searchQuery = editable.value.search
            logger.log('search is', AppState.searchQuery)
            await getPostsBySearch()
            } catch (error) {
            Pop.error(error)
            }
        }
      }
    }
  }
</script>

<style scoped>
.searchbar{
  margin: 0.5rem 0 1rem 0;
}
.posts-container{
  padding: 0.5rem 0 0 0.5rem;
}
@media (max-width: 768px) { 
  .posts-container{
  padding: 0.5rem 0;
}
}
</style>