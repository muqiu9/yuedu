<template>
  <div v-if="article" class="container">
    <div class="item">
      <div class="item-base">
        <div class="item-name">{{article.title}}</div>
        <div class="item-meta">
          <span>
            <em>{{article.author}}</em>
            <em>{{article.podcast}}</em>
            <em>{{article.duration}}</em>
          </span>
          <span>
            播放 <em>{{article.play_time}}</em> 次
          </span>
        </div>
        <div class="item-pic">
          <img :src="article.img_url" alt="">
        </div>
        <div class="item-player">
          <audio controls :src="article.mp3_url"></audio>
        </div>
      </div>
      <div class="item-intro">
        <pre :style="{'height': height}">
          {{article.content}}
        </pre>
        <div class="hide"></div>
        <span @click="changeHeight">{{changeHeightValue}}</span>
      </div>
      <div class="item-f">
        <div class="item-tags">
          <strong>标签：</strong>
          <span>{{article.labels.split(',').join("&nbsp;&nbsp;")}}</span>
        </div>
      </div>
    </div>
    <Comment></Comment>
  </div>
</template>

<script>
import Comment from './Comments/Comment'
export default {
  components: {
    Comment
  },
  props: {
    article: Object
  },
  data () {
    return {
      height: '280px',
      changeHeightValue: "查看全部"
    }
  },
  methods: {
    changeHeight () {
      this.changeHeightValue = this.changeHeightValue === "查看全部" ? "收起" : "查看全部"
      this.height = this.height === '280px' ? 'auto' : '280px'
    }
  },
  watch: {
    article: {
      handler () {
        this.height = "280px"
        this.changeHeightValue = "查看全部"
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 630px;
  box-sizing: border-box;
}
.item-base {
  background-color: #fff;
  padding: 30px;
  margin-bottom: 30px;
}
.item-name {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 8px;
}
.item-meta {
  color: #999;
  line-height: 20px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
}
.item-meta span:first-child em {
  font-style: normal;
  margin-right: 20px;
}
.item-meta span:last-child span {
  font-size: 16px;
}
.item-player audio {
  width: 100%;
  margin-top: 30px;
}
.item-intro {
  padding: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;
}
.item-intro pre {
  overflow: hidden;
}
.item-intro span {
  position: absolute;
  bottom: 15px;
  right: 10px;
  cursor: pointer;
}
.item-intro pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 22px;
  letter-spacing: 1px;
}
.item-intro .hide {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 40px;
  left: 0;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255,255,255,0)), color-stop(1, #FFF));
}
.item-f {
  padding: 5px 30px;
  background-color: #fff;
  margin-bottom: 30px;
  line-height: 28px;
}
</style>
