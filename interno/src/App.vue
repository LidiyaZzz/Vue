<template>
  <nav class="nav-App">
    <router-link to="/">Home</router-link> |
    <router-link to="/blogPage">Blog Page </router-link> |
    <router-link to="/blogDetailsPage">Blog Details Page </router-link> |
    <router-link to="/ourProject">Our Project </router-link> |
    <router-link to="/projectDetail">Project Detail </router-link> |    
  </nav>
  <router-view/>
</template>

<style lang="sass">
.nav-App
  display: none
</style>
