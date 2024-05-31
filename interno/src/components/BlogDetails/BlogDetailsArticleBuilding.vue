<template>
    <div class="article">
            <h2>Construction is the process of building, repairing</h2>
            <div class="article__img">
              <img class="img" src="../../assets/img/blogDetails/blogDetails_5.jpg" alt="">
            </div><!-- /.blogPost__img -->
            <div class="article__data">
              <p>24 December,2022</p> 
              <p>Interior / Home / Decore</p>
            </div><!-- /.project__data -->
            <p>The construction process typically involves several stages, including planning and design, site preparation, foundation work, framing, installation of mechanical systems, and finishing work. Construction projects often require specialized equipment and machinery, such as cranes, excavators, and bulldozers, as well as a range of materials, including lumber, steel, and concrete.</p>
            <p>The construction industry is a significant sector of the global economy, employing millions of people worldwide. It requires a wide range of skills and expertise, from architects and engineers to carpenters, electricians, and plumbers. Construction projects can vary greatly in scale, from small residential renovations to large-scale commercial developments and infrastructure projects.
</p>
            <div class="article__quotes">
              <img src="../../assets/img/icons/quotes.svg" alt="">     
              <h3><i>Travel and Tourism: The tourism industry is growing rapidly in developing countries.</i></h3>      
            </div><!-- /.blogDetails__quotes -->
            <h2>A new programming language was developed to improve</h2>
            <p>Education Technology: Online learning platforms are becoming more popular among students.
Sustainable Energy: Solar panels are being used to power homes and businesses.
Wildlife Conservation: Conservationists are working to protect endangered species in the Amazon rainforest.
Transportation Innovation: Electric cars are becoming more affordable and widely available.</p>
            <ol class="article__list">
              <li>Environmental Impact: Climate change is causing severe weather events worldwide.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>         
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </div><!-- /.blogDetails__article -->
</template>

<script>

  export default {
    name: 'Building',
    data() {
      return {
        name: 'Building'
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