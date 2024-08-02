<template>
  <div class="main" :class="Vague || vagueUpdate ? 'vague-style' : 'normal-style'">
    <div class="left">
      <div class="add" @click="addLog"></div>
      <div class="update" @click="updateLog"></div>
      <div class="line-block">
        <div class="card" v-for="(logItem, index) in item" :key="index" @click="choseLog(logItem)">
          <div class="rubbish" @click="deleteDevelopmentLog(logItem)"></div>
          <div class="envelope">
            <p class="content">{{ logItem.action }}</p>
          </div>
          <div class="information"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <screenLog :content="parentContent" @:updateContent="updateContent"></screenLog>
    </div>
  </div>
  <div class="table" v-if="Vague">
    <dialogBox :Vague="Vague" @update-vague="updateVague"></dialogBox>

  </div>
  <div class="table" v-if="vagueUpdate">
    <updateDialogBoxVue :item="selectedItem" :update-vague="vagueUpdate"
      @update-vague-information="updateVagueInformation">
    </updateDialogBoxVue>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import screenLog from '../../components/BlogHub/BlogLog/screenLog.vue'
// @ts-ignore
import request from '../../utils/request'
import { LogItem } from '../../common/standard'
import dialogBox from '../../components/BlogHub/BlogLog/dialogBox.vue'
import updateDialogBoxVue from '../../components/BlogHub/BlogLog/updateDialogBox.vue'
export default defineComponent({
  components: {
    screenLog,
    dialogBox,
    updateDialogBoxVue
  },
  setup() {
    const item = ref<LogItem[]>([]);
    const logItem = ref<LogItem>();

    const content = ref<LogItem>()
    const parentContent = ref<LogItem>()

    const Vague = ref(false)
    const vagueUpdate = ref(false)

    const selectedItem = ref()
    // 这个是子组件传出来的方法，用来获取数据的
    const updateContent = (newValue: LogItem) => {
      parentContent.value = newValue
    }
    // 这里是向子组件传值的方法,传我选中的日志的内容
    const choseLog = (item: LogItem) => {
      updateContent(item);
      selectedItem.value = item
    }

    const getDevelopmentLog = () => {
      request.get(`/api/development/get`, {
        params: {
          id: 123
        }
      }).then((res: any) => {
        item.value = res.data
      })
    }

    const deleteDevelopmentLog = (item: any) => {
      request.post('/api/development/delete', { id: item.id }).then((res: any) => {
        getDevelopmentLog()
      })
    }

    const addLog = () => {
      vagueUpdate.value ? Vague.value = Vague.value : Vague.value = !Vague.value
    }

    const updateLog = () => {
      Vague.value ? vagueUpdate.value = vagueUpdate.value : vagueUpdate.value = !vagueUpdate.value
    }

    const updateVague = (newValue: boolean) => {
      Vague.value = newValue;
      getDevelopmentLog()
    };

    const updateVagueInformation = (newValue: boolean) => {
      vagueUpdate.value = newValue;
      getDevelopmentLog()
    };

    onMounted(() => {
      getDevelopmentLog()
    })

    return {
      item, content, logItem, Vague, selectedItem, updateLog, choseLog, addLog, updateVague,
      updateContent, deleteDevelopmentLog, updateVagueInformation, parentContent, vagueUpdate
    }
  }
})
</script>


<style scoped>
.vague-style {
  opacity: 0.5;
}

.normal-style {
  opacity: 1;
}

.main {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
}

.left {
  width: 60%;
  height: 100%;
  position: relative;
}

.left .line-block {
  height: 100%;
  width: 75%;
  border-left: 5px solid black;
  border-right: 5px solid black;
  overflow: auto;
  position: absolute;
  left: 20%;
  box-shadow: -7px 10px 10px #dcb071;
}

::-webkit-scrollbar {
  width: 10px;
  /* 调整滚动条宽度 */
}

.left .card {
  height: 200px;
  width: 85%;
  position: relative;
  border-top: 5px solid black;
  margin-bottom: 100px;
  margin-top: 50px;
}

.left .information {
  width: 80%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: antiquewhite;
  box-shadow: -7px 5px 10px #dcb071;
  border-left: 5px solid black;
  border-right: 5px solid black;
  border-bottom: 5px solid black;
  overflow: hidden;
}

.rubbish {
  position: absolute;
  top: -50px;
  left: 48px;
  height: 48px;
  width: 48px;
  background-image: url("../../assets/img/花盆.png");
}

.right {
  width: 40%;
  height: 100%;
  position: relative;
}

.envelope {
  width: 70%;
  height: 100%;
  position: absolute;
  right: 5%;
  bottom: 30px;
  background-color: white;
  border-radius: 16px;
  padding: 10px;
  transition: bottom 0.3s ease;
}

.envelope:hover {
  width: 70%;
  height: 100%;
  position: absolute;
  right: 5%;
  bottom: 50px;
  background-color: white;
  border-radius: 16px;
}

.envelope .content {
  border-bottom: 2px solid black;
}

.table {
  position: absolute;
  top: 4vh;
  left: 50%;
  transform: translateX(-50%);
}

.add {
  position: absolute;
  top: 16px;
  left: 16px;
  height: 36px;
  width: 36px;
  display: flex;
  border-radius: 50%;
  background-color: #ffbd44;
}

.update {
  position: absolute;
  top: 16px;
  left: 64px;
  height: 36px;
  width: 36px;
  display: flex;
  border-radius: 50%;
  background-color: #00ca4e;
}
</style>
