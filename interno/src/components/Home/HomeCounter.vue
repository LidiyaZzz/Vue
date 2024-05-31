<template>
    <section class="counter">
      <div class="counter__container container">       
       
        <HomeCounterEl v-for="counter in counterEl" :key="counter.id" :counter="counter" />

      </div><!-- /.counter -->
    </section>
</template>

<script>
import HomeCounterEl from '@/components/Home/HomeCounterEl.vue'
import { mapState } from 'vuex'
    export default {
        components: {
            HomeCounterEl
        },
        computed: mapState(['counterEl'])
    }
</script>

<style scoped lang="sass" >
.counter
    background-color: #F4F0EC
    &__container
        min-height: 457px
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 96px  
</style>