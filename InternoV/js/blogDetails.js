const app = Vue.createApp({
    data() {
      return {
        cards: [
          { 
            id: 1, imgSrc: 'img/blog/blog_1.png', 
            title: 'Let’s Get Solution For Building Construction Work', 
            date: '26 December, 2022', 
            tag: 'Kitchen Planning' 
          },
          { 
            id: 2, imgSrc: 'img/blog/blog_2.png', 
            title: 'Low Cost Latest Invented Interior Designing Ideas.', 
            date: '22 December,2022', 
            tag: 'Kitchen' 
          },
          { 
            id: 3, 
            imgSrc: 'img/blog/blog_3.png', 
            title: 'Best For Any Office & Business Interior Solution', 
            date: '25 December,2022 ', 
            tag: 'Kitchen Planning' 
          },
          { 
            id: 4, 
            imgSrc: 'img/blog/blog_5.png', 
            title: 'Let’s Get Solution For Building Construction Work', 
            date: '26 December,2022', 
            tag: 'Building' 
          },
          { 
            id: 5, 
            imgSrc: 'img/blog/blog_6.png', 
            title: 'Low Cost Latest Invented Interior Designing Ideas.', 
            date: '22 December,2022', 
            tag: 'Bedroom' 
          },
          { 
            id: 6, 
            imgSrc: 'img/blog/blog_7.png', 
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
  });

  app.mount('#app');