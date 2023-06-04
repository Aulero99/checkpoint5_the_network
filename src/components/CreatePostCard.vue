<template>
    <div class="post-card" v-if="user.isAuthenticated">
        <div class="user-img">
            <img :src="user.picture" :alt="user.name">
        </div>
        <div class="post-form">
            <form action="">
                <textarea placeholder="Share whats happening"></textarea>
                <div class="form-bar">
                    <div class="photo">
                        <i class="mdi mdi-image"></i> Photo
                    </div>
                    <button class="btn btn-dark">
                        Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

  export default {
    props:{

    },
    setup() {
      return {
        user: computed(()=>AppState.user),
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
</style>