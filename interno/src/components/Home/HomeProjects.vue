<template>
    <section class="project">
      <div class="project__container container">
        <h2 class="project__title">Follow Our Projects</h2>
        <p class="project__description">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>

        <div class="project__cards">
            <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
        </div><!-- /.project__cards -->
      </div><!-- /.project__container -->
    </section>
</template>

<script>
import { mapState } from 'vuex'
import ProjectCard from '@/components/Home/HomeProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  computed: mapState(['projects'])
}
</script>

<style scoped lang="sass" >
.project
    &__container
        margin-bottom: 96px
    &__title
        margin-bottom: 8px
        text-align: center
    &__description
        width: 70%
        margin: auto
        text-align: center
    &__cards
        display: grid
        grid-template-columns: 45% 45%
        row-gap: 56px
        column-gap: 10%  
        margin-top: 93px
</style>