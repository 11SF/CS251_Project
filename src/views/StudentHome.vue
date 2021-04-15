<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Sandra Adams </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="menuSelect = 1">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้าแรก</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 2">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลส่วนตัว</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 3">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>คะแนนรายวิชา</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 4">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เกรดเฉลี่ย</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 5">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 6">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>โหวดอาจารย์ดีเด่น</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="content">
      <MainStudent v-if="menuSelect == 1" />
      <information v-if="menuSelect == 2" />
      <ScorePerSubject v-if="menuSelect == 3" />
      <GradeView v-if="menuSelect == 4" />
      <TeacherInfo v-if="menuSelect == 5" />
      <VoteTeacher v-if="menuSelect == 6" />
    </v-main>
  </v-app>
</template>

<script>
import MainStudent from "../components/Student/Main";
import Information from "../components/Student/Information";
import ScorePerSubject from "../components/Student/ScorePerSubject";
import GradeView from "../components/Student/GradeView";
import TeacherInfo from "../components/Student/TeacherInfo";
import VoteTeacher from "../components/Student/VoteTeacher";
export default {
  name: "Home",
  components: {
    MainStudent,
    Information,
    ScorePerSubject,
    GradeView,
    TeacherInfo,
    VoteTeacher,
  },
  data() {
    return {
      menuSelect: 1,
    };
  },
};
</script>

<style scoped>
.content {
  background-color: grey lighten-5;
}
</style>
