<template>
    <div class="login-form">
      <div class="g-form">
        <div class="g-form-line">
          <span class="g-form-label">用户名：</span>
          <div class="g-form-input">
            <input type="text"
                   v-model="usernameMode"
                   placeholder="请输入用户名">
          </div>
          <span class="g-form-error">{{ userErrors.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">密码：</span>
          <div class="g-form-input">
            <input type="password"
                   v-model="passwordMode"
                   placeholder="请输入密码">
          </div>
          <span class="g-form-error">{{ passwordErrors.errorText }}</span>
        </div>
        <div class="g-form-line">
          <div class="g-form-btn">
            <a class="button" @click="onLogin">登录</a>
          </div>
        </div>
        <p>{{ errorText }}</p>
      </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
      data() {
          return {
            usernameMode:'',
            passwordMode:'',
            errorText:''
          }
      },
      computed:{
        userErrors() {
          let errorText,status
          if(!/@/g.test(this.usernameMode)){
            status = false;
            errorText = "不包含@"
          }else{
            status = true;
            errorText = ""
          }
          if(!this.userFlag){
            errorText = '';
            this.userFlag = true;
          }
          return{
            status,errorText
          }
        },
        passwordErrors() {
          let errorText,status
          if(!/^\w{1,6}$/g.test(this.passwordMode)){
            status = false;
            errorText = "密码不超过一到六位"
          }else{
            status = true;
            errorText = ""
          }
          if(!this.passwordFlag){
            errorText = '';
            this.passwordFlag = true;
          }
          return{
            status,errorText
          }
        }
      },
      methods:{
        onLogin() {
          if(!this.userErrors.status || !this.passwordErrors.status) {
            this.errorText = '部分选项未通过'
          }else{
            this.errorText = '';
//            this.$http.get('https://jsonplaceholder.typicode.com/users')
//              .then((res) => {
//                console.log(res.data.login);
//                this.$emit('has-log',res.data.login)
//              }, (err) => {
//                console.log(err)
//              });
            var _this = this;
            Axios.get('https://jsonplaceholder.typicode.com/users')
              .then(function (response) {
                _this.user = response.data[Math.floor(Math.random() * response.data.length)];
                console.log(_this.user)
                _this.$emit('has-log',_this.user)
              })
              .catch(function (err) {
                console.log(err);
              });
          }
          console.log(this.usernameMode + '/' + this.passwordMode)
        },
      }

    }
</script>
