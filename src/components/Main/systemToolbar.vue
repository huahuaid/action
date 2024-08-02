<template>
  <div v-if="displayValue" class="system-toolbar">
    <div class="system-name">
      目前登陆的账号
    </div>
    <div class="system-card">
      <div class="avatar"></div>
      <div class="information">
        <div class="teamName">花花的工作室</div>
        <div class="identity">管理员</div>
      </div>
    </div>
    <div class="system-name">
      设置
    </div>
    <div class="system-edit">
      <span>主页选项</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    displayValue: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
});
</script>

<style scoped>
.system-toolbar {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 0px;
  background-color: #ffffff;
  border-radius: 16px;
  height: 85vh;
  width: 340px;
  position: fixed;
  top: 70px;
  right: 10px;
  z-index: 1000;
}

.system-name {
  margin: 10px 0 0 10px;
  height: 16px;
  width: 100px;
  font-size: 12px;
  font-weight: 400;
}

.system-card {
  border-radius: 8px;
  display: flex;
  height: 76px;
  width: 320px;
  margin: 10px 0 0 10px;
  position: relative;
}

.system-card:hover {
  background-color: rgb(233, 233, 233);
}

.system-card .avatar {
  margin: 16px 0 0 10px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: antiquewhite;
}

.system-card .teamName {
  font-size: 18px;
}

.system-card .information {
  margin: 20px 0 0 10px;
}

.system-edit {
  height: 48px;
  width: 320px;
  background-color: antiquewhite;
  border-radius: 8px;
  margin: 10px 0 0 10px;
}

.system-edit span {
  margin: 10px;
  line-height: 48px;
  font-size: 18px;
}
</style>