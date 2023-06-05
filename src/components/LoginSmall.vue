<template>
    <div>
      <span class="navbar-text">
      <button class="btn btn-dark selectable lighten-30 text-uppercase my-3 my-lg-0" @click="login"
        v-if="!user.isAuthenticated">
        Login
      </button>
      <div v-else>
        <div class="dropdown my-2 my-lg-0">
          <div type="button" class="border-0 selectable no-select profile-button" data-bs-toggle="dropdown" aria-expanded="false">
            <div v-if="account.picture || user.picture" class="profile-container">
              <img :src="account.picture || user.picture" alt="account photo" class="profile-picture" />
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
        </div>
      </div>
    </span>
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
  .profile-button{
    border-radius: 50%;
  }
  .profile-container{
    height: 3.5rem;
    aspect-ratio: 1/1;
  }
  .profile-picture{
    border: solid rgb(45, 195, 165) 0.1rem;
    border-radius: 50%;
    object-position: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  