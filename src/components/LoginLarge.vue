<template>
  <div>

    <button class="btn btn-dark" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>

    <div v-else>
      <div class="dropdown d-flex flex-column justify-content-center align-items-center">

        <div type="button" class="border-0 selectable no-select account-button" data-bs-toggle="dropdown" aria-expanded="false">
          <div v-if="account.picture || user.picture" class="p-0 picture-container">
            <img :src="account.picture || user.picture" alt="account photo" class="account-picture" />
          </div>
        </div>

        <div class="dropdown-menu dropdown-menu-lg-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
          <div class="list-group">
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item dropdown-item list-group-item-action">
                Manage Account
              </div>
            </router-link>
            <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>

        <div v-if="user.name" class="information">
          {{user.name}}
        </div>

        <div v-if="user.github" class="information">
          <a :href="user.github">
            <i class="mdi mdi-github"></i> Github
          </a>
        </div>

        <div v-if="user.linkedin" class="information">
          <a :href="user.linkedin">
            <i class="mdi mdi-linkedin"></i> LinkedIn
          </a>
        </div>

        <div v-if="user.resume" class="information">
          <a :href="user.resume">
            <i class="mdi mdi-file-document"></i> Resume
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.account-button{
  border-radius: 50%;
  width: 70%;
}
.picture-container{
width: 100%;
display: flex;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
flex-direction: row;
}
.account-picture{
  border:0;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1/1;
}

.account-picture img{
  width: 100%;
}

.information {
  margin-top: 1rem;
  width: 100%;
  padding: 0 0.5rem;
}

a{
  all:unset;
  cursor: pointer;
  transition: all 100ms;
}
a:hover{
  color: rgb(73, 191, 255);
}
</style>
