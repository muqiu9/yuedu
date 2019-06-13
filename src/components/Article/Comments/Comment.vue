<template>
  <div class="commponent">
    <CommentInput @send:comment="getComment"></CommentInput>
    <CommentList :comments="comments"></CommentList>
  </div>
</template>

<script>
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default {
  components: {
    CommentInput, CommentList
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    getComment (comment) {
      this.comments.push(comment)
    }
  },
  watch: {
    '$route': {
      handler () {
        const id = this.$route.params.id
        this.axios.get(`/comments/${id}/page/1`).then(res => {
          if (res.data.res) {
            this.comments = res.data.res
          } else {
            this.comments = []
          }
        })
      }
    },
    immediate: true,
    deep: true
  }
}
</script>

<style>

</style>
