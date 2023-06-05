<template>
  <router-link :to="{ name: 'Search' }" class="search-link" name="search" title="Search Page">
    <i class="mdi mdi-magnify search"></i>
  </router-link>
</template>
  
<script>

  export default {
    setup() {

      return { }
    }
  }
</script>

<style scoped>
.search-link{
all: unset;
color: white;
transition: all 150ms;
cursor: pointer;
display: flex;
justify-content: center;
flex-direction: column;
height: 100%;
font-size: 2.6rem;
}
.search-link:hover{
  color: rgb(0, 0, 0);
}
</style>