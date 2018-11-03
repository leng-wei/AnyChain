<template>
  <div class="home-wrap">
    <v-nav :background="background"></v-nav>
    <header ref="header">
      <h1>{{$t('home.head.h1')}}</h1>
      <h2>{{$t('home.head.h2')}}</h2>
      <div class="btn-wrap">
        <section>
          <span class="btn">Windows</span>
          <p>v1.0.0</p>
        </section>
        <section>
          <span class="btn">macOS</span>
          <p>v1.0.0</p>
        </section>
      </div>
      <img src="../assets/img/head-pic.png"/>
    </header>
    <div class="do-wrap">
      <h1>{{$t('home.doWhat.title')}}</h1>
      <div class="cut-wrap">
        <img src="../assets/img/cut.png"/>
      </div>
      <div class="main-con">
        {{$t('home.doWhat.con')}}
      </div>
    </div>
    <div class="step-wrap">
      <transition :name="fadeName">
        <div key="0" v-if="showIndex === 0" class="flex-wrap">
          <section>
            <div class="line-title">
              {{$t('home.doWhat.title1')}}
            </div>
            <div class="con">
              {{$t('home.doWhat.con1')}}
            </div>
          </section>
          <aside>
            <img src="../assets/img/step1-pic.png"/>
          </aside>
        </div>
        <div key="1" v-else-if="showIndex === 1" class="flex-wrap">
          <section>
            <div class="line-title">
              {{$t('home.doWhat.title2')}}
            </div>
            <div class="con">
              {{$t('home.doWhat.con2')}}
            </div>
          </section>
          <aside>
            <img src="../assets/img/step1-pic.png"/>
          </aside>
        </div>
        <div key="2" v-else-if="showIndex === 2" class="flex-wrap">
          <section>
            <div class="line-title">
              {{$t('home.doWhat.title3')}}
            </div>
            <div class="con">
              {{$t('home.doWhat.con3')}}
            </div>
          </section>
          <aside>
            <img src="../assets/img/step1-pic.png"/>
          </aside>
        </div>
        <div key="3" v-else class="flex-wrap">
          <section>
            <div class="line-title">
              {{$t('home.doWhat.title4')}}
            </div>
            <div class="con">
              {{$t('home.doWhat.con4')}}
            </div>
          </section>
          <aside>
            <img src="../assets/img/step1-pic.png"/>
          </aside>
        </div>
      </transition>
    </div>
    <div class="step-line-wrap">
      <span :class="{'ball-light':showIndex === 0}" @click="changeBall(0)">1</span>
      <label></label>
      <span :class="{'ball-light':showIndex === 1}" @click="changeBall(1)">2</span>
      <label></label>
      <span :class="{'ball-light':showIndex === 2}" @click="changeBall(2)">3</span>
      <label></label>
      <span :class="{'ball-light':showIndex === 3}" @click="changeBall(3)">4</span>
    </div>
    <div class="characteristic-wrap">
      <h1>{{$t('home.characteristic.title')}}</h1>
      <div class="cut-wrap">
        <img src="../assets/img/cut.png"/>
      </div>
      <div class="flex-wrap">
        <aside>
          <img src="../assets/img/char-pic1.png"/>
        </aside>
        <section>
          <div class="line-title">
            {{$t('home.characteristic.title1')}}
          </div>
          <div v-html="$t('home.characteristic.con1')" class="con">
          </div>
        </section>
      </div>
      <div class="flex-wrap">
        <section class="con-m-r">
          <div class="line-title">
            {{$t('home.characteristic.title2')}}
          </div>
          <div v-html="$t('home.characteristic.con2')" class="con">
          </div>
        </section>
        <aside>
          <img src="../assets/img/char-pic2.png"/>
        </aside>
      </div>
      <div class="flex-wrap">
        <aside>
          <img src="../assets/img/char-pic3.png"/>
        </aside>
        <section>
          <div class="line-title">
            {{$t('home.characteristic.title3')}}
          </div>
          <div v-html="$t('home.characteristic.con3')" class="con">
          </div>
        </section>
      </div>
      <div class="flex-wrap">
        <section class="con-m-r">
          <div class="line-title">
            {{$t('home.characteristic.title4')}}
          </div>
          <div v-html="$t('home.characteristic.con4')" class="con">
          </div>
        </section>
        <aside>
          <img src="../assets/img/char-pic4.png"/>
        </aside>
      </div>
    </div>
    <footer>
      <h1 v-html="$t('home.footer.con')"></h1>
      <div class="clear">
        <div class="left">
          <section class="btn-w">Windows</section>
          <aside>v1.0.0</aside>
        </div>
        <div class="right">
          <section class="btn-w">macOS</section>
          <aside>v1.0.0</aside>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import VNav from "../components/VNav";

export default {
    components: {VNav},
    name: 'home',
    data() {
        return {
            background: false,
            showIndex: 0,
            fadeName: 'fade'
        }
    },
    mounted() {
        let that = this;
        window.onscroll = function () {
            if (that.getScrollTop() > 0) {
                that.background = true;
            } else {
                that.background = false;
            }
        }
    },
    methods: {
        getScrollTop() {
            let scrollTop = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            return scrollTop;
        },
        changeBall(index) {
            if (index < this.showIndex) {
                this.fadeName = 'fade-desc';
            } else {
                this.fadeName = 'fade';
            }
            this.showIndex = index;
        }
    }
}
</script>

<style lang="less" scoped>
  .home-wrap {
    header {
      padding: 178px 0 455px;
      position: relative;
      background: url("../assets/img/head-bg.jpg");
      background-size: 100% 100%;
      color: white;
      text-align: center;
      h1 {
        font-size: 60px;
        font-weight: normal;
      }
      h2 {
        font-size: 40px;
        margin: 20px 0 80px;
        font-weight: lighter;
        letter-spacing: 6px;
      }
      .btn-wrap {
        display: flex;
        width: 520px;
        margin: auto;
        font-size: 20px;
        section {
          flex: 1;
          .btn {
            display: inline-block;
            box-sizing: border-box;
            width: 175px;
            height: 50px;
            line-height: 50px;
            border-radius: 25px;
            border: 1px solid white;
            cursor: pointer;
            user-select: none;
            &:hover {
              color: #44D9C7;
              background: white;
              box-shadow: 0 5px 10px rgba(0,0,0,.5);
            }
            &:active {
              color: #44D9C7;
              background: white;
              box-shadow: 0 2px 5px rgba(0,0,0,.5);
            }
          }
          p {
            font-size: 20px;
            margin-top: 6px;
          }
        }
      }
      img {
        position: absolute;
        left: 50%;
        bottom: -138px;
        transform: translateX(-50%);
      }
      canvas {
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    .do-wrap {
      margin-top: 250px;
      h1 {
        font-size: 60px;
        color: black;
      }
      .main-con {
        width: 870px;
        margin: auto;
        color: #8e8e8e;
        font-size: 20px;
      }
    }
    .step-wrap {
      width: 1200px;
      height: 352px;
      position: relative;
      overflow: hidden;
      margin: 150px auto 0;
      .flex-wrap {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        margin-top: 30px;
        section {
          flex: 1;
          .con {
            max-width: 453px;
            color: #8E8E8E;
            font-size: 16px;
            margin-top: 34px;
            line-height: 26px;
            text-align: left;
          }
        }
        aside {
          width: auto;
        }
      }
    }
    .step-line-wrap {
      height: 20px;
      margin-top: 160px;
      line-height: 20px;
      text-align: center;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        background: #B4F0E9;
        color: white;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      label {
        display: inline-block;
        width: 280px;
        height: 2px;
        margin: 0 10px;
        background: #44D9C7;
        opacity: 0.2;
        vertical-align: middle;
      }
      .ball-light {
        background: #44D9C7;
      }
    }
    .characteristic-wrap {
      width: 1200px;
      margin: 160px auto;
      h1 {
        font-size: 60px;
      }
      .cut-wrap {
        margin-bottom: 90px;
      }
      .flex-wrap {
        display: flex;
        margin-bottom: 200px;
        section {
          flex: 1;
          margin-left: 70px;
          font-size: 16px;
          color: #8E8E8E;
          text-align: left;
          .con {
            margin-top: 40px;
            line-height: 30px;
          }
        }
        .con-m-r {
          margin-left: 0;
          margin-right: 40px;
        }
        aside {
          width: auto;
        }
      }
    }
    footer {
      padding: 128px 0 100px;
      background: linear-gradient(to bottom, #44D9C7, #0DA5E3);
      h1 {
        font-size: 30px;
        font-weight: lighter;
        color: white;
        line-height: 60px;
      }
      .clear {
        width: 450px;
        margin: 130px auto 0;
        aside {
          font-size: 20px;
          color: white;
          margin-top: 10px;
          font-weight: lighter;
        }
      }
      .btn-w {
        display: inline-block;
        width: 170px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #44D9C7;
        font-size: 20px;
        background: white;
        cursor: pointer;
        user-select: none;
        border-radius: 25px;
        box-shadow: 0 5px 10px rgba(0,0,0,.5);
        &:active {
          box-shadow: 0 2px 5px rgba(0,0,0,.5);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .home-wrap {
      header {
        padding: 178px 0 455px;
        position: relative;
        background: url("../assets/img/head-bg.jpg");
        background-size: 100% 100%;
        color: white;
        text-align: center;
        h1 {
          font-size: 60px;
          font-weight: normal;
        }
        h2 {
          font-size: 40px;
          margin: 20px 0 80px;
          font-weight: lighter;
          letter-spacing: 6px;
        }
        .btn-wrap {
          display: flex;
          width: 520px;
          margin: auto;
          font-size: 20px;
          section {
            flex: 1;
            .btn {
              display: inline-block;
              box-sizing: border-box;
              width: 175px;
              height: 50px;
              line-height: 50px;
              border-radius: 25px;
              border: 1px solid white;
              cursor: pointer;
              user-select: none;
              &:hover {
                color: unset;
                background: unset;
                box-shadow: unset;
              }
              &:active {
                color: #44D9C7;
                background: white;
                box-shadow: 0 2px 5px rgba(0,0,0,.5);
              }
            }
            p {
              font-size: 20px;
              margin-top: 6px;
            }
          }
        }
        img {
          position: absolute;
          left: 50%;
          width: 80%;
          bottom: -138px;
          transform: translateX(-50%);
        }
        canvas {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .do-wrap {
        width: auto;
        margin-top: 250px;
        h1 {
          font-size: 40px;
          color: black;
        }
        .main-con {
          width: 870px;
          margin: auto;
          color: #8e8e8e;
          font-size: 20px;
        }
      }
      .step-wrap {
        width: auto;
        .flex-wrap {
          padding: 0 20px;
          box-sizing: border-box;
          aside {
            img {
              width: 500px;
            }
          }
        }
      }
      .step-line-wrap {
        span {
          width: 40px;
          height: 40px;
          line-height: 40px;
        }
        label {
          width: 180px;
        }
      }
      .characteristic-wrap {
        width: auto;
        margin: 160px auto;
        h1 {
          font-size: 40px;
        }
        .flex-wrap {
          padding: 0 20px;
          box-sizing: border-box;
          aside {
            img {
              width: 500px;
            }
          }
        }
      }
      footer {
        padding: 60px 0 60px;
        .clear {
          margin-top: 60px;
        }
      }
    }
  }

  @media screen and (max-width: 768px){
    .home-wrap {
      .do-wrap {
        .main-con {
          width: 700px;
        }
      }
      .step-wrap {
        .flex-wrap {
          aside {
            img {
              width: 400px;
            }
          }
        }
      }
      .step-line-wrap {
        margin-top: 50px;
        label {
          width: 150px;
        }
      }
      .characteristic-wrap {
        .flex-wrap {
          section {
            .con {
              margin-top: 20px;
            }
          }
          aside {
            img {
              width: 300px;
              margin-top: 40px;
            }
          }
        }
      }
      footer {
        h1 {
          font-size: 26px;
          line-height: 40px;
        }
        .clear {
          margin-top: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 420px){
    .home-wrap {
      header {
        padding: 100px 0 200px;
        h1 {
          font-size: 30px;
        }
        h2 {
          font-size: 16px;
          letter-spacing: 2px;
          margin-bottom: 50px;
        }
        .btn-wrap {
          display: block;
          width: auto;
          section {
            width: 100%;
            margin-top: 30px;
            display: block;
            text-align: center;
          }
        }
        img {
          width: 300px;
          bottom: -20px;
        }
      }
      .do-wrap {
        margin-top: 100px;
        h1 {
          font-size: 24px;
        }
        .main-con {
          width: auto;
          padding: 0 15px;
          font-size: 16px;
        }
      }
      .step-wrap {
        .flex-wrap {
          display: block;
          section {
            .con {
              margin-top: 20px;
            }
          }
          aside {
            margin-top: 20px;
            img {
              width: 300px;
            }
          }
        }
      }
      .step-line-wrap {
        span {
          width: 30px;
          height: 30px;
          line-height: 30px;
        }
        label {
          width: 40px;
        }
      }
      .characteristic-wrap {
        h1 {
          font-size: 24px;
        }
        .flex-wrap {
          margin-bottom: 100px;
          section {
            margin: 0;
          }
          .con-m-r {
            margin: 0;
          }
          img {
            display: none;
          }
        }
      }
      footer {
        h1 {
          font-size: 16px;
          margin: 0 20px;
        }
        .clear {
          width: auto;
          padding: 0 15px;
          .btn-w {
            width: 135px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    .home-wrap {
      .step-wrap {
        .flex-wrap {
          aside {
            img {
              width: 260px;
            }
          }
        }
      }
      footer {
        h1 {
          font-size: 14px;
          line-height: 26px;
          margin: 0 20px;
        }
      }
    }

  }

  .fade-enter-active, .fade-leave-active {
    transition: 1s;
  }
  .fade-enter/* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
  }
  .fade-leave-to {
    transform: translateX(-100%);
  }

  .fade-desc-enter-active, .fade-desc-leave-active {
    transition: 1s;
  }
  .fade-desc-enter/* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
  }
  .fade-desc-leave-to {
    transform: translateX(100%);
  }
</style>