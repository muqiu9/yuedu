<template>
  <div class="channel wr">
    <ChannelList :lists="lists" :count="count" :curPage="curPage"></ChannelList>
    <Top10 :top10s="top10s" :type="type"></Top10>
  </div>
</template>

<script>
import ChannelList from '../../components/Channel/ChannelList'
import Top10 from '../../components/Channel/Top10'
import bus from '../../bus'
export default {
  components: {
    ChannelList, Top10
  },
  data () {
    return {
      lists: [],
      top10s: [],
      type: "",
      count: 0,
      curPage: 0
    }
  },
  watch: {
    '$route': {
      handler: 'getData',
      immediate: true
    }
  },
  methods: {
    getData () {
      const {id} = this.$route.params;
      this.axios.get(`/articles/${id}/page/1`).then(res => {
        this.lists = res.data.res.articles
        this.count = res.data.res.count
        this.curPage = res.data.res.page
      })

      this.axios.get(`/articles/${id}/top10`).then(res => {
        this.top10s = res.data.res.articles
      })

      this.axios.get('/types').then(res => {
        this.type = res.data.res[id - 1].type
      })
    }
  },
  created () {
    bus.$on("currentPages", page => {
      this.axios.get(`/articles/${this.$route.params.id}/page/${page}`).then(res => {
        this.lists = res.data.res.articles
        this.count = res.data.res.count
        this.curPage = res.data.res.page
      })
    })
  }
}
</script>

<style scoped>
.channel {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
