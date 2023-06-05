<template>
  <div v-if="previous">
    <Spinner/>
  </div>
    <!-- NOTE this is for adding in a pagination option instead of infinite scroll -->
  <!-- <NextPageControls/> -->
</template>
  
<script>
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { computed, onMounted, onUnmounted } from 'vue'

  export default {
    setup() {

    onMounted(() => {
      scrollToTop()
      checkScroll()
      bufferOff()
    })

    onUnmounted(()=>{
      bufferOn()
    })

    // NOTE these functions turn the buffer on and off according to the state of the app
    // when the element is unmounted the buffer is set to true to prevent accidental API
    // call, once the element is loaded again the scroll position is set to 0, the scroll
    // listener is turned on then the buffer is turned off to allow scroll events to
    // trigger once again
    function bufferOn(){ AppState.buffer = true }
    function bufferOff(){ AppState.buffer = false }
    function scrollToTop(){ window.scrollTo(0,0) }

    function checkScroll(){
      window.onscroll = () =>{
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight;
      let windowHeight = document.documentElement.offsetHeight

      if(
        bottomOfWindow >= windowHeight - 1500 && 
        AppState?.postPrevPage && 
        !AppState.buffer
      ){
        // NOTE this turns on the buffer to ensure no additional API calls are made during the
        // time a new set of posts are being loaded, it is turned off in the Service layer 
        // once the api call has concluded
        // NOTE a known issue is that if a user changes the page before the api call comes back
        // then the res.data will be pushed to the new page's post array, causing faulty data
        // possible fixes introduce other issues, therefore I have chosen to leave it for now
        bufferOn()
        changePage()
      }}}

      async function changePage(){
            try {
                let value = AppState?.postPrevPage
                await postsService.getPageAndPush(value)
            } catch (error) {
                Pop.error(error, '[Infinite Scroll: changePage()]')
            }
        }

      return { previous: computed(()=> AppState.postPrevPage) }
    }
  }
</script>

<style scoped> </style>