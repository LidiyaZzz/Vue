<template>
    <HeaderComp />
    <TitlePagesComp :namePage="namePage"/>

    <ProjectDetailContent />

    <FooterComp />
</template>
  
<script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import TitlePagesComp from '@/components/PagesTitleComp.vue' 
  import ProjectDetailContent from '@/components/ProjectDetail/ProjectDetailContent.vue' 
  
    export default {
        components: {
            HeaderComp,
            TitlePagesComp,
            FooterComp,
            ProjectDetailContent
        },
        props: {
            namePage: {
            type: String,
            required: true
            }
        },
        data() {
            return {
            namePage: 'ProjectDetailPage',
            titlePage: false,
            }
        }
    };
</script>
  
<style scoped lang="sass">
</style>