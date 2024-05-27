<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HeaderComp />
  <TitlePagesComp />
  <BlogDetailsComp />
  <ArticlesListComp />
  <FooterComp />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import TitlePagesComp from './components/TitlePagesComp.vue'
import BlogDetailsComp from './components/BlogDetails/BlogDetailsComp.vue'
import ArticlesListComp from './components/BlogDetails/ArticlesListComp.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderComp,
    TitlePagesComp,
    BlogDetailsComp,
    ArticlesListComp,
    FooterComp
  }
}
</script>

<style lang="sass">
</style>
