<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </this-dialog>
  </div>
</template>

<style>
    body {

    }
</style>

<script>
  import ThisDialog from './base/dialog.vue'
  export default {
    components:{
      ThisDialog
    },
    props:{
      isShowCheckDialog:{
        type:Boolean,
        default:false
      },
      orderId:{
        type:[String,Number],
      }
    },
    data() {
          return {
            isShowSuccessDialog:false,
            isShowFailDialog:false
          }
      },
    methods :{
      checkStatus() {
        this.$http.post('/api/createOrder', {
          orderId:this.orderId
        }).then((res)=>{
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        },(err)=>{
          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')
        })
      },
      toOrderList () {
        this.$router.push({path: '/orderList'})
      }
    }
  }
</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li.active {
    border: 1px solid #4fc08d;
  }
  .chooser-list li {
    display: inline-block;
    width: 117px;
    height: 32px;
    background-image: url(../assets/banks/banks.png);
    background-repeat: no-repeat;
    margin: 5px;
    border: 1px solid #e3e3e3;
    cursor: pointer;
  }
  .zhaoshang {
    background-position: -2160px 0;
  }
  .jianshe {
    background-position: -720px 0;
  }
  .pufa {
    background-position: -1800px 0;
  }
  .jiaotong {
    background-position: -3120px 0;
  }
  .minsheng {
    background-position: -2760px 0;
  }
  .pingan {
    background-position: -2400px 0;
  }
  .beijing {
    background-position: -960px 0;
  }
  .xingye {
    background-position: 0 0;
  }
  .shanghai {
    background-position: -1560px 0;
  }
  .guangfa {
    background-position: -840px 0;
  }
  .gongshang {
    background-position: -2640px 0;
  }
  .nongye {
    background-position: -1680px 0;
  }
  .guangda {
    background-position: -2280px 0;
  }
  .zhongguo {
    background-position: -2520px 0;
  }
  .zhongxin {
    background-position: -480px 0;
  }
  .chuxu {
    background-position: -120px 0;
  }
  .bnongshang {
    background-position: -1440px 0;
  }
  .huaxia {
    background-position: -2040px 0;
  }
  .snongshang {
    background-position: -2880px 0;
  }

  .baifubao {
    background-position: -1320px 0;
  }
</style>
