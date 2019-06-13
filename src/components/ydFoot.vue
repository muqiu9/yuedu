<template>
  <div class="footer wr">
    <div class="links">
      <router-link to="/">关于我们</router-link>
      &nbsp;|&nbsp;
      <router-link to="/">加入我们</router-link>
    </div>
    <div class="cr">© 2010-2016 Yuedu.fm All rights reserved   粤ICP备14076392号</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  padding: 30px 0 40px 0;
  color: #aaa;
  font-size: 12px;
}
.links {
  padding-bottom: 8px;
  font-size: 12px;
}
.links a {
  color: rgb(112, 112, 112);
  font-size: 12px;
  transition: all .4s;
}
.links a:hover {
  color: #ee5044;
}
.cr {
  font-size: 12px;
}
</style>
