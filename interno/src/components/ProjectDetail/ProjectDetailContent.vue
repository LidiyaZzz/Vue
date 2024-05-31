<template>  
  <section class="projectDetails">
    <div class="projectDetails__container container">
          <div class="projectDetails__textContent">
            <h2 class="projectDetails__title">{{ selectedProject.title }}</h2>
            <p v-for="paragraph in selectedProject.text" :key="paragraph.p">{{ paragraph.p }}</p>
          </div><!-- /.projectDetails__textContent -->

          <ProjectDetail/>
  
    </div><!-- /.blogDetails__container container -->
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { useStore } from 'vuex'
import ProjectDetail from '@/components/ProjectDetail/ProjectDetailSlider.vue'

export default {
  setup() {
    const store = useStore()
    const selectedProject = store.state.projectDescription[0]
    return { selectedProject }
  },
  components: {
    ProjectDetail
  }
}
</script>

<style scoped lang="sass" >
  .projectDetails
    &__textContent
        width: 70%
        margin: auto
        margin-bottom: 100px
    &__title
        text-align: center
    &__slider
        margin-bottom: 200px
    &__slides
        width: 100%
        max-height: 800px
        overflow: hidden
        margin-bottom: 20px
    &__pagination
        text-align: center
    &__button
        width: 10px
        height: 10px
        border: 1px solid #4D5053
        border-radius: 50%
        &:not(:last-child)
            margin-right: 5px
            



</style>