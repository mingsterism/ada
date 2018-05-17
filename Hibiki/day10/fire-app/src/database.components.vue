<template>
  <p v-for="user of users">
    {{user.name}}
  </p>
</template>
<script>
import { db } from './firebase';

export default {
  data() {
    return {
      users: {},
    };
  },

  firebase: {
    users: {
      source: db.ref('users'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      },
    },
  },
};
</script>
