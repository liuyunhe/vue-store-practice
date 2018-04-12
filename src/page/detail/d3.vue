<template>
    <div>
      <div class="sales-board">
        <div class="sales-board-intro">
          <h2>暗黑破坏神3</h2>
          <p>《暗黑破坏神III》是一款动作角色扮演游戏，游戏发生在庇护之地这个黑暗的幻想世界中。</p>
          <p>你将扮演一名英雄加入到快节奏的战斗中，这将考验你的反应，还会对你的巧妙战术予以嘉奖。在虐杀成群怪物和挑战首领时，你的经验值和能力会随之增长，你可学到新的技能并可获取威力非凡的物品。</p>
        </div>
        <div class="sales-board-form">
          <div class="sales-board-line">
            <div class="sales-board-line-left">
              购买数量：
            </div>
            <div class="sales-board-line-right">
              <v-counter
                @on-change="onParamChange('buyNumber',$event)"
              ></v-counter>
            </div>
          </div>
          <div class="sales-board-line">
            <div class="sales-board-line-left">
              可解锁内容：
            </div>
            <div class="sales-board-line-right">
              <v-selection
                :selections="productTypes"
                @on-change="onParamChange('buyType',$event)"
              ></v-selection>
            </div>
          </div>
          <div class="sales-board-line">
            <div class="sales-board-line-left">
              产品版本：
            </div>
            <div class="sales-board-line-right">
              <v-chooser
                :selections="periodList"
                @on-change="onParamChange('period',$event)"
              ></v-chooser>
            </div>
          </div>
          <div class="sales-board-line">
            <div class="sales-board-line-left">
              资料片：
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
          <h2>迄今为止的故事</h2>
          <p>烈焰地狱的恶魔早已渴望侵略人类世界。为此，一群被称为魔王的强大的恶魔领主将它们的同类，即魔神，从地狱中放逐到了庇护之地的人类世界。</p>


          <h3>死灵法师</h3>
          <p>死灵法师使用鲜血以及白骨的力量维护庇护之地的平衡。他们可以使用诅咒让敌人深陷无限的痛苦之中。同时还能操控强力的骷髅大军以及巨大的傀儡击溃敌人。</p>
          <br>
          <ul>
            <li>操控由骷髅士兵以及法师组成的大军。</li>
            <li>使用可怖的诅咒折磨与削弱敌人。</li>
            <li>收割敌人的精魄以掌管生与死。</li>
          </ul>

          <h3>野蛮人</h3>
          <p>野蛮人是一位身材魁梧、身披重甲的战士，他是一位来自曾经守候亚瑞特圣山部族的流浪者。</p>
          <br>
          <ul>
            <li>使用近战武器，战斗勇猛。</li>
            <li>拥有强健的体魄来使用重型双手武器，或者一手持盾一手持单手武器。</li>
            <li>造成或受到伤害时生成怒气，然后凭借怒气释放毁灭性的攻击。</li>
          </ul>

          <h3>圣教军</h3>
          <p>圣教军是一位身穿铁甲、运用圣光之力的勇士。他们秉持正义之道，哪里有邪恶为祸人间，他们就会出现在哪里。</p>
          <br>
          <ul>
            <li>使用可怕的连枷武器和各种大盾来审判邪恶——后者既可防御也可进攻。</li>
            <li>使用各式各样的技能逼迫邪恶军团进行近距离或中距离的战斗，宣读多种律法来增强对抗邪恶之士的战斗能力。</li>
            <li>使用各式各样的技能逼迫邪恶军团进行近距离或中距离的战斗，宣读多种律法来增强对抗邪恶之士的战斗能力。</li>
          </ul>

          <h3>猎魔人</h3>
          <p>猎魔人是一位从恶魔袭击中侥幸活下来的幸存者，他将自己的生命和灵魂投入到了一场永无终结的斗争之中，即剿灭所有胆敢威胁庇护之地的恶魔。</p>
          <br>
          <ul>
            <li>使用例如手雷、弓箭、弩箭等远程武器给敌人带去死亡。</li>
            <li>依靠多种躲避技能保持高机动性，使用各种精心布置的陷阱诱捕敌人。</li>
            <li>依赖憎恨值，一种快速回复的心中怒火，以及戒律值，一种用于施展射术技能的能量。</li>
          </ul>

          <h3>武僧</h3>
          <p>武僧是一名神圣的武士、万神的仆人，他将自己的身体磨练成了一件致命的武器。</p>
          <br>
          <ul>
            <li>使用闪电般的快拳以及例如匕首和降魔杖等独门近战武器降妖除魔。</li>
            <li>召唤他的一千零一位神灵来给予他保护、防御、治疗以及驱邪的能力。</li>
            <li>生成内力，这是一种自身内在的力量，使武僧能够施展各种进攻和防御性招法。</li>
          </ul>

          <h3>巫医</h3>
          <p>巫医施展的是来自无形之地中的万灵的力量，从而能召唤来自亡界的冥物。</p>
          <br>
          <ul>
            <li>召唤可怕的亡者、魔物以及其它冥物来进行防御和进攻。</li>
            <li>使用剧毒、强酸以及火焰来攻击敌人。</li>
            <li>使用法力值来施放法术和召唤冥物，这是一种缓慢累积的能量源泉。</li>
          </ul>

          <h3>魔法师</h3>
          <p>魔法师是一位能操控时间和元素力量的奥法奇才，不断追寻着自己的命运和力量。</p>
          <br>
          <ul>
            <li>运用奥术魔法，操纵时空、时间、自然界以及神秘的元素力量。</li>
            <li>冰冻、焚烧并控制敌人。</li>
            <li>使用奥术能量快速施展魔法，这是一种能快速回复的能量。</li>
          </ul>
        </div>
        <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
          <table class="buy-dialog-table">
            <tr>
              <th>购买数量</th>
              <th>产品类型</th>
              <th>有效时间</th>
              <th>产品版本</th>
              <th>总价</th>
            </tr>
            <tr>
              <td>{{ buyNumber }}</td>
              <td>{{ buyType.label }}</td>
              <td>{{ period.label }}</td>
              <td>
                <span v-for="(item,index) in versions">{{!index ?  item.label :',' + item.label}}</span>
              </td>
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
    </div>
</template>

<script>
    import VSelection from '../../components/base/selection.vue'
    import VChooser from '../../components/base/chooser.vue'
    import VMulChooser from '../../components/base/multiplyChooser.vue'
    import VCounter from '../../components/base/counter.vue'
    import Dialog from '../../components/base/dialog.vue'
    import BankChooser from '../../components/bankChooser.vue'
    import CheckOrder from '../../components/checkDialog.vue'
    import _ from 'lodash'
    export default {
      components: {
        VSelection,VChooser,VMulChooser,VCounter,
        myDialog:Dialog,
        BankChooser,
        CheckOrder
      },
//      created () {
//        this.$http.post('http://localhost:8080/api/getPrice').then((response) => {
//          console.log(response.data)
//        })
//      },
      data() {
          return {
            buyNumber:0,
            buyType:{},
            versions:[],
            period:{},
            productTypes:[
              {
                label: '无限畅玩包',
                value: 0
              },
              {
                label: '数字典藏包',
                value: 1
              },
            ],
            periodList: [
              {
                label: '客户版',
                value: 0
              },
              {
                label: '代理商版',
                value: 1
              },
              {
                label: '专家版',
                value: 2
              }
            ],
            versionList: [
              {
                label: '暗黑破坏神3',
                value: 0
              },
              {
                label: '暗黑破坏神3死神之镰',
                value: 1
              },
              {
                label: '暗黑破坏神3死灵再世',
                value: 2
              }
            ],
            price:0,
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
            return item.value
          })
          let reqParams = {
            buyNumber:this.buyNumber,
            buyType:this.buyType.value,
            versions:buyVersionsArray.join(','),
            period:this.period.value,
          }
          this.$http.post('/api/getPrice',reqParams)
            .then((res)=>{
//              console.log(res.data.getPrice.amount)
              this.price = res.data.getPrice.amount
            })
        },
        hidePayDialog() {
          this.isShowPayDialog = false
        },
        payClick() {
          this.isShowPayDialog = true
        },
        onChangeBanks(bankObj) {
          this.bankId = bankObj.id;
        },
        confirmBuy() {
          let buyVersionsArray = _.map(this.versions,(item)=>{
            return item.value
          })
          let reqParams = {
            buyNumber:this.buyNumber,
            buyType:this.buyType.value,
            versions:buyVersionsArray.join(','),
            period:this.period.value,
            bankId:this.bankId
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
        hideCheckOrderDialog() {
          this.isShowCheckOrder = false;
        },
        hideErrDialog() {
          this.isShowErrDialog = false;
          this.$router.push({path: '/orderList'})
        }
      },
      mounted() {
          this.buyNumber = 1,
          this.buyType = this.productTypes[0]
          this.versions = [this.versionList[0]]
          this.period = this.periodList[0]
          this.getPrice()
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
    background: #363636;
    color: #fff;
    border: 1px solid #363636;
  }
</style>
