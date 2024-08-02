<template>
  <div class="sidebar" :class="{ active: sidebarActive }">
    <ul>
      <li class="logo">
        <a href="#">
          <div class="icon" @click="toggleSidebar">
            <i class="iconfont" v-if="sidebarActive">&#xe647;</i>
            <i class="iconfont" v-else>&#xe69d;</i>
          </div>
          <div class="text">花花的博客</div>
        </a>
      </li>
      <div class="Menulist">
        <li :class="{ active: activeIndex === 0 }">
          <a href="#" @click="activateLink(0)">
            <div class="icon"><i class="iconfont">&#xe655;</i></div>
            <div class="text">主页</div>
          </a>
        </li>
        <li :class="{ active: activeIndex === 1 }" @click="activateLink(1)">
          <a href="#">
            <div class="icon"><i class="iconfont">&#xe624;</i></div>
            <div class="text">文章</div>
          </a>
        </li>
        <li :class="{ active: activeIndex === 2 }" @click="activateLink(2)">
          <a href="#">
            <div class="icon"><i class="iconfont">&#xe60a;</i></div>
            <div class="text">信息</div>
          </a>
        </li>
        <li :class="{ active: activeIndex === 3 }" @click="activateLink(3)">
          <a href="#">
            <div class="icon"><i class="iconfont">&#xe613;</i></div>
            <div class="text">日志</div>
          </a>
        </li>
        <li :class="{ active: activeIndex === 4 }" @click="activateLink(4)">
          <a href="#">
            <div class="icon"><i class="iconfont">&#xe60f;</i></div>
            <div class="text">个人</div>
          </a>
        </li>
        <li :class="{ active: activeIndex === 5 }" @click="activateLink(5)">
          <a href="#">
            <div class="icon"><i class="iconfont">&#xe69c;</i></div>
            <div class="text">权限</div>
          </a>
        </li>
      </div>
      <div class="bottom">
        <li style="--bg:#333;">
          <a href="#">
            <div class="icon">
              <div class="imgBx">
                <img src="../../assets/img/哈尔.jpg" alt="">
              </div>
            </div>
            <div class="text">Welcome 花花</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon"></div>
            <div class="text" @click="layout">退出</div>
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>


<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter

export default defineComponent({
  setup(props, { emit }) {
    const router = useRouter(); // 获取 router 实例

    const sidebarActive = ref(false);
    const activeIndex = ref(0);

    const toggleSidebar = () => {
      sidebarActive.value = !sidebarActive.value;
      emit('sidebarActiveChange', sidebarActive.value);
    };

    const activateLink = (index: number) => {
      activeIndex.value = index;
      if (index == 0) {
        router.push('/blog/home')
      } else if (index == 1) {
        router.push('/blog/edit')
      } else if (index == 2) {
        router.push('/blog/information')
      } else if (index == 3) {
        router.push('/blog/log')
      }

    };

    const layout = () => {
      // 使用 router.push 进行导航
      router.push("/main/show");
    };

    return {
      layout,
      sidebarActive,
      activeIndex,
      toggleSidebar,
      activateLink
    }
  }
});
</script>


<style scoped>
.main {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: antiquewhite;
  transition: margin-left 0.5s ease;
}

.iconfont {
  font-size: 24px;
}

.sidebar {
  position: absolute;
  width: 80px;
  height: 100vh;
  /*background: #f2b5b1;*/
  background: #111f2c;
  transition: 0.5s;
  padding-left: 10px;
  overflow: hidden;
}

.sidebar.active {
  width: 300px;
}

.sidebar ul {
  position: relative;
  height: 100vh;
}

.sidebar ul li {
  position: relative;
  list-style: none;
}

.sidebar ul li.active {
  background: antiquewhite;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

/* 用来划定选项边界的弧形的 */
.sidebar ul li.active::before {
  content: "";
  position: absolute;
  top: -20px;
  right: 0;
  width: 20px;
  height: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 5px 5px 0 5px antiquewhite;
  background: transparent;
}

.sidebar ul li.active::after {
  content: "";
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 20px;
  height: 20px;
  border-top-right-radius: 20px;
  box-shadow: 5px -5px 0 5px antiquewhite;
  background: transparent;
}

.sidebar ul li.logo {
  margin-bottom: 100px;
}

.sidebar ul li.logo .icon {
  font-size: 2em;
  color: #fff;
}

.sidebar ul li.logo .text {
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
}

.sidebar ul li a {
  position: relative;
  display: flex;
  white-space: nowrap;
  text-decoration: none;
}

.sidebar ul li a .icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  padding-left: 10px;
  height: 70px;
  font-size: 1.5em;
  color: #fff;
  transition: 0.5s;
}

.sidebar ul li a .text {
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #fff;
  padding-left: 15px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: 0.5s;
}

.sidebar ul li.active a .icon {
  color: #111f2c;
}

.sidebar ul li.active a .text {
  color: #111f2c;
}

.sidebar ul li:hover a .icon,
.sidebar ul li:hover a .text {
  color: #fff;
}

.sidebar ul li:hover.active a .icon::before {
  background: #fff;
}

.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.imgBx {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
