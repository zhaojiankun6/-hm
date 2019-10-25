<template>
  <div class="box">
    <el-card>
      <!-- logo区域 -->
      <img src="../assets/logo_index.png">
      <!-- 手机号区域 -->
      <el-form ref="form" :model="form">
  <el-form-item>
    <el-input v-abc v-model="form.name" placeholder="输入手机号"></el-input>
  </el-form-item>
  <div  class="ft">
    <i v-show="!form.name">手机号不能为空</i>
  </div>
     <!-- 验证码 -->
  <el-form-item class="wibox">
    <el-input v-model="form.code" placeholder="输入验证码"></el-input>
  </el-form-item>
       <el-button class="righ">发送验证码</el-button>
         <el-checkbox :value='true' class="bix" >我同意</el-checkbox>
          <el-button type="danger" style="width:350px;margin-top:50px;">登录</el-button>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import focu from '../directive/focus.vue'
console.log(focu.directives.focus)
export default {
  data () {
    return {
      checked: true,
      form: {
        name: '',
        code: ''
      }
    }
  },
  directives: {
    abc: focu.directives.focus
  }
}
</script>

<style lang="less">
.bix{
  position: absolute;
  left: 30px;
}
body{
  padding: 0;
  margin: 0;
}
.box{
  position: absolute;
  width:100%;
  height: 100%;
  background: url('../assets/login_bg.jpg') no-repeat;
}
.el-card{
  width: 400px;
  height: 360px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  img{
    width: 200px;
    margin-left: 30%;

  }
}
.wibox{
  width: 220px;
  float: left;
}
.righ{
  float: right;
}
.ft{
  font-size: 12px;
  color: red;
  position: relative;
  top: -15px;
  height: 14px;
}

</style>
