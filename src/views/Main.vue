<template>
  <div>
    <ydNav></ydNav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ydNav from '../components/ydNav'
export default {
  components: {
    ydNav
  },
  data () {
    return {
      
    }
  },
  created () {
    
  }
}
</script>

<style>

</style>
