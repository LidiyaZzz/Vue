<template>
    <div class="article">
            <h2>Architecture is the art and science of designing and constructing buildings</h2>
            <div class="article__img">
              <img class="img" src="../../assets/img/blogDetails/blogDetails_6.jpg" alt="">
            </div><!-- /.blogPost__img -->
            <div class="article__data">
              <p>20 December,2022</p> 
              <p>Interior / Home / Decore</p>
            </div><!-- /.project__data -->
            <p>During the Middle Ages, European architecture was dominated by the Gothic style, characterized by pointed arches, ribbed vaults, and flying buttresses. The Renaissance period saw a revival of classical forms and proportions, with architects like Michelangelo and Palladio creating masterpieces that combined beauty and functionality.</p>
            <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <div class="article__quotes">
              <img src="../../assets/img/icons/quotes.svg" alt="">     
              <h3><i>The details are not the details. They make the design.</i></h3>      
            </div><!-- /.blogDetails__quotes -->
            <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ol class="article__list">
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>
            <div class="article__img">
              <img class="img" src="../../assets/img/blogDetails/blogDetails_7.jpg" alt="">
            </div><!-- /.blogPost__img -->           
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </div><!-- /.blogDetails__article -->
</template>

<script>

  export default {
    name: 'Architecture',
    data() {
      return {
        name: 'Architecture'
      }
    },
  }
</script>

<style scoped lang="sass" >
.article
    margin-bottom: 35px  
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