const app = Vue.createApp({
    data() {
      return {
        cards: [
          {
            id: 1,
            imgSrc: "img/blog/blog_1.png",
            subtitle: "Let's Get Solution For Building Construction Work",
            date: "26 December, 2022"
          },
          {
            id: 2,
            imgSrc: "img/blog/blog_2.png",
            subtitle: "We Offer The Best Quality Services Ever",
            date: "25 December, 2022"
          },
          {
            id: 3,
            imgSrc: "img/blog/blog_3.png",
            subtitle: "Commercial And Residential Architecture",
            date: "24 December, 2022"
          },
          {
            id: 4,
            imgSrc: "img/blog/blog_5.png",
            subtitle: "Let's Get Solution For Building Construction Work",
            date: "26 December, 2022"
          },
          {
            id: 5,
            imgSrc: "img/blog/blog_6.png",
            subtitle: "We Offer The Best Quality Services Ever",
            date: "25 December, 2022"
          },
          {
            id: 6,
            imgSrc: "img/blog/blog_7.png",
            subtitle: "Commercial And Residential Architecture",
            date: "24 December, 2022"
          }
        ]
      };
    }
  });

  app.mount('#app');