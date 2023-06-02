<template>
  <!-- NOTE Content gos here -->
  <div  class="sponsor-tall-container">
    <div v-for="s in sponsors" :key="s.title" class="sponsor-tall elevation-2">
      <SponsorCardTall :sponsor="s"/>
    </div>
  </div>
</template>
  
<script>
import { computed, onMounted } from 'vue'
import { sponsorsService } from '../services/SponsorsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
  export default {
    props:{

    },
    setup() {
        async function getSponsorsFromApi(){
            try {
                await sponsorsService.getSponsorsFromApi()
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(()=> {
          getSponsorsFromApi()
        })

      return {
        sponsors: computed(()=> AppState.sponsors)
      }
    }
  }
</script>

<style scoped>
.sponsor-tall-container{
  width: 100%;
  overflow: hidden;
  padding: 0.5rem
}
.sponsor-tall{
  margin-bottom: 1rem;
  width: inherit;
  overflow: hidden;
  border-radius: 0.15rem;
}
</style>