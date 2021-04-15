<template>
  <v-container>
    <div class="d-flex align-middle">
      <v-row>
        <v-col cols="12" lg="3">
          <v-btn color="primary" @click="goLogin">Login</v-btn>
        </v-col>
        <v-col cols="12" lg="3">
          <v-btn color="primary" @click="goStudent">Student</v-btn>
        </v-col>
        <v-col cols="12" lg="3">
          <v-btn color="primary" @click="goTeacher">Teacher</v-btn>
        </v-col>
        <v-col cols="12" lg="3">
          <v-btn color="primary" @click="goAcademic">Academic</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push({ path: "/login" });
    },
    goStudent() {
      this.$router.push({ path: "/student" });
    },
    goTeacher() {
      this.$router.push({ path: "/teacher" });
    },
    goAcademic() {
      this.$router.push({ path: "/academic" });
    },
  },
};
</script>
