<template>
    <div class="ourProject__category">
        <div class="ourProject__buttons">
            <button class="ourProject__button" 
            v-for="category in categories" :key="category" @click="$emit('category-selected', category)">
            {{ category }}
            </button>
            <button class="ourProject__button" @click="$emit('category-selected', '')">All</button>
        </div><!-- /.ourProject__buttons -->
    </div><!-- /.ourProject__category -->
</template>

<script>
    export default {
        props: {
            categories: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="sass">
.ourProject
    &__category 
        text-align: center        
    &__buttons 
        display: inline-flex
        flex-wrap: wrap
        justify-content: center
        align-items: center   
        margin: auto
        margin-bottom: 61px
        border: 1px solid #CDA274
        border-radius: 18px
    &__button
        display: block
        min-height: 74px
        border-radius: 18px
        background-color: #fff
        color: #CDA274
        padding: 26px
        min-width: 219px
        &:hover            
            background-color: #CDA274
            color: #fff
</style>