<!-- TitlePagesComp -->
<template>
    <section class="titlePages">
      <div class="titlePages__background">
        <img :src="currentPage.imgSrc" alt="Title Image">
        <div class="titlePages__name" v-if="$parent.titlePage">
          <h2 class="titlePages__title">{{ currentPage.title }}</h2>
          <p class="titlePages__description">{{ currentPage.path }}</p>
        </div>
      </div>
    </section>
</template>
  
<script>
  export default {
    name: 'TitlePagesComp',
    computed: {
      currentPage() {
        return this.$store.state.titleImgs.find(img => img.namePage === this.$parent.namePage) || {};
      }
    }
  }
</script>
  
<!-- Стили для TitlePages -->
<style lang="sass">
.titlePages    
    &__background
        position: relative
        height: 356px
        margin-bottom: 200px
        display: flex
        align-items: end
        &>img 
            position: absolute
            z-index: -1
            left: 0
            top: 0
            bottom: 0
            right: 0
    &__name
        background-color: #ffffff
        width: 503px
        height: 178px
        margin: 0 auto
        padding: 41px
        border-radius: 41px 41px 0 0 
    &__title
        text-align: center      
    &__description
        text-align: center


</style>