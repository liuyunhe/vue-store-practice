<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>炉石传说</h2>
      <p>在《炉石传说》中，你扮演的是游戏中九个职业。每个职业都具有独特的英雄技能以及专属的职业卡牌。你可以在这个章节中了解这些职业独到的玩法。你可以在练习模式中可以逐一解锁他们。尝试着了解各个职业的特色，作出选择，然后开始你的《炉石传说》之旅吧！</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter
            :max="100" :min="20"
            @on-change="onParamChange('buyNumber',$event)"
          ></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          奥术之尘礼包：
        </div>
        <div class="sales-board-line-right">
          <v-selection
            :selections="tradeList"
            @on-change="onParamChange('trade',$event)"
          ></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-mul-chooser
            :selections="versionList"
            @on-change="onParamChange('versions',$event)"
          ></v-mul-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          半年
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
      <h2>游戏指南</h2>
      <p>想要自己组建一副套牌，然后用它来和其他玩家对战？现在马上就下载《炉石传说》并投入游戏吧，没有什么比参与实战更能让你学到东西的了！而如果你在完成教学关卡之后仍有一些疑惑，这个页面的内容将帮助你补充所有遗漏的游戏知识。</p>

      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>行业</th>
          <th>产品版本</th>
          <th>有效时间</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ buyNumber }}</td>
          <td>{{ trade.label }}</td>
          <td>
            <span v-for="(item,index) in versions">{{!index ?  item.label :',' + item.label}}</span>
          </td>
          <td>{{ validTime }}</td>
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

<script>
    import VSelection from '../../components/base/selection'
    import VCounter from '../../components/base/counter'
    import VMulChooser from '../../components/base/multiplyChooser'
    import Dialog from '../../components/base/dialog.vue'
    import BankChooser from '../../components/bankChooser.vue'
    import CheckOrder from '../../components/checkDialog.vue'
    import _ from 'lodash'
    export default {
        components:{
          VSelection,
          VCounter,
          VMulChooser,
          myDialog:Dialog,
          BankChooser,
          CheckOrder,
        },
        data() {
            return {
              tradeList: [
                {
                  label: '女巫森林',
                  value: 0
                },
                {
                  label: '狗头人与地下世界',
                  value: 1
                },
                {
                  label: '上古之神的低语',
                  value: 2
                },
                {
                  label: '冰封王座的骑士',
                  value: 3
                },
                {
                  label: '勇闯安戈洛',
                  value: 4
                }
              ],
              versionList: [
                {
                  label: '上古之神的低语',
                  value: 0
                },
                {
                  label: '卡拉赞之夜',
                  value: 1
                },
                {
                  label: '地精大战侏儒',
                  value: 2
                },
                {
                  label: '黑石山的诅咒',
                  value: 3
                }
              ],
              price:0,
              buyNumber:20,
              trade:{},
              versions:[],
              validTime:'半年',
              isShowPayDialog:false,
              bankId:null,
              orderId:null,
              isShowCheckOrder:false,
              isShowErrDialog:false
            }
        },
      methods:{
        onParamChange(attr,val) {
          this[attr] = val
//          console.log(attr,this[attr])
          this.getPrice();
        },
        getPrice() {
          let buyVersionsArray = _.map(this.versions,(item)=>{
            return item.label
          })
          let reqParams = {
            buyNumber:this.buyNumber,
            trade:this.trade.label,
            versions:buyVersionsArray.join(','),
            validTime:this.validTime,
          }
          this.$http.post('/api/getPrice',reqParams)
            .then((res)=>{
//              console.log(res.data.getPrice.amount)
              this.price = res.data.getPrice.amount
            })
        },
        confirmBuy() {
          let buyVersionsArray = _.map(this.versions,(item)=>{
            return item.label
          })
          let reqParams = {
            buyNumber:this.buyNumber,
            trade:this.trade.label,
            versions:buyVersionsArray.join(','),
            validTime:this.validTime,
          }
          this.$http.post('/api/createOrder',reqParams)
            .then((res)=>{
              this.orderId = res.data.createOrder.orderId;
              this.isShowPayDialog = false
              this.isShowCheckOrder = true
            },(err)=>{
              this.isShowErrDialog = true
            })
        },
        hidePayDialog() {
          this.isShowPayDialog = false
        },
        onChangeBanks(bankObj) {
          this.bankId = bankObj.id;
        },
        payClick() {
          this.isShowPayDialog = true
        },
        hideCheckOrderDialog() {
          this.isShowCheckOrder = false;
        },
        hideErrDialog() {
          this.isShowErrDialog = false;
          this.$router.push({path: '/orderList'})
        }
      },
      mounted() {
        this.buyNumber = 20;
        this.trade = this.tradeList[0];
        this.versions = [this.versionList[0]];
        this.validTime = '半年'
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
</style>
