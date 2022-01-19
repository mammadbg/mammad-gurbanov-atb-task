<template>
  <div class="global-container">
    <div class="home">
      <div class="main">
        <div class="main__header">
          <a
            @click="selectedComponent = 'users'"
            :class="{ 'link-active': (selectedComponent == 'users') }"
            >İstifadəçilər</a
          >
          <a @click="selectedComponent = 'limits'" disabled
            :class="{ 'disabled-link': true }"
          >Limitlər</a>
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
    ></new-user>
  </div>
</template>

<script>
import NewUser from "../components/NewUser.vue";
import Limits from "./Limits.vue";
import Users from "./Users.vue";

export default {
  name: "Home",
  components: {
    NewUser,
    limits: Limits,
    users: Users,
  },
  data() {
    return {
      selectedComponent: "users",
      newUserTabActive: false,
    };
  },
  methods: {},
};
</script>
