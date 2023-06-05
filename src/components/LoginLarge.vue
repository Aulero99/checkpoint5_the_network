<template>
  <div class="login-card">

    <div class="logged-out" v-if="!user.isAuthenticated">
      <div class="content">
        <button class="btn btn-dark" @click="login">
        Login
      </button>
      </div>
    </div>

    <div v-else class="logged-in">

          <router-link :to="{ name: 'Account' }" class="account-link" title="Account Settings">
            <div v-if="account.picture || user.picture" class="profile">
              <img :src="account.picture" alt="" v-if="account.picture">
              <div class="grad" v-if="account.graduated">
                  <i class="mdi mdi-school"></i>
              </div>
            </div>
          </router-link>

        <div class="content">

          <div v-if="account.name" class="information" name="Account" title="Account Name">
            <h2> {{account.name}} </h2>
          </div>

          <div v-if="account.github" class="information" name="Github" title="Github Account">
            <a :href="account.github">
              <i class="mdi mdi-github"></i> Github
            </a>
          </div>

          <div v-if="account.linkedin" class="information" name="LinkedIn" title="LinkedIn Account">
            <a :href="account.linkedin">
              <i class="mdi mdi-linkedin"></i> LinkedIn
            </a>
          </div>

          <div v-if="account.resume" class="information" name="Resume" title="Resume Link">
            <a :href="account.resume">
              <i class="mdi mdi-file-document"></i> Resume
            </a>
          </div>

          <button 
          class="btn btn-dark logout" 
          @click="logout" 
          name="logout" 
          title="logout">
            Logout
          </button>
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
a{
  all:unset;
  cursor: pointer;
  transition: all 100ms;
}
.login-card{
  width: 100%;
}
.logout{
  margin-top: 1rem;
}
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 0 calc(5% + 0.25rem);

}
.logged-in{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.logged-out{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.account-link{
  width: 100%;
}
.information {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
.information a{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
}
.information i{
  font-size: 1.7rem;
}
a:hover{
  color: #25a0a0;
}
.profile{
    width: 80%;
    max-width: 15rem;
    aspect-ratio: 1/1;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    margin: auto;
}
.profile img{
    border: solid rgb(45, 195, 165) 0.1rem;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-position: 50%;
    object-fit: cover;
}
.grad{
    background-color: white;
    border: solid rgb(45, 195, 165) 0.1rem;
    z-index: 10;
    position: absolute;
    font-size: 2rem;
    color: #6d6d6d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
</style>
