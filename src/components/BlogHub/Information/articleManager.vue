<template>
  <div class="articleManager" v-if="isActive">
    <div class="function">
      <el-input v-model="input1" style="max-width: 25%;margin: 2%;" size="large" placeholder="Please input Title">
      </el-input>

      <el-select v-model="categoryValue" placeholder="Please Select Tag" size="large" style="width:25%">
        <el-option v-for="item in tagOptions" :key="item" :label="item.content" :value="item.id" />
      </el-select>

      <el-select v-model="tagValue" placeholder="Please Select Category" size="large"
        style="width:  25%;margin-left: 2%;">
        <el-option v-for="item in categoryOptions" :key="item" :label="item.content" :value="item.id" />
      </el-select>

      <el-button type="success" size="large" style="margin-left: 2%;">Search</el-button>

      <el-button type="primary" size="large" style="margin-left: 2%;">Reset</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%;height: 95%;  box-shadow: -5px 5px 5px #467048;">
        <!-- 固定列和选择列 -->
        <el-table-column type="selection" width="55" />
        <!-- 封面列 -->
        <el-table-column prop="coverPhotoUrl" label="Cover" width="120">
          <template #default="{ row }">
            <el-avatar shape="square" :src="row.coverPhotoUrl" />
          </template>
        </el-table-column>
        <!-- 标题列 -->
        <el-table-column prop="title" label="Title" width="120" />
        <!-- 摘要列 -->
        <el-table-column prop="summary" label="Summary" width="240" />
        <!-- 标签列 -->
        <el-table-column prop="tag" label="Tag" width="180" />
        <!-- 分类列 -->
        <el-table-column prop="categories" label="Categories" width="180" />
        <!-- 创建者列 -->
        <el-table-column prop="status" label="Status" width="180" />
        <!-- 右侧操作列 -->
        <el-table-column label="Operations" width="250">
          <template #default="{ row }">
            <!-- 编辑按钮 -->
            <el-button size="small" @click="handleEdit(row)">
              Update
            </el-button>
            <!-- 删除按钮 -->
            <el-button size="small" type="danger" @click="handleDelete(row)">
              Delete
            </el-button>
            <!-- 上传按钮 -->
            <el-button size="small" type="success" @click="handleUpload(row)">
              Upload
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="upload">
      <el-dialog v-model="dialogFormVisible" title="文章详情" draggable width="500">
        <div class="MetaAvatar">
          <el-upload class="avatar-uploader" action="http://localhost:9090/api/article/uploadImage"
            :show-file-list="false" :on-success="handleUploadSuccess">
            <img v-if="cacheData" :src="cacheData.coverPhotoUrl || ''" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
            </el-icon>
          </el-upload>
        </div>
        <div class="Meta">
          <p>标题</p>
          <el-input v-model="cacheData.title" style="width: 80%" placeholder="Please input" />
        </div>
        <div class="Meta">
          <p>标签</p>
          <el-select v-model="cacheData.tag" placeholder="Select" style="width: 80%">
            <el-option v-for=" item  in  tagOptions " :key="item" :label="item.content" :value="item.content" />
          </el-select>
        </div>
        <div class="Meta">
          <p>分类</p>
          <el-select v-model="cacheData.categories" placeholder="Select" style="width: 80%">
            <el-option v-for=" item  in  categoryOptions " :key="item" :label="item.content" :value="item.content" />
          </el-select>
        </div>
        <div class="Meta">
          <p>简介</p>
          <el-input v-model="cacheData.summary" style="width: 80%" autosize type="textarea"
            placeholder="Please input" />
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="handleUpload">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { onMounted, ref } from 'vue'
import request from '../../../utils/request'
import type { Article } from '../../../common/standard'
export default defineComponent({
  name: 'ArticleManager',
  props: {
    isActive: Boolean
  },
  setup(prop, { emit }) {
    const categoryValue = ref('')
    const tagValue = ref('')

    const dialogFormVisible = ref(false)

    const defaultArticle: Article = {
      id: 0,
      userId: '',
      createdBy: '',
      createdTime: '',
      title: '',
      content: '',
      updatedTime: '',
      likesCount: 0,
      readCount: 0,
      commentCount: 0,
      tag: '',
      categories: '',
      summary: '',
      coverPhotoUrl: null,
      status: '',
      isDelete: 0,
      isPinned: null,
      isLikeDisabled: null,
      isCommentsDisabled: null,
    };

    const cacheData = ref<Article>(defaultArticle)
    const tagOptions = ref([{ id: 1, content: '123' }])
    const categoryOptions = ref([{ id: 1, content: '123' }])
    const input1 = ref('')
    const tableData = ref<Article[]>([])

    const handleEdit = (row: any) => {
      dialogFormVisible.value = true
      cacheData.value = row
    }

    const handleUpload = (row: any) => {
      request.post('/api/article/update', cacheData.value).then(res => {
        dialogFormVisible.value = false
        getArticle()
      })
    }

    const handleDelete = (row: any) => {
      request.post('/api/article/delete', row.id).then(() => {
        getArticle()
      })
    }

    const getArticle = () => {
      request.get('/api/article/get').then(res => {
        tableData.value = res.data
      })
    }

    const getTag = () => {
      request.get('/api/tags/get').then(res => {
        tagOptions.value = res.data
      })
    }

    const getCategory = () => {
      request.get('/api/category/get').then(res => {
        categoryOptions.value = res.data
      })
    }

    const handleUploadSuccess = (response: any, file: any) => {
      cacheData.value!.coverPhotoUrl = response.data
    }

    onMounted(() => {
      getArticle()
      getTag()
      getCategory()
    })
    return {
      categoryValue,
      tagValue,
      dialogFormVisible,
      cacheData,
      tagOptions,
      categoryOptions,
      input1,
      tableData,
      handleEdit,
      handleUpload,
      handleDelete,
      handleUploadSuccess
    };
  }
});
</script>


<style scoped>
.upload div {
  margin-left: 30px;
}

p {
  font-size: 24px;
  font-weight: 500;
  margin: 10px;
}

.articleManager {
  height: 90%;
  width: 95%;
  border-radius: 16px;
  background-color: #abbc86;
  position: relative;
}

.function {
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  width: 97%;
  height: 15%;
  margin: auto;
  background-color: #fff;
  box-shadow: -5px 5px 5px #467048;
  /* 5px -5px 10px #d9efaa; */
}

.table {
  height: 80%;
  width: 97%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  position: absolute;
  top: 21%;
}

.MetaAvatar {
  width: 90%;
  height: 100%;
}

.Meta:last-child {
  margin-bottom: 20px;
}
</style>

<style>
.avatar {
  height: 150px;
  width: 150px;
}

.avatar-uploader .el-upload {
  margin-left: 25%;
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  text-align: center;
}
</style>