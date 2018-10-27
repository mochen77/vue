<template>
  <div class="homeBody">
    <!-- 头部 -->
    <header>
      <div class="headerTop">
        <img src="../lib/img/homeHead.jpg" alt="">
        <div class="search" @click="onsearch">
          <i class="iconfont icon-search"></i>
          <span class="input"></span>
        </div>
      </div>
      <div class="headerBottom">
        <img src="../lib/img/homeBottom.jpg" alt="">
        <a class="navTop" href="/#/homelist"></a>
        <div class="nav">
          <a href="/#/homelist"></a>
          <a href="/#/homelist"></a>
          <a href="/#/homelist"></a>
          <a href="/#/homelist"></a>
          <a href="/#/homelist"></a>
        </div>
      </div>
    </header>
    <!-- 首页内容 -->
    <div class="content">
      <!-- 鲸致生活 -->
      <div class="jzlife">
        <img src="../lib/img/jzliftT.jpg" alt="">
        <div class="jzHead"></div>
        <div class="jztop">
          <a class="jzleft" href="/#/homelist"></a>
          <div class="jzright">
            <a href="/#/homelist"></a>
            <a href="/#/homelist"></a>
          </div>
        </div>
        <div class="jzbottom">
          <img src="../lib/img/jzliftB.jpg" alt="">
          <a href="/#/homelist"></a>
          <a href="/#/homelist"></a>
        </div>
      </div>
      <div class="xcarousel">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../lib/img/carousel1.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../lib/img/carousel2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../lib/img/carousel3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../lib/img/carousel4.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../lib/img/carousel5.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 专题鲸选 -->
      <div class="subject">
        <div class="subHead">专题鲸选</div>
        <div class="subImg">图片</div>
        <div class="rollImg">滚动图</div>
        <div class="bigImg">百变男装</div>
        <div class="rollRoll">滚动男装</div>
      </div>
      <!-- 发现好货 -->
      <div class="find">
        <div class="findHead">发现好货</div>
        <div class="findBox">
          <div>横3竖3</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 热卖周榜 -->
      <div class="hotSale">
        <div class="hotHead">热卖周榜</div>
        <div class="hotCenter">
          <div>横2</div>
          <div></div>
        </div>
        <div class="hotBottom">
          <div>横3竖2</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 实惠专业户 -->
      <div class="substantial">
        <div class="subHead">实惠专业户</div>
        <div class="subContent">
          <div>横3竖3</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 特色推荐 -->
      <div class="feature">
        <div class="feaHead">特色推荐</div>
        <div class="feaContent">
          <div>横3竖3</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 品牌墙 -->
      <div class="brandWall">
        <div class="brandHead">品牌墙</div>
        <div class="brandContent">
          这是一个新效果
        </div>
      </div>
      <!-- 买卖说 -->
      <div class="deal">
        <div class="dealHead">买卖说</div>
        <div class="dealContent">
          又是一个轮播图
        </div>
      </div>
      <!-- 还没逛够 -->
      <div class="recur">
        <div class="recurHead">买卖说</div>
        <div class="recurContent">
          这里就不写了，用数据渲染.....
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('setAppParams', {
      isShowToolbar: true
    })
  },
  methods: {
    onsearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="scss">
.homeBody {
  header {
    width: 100%;
    .headerTop {
      display: flex;
      justify-content: center;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .search {
        width: 94%;
        position: fixed;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        top: 0;
        z-index: 999;
        .iconfont {
          position: absolute;
          left: 10px;
          top: 11px;
          font-size: 20px;
        }
        .input {
          margin-top: 6px;
          border-radius: 5px;
          display: block;
          height: 32px;
          padding-left: 30px;
          background: hsla(0, 0%, 100%, 0.9);
        }
      }
    }
    .headerBottom {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .navTop {
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .nav {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        left: 0;
        top: 50%;
        a {
          display: inline-block;
          width: 14%;
          height: 70%;
        }
      }
    }
  }
  .content {
    .jzlife {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .jzHead {
        height: 40px;
        position: absolute;
        left: 0;
        top: 0;
      }
      .jztop {
        position: absolute;
        width: 100%;
        height: 54%;
        left: 0;
        top: 10%;
        display: flex;
        justify-content: center;
        .jzleft {
          width: 47%;
          height: 100%;
          margin-right: 5px;
          // background: rgba(0, 0, 0, 0.7);
        }
        .jzright {
          width: 47%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          a {
            // background: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 49%;
          }
        }
      }
      .jzbottom {
        position: relative;
        margin: 13px 0;
        height: 118px;
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
        a {
          position: absolute;
          left: 2%;
          top: 0;
          // background: rgba(0, 0, 0, 0.7);
          width: 47%;
          height: 90%;
        }
        :last-child {
          left: 51%;
          top: 0;
        }
      }
    }
    .xcarousel {
      width: 100%;
      height: 275px;
      .mint-swipe {
        width: 100%;
        .mint-swipe-items-wrap {
          width: 100%;
          img {
            width: 100%;
            width: 100%;
          }
        }
      }
    }
    .subject {
      .subHead {
        height: 40px;
        background: #f06e23;
      }
      .subImg {
        height: 200px;
        background: #929796;
      }
      .rollImg {
        height: 200px;
        background: #d5eeac;
      }
      .bigImg {
        height: 200px;
        background: #f3d15f;
      }
      .rollRoll {
        height: 150px;
        background: #6cc1e2;
      }
    }
    .find {
      .findHead {
        height: 40px;
        background: #f06e23;
      }
      .findBox {
        padding: 5px 7px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        div {
          margin: 2px;
          width: 32%;
          height: 120px;
          background: #439684;
        }
      }
    }
    .hotSale {
      .hotHead {
        height: 40px;
        background: #f06e23;
      }
      .hotCenter {
        display: flex;
        justify-content: space-around;
        div {
          width: 47%;
          height: 120px;
          background: #32b4e7;
        }
      }
      .hotBottom {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        div {
          margin: 2px;
          width: 30%;
          height: 120px;
          background: #32b4e7;
        }
      }
    }
    .substantial {
      .subHead {
        height: 40px;
        background: #f06e23;
      }
      .subContent {
        padding: 5px 7px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        div {
          margin: 2px;
          width: 32%;
          height: 120px;
          background: #439684;
        }
      }
    }
    .feature {
      .feaHead {
        height: 40px;
        background: #f06e23;
      }
      .feaContent {
        padding: 5px 7px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        div {
          margin: 2px;
          width: 32%;
          height: 120px;
          background: #439684;
        }
      }
    }
    .brandWall {
      .brandHead {
        height: 40px;
        background: #f06e23;
      }
      .brandContent {
        height: 230px;
        background: #9c5aa5;
      }
    }
    .deal {
      .dealHead {
        height: 40px;
        background: #f06e23;
      }
      .dealContent {
        height: 230px;
        background: #60b360;
      }
    }
    .recur {
      .recurHead {
        height: 40px;
        background: #6fa5bb;
      }
    }
  }
}
</style>
