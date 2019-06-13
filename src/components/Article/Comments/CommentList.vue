<template>
  <div class="comment-list">
    <ul class="tab">
      <li>最新评论</li>
    </ul>
    <div class="comment-dow">
      <div class="nolist list" v-if="!comments.length">
        暂无评论
      </div>
      <ul class="list" v-else>
        <li v-for="(comment, index) in comments" :key="index">
          <div class="comment-avatar">
            <router-link to="/">
              <img src="http://yuedu.fm/static/file/member/defaultuser" alt="" width="40px" height="40px">
            </router-link>
          </div>
          <div class="comment-c">
            <div class="comment-meta">
              <router-link to="/" class="comment-user">{{comment.nikiname}}</router-link>
              <span>{{comment.reply_time}}</span>
            </div>
            <div class="comment-p">{{comment.content}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array
  }
}
</script>

<style scoped>
.comment-list {
  width: 100%;
  margin-top: 30px;
}
.tab {
  height: 40px;
}
.tab li {
  color: #ee5044;
  background-color: #fff;
  padding: 0 15px;
  line-height: 40px;
  cursor: pointer;
  float: left;
}
.list {
  background-color: #fff;
  padding: 30px 30px 0;
}
.nolist {
  text-align: center;
  padding-bottom: 30px;
}
.list li {
  border-bottom: 1px dashed #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
}
.list li:last-child {
  border-bottom: none;
}
.comment-c {
  margin-left: 10px;
}
.comment-meta {
  margin-bottom: 5px;
  color: #999;
  line-height: 22px;
}
.comment-user {
  font-size: 14px;
  font-weight: bold;
  color: #707070;
  transition: color .4s;
}
.comment-user:hover {
  color: #ee5044;
}
.comment-meta span {
  margin-left: 8px;
  font-size: 12px;
}
.comment-p {
  margin-bottom: 15px;
  font-size: 12px;
}
</style>
