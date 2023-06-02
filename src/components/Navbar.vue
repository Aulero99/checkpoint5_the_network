<template>
  <nav class="searchbar">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="logo-container">
        <img alt="logo" src="../assets/img/logo.svg" height="34" />
      </div>
    </router-link>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
    </div> -->

    
    <form class="form-inline d-flex flex-row">
      <input class="form-control mr-sm-2 rounded-0 rounded-start-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-dark my-2 my-sm-0 rounded-0 rounded-end-2" type="submit">Search</button>
    </form>
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
  padding: 1rem 0.75rem;
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

@media screen and (min-width: 992px) {
}
</style>
