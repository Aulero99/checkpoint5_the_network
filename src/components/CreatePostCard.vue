<template>
    <div class="post-card elevation-2" v-if="user.isAuthenticated">
        <div class="user-img">
            <img :src="account.picture" :alt="account.name">
        </div>
        <div class="post-form">
            <form @submit.prevent="handleSubmit">
                <textarea name="body" placeholder="Share whats happening" v-model="editable.body" required></textarea>
                <div class="form-bar">
                    <div type="button" class="selectable no-select photo" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="mdi mdi-image"></i> Photo
                    </div>

                    <div class="dropdown-menu dropdown-menu-lg-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
                        <input name="imgUrl" type="text" placeholder="link" v-model="editable.imgUrl">
                    </div>

                    <button type="submit" class="btn btn-dark">
                        <i class="mdi mdi-post"></i> Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { computed, watchEffect, ref } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { postsService } from '../services/PostsService'

  export default {
    setup() {
        const editable = ref({})
        watchEffect(()=> {
            editable.value = AppState.post
        })

        return {
            user: computed(()=>AppState.user),
            account: computed(()=>AppState.account),
            editable,
            async handleSubmit(){
                try { 
                    await postsService.newPost(editable.value)
                    AppState.post.body = ''
                    AppState.post.imgUrl = '' 
                } 
                catch (error) { Pop.error(error, '[CreatePostCard: handleSubmit()]') }
            }
        }
        }
  }
</script>

<style scoped>
.post-card{
    border: solid 1px #a9a9a9;
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 0.15rem;
    padding: 0.45rem;
    display: flex;
    flex-direction: row;
}
.user-img{
    height: 2.7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.5rem;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-img img{
    height: 100%;
}
.post-form{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.post-form textarea{
    all:unset;
    width: calc(100% - 1.25rem);
    overflow: hidden;
    border-radius: 0.25rem;
    resize: none;
    background-color: rgba(207, 207, 207, 0.205);
    padding: 0.25rem 0.5rem;
    border: 0.095rem dashed rgba(55, 192, 210, 0.927);
    transition: 100ms;
}
.post-form textarea:focus{
    background-color: #fff;
}
.form-bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.photo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    border-radius: 0.25rem;
    border: 0.099rem solid black;
}
</style>