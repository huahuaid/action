<template>
  <div class="sticky-header" :style="{ height: isActive ? '150px' : '70px' }">
    <!-- 这个是文章推荐 -->
    <div class="title">
      <div class="name" v-if="isActive">
        <span style="font-weight: 600; font-size: 18px;">为你</span>
        <span>推荐</span>
      </div>
    </div>
    <!-- 这个是选择主页的按钮 -->
    <div class="home">
      <div class="home-select">
        <div class="logo">
          <svg aria-label="Pinterest" class="g_1 gUZ U9O kVc" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path
              d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12">
            </path>
          </svg>
        </div>
        <div class="content">
          huahua
        </div>
        <div class="menu">
          <svg t="1721094562314" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1523" width="16" height="16">
            <path
              d="M901.632 896H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 568.32H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 240.64H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808z"
              p-id="1524" class="custom-cursor-on-hover"></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- 箭头 -->
    <div class="downArrow" @click="toggleActive('downArrow')">
      <svg t="1720887827201" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="10551" width="20" height="20">
        <path d="M185.884 327.55 146.3 367.133 512.021 732.779 877.7 367.133 838.117 327.55 511.997 653.676Z"
          p-id="10552" class="custom-cursor-on-hover" fill="#8a8a8a"></path>
      </svg>
    </div>
    <!-- 头像 -->
    <div class="avatar" @click="toOtherPage()">
      <div class="icon">
        <el-avatar shape="circle" :size="20"
          :src="'https://i.pinimg.com/originals/35/c3/38/35c3389930de4ce78b4f18498cb2feca.jpg'" />
      </div>
    </div>
    <!-- 留言 -->
    <div class="message" @click="toggleActive('message')">
      <svg t="1720887798305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="9389" width="20" height="20">
        <path
          d="M512 96C229.2 96 0 282.3 0 512c0 92.1 36.8 177.1 99.1 246 4 4.5 5.3 10.9 3.1 16.5-5.7 14.7-12 29.2-19 43.3-12.9 26.3-28.2 51.7-45.3 75.5-6.2 8.6-7.7 19.7-4.1 29.6 3.6 10 11.9 17.5 22.2 20.1 9.4 2.4 25.2 5.4 44.8 5.4 26 0 58.7-5.4 91.5-25 21.4-12.8 37.5-28.6 49.3-44 4.5-5.9 12.5-7.9 19.3-4.8 74.2 34 159.8 53.4 251 53.4 282.8 0 512-186.3 512-416S794.8 96 512 96z m192 464c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z m-440-56c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56z m192 0c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56z"
          p-id="9390" fill="#8a8a8a"></path>
      </svg>
    </div>
    <!-- 提示 -->
    <div class="ring" @click="toggleActive('ring')">
      <svg t="1720887710433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="7159" width="20" height="20">
        <path
          d="M849.6 713.4c8.4-0.4 16.7 1.8 23.8 6.4-28.9-18.5-46.4-50.4-46.3-84.8V436c0-145.9-105.7-267.6-246.9-297.5v-7.2c0-37.1-30.1-67.1-67.2-67.1h-0.1c-37.1 0-67.3 30.1-67.3 67.2v7C304.3 168.4 198.7 290 198.7 436v199.1c0 35.7-18.6 66.9-46.4 84.8 7-4.6 15.4-6.9 23.8-6.4-24.7-0.9-45.5 18.4-46.4 43.1-0.9 24.7 18.4 45.5 43.1 46.4h676.6c24.7 0.1 44.8-20 44.9-44.7 0.1-24.8-19.9-44.9-44.7-44.9zM513 959.8c62 0 112.2-50.2 112.2-111.9H400.7c0 61.7 50.2 111.9 112.3 111.9z"
          fill="#8a8a8a" p-id="7160">
        </path>
      </svg>
    </div>
    <!-- 查找 -->
    <div class="search">
      <svg t="1720887517721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="5796" width="20" height="20">
        <path
          d="M986.2 893.3L822.8 727c54.8-75.1 87.3-167.7 87.3-268 0-250.8-202.6-454-452.5-454S5 208.3 5 459c0 250.8 202.6 454 452.5 454 101.8 0 195.7-33.7 271.3-90.6l159.3 162.2c13.3 13.6 31.2 20.4 49 20.4 16.8 0 33.7-6.1 46.9-18.3 27.1-25.2 28.1-67 2.2-93.4z"
          fill="#707070" p-id="5797"></path>
        <path d="M140.7 459a316.8 317.8 0 1 0 633.6 0 316.8 317.8 0 1 0-633.6 0Z" fill="#FFFFFF" p-id="5798"></path>
      </svg>
    </div>
    <!-- 身份卡小展示 -->
    <div class="information">
      <div class="avatar"></div>
      <div class="content">花花的博客</div>
      <div class="logo">
        <svg t="1721097024213" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="7302" width="20" height="20">
          <path
            d="M512 730c-6.4 0-12.8-2.4-17.7-7.3l-386-386c-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0L512 669.6l368.3-368.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4l-386 386c-4.9 4.9-11.3 7.3-17.7 7.3z"
            fill="#8a8a8a" p-id="7303"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter

export default defineComponent({
  props: {
    isActive: Boolean
  },
  setup(props, { emit }) {
    const router = useRouter(); // 使用 useRouter 获取路由实例

    const toggleActive = (componentName: string) => {
      emit('componentClick', componentName);
    };

    const toOtherPage = () => {
      router.push('/blog/home'); // 使用 router.push 进行路由跳转
    };

    return { toggleActive, toOtherPage };
  }
});
</script>

<style scoped>
.downArrow {
  margin-top: 10px;
  height: 48px;
  width: 48px;
  position: absolute;
  right: 10px;
  display: flex;
  border-radius: 50%;
}

.icon {
  margin: auto;
  height: 20px;
}

.downArrow:hover,
.avatar:hover,
.message:hover,
.ring:hover,
.search:hover {
  background-color: rgba(0, 0, 0, 0.06);
  /* 鼠标悬停时的背景颜色 */
}

.avatar {
  margin-top: 10px;
  height: 48px;
  width: 48px;
  margin-right: 10px;
  position: absolute;
  right: 58px;
  display: flex;
  border-radius: 50%;
}

.message {
  margin-top: 10px;
  height: 48px;
  width: 48px;
  margin-right: 10px;
  position: absolute;
  right: 116px;
  display: flex;
  border-radius: 50%;
}

.ring {
  margin-top: 10px;
  height: 48px;
  width: 48px;
  margin-right: 10px;
  position: absolute;
  right: 174px;
  display: flex;
  border-radius: 50%;
}

.search {
  margin-top: 10px;
  height: 48px;
  width: 48px;
  margin-right: 10px;
  position: absolute;
  right: 232px;
  display: flex;
  border-radius: 50%;
}

.information {
  height: 48px;
  margin-top: 10px;
  width: 168px;
  position: absolute;
  right: 300px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 50px;
}

.information .avatar {
  position: absolute;
  left: 5px;
  bottom: 5px;
  height: 36px;
  width: 36px;
  background-color: darksalmon;
}

.information .content {
  position: absolute;
  font-weight: 400;
  top: 14px;
  right: 40px;
}

.information .logo {
  position: absolute;
  right: 8px;
  top: 14px;
}

.information:hover {
  background-color: rgb(233, 233, 233);
}

.home {
  height: 48px;
  width: 130px;
  position: absolute;
  top: 10px;
  border-radius: 50px;
}

.home:hover {
  background-color: rgb(226, 226, 226);
}

.name {
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
}

.Placeholder {
  height: 10px;
  width: 100%;
}

.sticky-header {
  display: flex;
  height: 150px;
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 99;
}

.home-select {
  height: 100%;
  width: 100%;
  position: relative;
}

.home-select .menu {
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
}

.home-select .content {
  line-height: 48px;
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
}

.home-select .logo {
  position: absolute;
  height: 36px;
  width: 36px;
  top: 12px;
  left: 12px;
}
</style>
