<template>
  <div class="mineBox">
    <div class="headBox">
      <div class="user">
        <div class="userTop">
          <div class="nserName">
            <div></div>
            <span>{{app.userName}}</span>
          </div>
          <div class="vipTime">
            <a href="/">体验会员</a>
            <span>2018-11-07到期</span>
          </div>
        </div>
        <ul class="userBottom">
          <li>
            <span>0</span>
            <p>奢币</p>
          </li>
          <li>
            <span>0</span>
            <p>闪电退</p>
          </li>
          <li>
            <span>0</span>
            <p>现金券</p>
          </li>
          <li>
            <span>7</span>
            <p>优惠券</p>
          </li>
        </ul>
      </div>
      <div class="invitationCode">
        <span>邀请码</span>
        <a href="/">点击复制</a>
      </div>
    </div>
    <div class="myInfo">
      <div class="myInfoTop">
        <span>我的订单</span>
        <a href="#">全部订单<i class="iconfont icon-gt"></i></a>
      </div>
      <div class="myInfoBottom">
        <a href="/" class="indent">
          <i class="iconfont icon-pay"></i>
          <span>待付款</span>
        </a>
        <a href="/" class="indent">
          <i class="iconfont icon-shipments"></i>
          <span>待付款</span>
        </a>
        <a href="/" class="indent">
          <i class="iconfont icon-delivery"></i>
          <span>待付款</span>
        </a>
        <a href="/" class="indent">
          <i class="iconfont icon-sale"></i>
          <span>待付款</span>
        </a>
      </div>
    </div>
    <div class="vipInfo">
      <div class="vipInfoTop">
        <span>
          <span>会员权益</span>
          <p>据统计，升级会员后，预计可省<span>2910元/年</span></p>
        </span>
        <a href="#">去升级<i class="iconfont icon-gt"></i></a>
      </div>
      <div class="vipInfoBottom">
        <div class="overY">
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
          <a href="/" class="indent">
            <i class="iconfont icon-7"></i>
            <span>7天放心退</span>
          </a>
        </div>
      </div>
    </div>
    <div class="advertising">
      <img src="../lib/img/mineAdvertising.jpg" alt="">
    </div>
    <div class="myServe">
      <mt-cell
        title="我的收藏"
        to="/home"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="收货地址"
        to="/home"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="会员升级"
        to="/home"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="设置"
        to="/exit"
        is-link
        value="">
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'mine',
  computed: {
    ...mapState(['app'])
  }
}
</script>

<style lang="scss" scoped>
.mineBox {
  width: 100%;
  background:#F5F5F5 url("../lib/img/mineHead.png") no-repeat;
  background-size: 100%;
  overflow-x: hidden;
  .headBox {
    width: 90%;
    height: 180px;
    margin: 0 auto;
    border-radius: 10px;
    background: #191611;
    margin-top: 50px;
    .user {
      width: 100%;
      height: 78%;
      background: #ffffff;
      border-radius: 10px;
      .userTop {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-between;
        .nserName {
          width: 70%;
          position: relative;
          div {
            background:#F5F5F5 url("../lib/img/user.png") no-repeat center center;
            width: 33%;
            height: 91%;
            border-radius: 50%;
            position: absolute;
            left: 10%;
            top: -20%;
          }
          span {
            width: 50%;
            margin-right: 10px;
            color: #333;
            float: right;
            margin-top: 12px;
            font-size: 16px;
          }
        }
        .vipTime {
          width: 30%;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2%;
          margin-right: 2%;
          color: #999;
          a {
            background: #ffdc8d;
            text-decoration: none;
            color: #666;
            padding: 4px 9px;
            border-radius: 11px;
            margin-bottom: 5px;
          }
        }
      }
      .userBottom {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        font-size: 13px;
        li {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0px 10px;
          color: #333;
          span {
            font-weight: 700;
            margin-bottom: 5px;
          }
          p {
            margin: 0;
          }
        }
      }
    }
    .invitationCode {
        width: 100%;
        height: 39px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          color: #fff;
          margin-left: 20px;
        }
        a {
          text-decoration: none;
          color: #f9d27b;
          margin-right: 15px;
        }
      }
  }
  .myInfo {
    width: 100%;
    height: 120px;
    margin-top: 15px;
    background: #fff;
    .myInfoTop {
      width: 100%;
      height: 35%;
      font-size: 14px;
      margin-left: 10px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        width: 100%;
        color: #333;
        font-weight: 700;
      }
      a {
        width: 30%;
        text-decoration: none;
        color: #666;
        margin-right: 7px;
        i {
          font-size: 14px;
        }
      }
    }
    .myInfoBottom {
      display: flex;
      justify-content: space-around;
      height: 65%;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #333;
        i {
          font-size: 27px;
        }
        span {
          margin-top: 4px;
          font-size: 12px;
        }
      }
    }
  }
  .vipInfo {
    width: 100%;
    height: 180px;
    margin-top: 15px;
    background: #fff;
    .vipInfoTop {
      width: 100%;
      height: 35%;
      font-size: 14px;
      margin-left: 10px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        width: 100%;
        color: #333;
        font-weight: 700;
        p {
          font-size: 12px;
          margin: 0;
          margin-top: 5px;
          font-weight: 100;
          span {
            font-weight: 100;
            color: red;
          }
        }
      }
      a {
        width: 30%;
        text-decoration: none;
        color: #666;
        margin-right: 7px;
        i {
          font-size: 14px;
        }
      }
    }
    .vipInfoBottom {
      width: 100%;
      height: 65%;
      overflow-y: hidden;
      .overY {
        width: 200%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #333;
          i {
            width: 66%;
            height: 33%;
            font-size: 35px;
            border: 1.3px solid #F9D583;
            color: #F9D583;
            padding: 5px;
            border-radius: 50%;
          }
          span {
            margin-top: 10px;
            font-size: 12px;
            font-weight: 700;
            color: #666;
          }
        }
      }
    }
    //隐藏滚动条
    .vipInfoBottom::-webkit-scrollbar {display:none}
  }
  .advertising {
    width: 100%;
    margin-top: 15px;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .myServe {
    width: 100%;
    margin-top: 15px;
    background: #F5F5F5;
    .mint-cell {
      color: #333;
      // border-top: 0px solid #ccc;
      // span {
      //   border: 0;
      // }
    }
    .mint-cell:nth-child(3) {
      margin-bottom: 30px;
    }
    .mint-cell:nth-child(4) {
      margin-bottom: 30px;
    }
  }
}
</style>
