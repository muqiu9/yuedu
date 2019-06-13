<template>
  <div class="list">
    <ul>
      <li v-for="list in lists" :key="list.id">
        <div class="channel-pic">
          <router-link :to="'/article/'+list.id">
            <img :src="list.img_url" alt="">
          </router-link>
        </div>
        <div class="channel-body">
          <div class="channel-title">
            <router-link :to="'/article/'+list.id">{{list.title}}</router-link>
          </div>
          <div class="channel-meta">
            <span>{{list.author}}</span>
            <span>{{list.podcast}}</span>
            <span>{{list.duration}}</span>
            <span>{{list.play_time}}</span>
          </div>
          <div class="channel-desc">
            {{list.content | sliceContent}}
          </div>
        </div>
      </li>
    </ul>
    <Pages :count="count" :curPage="curPage"></Pages>
  </div>
</template>

<script>
import Pages from './Pages'
export default {
  components: {
    Pages
  },
  props: {
    lists: Array,
    count: Number,
    curPage: Number
  },
  filters: {
    sliceContent (value) {
      return value.slice(0, 70) + "……"
    }
  }
}
</script>

<style scoped>
.list {
  width: 620px;
}
ul {
  width: 100%;
}
ul, li {
  list-style: none;
}
li {
  background-color: #fff;
  width: 100%;
  height: 210px;
  display: flex;
  margin-bottom: 30px;
}
li a {
  font-size: 18px;
  color: rgb(112, 112, 112);
  transition: color .5s;
}
li a:hover {
  color: #f30;
}
.channel-pic {
  width: 210px;
  height: 210px;
  overflow: hidden;
  flex-shrink: 0;
}
.channel-pic img {
  height: 100%;
}
.channel-body {
  padding: 30px;
}
.channel-title {
  margin-bottom: 10px;
}
.channel-meta {
  margin-bottom: 25px;
  color: #999;
  font-size: 12px;
}
.channel-meta span {
  margin-right: 15px;
}
.channel-desc {
  line-height: 22px;
  letter-spacing: 1px;
}
</style>
