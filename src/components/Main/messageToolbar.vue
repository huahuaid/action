<template>
  <div v-if="displayValue" class="message-toolbar">
    <div class="information">
      <div class="name">收件箱</div>
      <div class="function">
        <svg t="1721014706229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="4072" width="24" height="24">
          <path
            d="M223.962372 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S276.942718 607.897867 223.962372 607.897867z"
            fill="#575B66" p-id="4073"></path>
          <path
            d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867z"
            fill="#575B66" p-id="4074"></path>
          <path
            d="M800.037628 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S852.84596 607.897867 800.037628 607.897867z"
            fill="#575B66" p-id="4075"></path>
        </svg>
      </div>
    </div>
    <div class="search">
      <div class="border-search">
        <svg t="1720887517721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="5796" width="20" height="20">
          <path
            d="M986.2 893.3L822.8 727c54.8-75.1 87.3-167.7 87.3-268 0-250.8-202.6-454-452.5-454S5 208.3 5 459c0 250.8 202.6 454 452.5 454 101.8 0 195.7-33.7 271.3-90.6l159.3 162.2c13.3 13.6 31.2 20.4 49 20.4 16.8 0 33.7-6.1 46.9-18.3 27.1-25.2 28.1-67 2.2-93.4z"
            fill="#707070" p-id="5797"></path>
          <path d="M140.7 459a316.8 317.8 0 1 0 633.6 0 316.8 317.8 0 1 0-633.6 0Z" fill="#FFFFFF" p-id="5798"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
.border-search .icon {
  margin: 13px 0 0 13px;
}

.message-toolbar {
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

.information {
  height: 64px;
  width: 100%;
  display: flex;
}

.information .name {
  font-size: 16px;
  font-weight: 400;
  margin: 22.8px 102px 0 146px;
}

.information .function {
  margin: 20px 10px 0;
}

.search {
  height: 72px;
  width: 100%;
  display: flex;
}

.search .border-search {
  height: 48px;
  width: 95%;
  border-radius: 50px;
  border: 2px solid rgb(205, 205, 205);
  margin: auto;
}
</style>