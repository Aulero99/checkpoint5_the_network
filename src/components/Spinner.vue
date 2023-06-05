<template>
    <div class="loading">
        <div class="spinner"></div>
    </div>
</template>
  
<script>
  export default {
    props:{

    },
    setup() {
      return {
  
      }
    }
  }
</script>

<style scoped>
.loading{
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 1rem;
}
.spinner {
   width: 56px;
   height: 56px;
   display: grid;
}

.spinner::before,
.spinner::after {
   content: "";
   grid-area: 1/1;
   background: var(--c) 50%  0, 
        var(--c) 50%  100%, 
        var(--c) 100% 50%, 
        var(--c) 0    50%;
   background-size: 13.4px 13.4px;
   background-repeat: no-repeat;
   animation: spinner-3hs4a3 1s infinite;
}

.spinner::before {
   --c: radial-gradient(farthest-side,rgb(56,190,192) 92%,#0000);
   margin: 4.5px;
   background-size: 9px 9px;
   animation-timing-function: linear;
}

.spinner::after {
   --c: radial-gradient(farthest-side,rgb(56,190,192) 92%,#0000);
}

@keyframes spinner-3hs4a3 {
   100% {
      transform: rotate(.5turn);
   }
}
</style>