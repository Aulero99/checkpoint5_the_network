<template>

  <nav class="searchbar elevation-2">

    <router-link class="navbar-brand d-flex home-link" :to="{ name: 'Home' }" name="home" title="Home Page">
      <div class="logo-container">
        <img class="d-none d-md-block" alt="logo" src="../assets/img/logo.svg" height="34" />
        <img class="d-block d-md-none" alt="logo" src="../assets/img/logo_small.svg" height="34" />
      </div>
    </router-link>

    <div>
      <PostSearchBar/>
    </div>

<!-- NOTE this is the smaller account element, it only appears on mobile size displays -->
    <div class="d-block d-md-none">
      <LoginSmall/>
    </div>

  </nav>

</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.searchbar{
  background: rgb(56,190,192);
  background: linear-gradient(146deg, rgba(56,190,192,1) 0%, rgba(136,220,216,1) 50%, rgba(128,218,207,1) 100%);
  padding: 1rem 1.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.logo-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-link{
  cursor: pointer;
  transition: all 100ms;
}
.home-link:hover{
  filter: invert(1);
}
</style>
