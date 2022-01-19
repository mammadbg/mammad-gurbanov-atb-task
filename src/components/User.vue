<template>
  <div class="list__item" :class="{ 'list-details-opened': true }">
    <div class="list__item--user">
      <div class="icon">
        <i class="icon-user"></i>
      </div>
      <div class="name">{{ user.name }}</div>
    </div>
    <div class="list__item--action">
      <button
        class="button__yellow--outline"
        @click="showDetails = !showDetails"
        :class="{ 'button__yellow--outline--active': showDetails }"
      >
        Ətraflı
      </button>
    </div>
    <div class="list__item--features" :class="{ 'show-details': showDetails, 'user-blocked': user.blocked }">
      <div class="details">
        <label class="container">
          <input type="checkbox" v-model="user.viewed" />
          <span class="checkmark"></span>
          Baxış
        </label>
        <label class="container">
          <input type="checkbox" v-model="user.operated" />
          <span class="checkmark"></span>
          ƏməlİYYAT
        </label>
        <label class="container">
          <input type="checkbox" v-model="user.approved" />
          <span class="checkmark"></span>
          TƏSDİQ
        </label>
      </div>
    </div>
    <div class="list__item--block" :class="{ 'show-details': showDetails }">
      <button
        class="button__red--outline"
        v-if="!user.blocked && !user.newUser"
        @click="user.blocked = true"
      >
        <i class="icon-lock"></i>
        Bloklamaq
      </button>
      <button
        class="button__red--filled"
        v-if="user.blocked && !user.newUser"
        @click="user.blocked = false"
      >
        <i class="icon-unlock"></i>
        Bloku aç
      </button>
      <button
        class="button__red--outline"
        v-if="user.newUser"
        @click="deleteUser(user.id)"
      >
        <i class="icon-delete"></i>
        Silmək
      </button>
    </div>
  </div>
</template>

<script>
import API from "@/api"
import {eventBus} from '../main'
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    logUser(user) {
      console.log(user.viewed);
      console.log(user.operated);
      console.log(user.approved);
      console.log("-------------");
    },
    deleteUser(id) {
      var index = API.newUsers.findIndex(function (o) {
        return o.id === id;
      });
      if (index !== -1) API.newUsers.splice(index, 1);
      eventBus.$on("deleteMessage",true)
    },

  },
  created(){

  }
};
</script>

<style>
</style>