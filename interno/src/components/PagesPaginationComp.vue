<template>
    <div class="ourProject__pagination">
        <a href="#!" class="ourProject__pagLink">01</a>
        <a href="#!" class="ourProject__pagLink">02</a>
        <a href="#!" class="ourProject__pagLink">03</a>
        <a href="#!" class="ourProject__pagLink">
            <svg width="5" height="13" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    </div>
    <!-- /.ourProject__pagination -->
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="sass" >
.ourProject
    &__pagination
            display: flex
            align-items: center
            justify-content: center
            margin-top: 50px
    &__pagLink
        display: block
        width: 52px
        height: 52px
        border-radius: 50%
        background-color: #ffffff
        border: 1px solid #F4F0EC 
        display: flex
        align-items: center
        justify-content: center
        &:not(:last-child)
            margin-right: 20px
        &:hover        
            background-color: #F4F0EC 
</style>