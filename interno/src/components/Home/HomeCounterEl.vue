<template>
    <div class="counter__cont">
        <h3 class="counter__data">{{counter.count}} </h3>
        <p class="counter__description">{{counter.text}} </p>
    </div><!-- /.counter__cont -->
</template>

<script>
    export default {
        props: {
            counter: {
            type: Object,
            required: true
            }
        }
    }
</script>

<style scoped lang="sass" >
.counter
    &__cont
        width: 25%
        position: relative
        &:not(:last-child)::before            
            content: ""
            width: 1px
            height: 130px
            background-color: #CDA274
            position: absolute
            right: 0
            top: 50%
            transform: translateY(-50%)            
            
    &__data
        font-size: 85px
        text-align: center
        color: #CDA274
    &__description
        text-align: center

</style>