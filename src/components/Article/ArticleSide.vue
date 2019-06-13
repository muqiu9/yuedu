<template>
  <div class="side">
    <div class="side-item">
      <h3>
        <span>
          <i class="iconfont" @click="prev" :class="{disabled: left === 0}">&#xe637;</i>
          <i class="iconfont" @click="next"  :class="{disabled: left === 4}">&#xe637;</i>
        </span>
        其它相关节目
      </h3>
      <div class="item">
        <ul :style="{left: -left*330 + 'px'}">
          <li v-for="(articles, index) in sides" :key="index">
            <div v-for="article in articles" :key="article.id">
              <router-link :to="{name: 'article', params: {id: article.id}}">
                <img :src="article.img_url" alt="">
                <span>{{article.title}}</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="side-top5">
      <div class="side-item">
        <h3>{{othertype}}频道其它节目<router-link :to="{name: 'channel', params: {id: typeid}}">查看全部</router-link></h3>
        <ul>
          <li v-for="other5 in other5s" :key="other5.id">
            <router-link :to="'/article/'+other5.id">{{other5.title}}</router-link>
            <div>
              <span>文：{{other5.author}}</span>
              <span>主播：{{other5.podcast}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sides: Array,
    other5s: Array,
    typeid: [Number, String]
  },
  data () {
    return {
      left: 0,
      othertype: ""
    }
  },
  methods: {
    next () {
      if (this.left < 4) {
        this.left++;
      }
    },
    prev () {
      if (this.left > 0) {
        this.left--;
      }
    }
  },
  watch: {
    sides: {
      handler () {
        this.axios.get('/types').then(res => {
          this.othertype = res.data.res[this.typeid - 1].type
        })
      }
    },
    immediate: true
  }
}
</script>

<style scoped>
.side {
  width: 360px;
}
.side-item {
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
}
.side-item h3 {
  font-size: 14px;
  border-left: 3px solid #ee5044;
  padding-left: 8px;
  line-height: 16px;
  position: relative;
}
.side-item h3 span {
  position: absolute;
  right: 5px;
  font-size: 0;
}
.side-item h3 span i {
  font-size: 12px;
  display: inline-block;
  cursor: pointer;
}
.side-item h3 span i.disabled {
  color: #ccc;
}
.side-item h3 span i:first-child {
  transform: rotate(180deg) translate(10px, 1px);
  transform-origin: center center;
}
.side-item .item {
  overflow: hidden;
  position: relative;
  height: 290px;

}
.side-item .item ul {
  width: 1650px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  transition: .5s;
}
.side-item .item li {
  padding-top: 30px;
  margin-right: 30px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}
.side-item .item  li div {
  width: 135px;
  overflow: hidden;
}
.side-item .item  li div a {
  display: block;
}
.side-item .item  li div:nth-child(2n-1) {
  margin-right: 30px;
}
.side-item .item  li div:nth-child(1), .side-item .item  li div:nth-child(2) {
  margin-bottom: 30px;
}
.side-item .item  li div img {
  width: 100%;
}
.side-item .item  li div span {
  display: block;
  overflow: hidden;
  width: 100%;
  padding-top: 6px;
  line-height: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(112, 112, 112);
  transition: color .4s;
  font-size: 12px;
}
.side-item .item  li div:hover span {
  color: #ee5044;
}
.side-top5 .side {
  width: 360px;
}
.side-top5 img {
  margin-bottom: 30px;
}
.side-top5 .side-item {
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.side-top5 h3 {
  font-size: 14px;
  border-left: 3px solid #ee5044;
  padding-left: 8px;
  line-height: 16px;
  font-weight: 700;
  position: relative;
}
.side-top5 h3 a {
  position: absolute;
  right: 5px;
  font-size: 12px;
  font-style: normal;
  color: #707070;
  font-weight: 100;
}
.side-top5 ul {
  padding-top: 30px;
}
.side-top5 ul li {
  border-bottom: 1px solid #eee;
  list-style: decimal;
  margin-left: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 12px;
}
.side-top5 a {
  text-decoration: none;
  color: #707070;
  transition: color .4s;
  font-size: 12px;
}
.side-top5 a:hover {
  color: #ee5044;
}
.side-top5 li div {
  color: #999;
}
.side-top5 li div span {
  margin-right: 20px;
  font-size: 12px;
}
</style>
