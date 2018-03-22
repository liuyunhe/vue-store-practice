<template>
  <div>
    <div class="order-wrap">
      <div class="order-list-choose">
        <div class="order-list-option">
          选择产品：
          <v-selection :selections="products" @on-change="productChange"></v-selection>
        </div>
        <div class="order-list-option">
          开始日期:
          <v-date-picked @change="changeStartDate"></v-date-picked>
        </div>
        <div class="order-list-option">
          结束日期：
          <v-date-picked @change="changeEndDate"></v-date-picked>
        </div>
        <div class="order-list-option">
          关键词：
          <input type="text" v-model.lazy="inputQuery" class="order-query">
        </div>
      </div>


      <div class="order-list-table">
        <table>
          <tr>
            <th
              v-for="head in userHeads"
              @click="changeUserOrder(head)"
              :class="{active:head.active}"
            >{{ head.label }}</th>
          </tr>
          <tr v-for="item in user">
            <td v-for="head in userHeads">{{ head.key == 'id' ? '13800138000'+ item[head.key]:item[head.key]}}</td>
          </tr>
        </table>
      </div>

    </div>
    <my-dialog :is-show="isShow" @on-close="closeDialog">结束时间不能小于开始时间</my-dialog>
  </div>
</template>

<script>
  import VSelection from '../components/base/selection.vue'
  import VDatePicked from '../components/base/datepicker.vue'
  import MyDialog from '../components/base/dialog.vue'
  import _ from 'lodash'
  import Axios from 'axios'
  export default {
    components:{
      VSelection,VDatePicked,MyDialog
    },
    data() {
        return {
          inputQuery:'',
          productId:0,
          startDate:'',
          endDate:'',
          endValue:'',
          isShow:false,
          products: [
            {
              label: '数据统计',
              value: 0
            },
            {
              label: '数据预测',
              value: 1
            },
            {
              label: '流量分析',
              value: 2
            },
            {
              label: '广告发布',
              value: 3
            }
          ],
          tableHeads: [
            {
              label: '订单号',
              key: 'orderId'
            },
            {
              label: '购买产品',
              key: 'product'
            },
            {
              label: '版本类型',
              key: 'version'
            },
            {
              label: '有效时间',
              key: 'period'
            },
            {
              label: '数量',
              key: 'buyNum'
            },
            {
              label: '购买日期',
              key: 'date'
            },
            {
              label: '总价',
              key: 'amount'
            }
          ],
          tableData:[],
          currentOrder:'desc',
          user:[],
          userHeads:[
            {
              label:'订单号',
              key:'id'
            },
            {
              label:'用户名',
              key:'username'
            },
            {
              label:'姓名',
              key:'name'
            },
            {
              label:'电话号码',
              key:'phone'
            },
            {
              label:'电邮',
              key:'email'
            },
            {
              label:'网址',
              key:'website'
            }
          ],
        }
    },
    watch:{
      inputQuery() {
        this.getTableData();
      }
    },
    computed:{

    },
    methods:{
      productChange(obj) {
        this.productId = obj.value;
        this.getTableData();
      },
      changeStartDate(date) {
        this.startDate = date;
        this.getTableData();
      },
      changeEndDate(date) {
        this.endDate = date;
        this.getTableData();
      },
      getTableData() {
        let reqParam = {
          inputQuery:this.inputQuery,
          productId:this.productId,
          startDate:this.startDate,
          endDate:this.endDate
        }
        this.$http.post('./api/getOrderList',reqParam)
          .then((res)=>{
            this.tableData = res.data.getOrderList.list
          },(err)=>{

          })
      },
      changeOrder(headItem) {
        this.tableHeads.map((item) => {
          item.active = false
          return item
        })
        headItem.active = true;
        if(this.currentOrder == "desc"){
          this.currentOrder = "asc";
        }
        else if(this.currentOrder == "asc"){
          this.currentOrder = "desc";
        }
        this.tableData = _.orderBy(this.tableData,headItem.key,this.currentOrder)
      },
      changeUserOrder(headItem) {
        this.userHeads.map((item) => {
          item.active = false
          return item
        })
        headItem.active = true;
        if(this.currentUserOrder == "desc"){
          this.currentUserOrder = "asc";
        }
        else if(this.currentUserOrder == "asc"){
          this.currentUserOrder = "desc";
        }
        this.user = _.orderBy(this.user,headItem.key,this.currentUserOrder)
      },
      closeDialog(){
        this.isShow = false;
      },
      aixos() {
        var _this = this;
        Axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            _this.user = response.data;
            console.log(_this.user)
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    },
    mounted() {
      this.getTableData();
      this.aixos();
      if(this.tableData.length == 0){
        this.tableData =  [
          {
            "orderId": "ddj123",
            "product": "数据统计",
            "version": "高级版",
            "period": "1年",
            "buyNum": 2,
            "date": "2016-10-10",
            "amount": "500元"
          },
          {
            "orderId": "yuj583",
            "product": "流量分析",
            "version": "户外版",
            "period": "3个月",
            "buyNum": 1,
            "date": "2016-5-2",
            "amount": "2200元"
          },
          {
            "orderId": "pmd201",
            "product": "广告发布",
            "version": "商铺版",
            "period": "3年",
            "buyNum": 12,
            "date": "2016-8-3",
            "amount": "7890元"
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }
  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }
  .order-list-option {
    display: inline-block;
    padding-left: 15px;
  }
  .order-list-option:first-child {
    padding-left: 0;
  }
  .order-list-table {
    margin-top: 20px;
  }
  .order-list-table table {
    width: 100%;
    background: #fff;
  }
  .order-list-table td,
  .order-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }
  .order-list-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
  }
  .order-list-table th.active {
    background: #35495e;
  }
</style>
