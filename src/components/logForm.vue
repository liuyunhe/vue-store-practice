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
            this.$http.get('/api/login')
              .then((res) => {
                console.log(res.data.login);
                this.$emit('has-log',res.data.login)
              }, (err) => {
                console.log(err)
              })
          }
          console.log(this.usernameMode + '/' + this.passwordMode)
        },
      }

    }
</script>
