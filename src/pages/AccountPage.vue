<template>
  <div class="posts-container">

      <div v-if="profile">
          <ProfileCard :profile="profile"/>
      </div>

      <div v-if="profile">
        <AccountCard :account="profile"/>
      </div>

      <div v-if="profile">
        <CreatePostCard/>
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
import Pop from '../utils/Pop'
import { profilesService } from '../services/ProfilesService'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'

  export default {
    setup() {

      async function getProfile(){
            try { await profilesService.getProfileById(AppState.user.id) } 
            catch (error) { Pop.error(error, '[AccountPage: getProfile()]') }
        }

        async function getPostsByUserId(){
            try { await postsService.getPostsByUserId(AppState.user.id) } 
            catch (error) { Pop.error(error, '[AccountPage: getPostsByUserId()]') }
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