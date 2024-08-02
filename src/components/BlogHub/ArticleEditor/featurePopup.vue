<template>
  <div class="feature-popup" v-if="isActive">
    <div class="main">
      <div class="coverImage" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
        <input style="height: 100%;width: 100%;opacity: 0;" type="file" ref="fileInput" @change="handleFileChange">
      </div>
      <div class="title">
        <p>标题</p>
        <input type="text" v-model="metaData.title">
      </div>
      <div class="selectCategory">
        <p>分类</p>
        <select v-model="metaData.categories" class="optionCategory">
          <option v-for="(item, index) in categoryTableData" :key="index">{{ item.content }}</option>
        </select>
      </div>
      <div class="selectTag">
        <p>标签</p>
        <select v-model="metaData.tag" class="optionTag">
          <option v-for="(item, index) in tagTableData" :key="index">{{ item.content }}</option>
        </select>
      </div>
      <div class="summary">
        <p>简介</p>
        <div class="editor" contenteditable="true" ref="editor"></div>
      </div>
      <div class="cancel" @click="updateIsActive(false)"></div>
      <div class="confirm" @click="confirm"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'
import { ArticleMetadata, MetaData } from '../../../common/standard'
//@ts-ignore
import request from '../../../utils/request';
import axios from 'axios';
export default defineComponent({
  props: {
    isActive: Boolean as PropType<boolean>,
  },
  setup(props, { emit }) {
    const metaData = ref<ArticleMetadata>({
      coverPhotoUrl: null,
      title: null,
      tag: null,
      categories: null,
      summary: null,
    });

    const imageUrl = ref('');
    const editor = ref<HTMLDivElement | null>(null);
    const tagTableData = ref<MetaData[]>([]);
    const categoryTableData = ref<MetaData[]>([]);
    const item = ref<MetaData[]>([]);

    // 处理文件选择
    const handleFileChange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        uploadImage(file);
      }
    };

    const uploadImage = async (file: any) => {
      const formData = new FormData();
      formData.append('file', file);
      // 这里前面的包装出了点问题，现在用原生未包装的就可以实现了
      await axios.post('http://localhost:9090/api/article/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // 设置正确的 Content-Type
        }
      }).then((res: any) => {
        imageUrl.value = res.data.data
        metaData.value.coverPhotoUrl = imageUrl.value
      });
    };

    const updateIsActive = (value: boolean) => {
      emit('isActive', value);
    }

    const cacheData = ref()

    const confirm = (): ArticleMetadata | boolean => {
      metaData.value.summary = editor.value?.innerHTML || null;
      emit('confirmResult', metaData.value);
      updateIsActive(false)
      return metaData.value; // 返回 metaData
    }

    const getMetaData = async () => {
      const response1 = await request.get('/api/category/get');
      categoryTableData.value = response1.data;

      const response2 = await request.get('/api/tags/get');
      tagTableData.value = response2.data;
    };

    const clearMetaData = () => {
      metaData.value = {
        coverPhotoUrl: null,
        title: null,
        tag: null,
        categories: null,
        summary: null,
      };
    };

    onMounted(() => {
      getMetaData()
    })

    return {
      item, metaData, imageUrl, cacheData, categoryTableData, tagTableData,
      handleFileChange, clearMetaData, updateIsActive, confirm, editor
    }
  }
})
</script>



<style scoped>
.feature-popup {
  height: 700px;
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: -5px 5px 10px #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  height: 90%;
  width: 90%;
  position: relative;
}

.main .title {
  display: flex;
  margin-left: 12%;
}

.main .coverImage {
  height: 30%;
  width: 50%;
  margin: 24px 0 16px 25%;
  background-size: cover;
  background-position: 50% 70%;
  border: 1px dashed #000;
}


p {
  font-size: 36px;
}

.main .title input {
  border: none;
  outline: none;
  width: 60%;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-size: 24px;
}

.selectCategory {
  margin: 1% 0 0 12%;
  display: flex;
}

.optionCategory {
  height: 36px;
  width: 60%;
}

.optionTag {
  height: 36px;
  width: 60%;
}

.selectTag {
  margin: 1% 0 0 12%;
  display: flex;
}

select {
  border: none;
  border-bottom: 1px solid black;
  width: 54%;
  outline: none;
  font-size: 24px;
}

.summary {
  display: flex;
  margin: 1% 0 0 12%;
}

.editor {
  font-size: 24px;
  min-height: 100px;
  max-height: 100px;
  width: 60%;
  overflow-y: auto;
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-top: 8px;
  padding: 5px;
}

.editor::-webkit-scrollbar {
  width: 8px;
}

.cancel {
  background-color: var(--primary-cancel);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
}

.confirm {
  background-color: var(--primary-confirm);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
