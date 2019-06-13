<template>
  <div class="comments-input">
    <div class="input">
      <textarea class="comment-text" placeholder="说点什么吧!" v-model="comment.content"></textarea>
      <button class="comment-btn" @click="send">评论</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: {
        content: "",
        article_id: 0
      }
    }
  },
  methods: {
    send () {
      this.axios.post('/comment', this.comment).then(res => {
        // 将请求后得到的结果 通过子父通信发送给ydComment
        this.$emit('send:comment', res.data.res)
        this.comment.content = ""
      })
    }
  },
  created () {
    this.comment.article_id = this.$route.params.id
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.input textarea {
  height: 30px;
  line-height: 16px;
  font-size: 12px;
  resize: none;
  width: 100%;
  padding: 10px;
  border: 0 none;
  outline: none;
}
.input button {
  width: 70px;
  background-color: #ee5044;
  font-size: 12px;
  color: white;
  text-align: center;
  height: 50px;
  border: none;
  line-height: 50px;
  outline: 0 none;
  cursor: pointer;
  flex-shrink: 0;
}
</style>
