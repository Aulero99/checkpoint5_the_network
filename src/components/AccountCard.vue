<template>
    <form class="card elevation-2" @submit.prevent="handleSubmit">
  
      <div class="card-body">

        <div for="name" class="form-floating mb-3">
          <input name="name" class="form-control" placeholder="Name" type="text" required v-model="editable.name">
          <label for="name">Name:</label>
        </div>

        <div for="picture" class="form-floating mb-3">
          <input name="picture" class="form-control" placeholder="Profile Picture" type="url" required
            v-model="editable.picture">
          <label for="picture">Profile Image:</label>
        </div>

        <div for="bio" class="form-floating mb-3">
          <textarea name="bio" class="form-control" placeholder="bio" type="text" required v-model="editable.bio"></textarea>
          <label for="bio">Bio:</label>
        </div>

        <div for="cover-img" class="form-floating mb-3">
          <input name="cover-img" class="form-control" placeholder="cover Image" type="url" required
            v-model="editable.coverImg">
          <label for="cover-img">Profile Background:</label>
        </div>

        <div for="github" class="form-floating mb-3">
          <input name="github" 
          class="form-control" 
          placeholder="Github" 
          type="url"  
          v-model="editable.github">
          <label for="github">Github:</label>
        </div>

        <div for="linkedin" class="form-floating mb-3">
          <input name="linkedin" 
          class="form-control" 
          placeholder="LinkedIn" 
          type="url"  
          v-model="editable.linkedin">
          <label for="linkedin">LinkedIn:</label>
        </div>

        <div for="resume" class="form-floating mb-3">
          <input name="resume" 
          class="form-control" 
          placeholder="Resume" 
          type="url"  
          v-model="editable.resume">
          <label for="linkedin">Resume:</label>
        </div>

        <div for="class" class="form-floating mb-3">
          <input name="class" 
          class="form-control" 
          placeholder="Class" 
          type="text"  
          v-model="editable.class">
          <label for="class">Graduating Class:</label>
        </div>

        <div for="graduated" class="form-check check-area">
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

      <div for="submit" class="card-footer text-end">
        <button class="btn btn-outline-primary" type="submit">Save Account</button>
      </div>
  
    </form>
  </template>
  
  
  <script>
    import { ref, watchEffect } from 'vue';
    import { AppState } from '../AppState.js';
    import { accountService } from '../services/AccountService.js';
    import Pop from '../utils/Pop.js';
  
    export default {
    setup() {
        const editable = ref({})
        watchEffect(() => { editable.value = { ...AppState.account } })

        return {
        editable,
        async handleSubmit() {
            try {
              if(await Pop.confirm('Are you sure you want to apply these changes?')){
                await accountService.editAccount(editable.value) 
              } 
            } catch (error) { Pop.error(error, '[AccountCard: handleSubmit()]') }
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
form{
  margin-bottom: 1rem;
}
</style>
  