<template>
  <!-- 这个是具体的文章展示的card -->
  <div class="card">
    <div class="card-item" v-for="(item, index) in cardList" :key="index" @click="toArticle(item)">
      <img :src="item.coverPhotoUrl" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'; // 导入 useRouter
import request from '../../utils/request'
export default defineComponent({
  setup() {

    const isActive = ref(true)
    const router = useRouter();
    const cardList = ref()
    const getArticle = () => {
      request.get('/api/article/get').then(res => {
        cardList.value = res.data
      })
    }
    const toArticle = (item: any) => {
      router.push({ path: 'article', query: { id: item.id } })
      isActive.value = !isActive.value
    }

    onMounted(() => {
      getArticle()
    })


    return { cardList, getArticle, toArticle }
  },
})
</script>

<style scoped>
.card {
  position: relative;
  column-count: 6;
  column-gap: 10px;
  width: 1500px;
  min-height: 100vh;
}

.card .card-item {
  text-align: center;
  width: 216px;
  border-radius: 16px;
  margin-bottom: 20px;
  break-inside: avoid;
}

.card img {
  max-height: 600px;
  max-width: 230px;
}
</style>