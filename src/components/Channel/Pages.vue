<template>
  <div class="page">
    <span v-if="curPage > 1" @click="curPages(curPage - 1)">上一页</span>
    <template v-for="page in pages" >
      <span 
        v-if="page >= start && page <= end" 
        :key="page" 
        :class="{'cur': curPage === page}" 
        @click="curPages(page)"
      >{{page}}</span>
    </template>
    <span v-if="curPage < pages" @click="curPages(curPage + 1)">下一页</span>
  </div>
</template>

<script>
import bus from '../../bus'
export default {
  props: {
    count: Number,
    curPage: Number
  },
  data () {
    return {
      // 可定义当前显示的可点按钮数量
      interval: 3
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.count / 10)
    },
    /* 
      如果当前页小于 5 页， start都是1
      start = Math.max(1, 当前页 - 3)

      如果当前页加上3 大于 总页数  end为总页数
      end = Math.min(当前页 + 3, 总页数)
    */
    start () {
      let start = Math.max(1, this.curPage - this.interval)
      // 如果当前页 + 3 > 总页数
      if ((this.curPage + this.interval) > this.pages) {
        start = (this.pages - 2 * this.interval) < 1 ? 1 : (this.pages - 2 * this.interval)
      }
      return start
    },
    end () {
      let end = Math.min(this.curPage + this.interval, this.pages)
      // 如果当前页 小于 interval + 1
      if (this.curPage < (this.interval + 1)) {
        end = (2 * this.interval + 1) > this.pages ? this.pages : (2 * this.interval + 1)
      }
      return end
    }
  },
  methods: {
    curPages (page) {
      bus.$emit("currentPages", page)
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
  font-size: 0;
}
.page span {
  padding: 3px 10px;
  color: #707070;
  font-size: 12px;
  transition: all .4s ease;
  display: inline-block;
  cursor: pointer;
}
.page span:hover {
  color: #ee5044;
}
.page span.cur {
  font-weight: bold;
  color: #ee5044;
}
</style>
