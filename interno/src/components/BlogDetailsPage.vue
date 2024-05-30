<template>
    <HeaderComp/>
    <TitlePagesComp />
    <BlogDetailsArticle />
    <BlogDetailsSelectTag />

    
    <FooterComp />
</template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import TitlePagesComp from '@/components/PagesTitleComp.vue' 
  import FooterComp from '@/components/FooterComp.vue'
  import BlogDetailsArticle from '@/components/BlogDetailsArticle.vue'
  import BlogDetailsSelectTag from '@/components/BlogDetailsSelectTag.vue'
  
  export default {
    components: {
      HeaderComp,
      TitlePagesComp,
      FooterComp,
      BlogDetailsArticle,
      BlogDetailsSelectTag
    }
  }
  </script>
  
  <style lang="sass">
  </style>