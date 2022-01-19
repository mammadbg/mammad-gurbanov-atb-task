<template>
  <div>
    <template v-if="existingUsers.length">
      <user-list :users="existingUsers">
        <h4 slot="title">MÖVCUD İSTİFADƏÇİLƏR</h4>
      </user-list>
    </template>
    <template v-if="newUsers.length">
      <user-list :users="newUsers">
        <h4 slot="title">YENİ İSTİFADƏÇİLƏR</h4>
      </user-list>
    </template>
  </div>
</template>

<script>
import UserList from "../components/UserList.vue";
import API from '@/api'
export default {
  components: {
    UserList,
  },
  data() {
    return {
      existingUsers: API.existingUsers,
      newUsers: API.newUsers
    };
  },
  methods: {},
};
</script>