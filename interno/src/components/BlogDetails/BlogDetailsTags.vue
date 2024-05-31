<template>
    <div>
        <h3>Tags</h3>
          <ul class="tags__list">
            <li class="tags__button" v-for="tag in tags" :key="tag.name" :class="tag.class" @click="toggleTag(tag.name)">
              {{ tag.name }}
            </li>
          </ul>    
    </div>
         
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$store.state.tags
    }
  },
  methods: {
    toggleTag(tagName) {
      this.$store.commit('toggleTagClass', tagName)
      this.setCurrentComponent(tagName)
    },
    setCurrentComponent(tagName) {
      switch (tagName) {
        case 'Bedroom':
          this.$store.commit('setCurrentComponent', 'BlogDetailsArticleBedroom')
          break
        case 'Building':
          this.$store.commit('setCurrentComponent', 'BlogDetailsArticleBuilding')
          break
        case 'Architecture':
          this.$store.commit('setCurrentComponent', 'BlogDetailsArticleArchitecture')
          break
        case 'Kitchen Planning':
          this.$store.commit('setCurrentComponent', 'BlogDetailsArticleKitchenPlanning')
          break
        default:
          this.$store.commit('setCurrentComponent', 'BlogDetailsArticleKitchen')
      }
    }
  }
}
</script>

<style scoped lang="sass" >
.tags
    &__list
        list-style: none
        display: flex
        flex-wrap: wrap
        align-items: start
        & li 
            display: block
            margin: 0 10px 10px 0
    &__button
        cursor: pointer
        height: 41px
        padding: 9px 30px
        border-radius: 10px
        background-color: #F4F0EC
        color: #292F36
        &:hover,
        &.active
            background-color: #292F36
            color: #FFFFFF
</style>