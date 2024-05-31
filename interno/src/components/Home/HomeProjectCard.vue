<template>
  <div class="card">
    <img class="card__img" :src="project.src" :alt="project.title">
    <div class="card__description">
      <h2 class="card__subtitle subtitle">{{ project.title }}</h2>
      <p>{{ project.path }}</p>
    </div>
    
    <router-link to="/ourProject" class="card__link">
      <svg width="8" height="18" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </router-link>
  </div>          
</template>
  
<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
</script>
  
<style scoped lang="sass" >
.card
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    &__img 
        width: 100%
        margin-bottom: 24px
    &__link
        display: block
        width: 70px
        height: 70px
        border-radius: 50%
        background-color: #F4F0EC 
        display: flex
        align-items: center
        justify-content: center

</style>