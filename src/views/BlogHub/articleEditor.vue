<template>
  <div class="main" :class="isActive ? 'active' : ''">
    <div class="mask">
      <div class="confirm">
        <div class="icon" @click="uploadArticle">
          <i class="iconfont" :style="{ color: Color }">&#xe624;</i>
        </div>
      </div>
      <div class="blog-content-editor" @click="updateActive">
        <div class="determine" :style="{ backgroundColor: Color }"></div>
        <div class="title">{{ isFormCompleted }}</div>
      </div>
      <div class="editor">
        <v-md-editor v-model="text" height="100%"></v-md-editor>
      </div>
    </div>
  </div>
  <featurePopup :isActive="isActive" @updateIsActive="updateActive" @isActive="isActive = $event"
    @confirmResult="handleConfirmResult" ref="articleEditorRef"></featurePopup>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import featurePopup from '../../components/BlogHub/ArticleEditor/featurePopup.vue';
import type { ArticleMetadata } from '../../common/standard'
import { ElMessage } from 'element-plus'
//@ts-ignore
import request from '../../utils/request';
export default defineComponent({
  components: {
    featurePopup,
  },
  setup() {
    const text = ref('');
    const isActive = ref(false);
    const isClearMeta = ref(false)
    const metaData = ref<ArticleMetadata | null>(null); // 初始化为 null
    const state = ref<Number>(0)

    const articleEditorRef = ref<any>(null);

    const updateActive = () => {
      isActive.value = !isActive.value;
    };

    const clearMetaDataInChild = () => {
      if (articleEditorRef.value) {
        articleEditorRef.value.clearMetaData();
      }
    };

    const uploadArticle = () => {
      const requestData = {
        blogPost: {
          userId: '123',
          createdBy: 'admin',
          createdTime: '2024-06-08T12:00:00',
          title: metaData.value?.title,
          content: text.value,
          updatedTime: '2024-06-08T12:30:00',
          likesCount: 0,
          readCount: 0,
          commentCount: 0,
          coverPhotoUrl: metaData.value?.coverPhotoUrl,
          tag: metaData.value?.tag,
          categories: metaData.value?.categories,
          summary: metaData.value?.summary,
          status: "已审核",
          isPinned: null,
          isLikeDisabled: null,
          isCommentsDisabled: null,
        },
        isDraft: true
      };
      if (state.value == 2) {
        request.post('api/article/upload', requestData).then((res: any) => {
          text.value = ''
          clearMetaDataInChild()
        })
      } else if (state.value == 1) {
        ElMessage({
          message: '请完善文章信息',
          type: 'warning',
          plain: true,
        })
      } else {
        ElMessage({
          message: '请填写文章信息',
          type: 'error',
          plain: true,
        })
      }
    }
    const isConfirmResult = () => {
      if (metaData.value) {
        const nullValues = Object.values(metaData.value).filter(value => value === null);
        if (nullValues.length > 1 && nullValues.length < 4) { //如果填了，但是没填完
          state.value = 1
        } else if (nullValues.length == 0) {
          state.value = 2
        } else if (nullValues.length == 4) {
          state.value = 0
        }
      }
    }
    const Color = computed(() => {
      switch (state.value) {
        case 0:
          return '#ee6a58';
        case 1:
          return '#ffbd44';
        case 2:
          return '#00ca4e';
        default:
          return '#ff605c';
      }
    })
    const isFormCompleted = computed(() => {
      switch (state.value) {
        case 0:
          return "请完善文章信息";
        case 1:
          return "未填写完整信息";
        case 2:
          return "信息已填写完成";
        default:
          return "请完善文章信息";
      }
    })
    const handleConfirmResult = (data: ArticleMetadata) => {
      metaData.value = data;
      isConfirmResult()
    }
    return {
      text, isActive, metaData, state, Color, isFormCompleted, isClearMeta, articleEditorRef,
      updateActive, handleConfirmResult, isConfirmResult, uploadArticle, clearMetaDataInChild
    };
  },
});
</script>


<style scoped>
.main {
  position: relative;
  height: 100%;
  width: 100%;
}

.active {
  opacity: 0.3;
}

.mask {
  height: 95%;
  width: 95%;
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  background-color: #abbc86;
  border-radius: 16px;
  /* box-shadow: -2px 5px 15px #969696; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.confirm {
  position: absolute;
  top: 2.5%;
  left: 23.5%;
  height: 10%;
  width: 5.5%;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: -5px 5px 5px #467048, 5px -5px 10px #d9efaa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.editor {
  width: 95%;
  height: 80%;
  margin-top: 100px;
  border: 0.3px solid rgb(182, 182, 182);
  box-shadow: -5px 5px 10px #467048, 5px -5px 10px #d9efaa;
  ;
}

.blog-content-editor {
  left: 2.5%;
  top: 2.5%;
  height: 10%;
  width: 20%;
  display: flex;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  box-shadow: -5px 5px 10px #467048, 5px -5px 10px #d9efaa;
  ;
}

.determine {
  margin: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--primary-error);
}

.blog-content-editor .title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
  font-size: 24px;
  color: #111f2c;
}

.iconfont {
  font-size: 36px;
}
</style>
