<template>
    <section class="blog">
      <div class="blog__container container">
        <h2 class="blog__title">Articles & News</h2>
        <p class="blog__description">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>

        <div class="blog__cards">  
          <BlogArticlesCard v-for="article in articles.slice(0, 3)" :key="article.id" :article="article" />
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
        margin-bottom: 12px
        text-align: center
    &__description 
        width: 70%
        margin: auto
        text-align: center
        margin-bottom: 52px
    &__cards
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-row: 1
        gap: 27px
</style>