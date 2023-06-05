<template>
    <div class="pages-control">
        <button 
        :disabled="!previous" 
        @click="changePage(previous)"
        class="btn btn-dark">
            Older
        </button>

        <button 
        :disabled="!next" 
        @click="changePage(next)"
        class="btn btn-dark">
            Newer
        </button>
    </div>
</template>
  
<script>
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { computed } from 'vue'


  export default {
    props:{

    },
    setup() {
      return {
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

<style scoped>
.pages-control{
    width: 100%;
    display: flex;
    padding: 1rem 5vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>