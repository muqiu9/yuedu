<template>
  <div class="article wr">
    <ArticleItem :article="article"></ArticleItem>
    <ArticleSide :sides="formatSides" :other5s="other5s" :typeid="typeid"></ArticleSide>
  </div>
</template>

<script>
import ArticleItem from '../../components/Article/ArticleItem'
import ArticleSide from '../../components/Article/ArticleSide'
export default {
  components: {
    ArticleItem, ArticleSide
  },
  data () {
    return {
      article: null,
      sides: [],
      other5s: [],
      typeid: 1
    }
  },
  computed: {
    formatSides () {
      const arr = [];
      for (let i = 0; i < 20; i += 4) {
        arr.push(this.sides.slice(i, i + 4));
      }
      return arr;
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
      this.axios.get(`/article/${id}`).then(res => {
        this.article = res.data.res
        this.typeid = res.data.res.type_id
        // 需要使用res.data.res.type_id进行新的请求
        return this.axios.get(`/articles/${res.data.res.type_id}/rand`)
      }).then(res => {
        // 这个res就是上次.then之后return的结果
        this.other5s = res.data.res
      })
      this.axios.get(`/articles/rand`).then(res => {
        this.sides = res.data.res
      })
    }
  }
}
</script>

<style scoped>
.article {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
