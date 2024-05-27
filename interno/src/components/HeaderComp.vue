<!-- HeaderComp -->
<template>
    <header class="header">
    <nav class="header__container container">
      <div class="header__logo">
        <img src="../assets/img/icons/headerLogo.svg" alt="">
      </div><!-- /.header__logo -->

      <ul class="header__menu">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Project</a></li>
        <li><a href="#!">Blog</a></li>
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
            &>a:hover        
              color: #CDA274
              transition: all ease 0.3s

</style>
  