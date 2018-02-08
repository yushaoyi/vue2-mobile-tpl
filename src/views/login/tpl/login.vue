<template>
  <section class="login-page">
    <div class="top_title">登录</div>

    <form class="form_wrap mt50">
      <div class="row">
        <div class="col12">
          <div class="input_wrap">
            <i class="icon icon1"></i>
            <div class="input_block">
              <input name="account" type="tel" v-model="fm.account" placeholder="请输入手机号">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col12">
          <div class="input_wrap">
            <i class="icon icon5"></i>
            <div class="input_block">
              <input name="password" type="password" v-model="fm.password" placeholder="请输入密码">
            </div>
          </div>
        </div>
      </div>
      <!--<div class="error text_c">error</div>-->
    </form>
    <div class="btn_wrap mt30">
      <button class="btn_block btn_color_blue" @click="login()">登录</button>
    </div>
    <div class="text_c mt30 f30 color_6">没有账号？立即 <a class="color_blue" :href="'#/register'">注册</a></div>
  </section>
</template>

<script src="../js/login.js"></script>
<style lang="scss">
  @import '../css/login.scss';
</style>
