<template>
  <div class="card">
    <div class="tools">
      <div class="circle">
        <span class="red box"></span>
      </div>
      <div class="circle">
        <span class="yellow box"></span>
      </div>
      <div class="circle">
        <span class="green box"></span>
      </div>
    </div>
    <div class="card-content">
      <div class="title">
        <input type="text" class="title" v-model="title">
        <textarea class="textarea" v-model="logContent"></textarea>
        <div class="radio-container">
          <div class="radio-wrapper" @click="select(0)">
            <label class="radio-button">
              <input id="option1" name="radio-group" type="radio">
              <span class="radio-checkmark"></span>
              <span class="radio-label">development</span>
            </label>
          </div>
          <div class="radio-wrapper" @click="select(1)">
            <label class="radio-button">
              <input id="option2" name="radio-group" type="radio">
              <span class="radio-checkmark"></span>
              <span class="radio-label">system</span>
            </label>
          </div>
        </div>
      </div>
      <div class="button" @click="update">
        <div class="icon"><i class="iconfont">&#xe60a;</i></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'
// @ts-ignore
import request from '../../../utils/request'
import { LogItem } from '../../../common/standard'
export default defineComponent({
  props: {
    updateVague: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    item: {
      type: Object as PropType<LogItem>
    }
  },
  setup(props, { emit }) {
    const title = ref()
    const logContent = ref()
    const selectValue = ref()
    const id = ref()

    const update = () => {
      request.post('/api/development/update', {
        "id": id.value,
        "userId": 123,
        "action": title.value,
        "details": logContent.value,
        "level": selectValue.value
      }).then(() => {
        toggleVague()
      })
    }

    const toggleVague = () => {
      const newValue = !props.updateVague;
      emit('update-vague-information', newValue);
    };

    const select = (value: number) => {
      selectValue.value = value
    }

    // 在组件挂载后初始化 title 和 logContent  
    onMounted(() => {
      title.value = props.item?.action
      logContent.value = props.item?.details
      selectValue.value = props.item?.level
      id.value = props.item?.id
    })
    return { title, logContent, selectValue, update, select, toggleVague }
  }
})
</script>

<style scoped>
.card {
  width: 540px;
  height: 720px;
  margin: 0 auto;
  background: linear-gradient(0deg, #000, #272727);
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

.card-content {
  height: 85%;
  width: 90%;
  margin: 5%;
}

.button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  height: 36px;
  width: 36px;
  display: flex;
  border-radius: 50%;
  background-color: #353434;
}

.card-content .title {
  width: 100%;
  height: 48px;
  color: #fff;
  font-size: 36px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
}

.card-content .textarea {
  width: 100%;
  min-height: 50vh;
  color: #fff;
  font-size: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  resize: vertical;
  padding: 10px;
}

.radio-container {
  position: absolute;
  margin-top: 10px;
  max-width: 300px;
  color: white;
}

.radio-wrapper {
  margin-bottom: 20px;
}

.radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.radio-button:hover {
  transform: translateY(-2px);
}

.radio-button input[type="radio"] {
  display: none;
}

.radio-checkmark {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border: 2px solid #333;
  border-radius: 50%;
}

.radio-checkmark:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;
}

.radio-button input[type="radio"]:checked~.radio-checkmark:before {
  transform: translate(-50%, -50%) scale(1);
}

.radio-label {
  font-size: 16px;
  font-weight: 600;
}

.icon {
  margin: 9px;
}

.iconfont {
  font-size: 1.2em;
  color: #fff;
}
</style>
