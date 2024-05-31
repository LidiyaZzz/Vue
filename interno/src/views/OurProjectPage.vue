<template>
    <HeaderComp />
    <TitlePagesComp :namePage="namePage"/>
    
    <CategoryList :categories="categories" @category-selected="selectCategory"></CategoryList>
    <ProjectList :projects="projects" :selectedCategory="selectedCategory"></ProjectList>
    <PagesPaginationComp />

    <FooterComp />
</template>
  
<script>
  import HeaderComp from '@/components/HeaderComp.vue'
  import FooterComp from '@/components/FooterComp.vue'
  import TitlePagesComp from '@/components/PagesTitleComp.vue' 
  import ProjectList from '@/components/OurProjectList.vue'
  import CategoryList from '@/components/OurProjectCategoryList.vue'
  import PagesPaginationComp from '@/components/UI/PagesPaginationComp.vue'
  
    export default {
        components: {
            HeaderComp,
            TitlePagesComp,
            FooterComp,
            ProjectList,
            CategoryList,
            PagesPaginationComp
        },
        data() {
            return {
                projects: [
                    { 	
                        id: 1,
                        category: 'Bed Room',
                        image: require ('../assets/img/ourProject/ourProject_1.jpg'),
                        title: 'Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 2,
                        category: 'Bathroom',
                        image: require ('../assets/img/ourProject/ourProject_2.jpg'),
                        title: 'Classic Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 3,
                        category: 'Living Area',
                        image: require ('../assets/img/ourProject/ourProject_3.jpg'),
                        title:' Minimal Bedroom table',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 4,
                        category: 'Kitchan',
                        image: require ('../assets/img/ourProject/ourProject_4.jpg'),
                        title:' Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 5,
                        category: 'Living Area',
                        srcImg: require ('../assets/img/ourProject/ourProject_5.jpg'),
                        title: 'Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 6,
                        category: 'Bathroom',
                        srcImg: require ('../assets/img/ourProject/ourProject_6.jpg'),
                        title: 'Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 7,
                        category: 'Kitchan',
                        srcImg: require ('../assets/img/ourProject/ourProject_7.jpg'),
                        title: 'System Table',
                        path: 'Decor / Artchitecture'
                    },
                    { 
                        id: 8,
                        category: 'Bed Room',
                        srcImg: require ('../assets/img/ourProject/ourProject_8.jpg'),
                        title: 'Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                ],
                categories: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
                selectedCategory: '',
                namePage: 'OurProject',
                titlePage: true,
            };
        },
        methods: {
            selectCategory(category) {
            this.selectedCategory = category;
            }
        },
        props: {
            namePage: {
            type: String,
            required: true
            }
        }
    };
</script>
  
<style scoped lang="sass">
</style>