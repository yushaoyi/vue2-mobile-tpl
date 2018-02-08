<template>
  <section class="register-page">
    <div class="top_title">注册</div>
    <form class="form_wrap mt50">
      <div class="row">
        <div class="col12">
          <div class="input_wrap">
            <i class="icon icon1"></i>
            <div class="input_block">
              <input name="number" type="tel" v-model="fm.number" placeholder="请填写家长/学生手机号">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col8">
          <div class="input_wrap">
            <i class="icon icon2"></i>
            <div class="input_block">
              <input name="number_code" type="text" v-model="fm.number_code" placeholder="请输入验证码">
            </div>
          </div>
        </div>
        <div class="col4">
          <div class="btn_wrap">
            <count-down-btn :key="1" text="获取验证码" class="btn_block2 btn_color_blue f25"
                            :start=startTimer  @click="sendMsg()" :callback="msgCallback"></count-down-btn>
            <!--<button class="btn_block2 btn_color_blue f25" type="button" @click="sendMsg()" :disabled="sendMsgDisabled">获取验证码</button>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col12">
          <div class="input_wrap">
            <i class="icon icon7"></i>
            <div class="input_block">
              <input name="nickname" type="text" v-model="fm.nickname" placeholder="请填写学生姓名">
            </div>
          </div>
        </div>
      </div>
      <!--<div class="row">-->
        <!--<div class="col6">-->
          <!--<div class="input_wrap">-->
            <!--<i class="icon icon3"></i>-->
            <!--<div class="input_block">-->
              <!--<select name="subject" v-model="fm.subject">-->
                <!--<option value ="数学">数学</option>-->
                <!--<option value ="英语">英语</option>-->
                <!--<option value ="语文">语文</option>-->
                <!--<option value ="物理">物理</option>-->
                <!--<option value ="化学">化学</option>-->
              <!--</select>-->
            <!--</div>-->
            <!--<i class="arrow"></i>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col6">-->
          <!--<div class="input_wrap">-->
            <!--<i class="icon icon4"></i>-->
            <!--<div class="input_block">-->
              <!--<select name="grade" v-model="fm.grade">-->
                <!--<option value ="高三">高三</option>-->
                <!--<option value ="高二">高二</option>-->
                <!--<option value ="高一">高一</option>-->
                <!--<option value ="初三">初三</option>-->
                <!--<option value ="初二">初二</option>-->
                <!--<option value ="初一">初一</option>-->
              <!--</select>-->
              <!--<i class="arrow"></i>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <div class="row">
        <div class="col12">
          <div class="input_wrap">
            <i class="icon icon5"></i>
            <div class="input_block">
              <input name="password" type="password" v-model="fm.password" placeholder="请设置密码">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col12">
          <div class="input_wrap">
            <i class="icon icon5"></i>
            <div class="input_block">
              <input name="rePassword" type="password" v-model="fm.confirm_password" placeholder="请再次输入密码">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col12 text_c">
          <div @click="toggleCheck()" class="input_check_wrap">
            <span class="inner" :class="{'is-checked': agreeCheck}"></span>
            <input type="checkbox" class="inVisible" name="agreeCheck"/>
          </div>
          我已经阅读并同意
          <a id="service_terms_btn" @click="showServiceInfo = true" class="color_blue">《服务条款》</a>
        </div>
      </div>

      <!--<div class="error text_c">error</div>-->
    </form>
    <div class="btn_wrap mt30">
      <button class="btn_block btn_color_blue" @click="register()">注册</button>
    </div>
    <div class="text_c mt30 f30 color_6">已有账号，直接 <a class="color_blue" :href="'#/login'">登录</a></div>
  </section>
</template>

<script src="../js/register.js"></script>
<style lang="scss">
  @import '../css/register.scss';
</style>
