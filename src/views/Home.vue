<template>
  <div class="global-container">
    <div class="home">
      <div class="main">
        <div class="main__header">
          <a
            @click="selectedComponent = 'users'"
            :class="{ 'link-active': selectedComponent == 'users' }"
            >İstifadəçilər</a
          >
          <a
            @click="selectedComponent = 'limits'"
            disabled
            :class="{ 'disabled-link': true }"
            >Limitlər</a
          >
        </div>
        <div class="main__body">
          <component :is="selectedComponent"></component>
        </div>
      </div>
      <div class="button-container">
        <button class="button__purple--filled" @click="newUserTabActive = true">
          <i>+</i>
          Yeni istifadəçi
        </button>
      </div>
    </div>
    <new-user
      :activateTab="newUserTabActive"
      @closeTab="newUserTabActive = false"
      @showMessage="messageIsActive = true"
    ></new-user>
    <new-user-message v-if="messageIsActive"></new-user-message>
  </div>
</template>

<script>
import {eventBus} from '../main'
import DeleteMessage from '../components/DeleteMessage.vue';
import NewUser from "../components/NewUser.vue";
import NewUserMessage from "../components/NewUserMessage.vue";
import Limits from "./Limits.vue";
import Users from "./Users.vue";

export default {
  name: "Home",
  components: {
    NewUser,
    limits: Limits,
    users: Users,
    NewUserMessage,
    DeleteMessage,
  },
  data() {
    return{
      selectedComponent: "users",
      newUserTabActive: false,
      messageIsActive: false,
    };
  },
  methods:{
    activateDeleteMessage(){
eventBus.$emit("deleteMessage", this.deleted = true)
    }
  },
  watch: {
    messageIsActive: function(){
      if (this.messageIsActive == true) {
        setTimeout(()=>{
          this.messageIsActive =false;
        },2000)
      }
    },
  },
};
</script>
