<template>
    <div class="nav-wrap" :class="{'bg':background}">
        <div class="main clear">
            <img class="left" src="../assets/img/nav-logo.png"/>
            <div v-if="!phone" class="right">
                <!--<span>{{$t('nav.home')}}</span>-->
                <span>{{$t('nav.introduction')}}</span>
                <span>{{$t('nav.ourCase')}}</span>
                <span>{{$t('nav.document')}}</span>
                <a href="https://github.com/AnyChainIDE/AnyChainIDE/releases"><span>{{$t('nav.changeLog')}}</span></a>
                <el-dropdown @command="changeLan" trigger="click">
              <span class="el-dropdown-link">
                {{getLan === 'en'?'English':'中文'}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="en">English</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <template v-else>
                <div class="right" @click="navShow = true">
                    <span class="menu-btn"></span>
                </div>
                <transition name="nav">
                    <section v-show="navShow" ref="menu" class="menu-list">
                        <div @click="navShow = false" class="close"></div>
                        <ul>
                            <li>
                                {{$t('nav.introduction')}}
                            </li>
                            <li>
                                {{$t('nav.ourCase')}}
                            </li>
                            <li>
                                {{$t('nav.document')}}
                            </li>
                            <a href="https://github.com/AnyChainIDE/AnyChainIDE/releases">
                                <li>
                                    {{$t('nav.changeLog')}}
                                </li>
                            </a>
                            <li @click="changeLan('zh')">中文</li>
                            <li @click="changeLan('en')">English</li>
                        </ul>
                    </section>
                </transition>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-nav",
        props: ['background'],
        data() {
            return {
                phone: false,
                navShow: false
            }
        },
        created() {
        },
        mounted() {
            let that = this;
            if (window.screen.width < 420) {
                that.phone = true;

            }
        },
        updated(){
            // let navHight = window.screen.height;
            // console.log(this.$refs.menu)
            // this.$refs.menu.style.height = navHight + 'px';
        },
        methods: {
            changeLan(lan) {
                this.$i18n.locale = lan;
            }
        },
        computed: {
            getLan() {
                return this.$i18n.locale;
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-wrap {
        position: fixed;
        width: 100%;
        height: 40px;
        padding: 10px 0;
        line-height: 40px;
        left: 0;
        top: 0;
        z-index: 99;
        transition: all 0.8s;
        .main {
            width: 1280px;
            margin: auto;
            .right {
                span {
                    margin-left: 30px;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                }

            }
        }
    }
    .bg {
        background: #4fc4db;
    }
    @media screen and (max-width: 1280px) {
        .nav-wrap {
            .main {
                width: auto;
                margin: 0 20px;
                img {
                    height: 100%;
                }
            }
        }
    }
    /*@media screen and (max-width: 1024px) {*/
        /*.nav-wrap {*/
            /*.main {*/
                /*width: auto;*/
                /*margin: 0 20px;*/
                /*img {*/
                    /*height: 100%;*/
                /*}*/
            /*}*/
        /*}*/
    /*}*/

    @media screen and (max-width: 420px){
        .nav-wrap {
            width: 100%;
            box-sizing: border-box;
            height: auto;
            line-height: unset;
            .main {
                width: 100%;
                box-sizing: border-box;
                height: 40px;
                line-height: 40px;
                padding: 0 20px;
                margin: 0;
                .right {
                    margin-left: 0;
                    text-align: center;
                    line-height: 40px;
                    .menu-btn {
                        display: inline-block;
                        width: 30px;
                        height: 2px;
                        background: white;
                        margin-left: 0;
                        vertical-align: middle;
                        position: relative;
                        &::before {
                            position: absolute;
                            display: block;
                            content: '';
                            width: 30px;
                            height: 2px;
                            background: white;
                            top: -10px;
                            left: 0;
                        }
                        &::after {
                            position: absolute;
                            display: block;
                            content: '';
                            width: 30px;
                            height: 2px;
                            background: white;
                            top: 10px;
                            left: 0;
                        }
                    }
                }
                img {
                    /*width: 70px;*/
                    height: 40px
                }
                .menu-list {
                    position: fixed;
                    height: 100%;
                    background: #333333;
                    color: white;
                    top: 0;
                    right: 0;
                    text-align: center;
                    ul li {
                        padding: 6px 12px;
                        font-size: 14px;
                    }
                    .close {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        position: relative;
                        margin-top: 15px;
                        &::before {
                            display: block;
                            position: absolute;
                            content: "";
                            width: 42px;
                            height: 2px;
                            background: white;
                            left: 0;
                            top: -1px;
                            transform-origin: left;
                            transform: rotate(45deg);
                        }
                        &::after {
                            display: block;
                            position: absolute;
                            content: "";
                            width: 42px;
                            height: 2px;
                            background: white;
                            left: 0;
                            top: 29px;
                            transform-origin: left;
                            transform: rotate(-45deg);
                        }
                    }
                }
            }
        }

        .nav-enter-active, .nav-leave-active {
            transition: all .3s;
        }
        .nav-enter,.nav-leave-to {
            transform: translateX(100%);
        }
    }
</style>