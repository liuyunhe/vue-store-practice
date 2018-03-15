<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="onParamChange('buyNumber',$event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          适用地区：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="districts" @on-change="onParamChange('district',$event)"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <vue-datepicker-local v-model="emptyRange" clearable></vue-datepicker-local>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
           {{ price }}元
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
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

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
          <th>产品类型</th>
          <th>适用地区</th>
          <th>有效时间</th>
          <th style="padding-left: 20px;padding-right: 20px">总价</th>
        </tr>
        <tr>
          <td>{{ buyNumber }}</td>
          <td>{{ buyType.label }}</td>
          <td>{{ district.label }}</td>
          <td>{{ emptyRange == false?'空':emptyRange}}</td>
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
    import VChooser from '../../components/base/chooser.vue'
    import VCounter from '../../components/base/counter.vue'
    import VSelection from '../../components/base/selection.vue'
    import Dialog from '../../components/base/dialog.vue'
    import VueDatepickerLocal from 'vue-datepicker-local'
    import BankChooser from '../../components/bankChooser.vue'
    import CheckOrder from '../../components/checkDialog.vue'

    export default {
        components:{
          VChooser,VSelection,VCounter,BankChooser,CheckOrder,
          myDialog:Dialog,
          VueDatepickerLocal
        },
        data() {
            return {
              time: new Date(),
              emptyRange: [],
              price:0,
              buyTypes: [
                {
                  label: '红色版',
                  value: 0
                },
                {
                  label: '绿色版',
                  value: 1
                },
                {
                  label: '紫色版',
                  value: 2
                }
              ],
              districts: [
                {
                  label: '北京',
                  value: 0
                },
                {
                  label: '上海',
                  value: 1
                },
                {
                  label: '广州',
                  value: 2
                },
                {
                  label: '天津',
                  value: 3
                },
                {
                  label: '武汉',
                  value: 4
                },
                {
                  label: '重庆',
                  value: 5
                },
              ],
              isShowPayDialog:false,
              buyNumber:0,
              bankId:null,
              orderId:null,
              buyType:{},
              district:{},
              isShowCheckOrder:false,
              isShowErrDialog:false,
            }
        },
        methods:{
          payClick() {
            this.isShowPayDialog = true
          },
          hidePayDialog() {
            this.isShowPayDialog = false
          },
          onParamChange(attr,value) {
            this[attr] = value;
            this.getPrice();
          },
          getPrice() {
            let reqParams = {
              buyNumber:this.buyNumber,
              buyType:this.buyType.label,
              district:this.district.label,
              validTime:this.emptyRange
            }
            this.$http.post('/api/getPrice',reqParams)
              .then((res) => {
                this.price = res.data.getPrice.amount;

              },(err) => {

              })
          },
          onChangeBanks(bankObj) {
            this.bankId = bankObj.id;
          },
          confirmBuy(){
            let reqParams = {
              buyNumber:this.buyNumber,
              buyType:this.buyType.label,
              district:this.district.label,
              validTime:this.emptyRange,
              bankId:this.bankId
            }
            this.$http.post('/api/createOrder',reqParams)
              .then((res) => {
                this.orderId = res.data.createOrder.orderId
                this.isShowPayDialog = false;
                this.isShowCheckOrder = true;
              },(err) =>{
                this.isShowErrDialog = true
              })
          },
          hideCheckOrderDialog(){
            this.isShowCheckOrder = false;
          },
          hideErrDialog() {
            this.isShowErrDialog = false;
            this.$router.push({path: '/orderList'});
          }
        },
        mounted() {
          this.buyNumber = 1;
          this.buyType = this.buyTypes[0];
          this.district = this.districts[0];
          this.emptyRange = [];
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
