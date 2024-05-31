<template>
    <div class="projectDetails__slider">
        <div class="projectDetails__slides"  :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
            <div v-for="(photo, index) in photos" :key="index" class="projectDetails__slide">
                <img class="img"  :src="photo.src" :alt="photo.src">            
            </div>            
        </div>
        <div class="projectDetails__pagination">
            <span class="projectDetails__button" v-for="(photo, index) in photos" :key="index" @click="goToSlide(index)" :class="{ active: index === currentIndex }"></span>
        </div>
    </div>
    
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    computed: mapState(['photos']),
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      goToSlide(index) {
        this.currentIndex = index
      }
    }
  }
  </script>
  
<style scoped lang="sass">
.projectDetails    
    &__slider
        width: 100%
        margin-bottom: 200px
        position: relative
        overflow: hidden
    &__slides
        width: 100%
        max-height: 800px
        margin-bottom: 20px
        display: flex
        transition: transform 0.5s
    &__slide
        flex: 0 0 100%
    &__pagination
        text-align: center
    &__button
        display: inline-block
        width: 10px
        height: 10px
        border: 1px solid #4D5053
        border-radius: 50%
        &:not(:last-child)
            margin-right: 5px
        &.active
            background-color: #4D5053
</style>