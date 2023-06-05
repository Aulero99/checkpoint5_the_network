<template>
  <main class="container-fluid">
    <section class="row">
      <div class="p-0 col-3 d-none d-md-flex flex-column flex-grow-1 bg-light side-container">
        <div class="side">
              <LoginLarge />
        </div>
      </div>
      <div class="col-12 col-md-9 p-0">
        <div class="container-fluid">
          <section class="row p-0">
            <div class="col-12 p-0">
              <Navbar />
            </div>
            <div class="col-12 col-md-8">
              <router-view />
            </div>
            <div class="col-4 d-none d-md-flex p-0">
              <SponsorsBar />
            </div>
          </section>
          <section class="row">
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


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.side-container{
  min-height: 100vh;
}

.side{
  height: 100vh;
  width: inherit;
  display: flex;
  flex-direction: column;
  padding: 10vh 0 0 0;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  overflow: hidden;
}
</style>
