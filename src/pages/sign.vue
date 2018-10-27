<template>
  <div class="loginBody">
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click='backUp'></mt-button>
      </router-link>
    </mt-header>
    <div class="logo"><img src="../lib/img/login_logo.jpg" alt=""></div>
    <form action="/">
      <input type="text" v-model="username" placeholder="输入用户名">
      <input type="password" v-model="password" placeholder="输入密码">
      <input type="password" v-model="zpassword" placeholder="再次输入密码">
    </form>
    <button class="login" @click="onsign">注册</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      zpassword: ''
    }
  },
  methods: {
    ...mapMutations(['toggleTabbar']),
    backUp () {
      this.$router.history.go(-1)
    },
    onsign () {
      const winuser = window.localStorage.getItem(this.username)
      if (!winuser) {
        MessageBox.alert('注册成功').then(action => {
          window.localStorage.setItem(this.username, this.password)
          this.$router.push('/login')
          // window.location.hash = 'login'
        })
      } else {
        MessageBox.alert('注册失败，用户已存在').then(action => {
          this.username = ''
          this.password = ''
          this.zpassword = ''
        })
      }
    }
  },
  mounted () {
    this.toggleTabbar(false)
  },
  beforeDestroy () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="scss" scoped>
  .mint-header {
    background: #fff;
    color: #333;
    padding-left: 15px;
    padding-top: 10px;
  }
  .loginBody {
    width: 100%;
    .logo {
      max-height: 400px;
      img {
        display: block;
        width: 100%;
      }
    }
    form {
      input {
        display: block;
        outline-style: none;
        color: #222222;
        font-size: 15px;
        width: 81%;
        height: 30px;
        margin: 30px auto;
        border: 0;
        border-bottom: 1px solid #e2e2e2;
      }
    }
    .login {
      display: block;
      outline-style: none;
      margin: 0 auto;
      width: 80%;
      height: 45px;
      border:0;
      border-radius: 5px;
      background: #fd8a8a;
      font-size: 17px;
      color: #fff;
    }
  }
</style>
