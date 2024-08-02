<template>
  <div class="addMetaPopup" v-if="isActive">
    <div class="title">
      <p>请输入</p>
      <input type="text" v-model="text" @input="handleInput">
    </div>
    <div class="confirm" @click="addMeta"></div>
    <div class="cancel" @click="convert"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
//@ts-ignore
import request from '../../../utils/request';
export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: true
    },
    parentVariable: {
      type: Boolean,
      default: ''
    }
  },
  setup(props, { emit }) {
    const text = ref('');
    const childValue = ref(false);

    const updateChildValue = (value: boolean) => {
      childValue.value = value;
      emit('updateChildValue', childValue.value);
    }

    const handleInput = (event: Event) => {
      const inputText = (event.target as HTMLInputElement).value;
      if (inputText.length > 10) {
        text.value = '';
      }
    };

    const updateActive = (value: boolean) => {
      emit('updateActive', value)
    }

    const addMeta = () => {
      props.parentVariable ? addTag() : addCategory()
    }

    const addCategory = () => {
      request.post('/api/category/add', {
        "content": text.value,
        "creator": 123
      }).then(() => {
        text.value = "";
        convert();
        updateChildValue(false)
      });
    }

    const addTag = () => {
      request.post('/api/tags/add', {
        "content": text.value,
        "creator": 123
      }).then(() => {
        text.value = "";
        convert();
        updateChildValue(true)
      });
    }


    const convert = () => {
      updateActive(!props.isActive);
    };
    return { text, childValue, handleInput, updateActive, convert, addMeta, updateChildValue };
  },
})
</script>

<style scoped>
.addMetaPopup {
  height: 20%;
  width: 20%;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: -5px 5px 10px #ebebeb;
  border-radius: 16px;
}

.addMetaPopup .title input {
  border-bottom: 2px solid black;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  font-size: 36px;
  margin-top: 12px;
}

.addMetaPopup p {
  font-size: 36px;
}

.cancel {
  height: 30px;
  width: 30px;
  background-color: var(--primary-cancel);
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 50%;
}

.confirm {
  height: 30px;
  width: 30px;
  background-color: var(--primary-confirm);
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-radius: 50%;
}
</style>