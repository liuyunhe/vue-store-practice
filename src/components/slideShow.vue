<template>
  <div class="slide-show" @mouseover="clearIntv" @mouseout="runIntv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" alt="">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src" alt="">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goTo(prevIndex) ">&lt;</li>
      <li v-for="(item,index) in slides">
        <a @click="goTo(index)" :class="{'on':index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goTo(nextIndex)">&gt;</li>
    </ul>
  </div>

</template>

<script>
export default {
//  父组件传入参数
  props:{
    slides:{
      type:Array,
      default:[]
    },
    intv:{
      type:Number,
      default:1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow:true
    }
  },
  computed:{
    prevIndex() {
      if(this.nowIndex === 0){
        return this.slides.length - 1;
      }else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if(this.nowIndex === 3){
        return 0
      }else {
        return this.nowIndex +1;
      }

    }
  },
  methods:{
    goTo(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
        this.$emit('onChange',index)
      },10)

    },
    runIntv() {
      this.intvId = setInterval(() => {
        this.goTo(this.nextIndex)
//        console.log('123')
      },this.intv)
    },
    clearIntv() {
      clearInterval(this.intvId)
    }
  },
//  渲染完毕
  mounted() {
    console.log(this.prevIndex);
    this.runIntv();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
