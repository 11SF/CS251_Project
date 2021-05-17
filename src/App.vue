/* eslint-disable */
<template>
  <v-app>
    <v-app-bar app clipped-left flat dark v-if="$store.getters.getLoginStatus != 'notLogin'">
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.width < 600" @click="toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="first-word font uppercase">Mentos School</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout" icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    toggle() {
      this.$store.dispatch('toggle')
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({name:'Login'})
    }
  },
  created() {
    this.$store.dispatch("checkLogin");
    this.$store.dispatch("academicData")
    this.$store.dispatch("pollState")
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;600&display=swap");
* {
  font-family: "Kanit", sans-serif;
}
</style>
