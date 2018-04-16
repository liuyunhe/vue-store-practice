<template>
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="product-board">
          <img :src="productIcon" alt="" width="100">
          <ul>
            <!--<li v-for="item in products">{{ item.name }}</li>-->
            <router-link v-for="item in products" :to="{path:item.path}" tag="li" :key="item.name" active-class="active">{{ item.name }}</router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <!--<keep-alive>-->
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <!--</keep-alive>-->
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              products: [
                {
                  name: '魔兽世界',
                  path: 'wow',
//                  icon: require('../assets/images/1.png'),
                  active: false
                },
                {
                  name: '星际争霸2',
                  path: 'sc2',
                  active: false
                },
                {
                  name: '暗黑破坏神3',
                  path: 'd3',
                  active: false
                },
                {
                  name: '炉石传说',
                  path: 'hs',
                  active: false
                }
              ],
              imgMap: {
                '/detail/wow': require('../assets/images/world-of-warcraft.svg'),
                '/detail/sc2': require('../assets/images/starcraft-ii.svg'),
                '/detail/d3': require('../assets/images/diablo-iii.svg'),
                '/detail/hs': require('../assets/images/hearthstone.svg')
              }
            }
        },
        computed:{
          productIcon() {
            return this.imgMap[this.$route.path]
          }
        },
//        mounted() {
//          this.$root.alertTips()
//        }
    }
</script>
<style>
  .detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board {
    background: #fff;
    padding: 20px 0;
  }
  .product-board ul {
    margin-top: 20px;
  }
  .product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #363636;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-form {

  }
  .sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }
  .sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
  }
  .sales-board-line {
    clear: both;
    padding-bottom: 20px;
  }
  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }
  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }
  .sales-board-des p {
    line-height: 1.6;
  }
  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
  .sales-board-des li {
    padding: 5px 0;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #363636;
    color: #fff;
  }
  .sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }
</style>
