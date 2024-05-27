<!-- ArticlesListComp.vue -->
<template>
    <section class="articlesList">
        <div class="articlesList__container container">
            <h3 class="articlesList__title">Articles & News</h3>

            <div class="articlesList__cards">                

                <div class="articlesList__card" v-for="card in filteredCards" :key="card.id">
                <div class="articlesList__img">
                    <img class="img" :src="card.imgSrc" :alt="card.title">
                </div><!-- /.blog__img -->
                <div class="articlesList__tag">{{ card.tag }}</div>
                
                <h3 class="articlesList__subtitle">{{ card.title }}</h3>
                <div class="articlesList__data">
                    <p>{{ card.date }}</p>
                    <a href="" class="articlesList__link">
                    <svg width="5" height="13" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                </div><!-- /.project__link -->                
                </div><!-- /.project__card -->
                
            </div><!-- /.project__cards -->          

            <div class="articlesList__tags tags"> 
                <h3>Tags</h3>
                <ul class="tags__list">
                  <li v-for="tag in tags" :key="tag">
                    <button class="tags__button" @click="filterByTag(tag)">{{ tag }}</button>
                  </li>
                  <li><button class="tags__reset" @click="resetFilter">Сбросить сортировку</button></li>
                </ul>         
            </div><!-- /.blogDetails__tags -->

        </div><!-- /.blog -->
    </section>    
</template>
  
<script>
export default {
  name: 'ArticlesListComp',
  data() {
      return {
        cards: [
          { 
            id: 1, 
            imgSrc: require('../../assets/img/blog/blog_1.png'), 
            title: 'Let’s Get Solution For Building Construction Work', 
            date: '26 December, 2022', 
            tag: 'Kitchen Planning' 
          },
          { 
            id: 2, 
            imgSrc: require('../../assets/img/blog/blog_2.png'), 
            title: 'Low Cost Latest Invented Interior Designing Ideas.', 
            date: '22 December,2022', 
            tag: 'Kitchen' 
          },
          { 
            id: 3, 
            imgSrc: require('../../assets/img/blog/blog_3.png'), 
            title: 'Best For Any Office & Business Interior Solution', 
            date: '25 December,2022 ', 
            tag: 'Kitchen Planning' 
          },
          { 
            id: 4, 
            imgSrc: require('../../assets/img/blog/blog_5.png'), 
            title: 'Let’s Get Solution For Building Construction Work', 
            date: '26 December,2022', 
            tag: 'Building' 
          },
          { 
            id: 5, 
            imgSrc: require('../../assets/img/blog/blog_6.png'), 
            title: 'Low Cost Latest Invented Interior Designing Ideas.', 
            date: '22 December,2022', 
            tag: 'Bedroom' 
          },
          { 
            id: 6, 
            imgSrc: require('../../assets/img/blog/blog_7.png'), 
            title: 'Best For Any Office & Business Interior Solution', 
            date: '25 December,2022 ', 
            tag: 'Architecture' 
          }
        ],
        tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
        filteredTag: ''
      };
    },
    computed: {
      filteredCards() {
        if (this.filteredTag) {
          return this.cards.filter(card => card.tag === this.filteredTag);
        } else {
          return this.cards;
        }
      }
    },
    methods: {
      filterByTag(tag) {
        this.filteredTag = tag;
      },
      resetFilter() {
        this.filteredTag = '';
      }
    }
}
</script>
  
<!-- Стили для ArticlesListComp -->
<style lang="sass">
.articlesList
    &__container
        display: flex
        flex-wrap: wrap
        align-items: start
        justify-content: space-between
    &__title
        width: 100%
    &__cards
        width: 66%
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 27px
    &__tags
        width: 30%   
    &__card
        min-height: 521px
        padding: 21px
        border-radius: 62px
        background-color: #fff
        border: 1px solid #E7E7E7 
    &__img
        margin-bottom: 21px
    &__subtitle
        margin-bottom: 30px
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
        background-color: #F4F0EC
        display: flex
        align-items: center
        justify-content: center
</style>