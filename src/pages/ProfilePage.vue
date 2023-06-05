<template>
  <div class="posts-container">

        <div v-if="profile">
            <ProfileCard :profile="profile"/>
        </div>

        <div v-for="p in posts" :key="p.id">
            <PostCard :post="p"/>
        </div>

        <div v-if="!posts">
            <Spinner/>
        </div>

  </div>

  <!-- NOTE this is for adding in a pagination option instead of infinite scroll -->
  <!-- <NextPageControls/> -->

  <div v-if="posts">
    <InfiniteScroll/>
  </div>
</template>
  
<script>
import { useRoute } from 'vue-router'
import Pop from '../utils/Pop'
import { profilesService } from '../services/ProfilesService'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
// import { logger } from '../utils/Logger'

  export default {
    setup() {
        const route = useRoute().params.id

        async function getProfile(){
            try {
                await profilesService.getProfileById(route)
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getPostsByUserId(){
            try {
                await postsService.getPostsByUserId(route)
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(()=>{
            AppState.posts = null
            AppState.profile = null
            getProfile()
            getPostsByUserId()
        })

      return {
        profile: computed(() => AppState?.profile),
        account: computed(()=> AppState?.account),
        posts: computed(() => AppState?.posts),
        user: computed(()=> AppState?.user)
      }
    }
  }
</script>

<style scoped>
.posts-container{
  padding: 0.5rem 0 0 0.5rem;
}
@media (max-width: 768px) { 
  .posts-container{
  padding: 0.5rem 0;
}
}
</style>