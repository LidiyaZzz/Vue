<template>
    <HeaderComp/>
    <section class="errorPage">
        <div class="errorPage__container container">
          <div class="errorPage__textContent">
            <h1 class="errorPage__title">404</h1>
            <h3>We are sorry, but the page you requested was not found</h3>
            <button class="errorPage__button button">Back To Home
                <img src="img/icons/button_arrow.svg" alt="">                
            </button>
          </div><!-- /.projectDetails__textContent -->
          <div class="errorPage__img">
            <img class="img" src="../assets/img/errors/404.jpg" alt="">
          </div>

  
        </div><!-- /.errorPage -->
      </section> 
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
    export default {
        components: {
            HeaderComp
        },
    }
</script>

<style scoped lang="sass" >
.errorPage
    &__container
        display: flex
        align-items: center
        justify-content: end
    &__textContent
        width: 400px
        margin-right: 81px
    &__title
        font-size: 250px
        color: #CDA274
    &__button img 
        width: 15px
        height: 13px
    &__img
        width: 1042px

</style>