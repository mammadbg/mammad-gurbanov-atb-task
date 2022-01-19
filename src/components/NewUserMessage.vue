<template>
  <div class="message">
      <div class="message-box">
          <h3>Yeni istifadəçi müvəffəqiyyətlə yaradıldı</h3>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .message{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0, .6);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .message-box{
        width: 400px;
        height: 200px;
        border: 2px solid rgb(9, 160, 4);
        background: #fff;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>