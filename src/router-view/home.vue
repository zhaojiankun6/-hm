<template>
  <div>
    <el-container class="container">
        <!-- 侧边栏导航栏 -->
        <div class="bgimg" :class="{small:small}"></div>
  <el-aside  class="slideBar" :style="{width:width}" :class="{small1:small}" >
      <el-menu
      :collapse='small'
      :collapse-transition='false'
      default-active="/"
      background-color="#002033"
      text-color="#fff"
      router
      active-text-color="yellow">
        <el-menu-item :style="{width:width}" index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
         <el-menu-item :style="{width:width}" index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
          <el-menu-item :style="{width:width}" index="/image">
        <i class="el-icon-document"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
        <el-menu-item :style="{width:width}" index="/publish">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
        <el-menu-item :style="{width:width}" index="/comment">
        <i class="el-icon-chat-dot-round"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
        <el-menu-item :style="{width:width}" index="/fans">
        <i class="el-icon-present"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
         <el-menu-item :style="{width:width}" index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item >
    </el-menu>
  </el-aside>
  <el-container>
    <el-header class="navTop" :style="{paddingLeft:width}">
        <div class="gole">
         <span class="el-icon-s-fold icon btn" @click="show()"></span>
        <span>江苏传智播客有限公司</span>
        </div>
        <el-dropdown>
  <span class="el-dropdown-link">
    用户名称<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
    <img class="gori" src="../assets/avatar.jpg" width="30" alt="">
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>
         <span class="el-icon-setting">  </span>
         个人设置</el-dropdown-item>
    <el-dropdown-item>
        <span class="el-icon-lock">  </span>
        退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </el-header>
    <el-main class="mainBody">
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      small: false,
      width: '200px'
    }
  },
  methods: {
    show () {
      this.small = !this.small
      if (this.width === '200px') {
        this.width = '70px'
      } else {
        this.width = '200px'
      }
    }
  }
}
</script>

<style lang='less'>
.btn{
    cursor: pointer;
}
.container{
    width: 100%;
    height: 100%;
    position: absolute;
}

.slideBar{
    height: 100%;
    background: #002033;
    position: absolute;

}
.navTop{
    width: 100%;
    height: 200px;
    background: #dddddd40;
    // padding-left:200px;
    box-sizing: border-box;
}
.mainBody{
    width: 100%;
    height: 100%;
}
.el-submenu{
    height: 56px;

}.el-menu{
    width: 200px;
    border: none;
    margin-top:60px;
}
.bgimg{
    width: 200px;
    height: 60px;
    background: #002244 url('../assets/logo_admin.png') no-repeat center / 140px auto;
    position: absolute;
    z-index: 1;
}
.small{
    width: 50px;
    height: 50px;
   background: url('../assets/logo_admin.png') no-repeat;
    position: absolute;
    left: 15px;
    top: 15px;
}
.el-dropdown{

    position: absolute;
    right: 20px;
    top: 15px;
    img{
        float: left;
        margin-top: -5px;
        margin-right: 5px;
    }
}
.gole{
    margin: 15px 20px;
}
.small1{
    width: 60px;
}

</style>
