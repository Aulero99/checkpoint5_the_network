<template>
  <main class="container-fluid">
    <section class="row">
      <div for="login" class="
      p-0 
      col-md-3
      col-lg-2
      d-none 
      d-md-flex 
      flex-column 
      flex-grow-1 
      bg-light 
      side-container
      elevation-2">
        <div class="side">
              <LoginLarge />
        </div>
      </div>
      <div for="content" class="
      p-0
      col-12 
      col-md-9 
      col-lg-10">

        <div class="container-fluid">
          <section class="row p-0 d-flex flex-row justify-content-between">

            <div class="col-12 p-0">
              <Navbar />
            </div>
            <div class="col-12 d-flex d-md-none">
              <SponsorBanner/>
            </div>
            <div class="col-12 col-md-8 col-lg-9 col-xl-10 main-display">
              <div class="router-pad">
                <router-view />
              </div>
            </div>

            <div class="col-4 col-lg-3 col-xl-2 d-none d-md-flex p-0 sponsor-display">
              <SponsorsBar />
            </div>
            
          </section>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}
.side-container{
  min-height: 100vh;
}
.side {
    height: 100vh;
    width: inherit;
    display: flex;
    flex-direction: column;
    padding-top: 15vh;
    align-items: center;
    position: fixed;
    overflow: hidden;
}
.main-display{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.router-pad{
  width: 100%;
}
@media (min-width: 992px) { 
  .router-pad{
  width: 80%;
}
}
@media (min-width: 1200px) { 
  .router-pad{
  width: 65%;
}
}
@media (min-width: 1400px) { 
  .router-pad{
  width: 50%;
}
}
</style>
