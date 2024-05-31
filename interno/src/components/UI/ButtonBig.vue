<template>
    <button class="button"><slot></slot>&nbsp;
        <img src="@/assets/img/icons/button_arrow.svg">
    </button>
</template>

<script>
    export default {
        name: 'ButtonBig'
    }
</script>

<style scoped lang="sass" >
.button
    border: none
    min-height: 49px
    min-width: 200px
    padding: 26px
    border-radius: 18px
    background-color: #292F36
    color: #ffffff
    & img 
        width: 15px
        height: 13px
</style>