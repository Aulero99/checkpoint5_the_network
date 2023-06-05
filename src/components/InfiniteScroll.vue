<template>
  <div v-if="previous">
    <Spinner/>
  </div>
</template>
  
<script>
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { logger } from '../utils/Logger'
  export default {
    setup() {

    onMounted(() => {
      checkScroll()
    })

    function checkScroll(){
      window.onscroll = () =>{
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight;
      let windowHeight = document.documentElement.offsetHeight
      if(
        bottomOfWindow >= windowHeight - 1500 && 
        AppState?.postPrevPage && 
        !AppState.buffer
      ){
        AppState.buffer = true
        logger.log('bottom of window reached')
        changePage()
      }}}

      async function changePage(){
            try {
                let value = AppState?.postPrevPage
                logger.log('changing the page to', value)
                await postsService.getPageAndPush(value)
            } catch (error) {
                Pop.error(error)
            }
        }

      return {
        previous: computed(()=> AppState.postPrevPage),
      }
    }
  }
</script>

<style scoped>

</style>