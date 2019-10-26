/* eslint-disable eqeqeq */
<template>
  <div class="box">
    <el-card>
      <!-- logo区域 -->
      <img src="../assets/logo_index.png">
      <!-- 手机号区域 -->
      <!-- status-icon是否在输入框显示图标 -->
      <!-- rules ele定义的属性用来绑定验证规则 -->
      <el-form ref="form"  :rules="arules"  :model="form" status-icon >
  <el-form-item prop="mobile">
    <el-input  v-model="form.mobile" placeholder="输入手机号"></el-input>
  </el-form-item>

     <!-- 验证码 -->
  <el-form-item class="wibox" prop="code">
    <el-input v-model="form.code" placeholder="输入验证码"></el-input>
  </el-form-item>
       <el-button class="righ">发送验证码</el-button>
         <el-checkbox :value='true' class="bix" >我同意</el-checkbox>
          <el-button type="danger" style="width:350px;margin-top:50px;" @click="loginchk('form')">登录</el-button>
        </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  data () {
    const checklogin = (arules, val, callback) => {
      if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)) {
        callback()
      } else {
        return callback(new Error('格式不对'))
      }
    }
    return {
      checked: true,
      form: {
        mobile: '',
        code: ''
      },
      arules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // eslint-disable-next-line no-undef
          { validator: checklogin, trigger: 'blur' }
        ],
        code: [ { required: true, message: '请输入活动名称', trigger: 'blur' },
          { len: 6, message: '长度在6个字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    loginchk (el) {
      // el是form
      this.$refs[el].validate((data) => {
        if (data) {
          this.$http.post('authorizations', this.form).then(res => {
            // 登陆成功就跳转页面
            this.$router.push('/')
          }).catch(() => { this.open1() })
        } else {
          this.open1()
        }
      })
    },
    open1 () {
      const h = this.$createElement
      this.$notify({
        title: '您好!',
        message: h('i', { style: 'color: red' }, '手机号或者验证码错误')
      })
    }
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

</style>
