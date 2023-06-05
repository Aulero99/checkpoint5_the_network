<template>
  <div class="posts-container">
    <div class="search-container">
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
    </div>

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
// import { profilesService } from '../services/ProfilesService'
import { postsService } from '../services/PostsService'
import { router } from '../router'
import { logger } from '../utils/Logger'
import { useRoute } from 'vue-router'



  export default {
    setup() {
      const searchParam = useRoute().query.search
      const editable = ref({})
      watchEffect(() => { editable.value = { ...AppState.searchQuery } })

      // async function getProfilesBySearch(){
      //       try {
      //           await profilesService.getProfileBySearch(route)
      //       } catch (error) {
      //           Pop.error(error)
      //       }
      //   }
      
      async function callSearchOnLoad(){
        if(!searchParam){ return }
        else{ 
          AppState.searchQuery = searchParam
          getPostsBySearch()
        }
      }

      async function getPostsBySearch(){
        // NOTE we first need to clear out any previous search data from the AppState
        // before a new search can be preformed
        AppState.posts = null
        // Then the new search parameter can be applied to the AppState, this ensures
        // our listeners handle the search correctly
        let search = AppState.searchQuery
        try { await postsService.getPostsBySearch(search) } 
        catch (error) { Pop.error(error, '[SearchPage: setPostsBySearch()]') }
      }

      onMounted(()=>{
          callSearchOnLoad()
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
            router.push({ name:'Search', query:{search:editable.value.search} })
            await getPostsBySearch()
            } catch (error) {
              Pop.error(error, '[SearchPage: handleSubmit()]')
            }
        }
      }
    }
  }
</script>

<style scoped>
.search-container{
  background-color: #e5e5e5;
  border: solid 0.01rem black;
  border-radius: 0.15rem;
  padding:0.5rem 1rem 0.25rem 1rem;
  margin-top: 0.05rem;
  margin-bottom: 1rem;
}
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