<template>
    <div class="chooser-component">
      <ul class="chooser-list">
        <li v-for="(item,index) in selections"
            :title="item.label"
            :class="{active:checkActive(index)}"
            @click="toggleSelection(index)"
        >{{ item.label }}</li>
      </ul>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: "",
        props:{
          selections:{
            type:Array,
            default:[{
              label:'test',
              value:0
            }]
          }
        },
        data() {
            return {
                nowIndexes:[]
            }
        },
        methods:{
          checkActive(index) {
           return this.nowIndexes.indexOf(index) !== -1
          },
          toggleSelection(index) {
            if(this.nowIndexes.indexOf(index) === -1){
              this.nowIndexes.push(index)
            }else{
              this.nowIndexes = _.remove(this.nowIndexes,(idx) => {
                return idx != index
              })
            }
            let nowObjArray = _.map(this.nowIndexes,(idx) => {
              return this.selections[idx]
            })
//            console.log(nowObjArray)
            this.$emit("on-change",nowObjArray)
          }
        }
    }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #363636;
    background: #363636;
    color: #fff;
  }
</style>
