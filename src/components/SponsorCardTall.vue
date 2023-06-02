<template>

    <a :href="sponsor.complink">
      <img :src="sponsor.tall" :alt="sponsor.title">
    </a>

</template>
  
<script>
import { Sponsor } from '../models/Sponsor'

  export default {
    props:{
      sponsor: { type: Sponsor, required: true }
    },
    setup() {
      return {

      }
    }
  }
</script>

<style scoped>
a {
  all: unset;
  cursor: pointer;
  width: inherit;
}

img {
  width: inherit;
}
</style>