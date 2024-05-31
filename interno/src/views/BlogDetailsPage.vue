<template>
    <HeaderComp/>
    <TitlePagesComp :namePage="namePage"/>
    <BlogDetailsSort />
    
    <FooterComp />
</template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import TitlePagesComp from '@/components/PagesTitleComp.vue' 
  import FooterComp from '@/components/FooterComp.vue'
  import BlogDetailsSort from '@/components/BlogDetails/BlogDetailsSort.vue'
  
  export default {    
    components: {
      HeaderComp,
      TitlePagesComp,
      FooterComp,
      BlogDetailsSort
    },
        props: {
            namePage: {
            type: String,
            required: true
            }
        },
        data() {
            return {
            namePage: 'BlogDetailsPage',
            titlePage: false,
            }
        }
  }
  </script>
  
  <style lang="sass">
  </style>