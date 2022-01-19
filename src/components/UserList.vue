<template>
  <div class="list">
    <div class="list__title">
      <slot name="title"></slot>
    </div>
    <user
      v-for="(user, index) in users"
      :key="index"
      :user="user"
    ></user>
  </div>
</template>

<script>
import User from "../components/User.vue";
export default {
  components: {
    user: User,
  },
  props:{
      users: Array
  },
  data() {
    return {

    };
  },
  methods: {},
};
</script>
