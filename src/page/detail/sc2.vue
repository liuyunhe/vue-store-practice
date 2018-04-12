<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>星际争霸2</h2>
      <p>星际争霸2现已免费！天梯指挥官畅玩</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter :max="10" :min="5" @on-change="onParamChange('buyNumber',$event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          资料片：
        </div>
        <div class="sales-board-line-right">
          <v-mul-chooser :selections="versionLists" @on-change="onParamChange('versionList',$event)"></v-mul-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <my-vue-datepicker-local v-model="timeRange" clearable></my-vue-datepicker-local>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{ price }} 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button" @click="payClick">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>《星际争霸II》转为免费游戏详解</h2>
      <p>我想大家已经收到消息说，《星际争霸II》很快就要转为免费游戏了——确切的说，国服是在11月16日。大家是不是很好奇到底怎么个免费法？我们都知道，“免费游戏”对于不同的游戏来说差距很大，但我们可以向大家保证，我们说要让《星际争霸II》免费，那它就真的会免费。</p>
      <br>
      <p>从11月16日起，所有玩家将可以免费进入原版“自由之翼”的单人游戏战役，并畅玩所有合作指挥官，以及免费解锁《星际争霸II》的多人游戏竞技内容。下面来为大家梳理一下所有将变为免费的内容：</p>
      <br>
      <p>1.原版“自由之翼”战役。体验开启《星际争霸II》伟大传奇的原版史诗级战役！</p>
      <p>2.玩家将可以进入多人游戏排位天梯，使用“自由之翼”、“虫群之心”和“虚空之遗”的所有多人游戏单位与其他玩家决一胜负。你只需要在非排位模式或对抗电脑模式中获得十次“每日首胜”，即可永久解锁此项内容——我们希望通过这个限制来保证排位天梯体验的质量和公正性。</p>
      <p>3.现有及将来的合作任务指挥官都可以免费试玩至5级，每周突变因子的等级限制被移除。玩家可以随时跟好友一起挑战这些额外的困境。合作任务指挥官雷诺、凯瑞甘和阿塔尼斯会保持完全免费，也就是说你可以一直升级这三位指挥官到满意为止。</p>
      <br>
      <p>换句话说，你现在可以免费畅玩所有《星际争霸II》的多人游戏、所有合作任务指挥官以及完整的第一个单人游戏战役故事。</p>
      <br>
      <p>如果你通关了“自由之翼”战役，希望看看其他的史诗级单人游戏传奇，可以到暴雪战网商城以60元人民币的价格单独购买“虫群之心”单人游戏战役包、98元购买“虚空之遗”战役包和75元购买 “诺娃隐秘行动”战役包，或者以198元的优惠价格购买包含上述三个战役包的合集。我们也会继续提供数字典藏升级包，比如播报员、特殊皮肤以及新的合作任务指挥官，以不同方式来强化玩家的《星际争霸II》游戏体验。除了现有的合作任务指挥官，所有新发布的合作任务指挥官也可以免费试玩到5级。如果有需要，玩家还可以通过购买战役或季节性战争宝箱的方式来直接进入排位天梯游戏。</p>
      <br>
      <p>对于在2017年10月31日前已经购买了三个战役中的任意一个的玩家，我们将给你发放一个专属幽灵皮肤和三个新头像作为小小的感谢。</p>
    </div>
    <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>媒介</th>
          <th>有效时间</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ buyNumber }}</td>
          <td>
            <span v-for="(item,index) in versionList">{{!index ?  item.label :',' + item.label}}</span>
          </td>
          <td>{{ timeRange}}</td>

          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <bank-chooser @on-change="onChangeBanks"></bank-chooser>
      <div class="button buy-dialog-btn" @click="confirmBuy">
        确认购买
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
      支付失败！
    </my-dialog>
    <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrderDialog"></check-order>
  </div>
</template>

<style>
    body {

    }
</style>

<script>
    import VCounter from '../../components/base/counter.vue'
    import VMulChooser from '../../components/base/multiplyChooser.vue'
    import VueDatepickerLocal from '../../components/base/datepicker.vue'
    import Dialog from '../../components/base/dialog.vue'
    import BankChooser from '../../components/bankChooser.vue'
    import CheckOrder from '../../components/checkDialog.vue'
    import _ from 'lodash'
    export default {
        components:{
          VCounter,
          VMulChooser,
          MyVueDatepickerLocal:VueDatepickerLocal,
          myDialog:Dialog,
          BankChooser,
          CheckOrder
        },
        data() {
            return {
              time: new Date(),
              timeRange: '',
              price:0,
              versionLists: [
                {
                  label: '自由之翼',
                  value: 0
                },
                {
                  label: '虫群之心',
                  value: 1
                },
                {
                  label: '虚空之遗',
                  value: 2
                },
                {
                  label: '额外战役：诺娃隐秘行动',
                  value: 3
                }
              ],
              buyNumber:5,
              versionList:[],
              isShowPayDialog:false,
              bankId:null,
              orderId:null,
              isShowCheckOrder:false,
              isShowErrDialog:false
            }
        },
        methods:{
          onParamChange(name,value) {
            this[name] = value;
            this.getPrice();
          },
          getPrice() {
            let versionListArray = _.map(this.versionList,function (item) {
              return item.label
            })
            let reqParams = {
              buyNumber : this.buyNumber,
              versionList : versionListArray.join(','),
              validTime : this.timeRange,
            }
            console.log(reqParams)
            this.$http.post('/api/getPrice',reqParams)
              .then((res)=>{
//              console.log(res.data.getPrice.amount)
                this.price = res.data.getPrice.amount
              })
          },
          confirmBuy() {
            let versionListArray = _.map(this.versionList,function (item) {
              return item.label
            })
            let reqParams = {
              buyNumber : this.buyNumber,
              versionList : versionListArray.join(','),
              validTime : this.timeRange,
              bankId:this.bankId
            }
            console.log(reqParams)
            this.$http.post('/api/createOrder',reqParams)
              .then((res)=>{
                this.orderId = res.data.createOrder.orderId;
                this.isShowPayDialog = false
                this.isShowCheckOrder = true
              },(err)=>{
                this.isShowErrDialog = true
              })
          },
          payClick() {
            this.isShowPayDialog = true
          },
          hidePayDialog() {
            this.isShowPayDialog = false
          },
          onChangeBanks(bankObj) {
            this.bankId = bankObj.id;
          },
          hideErrDialog() {
            this.isShowErrDialog = false;
            this.$router.push({path: '/orderList'})
          },
          hideCheckOrderDialog() {
            this.isShowCheckOrder = false;
          }
        },
        mounted() {
          this.buyNumber = 5;
          this.versionList = [];
          this.getPrice();
        }

    }
</script>
<style scoped>
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }
  .buy-dialog-btn {
    margin-top: 20px;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td,
  .buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
  .sales-board-des p {
    line-height: 1.6;
    text-indent: 2em;
  }
</style>
