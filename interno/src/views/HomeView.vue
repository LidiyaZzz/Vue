<template>
  <HeaderComp />
  <HomeBanner /> 
  <HomeProjects />
  <HomeCounter />
  <HomeArticlesCards />
  <FooterComp />
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue' 
import HomeBanner from '@/components/Home/HomeBanner.vue' 
import HomeProjects from '@/components/Home/HomeProjects.vue' 
import HomeCounter from '@/components/Home/HomeCounter.vue' 
import HomeArticlesCards from '@/components/Home/HomeArticlesCards.vue' 
import FooterComp from '@/components/FooterComp.vue'

  export default {
    name: 'HomeView',
    components: {
        HeaderComp,
        HomeBanner,
        HomeProjects,
        HomeCounter,
        HomeArticlesCards,
        FooterComp,
    }
  };
</script>

<style scoped lang="sass">
</style>