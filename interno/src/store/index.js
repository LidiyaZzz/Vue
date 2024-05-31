import { createStore } from 'vuex'

export default createStore({
  state: {
    projectDescription: [
      { 
        id: 1, 
        title: 'Minimal Look Bedrooms', 
        text: [
          { p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ' },
          { p: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.' }
        ]
      },
      { 
        id: 2, 
        title: '', 
        text: [
          { p: 'text1' },
          { p: 'text2' },
          { p: 'text3' }
        ] 
      },
      { 
        id: 3, 
        title: '', 
        text: [
          { p: 'text1' }
        ]
      }
    ],
    photos: [
      { src: require ('../assets/img/projectSlider/Image1.jpg') },
      { src: require ('../assets/img/projectSlider/Image2.jpg') },
      { src: require ('../assets/img/projectSlider/Image3.jpg') }
    ],
    projects: [
      {
        src: require ('../assets/img/projectCard/project_card_1.jpg'), 
        title: 'Modern Kitchan', 
        path: 'Decor / Artchitecture'        
      },
      {
        src: require ('../assets/img/projectCard/project_card_2.jpg'), 
        title: 'Modern Kitchan', 
        path: 'Decor / Artchitecture'        
      },
      {
        src: require ('../assets/img/projectCard/project_card_3.jpg'), 
        title: 'Modern Kitchan', 
        path: 'Decor / Artchitecture'        
      },
      {
        src: require ('../assets/img/projectCard/project_card_4.jpg'), 
        title: 'Modern Kitchan', 
        path: 'Decor / Artchitecture'        
      },
    ],
    counterEl: [
      {id: 1, count: '12', text: 'Years Of Experiance'},
      {id: 2, count: '85', text: 'Success Project'},
      {id: 3, count: '15', text: 'Active Project'},
      {id: 4, count: '95', text: 'Happy CUstomers'},
    ],
    articles: [
      { 
        id: 1, 
        imgSrc: require('../assets/img/blog/blog_1.png'), 
        title: 'Let’s Get Solution For Building Construction Work', 
        date: '26 December, 2022', 
        tag: 'Kitchen Planning' 
      },
      { 
        id: 2, 
        imgSrc: require('../assets/img/blog/blog_2.png'), 
        title: 'Low Cost Latest Invented Interior Designing Ideas.', 
        date: '22 December,2022', 
        tag: 'Kitchen' 
      },
      { 
        id: 3, 
        imgSrc: require('../assets/img/blog/blog_3.png'), 
        title: 'Best For Any Office & Business Interior Solution', 
        date: '25 December,2022 ', 
        tag: 'Kitchen Planning' 
      },
      { 
        id: 4, 
        imgSrc: require('../assets/img/blog/blog_5.png'), 
        title: 'Let’s Get Solution For Building Construction Work', 
        date: '26 December,2022', 
        tag: 'Building' 
      },
      { 
        id: 5, 
        imgSrc: require('../assets/img/blog/blog_6.png'), 
        title: 'Low Cost Latest Invented Interior Designing Ideas.', 
        date: '22 December,2022', 
        tag: 'Bedroom' 
      },
      { 
        id: 6, 
        imgSrc: require('../assets/img/blog/blog_7.png'), 
        title: 'Best For Any Office & Business Interior Solution', 
        date: '25 December,2022 ', 
        tag: 'Architecture' 
      }
    ],
    titleImgs: [
      {
        imgSrc: require('../assets/img/titlePages/titlePages_blog.jpg'), 
        namePage: 'BlogPage',
        title: 'Articles & News',
        path: 'Home / Blog'
      },
      {
        imgSrc: require('../assets/img/titlePages/titlePages_blogDetails.jpg'), 
        namePage: 'BlogDetailsPage',
        title: 'Articles & News',
        path: 'Home / Blog'      
      },
      {
        imgSrc: require('../assets/img/titlePages/titlePages_ourProject.jpg'), 
        namePage: 'OurProject',
        title: 'Our Project',
        path: 'Home / Project'       
      },
      {
        imgSrc: require('../assets/img/titlePages/titlePages_ProjectDetails.jpg'), 
        namePage: 'ProjectDetailPage',
        title: 'Our Project',
        path: 'Home / Project'       
      }
    ],
    tags: [
      { name: 'Kitchen', class: 'active' },
      { name: 'Bedroom', class: '' },
      { name: 'Building', class: '' },
      { name: 'Architecture', class: '' },
      { name: 'Kitchen Planning', class: '' }
    ],
    currentComponent: 'BlogDetailsArticleKitchen'
    
  },
  mutations: {
    toggleTagClass(state, tagName) {
      state.tags.forEach(tag => {
        if (tag.name === tagName) {
          tag.class = 'active'
        } else {
          tag.class = ''
        }
      })
    },
    setCurrentComponent(state, componentName) {
      state.currentComponent = componentName
    }
  }
})