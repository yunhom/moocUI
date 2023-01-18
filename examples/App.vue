<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo>我是个例子</Demo>
    <m-card imgSrc="1.jpg" summary="C 语言系统化精讲" />
    <br>
    <m-card imgSrc="2.jpg" summary="2022全面升级 重学C++ 重构C++知识体系">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 232人报名</div>
          <div class="price">¥ 299.00</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card imgSrc="3.png" :width="370" :imgHeight="90">
      Java 从初级到高级进阶面试路线
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 6门课</div>
          <div class="level">109834收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
