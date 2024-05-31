<template>
    <section class="blog">
      <div class="blog__container container">
        <h2 class="blog__title">Articles & News</h2>

        <div class="blog__cards">  
          <BlogArticlesCard v-for="article in articles" :key="article.id" :article="article" />
        </div><!-- /.project__cards -->

      </div><!-- /.blog -->
    </section>
    
</template>

<script>
import { mapState } from 'vuex'
import BlogArticlesCard from '@/components/Blog/BlogArticlesCard.vue'
    export default {
        components: {BlogArticlesCard},
        computed: mapState(['articles'])

    }
</script>

<style scoped lang="sass" >
.blog
    &__title
        margin-bottom: 30px
    &__description 
        width: 70%
        margin: auto
        margin-bottom: 52px
    &__cards
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-row: 1
        gap: 27px
</style>