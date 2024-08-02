<template>
  <div class="container">
    <div class="flip" @click="flip">
    </div>
    <div class="main" v-if="isMain">
      <div class="content">
        <v-md-editor :model-value="markdown" mode="preview"></v-md-editor>
      </div>
    </div>
    <!-- 这是文章简单信息 -->
    <div class="comment" v-if="!isMain">
      <div class="coverPhoto">
        <img :src="ImageUrl">
      </div>
      <div class="information">
        <div class="strip">
          <div class="like"></div>
          <div class="collect"></div>
        </div>
        <div class="title">
          这个是标题
        </div>
        <div class="author">
          <div class="avatar"></div>
          <div class="identity">
            <p>huahua</p>
            <p>7181个粉丝</p>
          </div>
          <div class="attention">
            <span>保存</span>
          </div>
        </div>
        <div class="review">
          <div class="temp">
            <span>11条评论</span>
            <div class="respond"></div>
            <div class="input">
              <input type="text" placeholder="添加评论">
              <div class="send"></div>
            </div>
            <div class="characters"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import request from '../../utils/request';
import { useRouter } from 'vue-router'; // 导入 useRout
export default defineComponent({
  setup() {
    const ImageUrl = ref('')
    const router = useRouter()
    const markdown = ref('# huahua')
    const isMain = ref(false)
    const getArticle = () => {
      const id = router.currentRoute.value.query.id as string
      request.get(`/api/article/show?id=${id}`).then(res => {
        markdown.value = res.data[0].content
        ImageUrl.value = res.data[0].coverPhotoUrl
      })
    }
    const flip = () => {
      isMain.value = !isMain.value
    }
    onMounted(() => {
      getArticle()
    })
    return { markdown, ImageUrl, getArticle, flip, isMain }
  }
})
</script>

<style scoped>
.temp {
  height: 100%;
  width: 100%;
}

.flip {
  height: 3vw;
  width: 6vh;
  position: absolute;
  border-radius: 50%;
  right: 5vw;
  top: 5vh;
  background-color: salmon;
}

.main {
  position: relative;
  height: 80vh;
  margin: 5vh auto;
  width: 70%;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 20px 0px;
}

.main .content {
  overflow: auto;
  position: absolute;
  height: 90%;
  width: 95%;
  margin: 2.5%;
}

.comment {
  position: relative;
  height: 80vh;
  margin: 5vh auto;
  display: flex;
  width: 70%;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 20px 0px;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.container::-webkit-scrollbar {
  width: 1px;
}

.comment .coverPhoto {
  height: 100%;
  width: 50%;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}

.comment .coverPhoto img {
  height: auto;
  width: 100%;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}

.information .strip {
  margin-top: 3vh;
  height: 10vh;
  width: 100%;
  position: relative;
}

.comment .information {
  height: 100%;
  width: 50%;
}

.information .strip .collect {
  position: absolute;
  left: 1vw;
  top: 2vh;
  height: 6vh;
  width: 3vw;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.06);
}

.information .strip .like {
  position: absolute;
  left: 5vw;
  top: 2vh;
  border-radius: 50%;
  height: 6vh;
  width: 3vw;
  background-color: rgba(0, 0, 0, 0.06);
}

.information .title {
  font-weight: 600;
  font-size: 28px;
  margin-left: 2vw;
}

.author {
  height: 12vh;
  width: 100%;
  position: relative;
}

.author .avatar {
  height: 10vh;
  width: 5vw;
  position: absolute;
  left: 1vw;
  border-radius: 50%;
  background-image: url("https://i.pinimg.com/originals/06/ac/8e/06ac8e34890678dc1c998d7a2fd7187d.jpg");
  background-position: center;
  background-size: cover;
}

.author .identity {
  height: 8vh;
  width: 5vw;
  position: absolute;
  top: 3vh;
  left: 5.5vw;
  border-radius: 50%;
}

.author .identity p:nth-of-type(2) {
  width: 100px;
}

.author .attention {
  height: 7vh;
  width: 5vw;
  position: absolute;
  border-radius: 30px;
  top: 2vh;
  right: 2vw;
  border: 2px solid #cccccc;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author .attention span {
  font-size: 24px;
  color: #000;
}

.comment .review {
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 50%;
  border-top: 2px solid rgba(0, 0, 0, 0.06);
}

.temp span {
  font-size: 26px;
  font-weight: 600;
  position: absolute;
  top: 4vh;
  left: 3vh;
}

.temp .input {
  height: 35%;
  position: absolute;
  bottom: 12%;
  right: 5%;
  width: 70%;
  border-radius: 50px;
  border: 2px solid rgba(0, 0, 0, 0.06);
  display: flex;
}

.temp input {
  height: 70%;
  width: 70%;
  margin: 3% 0 0 7%;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: transparent;
}

.temp .input .send {
  position: absolute;
  height: 6vh;
  width: 3vw;
  right: 0.7vw;
  top: 1vh;
  border-radius: 50%;
  background-color: darkblue;
}


.temp .respond {
  height: 7vh;
  width: 3.5vw;
  position: absolute;
  top: 3.5vh;
  right: 2vw;
  border-radius: 50%;
  background-color: sandybrown;
}

.temp .characters {
  height: 7vh;
  width: 3.5vw;
  position: absolute;
  bottom: 4vh;
  left: 2vw;
  border-radius: 50%;
  background-color: lightcoral;
}
</style>