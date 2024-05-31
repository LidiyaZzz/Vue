<template>
    <div class="blog__card">
      
        <div class="blog__img">
          <img class="img" :src="article.imgSrc" :alt="article.title">
        </div><!-- /.blog__img -->
        
        <h3 class="blog__subtitle">{{ article.title}}</h3>

        <div class="blog__data">
          <p>{{ article.date }}</p>
          <router-link to="/blogPage"  class="blog__link">
            <svg width="5" height="13" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div><!-- /.blog__data -->  

    </div><!-- /.project__card -->
</template>

<script>
    export default {
      props: {
        article: {
          type: Object,
          required: true
        }
      }
    }
</script>

<style scoped lang="sass">
.blog
    &__card
        min-height: 521px
        padding: 21px
        border-radius: 62px
        background-color: #fff
        border: 1px solid #E7E7E7
        &:hover     
            background-color: #F4F0EC
            & .blog__link
                background-color: #FFFFFF
    &__img
        margin-bottom: 21px
    &__subtitle
        margin-bottom: 30px
    &__data
        display: flex
        justify-content: space-between
        & p 
            font-size: 16px
    &__link
        display: block
        width: 52px
        height: 52px
        border-radius: 50%
        background-color: #F4F0EC 
        display: flex
        align-items: center
        justify-content: center
</style>