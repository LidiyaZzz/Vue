<!-- HeaderComp -->
<template>
    <header class="header">
    <nav class="header__container container">
      <div class="header__logo">
        <router-link to="/">
          <img src="../assets/img/icons/headerLogo.svg" alt="">
        </router-link>        
      </div><!-- /.header__logo -->

      <ul class="header__menu">
        <li><router-link to="/" class="header__link">Home</router-link></li>
        <li><router-link to="/blogPage" class="header__link">Blog</router-link></li>
        <li><router-link to="/blogDetailsPage" class="header__link">Blog Details</router-link></li>
        <li><router-link to="/ourProject" class="header__link">Project</router-link></li>
        <li><router-link to="/projectDetail" class="header__link">Project Detail</router-link></li>
      </ul><!-- /.header__menu -->   
    
    </nav><!-- /.header__container container -->
  </header>
</template>
  
<script>
  export default {
    name: 'HeaderComp'
  }
</script>
  
  <!-- Стили только для шапки -->
<style scoped lang="sass">
.header
    &__container
        margin: 44px auto 57px 
        display: flex
    &__logo
        width: 177px
        height: 50px
        margin-right: auto
        &>img
            width: 100%
            height: 100%
            object-fit: cover
    &__menu
        list-style: none
        display: flex
        flex-wrap: wrap
        &>li 
            display: block
            &:not(:first-child)
              margin-left: 2em
            & .header__link:hover        
              color: #CDA274
              transition: all ease 0.3s

</style>
  