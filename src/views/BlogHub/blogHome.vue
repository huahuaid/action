<template>
  <div class="main">
    <div class="left">
      <div class="information">
        <div class="name">
          Hello huahua
        </div>
        <p>huahua's personal information</p>
      </div>
      <div class="table">
        <div class="selectButton">
          <div class="slider"></div>
        </div>
        <div class="selectTable"></div>
      </div>
    </div>
    <div class="right">
      <div class="calendar">
        <div class="calendarTable"></div>
      </div>
      <add-meta></add-meta>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import addMeta from '../../components/BlogHub/BlogHome/addMeta.vue';
import addMetaPopup from '../../components/BlogHub/BlogHome/addMetaPopup.vue';
export default defineComponent({
  components: { addMeta, addMetaPopup },
  setup() {


  }
});  
</script>

<style scoped>
.mask {
  opacity: 0.3;
}

.temp {
  background-color: aquamarine;
}

.main {
  height: 100%;
  width: 100%;
  background-color: #faebd7;
  display: flex;
  position: relative;
}

.left {
  width: 54.6%;
  height: 100%;
}

.right {
  width: 45.4%;
  height: 100%;
}

.information {
  height: 30%;
  width: 100%;
  position: relative;
}

.information .name {
  font-size: 48px;
  font-weight: 600;
  margin-left: 10%;
}

.information p {
  font-size: 28px;
  font-weight: 400;
  margin-left: 10%;
}

.table {
  height: 66.5%;
  width: 90%;
  margin: 0 7%;
  position: relative;
}

.table .selectButton {
  height: 13%;
  width: 50%;
  position: absolute;
  left: 2%;
  top: 3%;
  border-radius: 16px;
  background-color: #fff;
}

.table .selectTable {
  height: 82.5%;
  width: 96%;
  position: absolute;
  top: 18%;
  left: 2%;
  border-radius: 16px;
  background-color: #fff;
}

.selectButton .slider {
  height: 100%;
  width: 50%;
  position: absolute;
  background-color: #abbc86;
  left: 0;
  border-radius: 16px;
}

.active {
  height: 100%;
  width: 50%;
  position: absolute;
  background-color: #b4a99b;
  left: 50%;
  border-radius: 16px;
}

.calendar {
  height: 30%;
  width: 100%;
  position: relative;
}

.calendarTable {
  height: 80%;
  width: 90%;
  position: absolute;
  top: 10%;
  left: 5%;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: -5px 5px 23px #e6d8c6;
}
</style>