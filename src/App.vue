<template>
  <div id="app">
    <router-view></router-view>
    <ydFoot></ydFoot>
  </div>
</template>

<script>
import ydFoot from './components/ydFoot'
export default {
  name: "app",
  components: {
    ydFoot
  }
};
</script>

<style>
body {
  background-color: rgb(245, 245, 245);
  color: rgb(112, 112, 112);
}
.wr {
  width: 1010px;
  margin: 0 auto;
}
@font-face {
  font-family: "iconfont"; /* project id 1063932 */
  src: url("//at.alicdn.com/t/font_1063932_utf08q8gpt.eot");
  src: url("//at.alicdn.com/t/font_1063932_utf08q8gpt.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1063932_utf08q8gpt.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1063932_utf08q8gpt.woff") format("woff"),
    url("//at.alicdn.com/t/font_1063932_utf08q8gpt.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1063932_utf08q8gpt.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
