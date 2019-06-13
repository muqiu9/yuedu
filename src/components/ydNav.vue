<template>
  <div class="ydNav">
    <nav class="wr">
      <router-link to="/">
        <span class="mlogo"><span class="logo-a fl"></span><span class="logo-b fl"></span><span class="logo-c fl"></span></span>悦读 FM
      </router-link>
      <router-link 
        v-for="type in types" 
        :key="type.id" 
        :to="'/channel/'+type.id" 
        exact-active-class="active" 
        >{{type.type}}</router-link>
        <div class="login">
          <router-link to="/setting">设置</router-link>
          <router-link to="/login">登录</router-link>
          <router-link to="/">注册</router-link>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: []
    }
  },
  created () {
    this.axios.get('types').then(res => {
      this.types = res.data.res;
    })
  }
}
</script>

<style scoped>
.ydNav {
  height: 100px;
  background-color: #fff;
  line-height: 100px;
}
.ydNav a {
  padding: 0 30px;
  color: #707070;
  transition: color .4s;
}
.ydNav a.active {
  color: #F30;
}
.ydNav a:hover {
  color: #ee5044;
}
nav {
  position: relative;
}
.login {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.login a {
  margin-left: -40px;
}
.logo {width:120px; line-height:30px;}
.logo a {display:inline-block; width:100%; height:100%; font-size:14px;}
.logo a:hover {color:#F30;}
.mlogo {width:20px; height:30px; display: inline-block; margin-right:15px;}
.mlogo span {width:4px; background:#ee5044; display: inline-block; border-radius:2px;}
.logo-a {height:18px; margin:6px 4px 0 0;transform:translateY(4px)}
.logo-b {height:28px; margin:0 4px 0 0;transform:translateY(8px)}
.logo-c {height:18px; margin:6px 0 0 0;transform:translateY(4px)}
</style>
