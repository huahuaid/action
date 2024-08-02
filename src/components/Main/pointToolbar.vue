<template>
  <div v-if="displayValue" class="ring-toolbar">
    <div class="name">
      更新
    </div>
    <div class="scroller">
      <div class="information">
        <img class="avatar" src="https://i.pinimg.com/originals/a9/89/67/a989678018e20f96562448d79d169a54.jpg" />
        <div class="content">你对线条艺术的兴趣启发的更多灵感</div>
        <div class="time">4天</div>
        <div class="function"></div>
      </div>
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
.ring-toolbar {
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

.ring-toolbar .name {
  height: 67px;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  padding-top: 21.5px;
}

.ring-toolbar .scroller {
  overflow: auto;
  height: 70vh;
  width: 100%;
}

.ring-toolbar .scroller::-webkit-scrollbar {
  width: 1px;
}


.information {
  height: 88px;
  width: 324px;
  margin: 0 8px 8px 8px;
  display: flex;
  position: relative;
  border-radius: 16px;
}

.information .avatar {
  height: 72px;
  width: 58px;
  background-color: antiquewhite;
  position: absolute;
  top: 8px;
  left: 8px;
  border-radius: 16px;
}

.information .content {
  height: 72px;
  width: 198px;
  position: absolute;
  top: 8px;
  left: 72px;
  padding-top: 18px;
}

.information .time {
  height: 16px;
  width: 32px;
  position: absolute;
  top: 24px;
  right: 8px;
}

.information:hover {
  background-color: rgb(233, 233, 233);
}
</style>