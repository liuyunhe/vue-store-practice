<template>
    <div>
      <!--头部-->
      <div class="app-head">
        <div class="app-head-inner">
          <router-link :to="{path:'/'}">
            <img src="../assets/bnet-default-cn.png" alt="" height="60" style="margin-top: 15px">
          </router-link>

          <div class="head-nav">
            <ul class="nav-list">
              <li>{{ username }}</li>
              <li class="nav-pile" v-if="username !== ''">|</li>
              <li class="nav-pile" v-if="username !== ''" @click="quit">退出</li>
              <li @click="logClick" v-if="username === ''">登录</li>
              <li class="nav-pile" v-if="username === ''">|</li>
              <li @click="regClick" v-if="username === ''">注册</li>
              <li class="nav-pile">|</li>
              <li @click="aboutClick">关于</li>
            </ul>
          </div>
        </div>
      </div>
      <!--内容-->
      <div class="app-content">
        <!--<keep-alive>-->
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
        <!--</keep-alive>-->
      </div>
      <!--尾部-->
      <div class="app-foot">
        <p>© 2018 Shepard All Rights Reserved</p>
      </div>
      <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')" >
        <log-from @has-log="onSuccessLog"></log-from>
      </my-dialog>
      <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
        <p>reg</p>
      </my-dialog>
      <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
        <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
      </my-dialog>
    </div>
</template>

<style>
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
    min-width: 1200px;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
    margin-top: 20px;
  }
  .head-logo img {
    width: 50px;
  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    min-width: 1200px;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #363636;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #363636;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error{
    color: red;
    padding-left: 15px;
  }
</style>

<script>

    import Dialog from './base/dialog'
    import logFrom from './logForm'
    export default {
//      created:function () {
//        this.$http.get('https://jsonplaceholder.typicode.com/users')
//          .then( (res) => {         //成功
//            console.log(res.body[0]);
//          },(err) => {              //失败getNewsList
//            console.log(err)
//          })
//      },
      data() {
        return{
          isShowLogDialog:false,
          isShowRegDialog:false,
          isShowAboutDialog:false,
          username:''

        }
      },
      components:{
        myDialog:Dialog,
        logFrom
      },
      methods:{
//        三按钮
        logClick() {
          this.isShowLogDialog = true
        },
        regClick() {
          this.isShowRegDialog = true
        },
        aboutClick() {
          this.isShowAboutDialog = true
        },
        closeDialog(attr) {
          this[attr] = false
        },
        onSuccessLog(data) {
          this.username = data.username;
          this.closeDialog('isShowLogDialog')
        },
        quit() {
          this.username = ''
        }
      }

    }
</script>
