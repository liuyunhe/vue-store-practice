<!--<script src="../../build/vue-loader.conf.js"></script>-->
<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>人气产品</h2>

          <!--循环-->
          <template v-for="product in productList">
            <h3>{{ product.title }}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>
          </template>

        </div>
        <div class="index-left-block lastest-news">
          <h2>支持</h2>
          <ul>
            <li v-for="item in newsList">
              <a class="new-item" :href="item.url"  target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="index-right">
        <slide-show :slides="slides" :intv="invTime" @onChange="doSomethingOnSlideShow"></slide-show>
        <div class="index-board-list">
          <div
            class="index-board-item"
            v-for="(item,index) in boardList"
            :class="[{'line-last':index % 2 !== 0},'index-board-' + item.id]">
            <div class="index-board-item-inner" >
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <div class="index-board-button">
                <router-link :to="{path:'/detail/' + item.toKey}" class="button">立即购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import slideShow from '../components/slideShow'
    import bus from '../eventsCenter/bus'
    export default {
      components:{
        slideShow
      },
      created() {
        this.$http.get('api/getNewsList')
          .then( (res) => {         //成功
            console.log(res.data.getNewsList);
            this.newsList = res.data.getNewsList;
          },(err) => {              //失败getNewsList
            console.log(err)
          })
      },
      data() {
        return {
          invTime: 3000,
          slides: [
            {
              src: require('../assets/slideShow/pic1.jpg'),
              title: '《奔跑吧！脚男》第二季全面升级 11月27日震撼播出！',
              href: '/detail/wow'
            },
            {
              src: require('../assets/slideShow/pic2.jpg'),
              title: '暗黑破坏神III》2.6.0版本及全新职业死灵法师现已上线',
              href: '/detail/d3'
            },
            {
              src: require('../assets/slideShow/pic3.jpg'),
              title: '迎接星际周年纪念，庆祝《星际争霸》二十周年！',
              href: '/detail/sc2'
            },
            {
              src: require('../assets/slideShow/pic4.jpg'),
              title: '女巫森林-邪恶蠢蠢欲动！',
              href: '/detail/hs'
            },
            {
              src: require('../assets/slideShow/pic5.jpg'),
              title: '史诗钥石地下城全球邀请赛：准备迎接“计时赛”！',
              href: '/detail/wow'
            },
          ],
          productList:{
            pc:{
              title:'暴雪游戏',
              list:[
                {
                  name: '星际争霸重置版',
                  url: 'http://starcraft.com'
                },
                {
                  name: '魔兽世界',
                  url: 'https://www.wowchina.com/zh-cn/'
                },
                {
                  name: '星际争霸2',
                  url: 'http://sc2.blizzard.cn/',
                  hot: true
                },
                {
                  name: '守望先锋',
                  url: 'http://ow.blizzard.cn/home'
                }
              ]
            },
            app:{
              title:'电子竞技',
              last:true,
              list:[
                {
                  name: '守望先锋联赛',
                  url: 'https://www.overwatchleague.cn/zh-cn/',
                },
                {
                  name: '炉石传说黄金职业联赛',
                  url: 'http://gold.blizzard.cn/minisite/gold-super-tournament',
                },
                {
                  name: '星际争霸2黄金职业联赛',
                  url: 'http://gold.blizzard.cn/minisite/sc2-tournament',
                  hot : true
                },
                {
                  name: '魔兽争霸Ⅲ黄金职业联赛',
                  url: 'http://gold.blizzard.cn/minisite/war3-tournament/',
                  hot : true
                }
              ]
            }
          },
          newsList:[],
          boardList: [
            {
              title: '魔兽世界',
              description: '购买《争霸艾泽拉斯》数字典藏礼包',
              id: 'car',
              toKey: 'wow',
              saleout: false
            },
            {
              title: '暗黑破坏神3',
              description: '全新英雄职业-死灵法师-现已上线',
              id: 'earth',
              toKey: 'd3',
              saleout: false
            },
            {
              title: '星际争霸2',
              description: '庆祝《星际争霸》二十周年',
              id: 'loud',
              toKey: 'sc2',
              saleout: true
            },
            {
              title: '炉石传说',
              description: '乱斗模式“一切都是命运”现已开放',
              id: 'hill',
              toKey: 'hs',
              saleout: false
            }
          ]
        }
      },
      methods:{
        doSomethingOnSlideShow(index) {
//          console.log('doSomethingOnSlideShow' + index)
        }
      },
      mounted() {
        if(this.newsList.length == 0){
          this.newsList =[
            {"id":1,"title":"战网通行证","url":"https://www.battlenet.com.cn/zh/"},
            {"id":2,"title":"暴雪新闻","url":"https://cn.news.blizzard.com/zh-cn/"},
            {"id":3,"title":"暴雪商城","url":"https://shop.battlenet.com.cn/zh-cn"},
            {"id":4,"title":"查尔星港","url":"http://s.163.com/"},
            {"id":5,"title":"艾泽拉斯国家地理","url":"http://bbs.nga.cn/"}
          ]
        }
      }
    }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #363636;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url(https://shop.battlenet.com.cn/static/1.11.0/images/family-icons/world-of-warcraft.svg) no-repeat;
    background-size: 100px;
  }
  .index-board-loud .index-board-item-inner{
    background: url(https://shop.battlenet.com.cn/static/1.11.0/images/family-icons/starcraft-ii.svg) no-repeat;
    background-size: 100px;
  }
  .index-board-earth .index-board-item-inner{
    background: url(https://shop.battlenet.com.cn/static/1.11.0/images/family-icons/diablo-iii.svg) no-repeat;
    background-size: 100px;
  }
  .index-board-hill .index-board-item-inner{
    background: url(https://shop.battlenet.com.cn/static/1.11.0/images/family-icons/hearthstone.svg) no-repeat;
    background-size: 100px;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
