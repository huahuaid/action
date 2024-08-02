<template>
  <div class="main">
    <sideBar @sidebarActiveChange="handle"></sideBar>
    <div :class="sidebarActive ? 'huahua' : 'huahua1'">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sideBar from '../components/BlogHub/sideBar.vue'
export default defineComponent({
  components: {
    sideBar, // 在这里注册引入的组件
  },
  setup() {
    const sidebarActive = ref(false)
    const handle = (value: boolean) => {
      sidebarActive.value = value
    }

    return { handle, sidebarActive }
  }
})
</script>

<style scoped>
.huahua {
  margin-left: 300px;
  width: calc(100%-300px);
  height: 100vh;
  background-color: antiquewhite;
  transition: margin-left 0.5s ease;
}

.huahua1 {
  margin-left: 80px;
  width: calc(100%-70px);
  height: 100vh;
  background-color: antiquewhite;
  transition: margin-left 0.5s ease;
}
</style>