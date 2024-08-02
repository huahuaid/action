<template>
  <div class="mateAdd" :class="{ isActive: 'mask' }">
    <div class="category" @click="convert(true)"
      :style="{ 'box-shadow': isBoxShadow ? '-5px 10px 15px #b4a99b' : 'none' }">
      <div class="avatar" @click="updateActive(true)"></div>
      <div class="title">标签</div>
      <span>tag</span>
    </div>
    <div class="tag" @click="convert(false)"
      :style="{ 'box-shadow': !isBoxShadow ? '-5px 10px 15px #b4a99b' : 'none' }">
      <div class="avatar" @click="updateActive(false)"></div>
      <div class="title">分类</div>
      <span>category</span>
    </div>
    <div class="tagCategoryForm">
      <div class="menu">
        <span class="menu-content">Product</span>
        <span class="menu-action">Action</span>
      </div>
      <div class="limit">
        <div class="card" v-for="(item, index) in Data" :key="index">
          <div class="content">
            <p>{{ item.content }}</p>
          </div>
          <div class="options">
            <el-button type="success" @click="updateMeta(item)">update</el-button>
            <el-button type="danger" @click="deleteMeta(item)">delete</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <addMetaPopup :isActive="isActive" @update:isActive="isActive = $event" @updateActive="updateActive"
    :parentVariable="parentVariable" @updateChildValue="handleChildValueChange"></addMetaPopup>

  <el-dialog v-model="dialogTableVisible" title="更改数据" width="400">
    <el-input v-model="MetaData.content" placeholder=""></el-input>
    <el-button style="margin-top: 12px;" type="success" @click="successUpdate()">修改</el-button>
  </el-dialog>


</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import addMetaPopup from '../../../components/BlogHub/BlogHome/addMetaPopup.vue';
//@ts-ignore
import request from '../../../utils/request';

export default defineComponent({
  components: {
    addMetaPopup,
  },
  setup() {
    const dialogTableVisible = ref(false)
    const isUpdateMeta = ref(false);
    const item = ref([
      { id: 1, content: '123', creator: '123', createTime: '2024-07-27T16:32:18.000+00:00' },
    ]);
    const Data = ref();
    const MetaData = ref<{ id: number; content: string; creator: string; createTime: string }>({
      id: 1,
      content: '123',
      creator: '123',
      createTime: '2024-07-27T16:32:18.000+00:00'
    });
    const isBoxShadow = ref(true);
    const isActive = ref(false);
    const parentVariable = ref(true);
    const tagTableData = ref([]);
    const categoryTableData = ref([]);

    const updateMeta = (item: any) => {
      MetaData.value = item
      dialogTableVisible.value = !dialogTableVisible.value
    }

    const successUpdate = () => {
      if (isBoxShadow.value) {
        updateTag()

      } else {
        updateCategory()
        convert(false)
      }
    }

    const updateTag = () => {
      request.post('/api/tags/update', {
        "id": MetaData.value.id,
        "content": MetaData.value.content
      }).then(() => {
        dialogTableVisible.value = false
        convert(true)
      })
    }

    const updateCategory = () => {
      request.post('/api/category/update', {
        "id": MetaData.value.id,
        "content": MetaData.value.content
      }).then(() => {
        dialogTableVisible.value = false
        convert(false)
      })
    }

    const handleChildValueChange = (value: any) => {
      convert(value);
    };

    const updateActive = (value: boolean) => {
      isActive.value = !isActive.value;
      parentVariable.value = value;
    };

    const convert = (value: boolean) => {
      getMetaData().then(() => {
        isBoxShadow.value = value;
        Data.value = value ? tagTableData.value : categoryTableData.value;
      });
    };

    const getMetaData = async () => {
      const response1 = await request.get('/api/category/get');
      categoryTableData.value = response1.data;

      const response2 = await request.get('/api/tags/get');
      tagTableData.value = response2.data;
    };

    const deleteMeta = (item: any) => {
      if (isBoxShadow.value) {
        request.post('/api/tags/delete', {
          "id": item.id
        }).then(() => {
          convert(true);
        });
      } else {
        request.post('/api/category/delete', {
          "id": item.id
        }).then(() => {
          convert(false);
        });
      }
    };

    onMounted(() => {
      convert(true);
    });

    return {
      MetaData,
      tagTableData,
      item,
      categoryTableData,
      Data,
      isBoxShadow,
      isActive,
      parentVariable,
      isUpdateMeta,
      dialogTableVisible,
      successUpdate,
      updateMeta,
      handleChildValueChange,
      deleteMeta,
      updateActive,
      convert,
      getMetaData
    };
  }
});
</script>


<style scoped>
.mask {
  opacity: 0.3;
}

.tag span {
  position: absolute;
  left: 46%;
  bottom: 10px;
  text-align: center;
  font-weight: 600;
}

.category span {
  position: absolute;
  left: 52%;
  bottom: 10px;
  text-align: center;
  font-weight: 600;
}

.mateAdd {
  height: 70%;
  width: 100%;
  position: relative;
}

.mateAdd .category {
  position: absolute;
  left: 5%;
  height: 20%;
  width: 43%;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
}

.category .title {
  width: 40%;
  text-align: center;
  line-height: 100px;
  font-weight: 600;
  font-size: 36px;
}

.tag .title {
  width: 40%;
  text-align: center;
  line-height: 100px;
  font-weight: 600;
  font-size: 36px;
}

.mateAdd .tag {
  position: absolute;
  right: 5%;
  height: 20%;
  width: 44%;
  color: white;
  background-color: #39553f;
  border-radius: 16px;
  display: flex;
}

.category .avatar {
  height: 72px;
  width: 72px;
  margin: 16px;
  background-color: #f9f4d6;
  border-radius: 50%;
}

.tag .avatar {
  height: 72px;
  width: 72px;
  margin: 16px;
  background-color: #abbc86;
  border-radius: 50%;

}

.mateAdd .tagCategoryForm {
  top: 25%;
  left: 5%;
  position: absolute;
  height: 70%;
  width: 90%;
  background-color: #fff;
  border-radius: 16px;
}

.tagCategoryForm .menu {
  height: 15%;
  width: 98%;
  margin: 1%;
  position: relative;
  border-radius: 16px;
  background-color: rgb(244, 244, 244);
  box-shadow: -5px 5px 10px #b8b8b8,
    5px -5px 10px #ffffff;
}

.menu-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
  font-size: 28px;
  font-weight: 600;
  color: #b4a99b;
}

.menu-action {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
  font-size: 28px;
  font-weight: 600;
  color: #b4a99b;
}

.limit {
  height: 82%;
  width: 100%;
  overflow: auto;
}

.limit::-webkit-scrollbar {
  width: 1px;
}

.tagCategoryForm .card {
  height: 29%;
  margin: 10px;
  border-radius: 16px;
  display: flex;
  background-color: #fcfdf5;
  box-shadow: -5px 5px 10px #b8b8b8,
    5px -5px 10px #ffffff;
}

.tagCategoryForm .content {
  height: 100%;
  width: 65%;
}

.tagCategoryForm .options {
  border-radius: 16px;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
}


.tagCategoryForm p {
  font-size: 36px;
  font-weight: 550;
  padding-left: 20%;
  margin-top: 7%;
}

.tagCategoryForm .limit span {
  font-size: 24px;
  padding: 19%;
}
</style>