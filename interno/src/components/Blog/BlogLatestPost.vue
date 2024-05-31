<template>
    <section class="blogPost">
      <div class="blogPost__container container">
        <h2 class="blogPost__title">Latest Post</h2>
        <div class="blogPost__postAnons">
          <div class="blogPost__img">
            <img class="img" src="../../assets/img/blog/blog_4.png" alt="">
          </div><!-- /.blogPost__img -->
          <div class="blogPost__description">
            <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
            <div class="blogPost__data">
              <p>26 December,2022 </p>
              <router-link to="/blogPage" class="blogPost__link">
                <svg width="5" height="13" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </router-link>
            </div><!-- /.blogPost__data -->
          </div><!-- /.blogPost__description -->
        </div><!-- /.blogPost__postAnons -->
      </div><!-- /.blogPost__container container -->
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="sass" >
.blogPost
    &__container
        margin-bottom: 200px
    &__postAnons
        background-color: #fff
        padding: 22px
        border: 1px solid #E7E7E7
        border-radius: 62px
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 150px
    &__title,
    & h3,
    & p
        margin-bottom: 22px
    &__img,
    &__description
        width: 47%
    &__data
        margin-top: 41px
    &__pagination
        display: flex
        align-items: center
        justify-content: center
        margin-top: 50px
    &__data
        display: flex
        justify-content: space-between
        & p 
            font-size: 16px    
    &__link
        display: block
        width: 52px
        height: 52px
        border-radius: 50%
        background-color: #ffffff
        border: 1px solid #F4F0EC 
        display: flex
        align-items: center
        justify-content: center
        &:not(:last-child)
            margin-right: 20px
        &:hover        
            background-color: #F4F0EC 
        
</style>