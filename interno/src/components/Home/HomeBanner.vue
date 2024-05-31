<template>
    <section class="banner">
      <div class="banner__container container">
        <div class="banner__intro intro">
          <h1 class="intro__title">Let Your Home Be Unique</h1>
          <p class="intro__description">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
          <ButtonBig >Get Started </ButtonBig>
        </div><!-- /.banner__intro -->
      </div><!-- /.banner -->
    </section>
</template>

<script>
import ButtonBig from '@/components/UI/ButtonBig.vue'

    export default {
        components: {ButtonBig}
    }
</script>

<style scoped lang="sass" >
.banner
    &__container
        background: url('@/assets/img/backgroung/banner_background.jpg') 0 0/100% auto no-repeat 
        min-height: 700px
        display: flex
        align-items: center
        padding: 0 52px
        margin-bottom: 96px
    &__intro
        width: 434px


.intro
    &__title        
        font-weight: normal
        margin-bottom: 18px
    &__description
        margin-bottom: 21px
</style>