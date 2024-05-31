<template>

    <section class="blogDetails">
      <div class="blogDetails__container container">
        <div class="blogDetails__articles">
            <component :is="currentComponent" />
        </div>
        <div class="blogDetails__tags tags"> 
            <Tags/>
        </div>
      </div>
    </section>

</template>

<script>
import BlogDetailsArticleKitchen from '@/components/BlogDetails/BlogDetailsArticleKitchen.vue' 
import BlogDetailsArticleBedroom  from '@/components/BlogDetails/BlogDetailsArticleBedroom.vue' 
import BlogDetailsArticleBuilding  from '@/components/BlogDetails/BlogDetailsArticleBuilding.vue' 
import BlogDetailsArticleArchitecture  from '@/components/BlogDetails/BlogDetailsArticleArchitecture.vue' 
import BlogDetailsArticleKitchenPlanning  from '@/components/BlogDetails/BlogDetailsArticleKitchenPlanning.vue' 
import Tags from '@/components/BlogDetails/BlogDetailsTags.vue' 
    

export default {
  components: {
    Tags,
    BlogDetailsArticleKitchen,
    BlogDetailsArticleBedroom,
    BlogDetailsArticleBuilding,
    BlogDetailsArticleArchitecture,
    BlogDetailsArticleKitchenPlanning
  },
  computed: {
    currentComponent() {
      return this.$store.state.currentComponent
    }
  }
}
</script>

<style scoped lang="sass">
.blogDetails
    &__container
        display: flex
        align-items: start
        justify-content: space-between
        margin-bottom: 200px
    &__articles
        width: 66%
    &__tags
        width: 30%    

</style>