<template>
  <div class="overlay" @click="$emit('close')">
    <div class="modalWindow">
     <div className="container">
      <h3 v-if="title">{{ title }}</h3>
      <h2>test</h2>
      <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  background: rgba(33, 33, 33, 0.6);
}
.modalWindow {
  width: 'none';
  height: 'none';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
}
.container{
  box-sizing: border-box;
  width: 500px;
  height: 500px;
  background: #fafafa;
  border-radius: 20px;
  padding: 50px;
  position: relative;
}
</style>
