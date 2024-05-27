<!-- BlogDetailsComp.vue -->
<template>
    <section class="blogDetails">
      <div class="blogDetails__container container">
        <div class="blogDetails__articles">
          
          <div class="blogDetails__article article">
            <h2 class="article__title">Let’s Get Solution for Building Construction Work</h2>
            <div class="article__img">
              <img class="img" src="../../assets/img/blogDetails/blogDetails_1.jpg" alt="">
            </div><!-- /.blogPost__img -->
            <div class="article__data">
              <p>26 December,2022</p> 
              <p>Interior / Home / Decore</p>
            </div><!-- /.project__data -->
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
            <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <div class="article__quotes">
              <img src="../../assets/img/icons/quotes.svg" alt="">     
              <h3><i>The details are not the details. 
                They make the design.</i></h3>      
            </div><!-- /.blogDetails__quotes -->
            <h2 class="blogDetails__title">Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ol class="article__list">
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>
            <div class="article__img">
              <img class="img" src="../../assets/img/blogDetails/blogDetails_2.jpg" alt="">
            </div><!-- /.blogPost__img -->           
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div><!-- /.blogDetails__article -->

        </div><!-- /.blogDetails__articles -->

      </div><!-- /.blogDetails__container container -->
    </section>
</template>
  
<script>
  export default {
    name: 'TitlePagesComp'
  }
</script>
  
<!-- Стили для BlogDetailsComp -->
<style lang="sass">
.blogDetails
    &__container
        display: flex
        align-items: start
        justify-content: space-between
        margin-bottom: 200px
    &__articles
        width: 66%
    &__tags
        width: 30%    
    &__article
        margin-bottom: 35px 
.tags
    &__list
        list-style: none
        display: flex
        flex-wrap: wrap
        align-items: start
        & li 
            display: block
            margin: 0 10px 10px 0
    &__button,
    &__reset
        height: 41px
        padding: 9px 30px
        border-radius: 10px
        background-color: #F4F0EC
        color: #292F36

.article
    &__img
        margin-bottom: 46px    
    &__data
        display: flex
        justify-content: space-between
        margin-bottom: 48px
    &__quotes
        background-color: #F4F0EC
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        width: 799px
        min-height: 267px
        border-radius: 50px
        margin-bottom: 27px
        color: #CDA274
        &>img
            display: block
            width: 90px
            height: 90px
        &>h3
            width: 345px
            text-align: center
    &__list
        margin-left: 20px
        width: 65%
        & li 
            line-height: 150%
            margin-bottom: 32px
            &::marker 
                font-family: "DM Serif Display"  
                font-size: 20px
                color: #CDA274

</style>