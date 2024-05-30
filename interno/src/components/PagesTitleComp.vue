<!-- TitlePagesComp -->
<template>
    <section class="titlePages">
      <div class="titlePages__background">
        <img src="../assets/img/titlePages/titlePages_blogDetails.jpg" alt="">
      </div><!-- /.titlePages__background -->   
    </section>
</template>
  
<script>
  export default {
    name: 'TitlePagesComp'
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
    &__description
        text-align: center

</style>