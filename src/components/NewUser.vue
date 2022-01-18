<template>
  <div class="new-user" :class="{ 'new-user-active': activateTab }">
    <div class="content">
      <div class="content__header">
        <h2 class="content__header--title">Yeni istifadəçi</h2>
        <button class="content__header--close" @click="closeTab()">
          <i class="icon-Group"></i>
        </button>
      </div>
      <div class="content__input-group">
        <label for="name">A.S.A</label>
        <input
          type="text"
          name="name"
          placeholder="Kamilov Kamil Kamaləddin oğlu"
          v-model="user.name"
        />
      </div>
      <div class="content__input-group">
        <label for="pinCode">FİN Kod <i class="icon-question"></i></label>
        <input
          type="text"
          name="pinCode"
          placeholder="6S5AQ89"
          v-model="user.pin"
        />
      </div>
      <div class="content__input-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="kamil.kk@gmail.com"
          v-model="user.email"
        />
      </div>
      <div class="content__input-group">
        <label for="code">Kod sözü<i class="icon-question"></i></label>
        <input
          type="text"
          name="code"
          placeholder="starboy"
          v-model="user.code"
        />
      </div>
      <div class="content__input-group">
        <label for="mobile">Mobil nömrə </label>
        <input
          type="tel"
          name="mobile"
          placeholder="+994501234567"
          v-model="user.mobile"
        />
      </div>
      <div class="content__checkbox-group">
        <input type="checkbox" name="otp" v-model="user.otp" />
        <label for="otp">SMS OTP <i class="icon-question"></i></label>
      </div>
      <button
        class="button__yellow--filled"
        @click="submitInfo()"
        :disabled="isActive"
      >
        Əlavə et
      </button>
    </div>
  </div>
</template>

<script>
import API from "@/api";
export default {
  props: {
    activateTab: Boolean,
  },
  data() {
    return {
      user: {
        id: "",
        name: "",
        pin: "",
        email: "",
        code: "",
        mobile: null,
        otp: false,
        existingUser: false,
        viewed: false,
        operated: false,
        approved: false,
        blocked: false,
        newUser: true,
      },
      isActive: true,
    };
  },
  methods: {
    closeTab() {
      this.$emit("closeTab", false);
    },
    submitInfo() {
      this.user.id = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      API.newUsers.push(this.user);
      this.closeTab();
      this.user = {
        id: "",
        name: "",
        pin: "",
        email: "",
        code: "",
        mobile: null,
        otp: false,
        existingUser: false,
        viewed: false,
        operated: false,
        approved: false,
        blocked: false,
        newUser: true,
      };
    },
  },
  watch: {
    user: {
      handler() {
        if (
          this.user.name !== "" &&
          this.user.pin !== "" &&
          this.user.email !== "" &&
          this.user.code !== "" &&
          this.user.mobile !== ""
        ) {
          this.isActive = false;
          console.log("1----", this.user);
        } else {
          this.isActive = true;
          console.log("2----", this.user);
        }
      },
      deep: true,
    },
  },
};
</script>
