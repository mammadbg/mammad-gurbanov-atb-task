<template>
  <div class="message">
    <div class="message-box">
      <h3>İstifadəçi silindi</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.message {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  padding-top: 60px;
}
.message-box {
    width: fit-content;
    padding: 20px;
  border: 2px solid #fff;
  background: #FFD217;
  color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 16px Fira;
  margin: 0 auto;
}
h3{
    margin: 0;
}
</style>