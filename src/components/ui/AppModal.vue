<template>
  <div class="overlay">
    <div class="modalWindow">
      <div class="close-modal" @click="$emit('close')"></div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close']
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
  position: relative;
}
.container {
  box-sizing: border-box;
  width: 500px;
  height: 500px;
  background: #fafafa;
  border-radius: 20px;
  padding: 50px;
  position: relative;
}
.close-modal {
  background-image: url('../../assets/ico/close-ico.svg');
  height: 20px;
  width: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 100;
}
</style>
