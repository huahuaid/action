<template>
  <div class="page-main">
    <div class="container">
      <img src=" ../assets/img/小王子与狐狸.png" />
    </div>
    <!-- 功能栏 -->
    <featureBar @componentClick="handleComponentClicked">
    </featureBar>
    <router-view />
    <systemToolbar :displayValue="buttonState[3].isActive"></systemToolbar>
    <messageToolbar :displayValue="buttonState[1].isActive"></messageToolbar>
    <pointToolbar :displayValue="buttonState[2].isActive"></pointToolbar>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'; // 导入 useRouter
import { Toolbar } from '../common/standard'//引入规范
import pointToolbar from '../components/Main/pointToolbar.vue'
import systemToolbar from '../components/Main/systemToolbar.vue'
import messageToolbar from '../components/Main/messageToolbar.vue'
import featureBar from '../components/Main/featureBar.vue'

const buttonState = ref<Toolbar[]>([
  { name: 'avatar', isActive: false },
  { name: 'message', isActive: false },
  { name: 'ring', isActive: false },
  { name: 'downArrow', isActive: false }
]);

const handleComponentClicked = (componentName: string) => {
  buttonState.value.forEach(element => {
    if (element.name === componentName && element.isActive === false) {
      element.isActive = true
    } else {
      element.isActive = false
    }
  })
};

const handlePageScroll = () => {
  buttonState.value.forEach(element => {
    element.isActive = false
  })
};

window.addEventListener('scroll', handlePageScroll);

// 在页面销毁时移除事件监听器  
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handlePageScroll);
});

</script>

<style scoped>
.page-main {
  background: #ffffff;
  height: auto;
  margin: 0 10px;
  position: relative;
}

.container {
  height: 100vh;
  widows: 100%;
  position: relative;
}

.container img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 275px;
}
</style>