<template>
  <div class="side">
    <img src="../../assets/imgs/yueduwx_2.jpg" alt="">
    <div class="side-item">
      <h3 v-if="type">{{type}}频道 TOP10</h3>
      <ul v-if="top10s">
        <li v-for="top10 in top10s" :key="top10.id">
          <router-link :to="'/article/'+top10.id">{{top10.title}}</router-link>
          <div>
            <span>文：{{top10.author}}</span>
            <span>主播：{{top10.podcast}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top10s: Array,
    type: String
  }
}
</script>

<style scoped>
.side {
  width: 360px;
}
img {
  margin-bottom: 30px;
}
.side-item {
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
  box-sizing: border-box;
}
h3 {
  font-size: 14px;
  border-left: 3px solid #ee5044;
  padding-left: 8px;
  line-height: 16px;
  font-weight: 700;
}
ul {
  padding-top: 30px;
}
ul li {
  border-bottom: 1px solid #eee;
  list-style: decimal;
  margin-left: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 12px;
}
a {
  text-decoration: none;
  color: #707070;
  transition: color .4s;
  font-size: 12px;
}
a:hover {
  color: #ee5044;
}
li div {
  color: #999;
}
li div span {
  margin-right: 20px;
  font-size: 12px;
}
</style>
