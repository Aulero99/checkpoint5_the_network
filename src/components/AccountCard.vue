<template>
    <form class="card elevation-1" @submit.prevent="handleSubmit">
  
      <div class="card-body">
        <div class="form-floating mb-3">
          <input name="name" class="form-control" placeholder="Name" type="text" required v-model="editable.name">
          <label for="name">Name:</label>
        </div>

        <div class="form-floating mb-3">
          <input name="picture" class="form-control" placeholder="Profile Picture" type="url" required
            v-model="editable.picture">
          <label for="picture">Profile Image:</label>
        </div>

        <div class="form-floating mb-3">
          <input name="cover-img" class="form-control" placeholder="cover Image" type="url" required
            v-model="editable.coverImg">
          <label for="cover-img">Profile Background:</label>
        </div>

        <div class="form-floating mb-3">
          <input name="github" 
          class="form-control" 
          placeholder="Github" 
          type="url"  
          v-model="editable.github">
          <label for="github">Github:</label>
        </div>

        <div class="form-floating mb-3">
          <input name="linkedin" 
          class="form-control" 
          placeholder="LinkedIn" 
          type="url"  
          v-model="editable.linkedin">
          <label for="linkedin">LinkedIn:</label>
        </div>

        <div class="form-floating mb-3">
          <input name="resume" 
          class="form-control" 
          placeholder="Resume" 
          type="url"  
          v-model="editable.resume">
          <label for="linkedin">Resume:</label>
        </div>

        <div class="form-check check-area">
            <input class="form-check-input" 
            type="checkbox"
            name="graduated" 
            id="flexCheckDefault"
            v-model="editable.graduated">
            <label class="form-check-label" 
            for="graduated">
                Graduated
            </label>
        </div>

      </div>

      <div class="card-footer text-end">
        <button class="btn btn-outline-primary" type="submit">Save Account</button>
      </div>
  
  
    </form>
  </template>
  
  
  <script>
    import { ref, watchEffect } from 'vue';
    import { AppState } from '../AppState.js';
    import { accountService } from '../services/AccountService.js';
    import Pop from '../utils/Pop.js';
    import { logger } from '../utils/Logger.js';
  
    export default {
    setup() {
        const editable = ref({})

        watchEffect(() => {
        editable.value = { ...AppState.account }
        })


        return {
        editable,
        async handleSubmit() {
            try {
            logger.log('the user is',AppState.user)
            logger.log(editable.value)
            await accountService.editAccount(editable.value)
            } catch (error) {
            Pop.error(error)
            }
        }
        }
    }
  }
  </script>
  
  
<style lang="scss" scoped>
.check-area{
    background-color: #f7f5f5;
    width: auto;
    padding: 0.5rem 2rem;
    border-radius: 0.35rem;
}
</style>
  