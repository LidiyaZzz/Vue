<template>
    <HeaderComp />
    <TitlePagesComp :namePage="namePage"/>
    <BlogLatestPost />
    <BlogArticlesList />
    <PagesPaginationComp />

    <FooterComp />
</template>
  
<script>

  import HeaderComp from '@/components/HeaderComp.vue'
  import TitlePagesComp from '@/components/PagesTitleComp.vue'
  import BlogLatestPost from '@/components/Blog/BlogLatestPost.vue'
  import BlogArticlesList from '@/components/Blog/BlogArticlesList.vue'
  import PagesPaginationComp from '@/components/UI/PagesPaginationComp.vue'
  import FooterComp from '@/components/FooterComp.vue'  
  
    export default {
        components: {
            HeaderComp,
            TitlePagesComp,
            BlogLatestPost,
            BlogArticlesList,
            PagesPaginationComp,
            FooterComp
        },
        props: {
            namePage: {
            type: String,
            required: true
            }
        },
        data() {
            return {
            namePage: 'BlogPage',
            titlePage: true,
            }
        }
    };
</script>
  
<style scoped lang="sass">
</style>