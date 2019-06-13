<template>
  <div class="login wr">
    <div class="form-label">
      <label for="userEmail">邮箱：</label><input type="text" id="userEmail" v-model="user.email" placeholder="请输入邮箱">
    </div>
    <div class="form-label">
      <label for="password">密码：</label><input type="text" id="password" v-model="user.password" placeholder="请输入密码">
    </div>
    <div class="form-label">
      <button @click="login">登 录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login () {
      this.axios.post('/user/login', this.user).then(res => {
        if (res.data.res_code === 200) {
          this.$router.replace('/')
          localStorage.setItem('token', res.data.res.token)
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 30px;
  padding-left: 20px;
}
.form-label {
  margin-bottom: 20px;
  font-size: 16px;
}
.form-label input {
  width: 300px;
  padding: 10px 5px;
  outline: none;
  border: 0 none;
}
.form-label button {
  width: 80px;
  height: 35px;
  border: 0 none;
  outline: none;
  background-color: #ee5044;
  color: #fff;
  font-size: 16px;
}
</style>
