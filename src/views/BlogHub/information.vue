<template>
  <div class="container">
    <div class="bookmark" @click="Animation()" :class="{ 'slide-motion': isAnimation }">
      <div class="markIcon"></div>
    </div>
    <articleManager :isActive="isActive"></articleManager>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import articleManager from '../../components/BlogHub/Information/articleManager.vue'

const isActive = ref(true);
const isAnimation = ref(false);

const close = () => {
  isActive.value = !isActive.value;
}

const Animation = () => {
  isAnimation.value = !isAnimation.value
  setTimeout(() => {
    const icon = document.querySelector('.markIcon') as HTMLElement;
    icon.style.backgroundColor = ''
    close()
  }, 1500)
  setTimeout(() => {
    isAnimation.value = false;
  }, 3000);
}

</script>

<style scoped>
.bookmark {
  top: 0.5%;
  left: 10%;
  position: absolute;
  height: 50px;
  width: 10%;
}

.bookmark .markIcon {
  height: 100%;
  width: 100%;
  background-color: #84984d;
}

@keyframes slideUp {
  from {
    top: 0.5%;
  }

  to {
    top: 10%;
  }
}

@keyframes slideDown {
  from {
    top: 10%;
  }

  to {
    top: 0.5%;
  }
}

.slide-motion {
  animation: slideUp 1.5s ease forwards, slideDown 1.5s ease forwards 1.9s;
}

.upload div {
  margin-left: 30px;
}

p {
  font-size: 24px;
  font-weight: 500;
  margin: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>