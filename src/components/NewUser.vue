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
          required
          :class="{ 'invalid-input': user.name && !validation.name }"
        />
        <span class="error-message" v-if="user.name && !validation.name"
          >Zəhmət olmazsa, adınızı, soyadınızı, və atanızın adını yazın</span
        >
      </div>
      <div class="content__input-group">
        <label for="pinCode">FİN Kod <i class="icon-question"></i></label>
        <input
          type="text"
          name="pinCode"
          placeholder="6S5AQ89"
          v-model="user.pin"
          maxlength="7"
          required
          :class="{ 'invalid-input': user.pin && !validation.pin }"
        />
        <span class="error-message" v-if="user.pin && !validation.pin"
          >Zəhmət olmazsa,7 simvollu FIN kodunuzu tamamlayın</span
        >
      </div>
      <div class="content__input-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="kamil.kk@gmail.com"
          v-model="user.email"
          required
          :class="{ 'invalid-input': user.email && !validation.email }"
        />
        <span class="error-message" v-if="user.email && !validation.email"
          >Zəhmət olmazsa, email formatını tamamlayın</span
        >
      </div>
      <div class="content__input-group">
        <label for="code">Kod sözü<i class="icon-question"></i></label>
        <input
          type="text"
          name="code"
          placeholder="starboy"
          v-model="user.code"
          required
          :class="{ 'invalid-input': user.code && !validation.code }"
          maxlength="12"
        />
        <span class="error-message" v-if="user.code && !validation.code"
          >Kod sözü minimum 7, maksimum 12 simvollu olmalıdır</span
        >
      </div>
      <div class="content__input-group">
        <label for="mobile">Mobil nömrə </label>
        <input
          type="tel"
          name="mobile"
          placeholder="+994501234567"
          pattern="[7-9]{1}[0-9]{9}"
          v-model="user.mobile"
          required
          maxlength="13"
          :class="{ 'invalid-input': user.mobile && !validation.mobile }"
        />
        <span class="error-message" v-if="user.mobile && !validation.mobile"
          >Zəhmət olmazsa, telefon nömrəsini düzgün yazın</span
        >
      </div>
      <div class="content__checkbox-group">
        <input type="checkbox" name="otp" v-model="user.otp" />
        <label for="otp">SMS OTP <i class="icon-question"></i></label>
      </div>
      <button
        class="button__yellow--filled"
        @click="submitInfo()"
        :disabled="fieldsAreInvalid"
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
      validation: {
        name: false,
        pin: false,
        email: false,
        code: false,
        mobile: false,
        otp: false,
      },
      hasEmptyField: true,
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
      alert("Yeni istifadəçi müvəffəqiyyətlə yaradıldı")
    },
  },
  watch: {
    "user.email": function () {
      // eslint-disable-next-line
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (this.user.email.match(mailformat)) {
        this.validation.email = true;
      } else {
        this.validation.email = false;
      }
    },
    "user.mobile": function () {
      // eslint-disable-next-line
      var mailformat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      if (
        
        this.user.mobile.match(mailformat) &&
        this.user.mobile.length > 12
      ) {
        this.validation.mobile = true;
      } else {
        this.validation.mobile = false;
      }
    },
    "user.name": function () {
      var s = this.user.name;
      s = s.replace(/(^\s*)|(\s*$)/gi, "");
      s = s.replace(/[ ]{2,}/gi, " ");
      s = s.replace(/\n /, "\n");
      if (s.split(" ").length > 2) {
        this.validation.name = true;
      } else {
        this.validation.name = false;
      }
    },
    "user.pin": function () {
      if (this.user.pin.length >= 7) {
        this.validation.pin = true;
      } else {
        this.validation.pin = false;
      }
    },
    "user.code": function () {
      if (this.user.code.length < 7) {
        this.validation.code = false;
      } else {
        this.validation.code = true;
      }
    },
  },
  computed: {
    fieldsAreInvalid: function () {
      if (
        this.validation.name  &&
        this.validation.pin  &&
        this.validation.email  &&
        this.validation.code  &&
        this.validation.mobile 
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
