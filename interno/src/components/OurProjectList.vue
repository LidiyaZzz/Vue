<template>
    <section class="ourProject">
      <div class="ourProject__container container">        

        <div class="ourProject__columns">
            <div class="ourProject__card" v-for="project in filteredProjects" :key="project.id">
                <article>
                    <img class="ourProject__img"  :src="project.image" >
                    <!-- /src="img/ourProject/ourProject_1.jpg"/ :src="project.image" -->
                    <div class="ourProject__info">
                        <div class="ourProject__name">
                            <h3 class="ourProject__title">{{ project.title }}</h3>
                            <p>{{ project.path }}</p>
                        </div><!-- /.ourProject__name -->
                        <a href="#!" class="ourProject__link">
                            <svg width="8" height="18" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <!-- /.ourProject__link -->
                    </div><!-- /.ourProject__info -->
                </article>
            </div><!-- /.ourProject__card--> 
        </div><!-- /.ourProject__columns -->

        
      </div><!-- /.ourProject__container container -->
    </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    selectedCategory: {
      type: String,
      required: true
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === '') {
        return this.projects;
      } else {
        return this.projects.filter(project => project.category === this.selectedCategory);
      }
    }
  }
};
</script>

<style scoped lang="sass">
.ourProject
    &__container
        margin-bottom: 200px
    &__category 
        text-align: center
    &__columns
        columns:2 
        column-gap: 30px
    &__card
        break-inside: avoid
        margin-bottom: 35px
    &__img
        width: 100%
        height: auto
        margin-bottom: 24px
    &__info
        display: flex
        justify-content: space-between
    &__title
        margin-bottom: 4px
    &__link
        display: block
        width: 70px
        height: 70px
        border-radius: 50%
        background-color: #F4F0EC 
        display: flex
        align-items: center
        justify-content: center
    
</style>