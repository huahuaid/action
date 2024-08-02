<template>
  <div class="screen">
    <div class="top-bar">
      <div class="red"></div>
      <div class="green"></div>
      <div class="yellow"></div>
    </div>
    <div class="body">
      <div class="note">
        <div class="button" @click="toEditLog"></div>
        <div class="button-background"></div>
        <div class="content">
          <div class="information">
            <span>{{ content.action }}</span>
          </div>
          <p>{{ content.details }}</p>
        </div>
        <div class="metaData">
          <div class="time">创作时间：{{ formattedTime }}</div>
          <div class="level">等级：{{ content.level }}</div>
          <div class="action">日志类型：{{ content.action }}</div>
        </div>
      </div>
      <div class="note-background"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { LogItem } from '../../../common/standard';
import { formatDateTime } from '../../../common/formatDateTime';

export default defineComponent({
  props: {
    content: {
      type: Object as PropType<LogItem>,
      required: true,
      default: () => ({ details: '默认内容' })
    }
  },
  emits: ['updateContent'],
  setup(props, { emit }) {
    const router = useRouter();

    const toEditLog = () => {
      router.push('/blog/edit');
    };

    const updateContent = (value: string) => {
      emit('updateContent', value);
    };

    // 计算属性用于格式化时间
    const formattedTime = computed(() => {
      return formatDateTime(props.content.createdTime);
    });

    return { toEditLog, updateContent, formattedTime };
  }
});
</script>

<style scoped>
.screen {
  height: 90%;
  width: 90%;
  background-color: #fff;
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  border-radius: 24px;
  box-shadow: -5px 5px 7px #c69e67;
}

.screen .top-bar {
  position: absolute;
  top: 0;
  width: 100%;
  height: 32px;
  background-color: #011522;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.red {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #ff605c;
  position: absolute;
  left: 16px;
}

.green {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #00ca4e;
  position: absolute;
  left: 72px;
}

.yellow {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #ffbd44;
  position: absolute;
  left: 44px;
}

.red,
.yellow,
.green {
  top: 50%;
  transform: translateY(-50%);
}

.button {
  z-index: 1000;
  top: 10px;
  right: 16px;
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: rgb(254, 150, 139);
  transition: top 0.3s ease, right 0.3s ease;
}

/* 实现当鼠标放在按钮上,按钮的下压 */
.button:hover {
  z-index: 1000;
  top: 14px;
  right: 18px;
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: rgb(254, 150, 139);
}

/* 这个是实现按钮按下的功能 */
.button:active {
  z-index: 1000;
  top: 16px;
  right: 20px;
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: rgb(254, 150, 139);
}

.button-background {
  top: 16px;
  right: 20px;
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #6a251d;
}



.screen .body {
  position: absolute;
  top: 32px;
  height: calc(100% - 64px);
  width: 100%;
  background-color: #fff;
}

.body .note-background {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  height: 90%;
  width: 90%;
  background-color: #6a251d;
  border-radius: 16px;
}

.body .note {
  z-index: 1000;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  left: 30px;
  height: 90%;
  width: 90%;
  background: linear-gradient(225deg, #ff897a, #e17367);
  border-radius: 16px;
}

.body .content {
  height: 100%;
  width: 100%;
  padding: 16px;
}

.body .content p {
  border-bottom: 1px solid black;
  line-height: 32px;
}

.body .information {
  height: 20%;
}

.body .information span {
  font-size: 32px;
}

.metaData {
  position: absolute;
  bottom: 24px;
  height: 20vh;
  width: 90%;
  left: 5%;
  border-top: 2px solid black;
  padding-top: 5vh;
}

.metaData div {
  margin-top: 1vh;
}
</style>