<template>
    <div class="chooser-component">
      <ul class="chooser-list">
        <li v-for="(item,index) in selections"
            :title="item.label"
            :class="{active:index === nowIndex}"
            @click="choosenSelection(index)"
        >{{ item.label }}</li>
      </ul>
    </div>
</template>

<script>
    import bus from '../../eventsCenter/bus'
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
                nowIndex: 0
            }
        },
        methods:{
          choosenSelection(index) {
            this.nowIndex = index;
            bus.$emit('choose','choose');
            this.$emit('on-change',this.selections[this.nowIndex]);
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
