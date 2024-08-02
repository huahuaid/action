<template>
  <div class="main">

    <div class="table">
      <el-input v-model="account" style="width: 240px" placeholder="账号" />
      <el-input v-model="password" style="width: 240px" placeholder="密码" />
      <el-button type="primary" @click="Clog">Primary</el-button>
      <el-button type="primary" @click="ClogGet">获取数据</el-button>
    </div>

    <div class="littlePrice">
      <img class="littlePrice" src="../assets/img/小王子与狐狸.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore 
import request from '../utils/request.js'
const account = ref('')
const password = ref('')

const Clog = () => {
  request.post('/login', {
    userId: account.value,
    password: password.value
  }).then((res: any) => {
    if (res.code === "200") {
      console.log("success")
      localStorage.setItem("token", res.data)
    } else {
      console.log('error')
    }
  })
}
const ClogGet = () => {
  request.get("/name").then((res: any) => {
    if (res.code === "200") {
      console.log('res', res)
    } else {
      console.log('error')
    }
  })
}

Clog
ClogGet
</script>

<style scoped>
.table {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}

/* 这是图片位置 */
.main {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: antiquewhite;
}

.littlePrice {
  position: absolute;
  transform: translateX(-50%);
  bottom: 0%;
  left: 50%;
  height: 275px;
  width: 200px;
}
</style>