<template>
  <div class="loginBody">
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click='backUp'></mt-button>
      </router-link>
    </mt-header>
    <div class="logo"><img src="../lib/img/login_logo.jpg" alt=""></div>
    <form action="/">
      <input type="text" v-model="username" placeholder="请输入用户名">
      <input type="password" v-model="password" placeholder="请输入密码">
    </form>
    <button class="login" @click="login">登陆</button>
    <div class="sign">
      <router-link key='zhuce' to='/sign'>注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { MessageBox, Toast } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['app'])
  },
  methods: {
    ...mapMutations(['toggleTabbar', 'gainUserName']),
    backUp () {
      this.$router.history.go(-2)
    },
    login () {
      /* const vm = this */
      const winuser = window.localStorage.getItem(this.username)
      if (!winuser) {
        MessageBox.alert('登陆失败，用户名不存在').then(action => {
          this.username = ''
          this.password = ''
        })
      } else if (winuser !== this.password) {
        MessageBox.alert('登陆失败，密码错误').then(action => {
          this.username = ''
          this.password = ''
        })
      } else {
        Toast({
          message: '登陆成功',
          iconClass: 'icon icon-success'
        })
        console.log(this.username)
        this.gainUserName(this.username)
        console.log(this.app.userName)
        window.localStorage.setItem('mochen', 'JHIUIUHSKLJSDOISDSDJOSJDLSKDI')
        window.localStorage.setItem('username', this.username)
        window.location.hash = 'mine'
        setTimeout(function () {
          window.location.reload()
          // this.$router.push('/home')
          // console.log(this.$router)
          /* vm.toHomepage() */
        }, 1000)
        // console.log(this.$router.push('/mine'))
      }
    }/* ,
    toHomepage () {
      this.$router.push('/mine')
    } */
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
    .sign {
      a {
        margin-right: 7%;
        margin-top: 7%;
        float: right;
        text-decoration: none;
        color: #999;
      }
    }
  }
</style>
