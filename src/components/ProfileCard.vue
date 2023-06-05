<template>
    <div class="profile-card" v-if="profile">

        <div class="cover-img">
            <div class="profile">
                <img :src="profile.picture" alt="" v-if="profile.picture">
                <div class="grad" v-if="profile.graduated">
                    <i class="mdi mdi-school"></i>
                </div>
            </div>
            <img :src="profile.coverImg" alt="" v-if="profile.coverImg" class="cover">
        </div>

        <div class="links">
            <a :href="profile.github" v-if="profile.github">
                <i class="mdi mdi-github"></i>                
            </a>
            <a :href="profile.linkedin" v-if="profile.linkedin">
                <i class="mdi mdi-linkedin"></i>                
            </a>
            <a :href="profile.resume" v-if="profile.resume">
                <i class="mdi mdi-file"></i>                
            </a>
        </div>

        <div class="content">
            <h2> {{ profile.name }} </h2>
            <p> {{ profile.bio }} </p>
        </div>


    </div>

</template>
  
<script>
import { Account, Profile } from '../models/Account'

  export default {
    props:{ profile: { type: [Profile, Account], required: true }},
    setup() {
      return { }
    }
  }
</script>

<style scoped>
.profile-card{
    border: solid 1px #a9a9a9;
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 0.15rem;
}
.cover-img{
    width: 100%;
    aspect-ratio: 7/2;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
}
.cover-img .cover{
    width: 100%;
    height: 100%;
    position: absolute;
    object-position: 50%;
    object-fit: cover;
    z-index: 1;
}
.cover-img .profile{
    width: 15vw;
    max-width: 13rem;
    min-width: 8rem;
    aspect-ratio: 1/1;
    z-index: 5;
    margin-left: 0.5rem;
    margin-bottom: -4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
}
.cover-img .profile img{
    border: solid rgb(45, 195, 165) 0.1rem;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-position: 50%;
    object-fit: cover;
}
.links{
    height: 4rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-content: center;
    font-size: 2rem;
}
.links a{
    margin-left: 0.5rem;
    color: #6d6d6d;
    transition: all 150ms;
}
.links a:hover{
    color: rgb(45, 195, 165);
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
.content{
    padding: 0.5rem;
}
</style>