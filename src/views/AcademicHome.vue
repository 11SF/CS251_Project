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
            <v-list-item-subtitle>ฝ่ายวิชาการ</v-list-item-subtitle>
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
          <v-list-item-title>ข้อมูลการเข้าสอนอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 4">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการรายวิชา</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 5">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการชั้นเรียน</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = 6">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="content">
      <MainTeacher v-if="menuSelect == 1" />
      <Information v-if="menuSelect == 2" />
      <TeacherTime v-if="menuSelect == 3" />
      <SubjectView v-if="menuSelect == 4" />
      <ClassView v-if="menuSelect == 5" />
      <TeacherView v-if="menuSelect == 6" />
    </v-main>
  </v-app>
</template>

<script>
import Information from "../components/Academic/Information";
import TeacherTime from "../components/Academic/TeacherTime";
import SubjectView from "../components/Academic/SubjectView";
import ClassView from "../components/Academic/ClassView";
import TeacherView from "../components/Academic/TeacherView";
export default {
  data() {
    return {
      menuSelect: 1,
    };
  },
  components: {
    Information,
    TeacherTime,
    SubjectView,
    ClassView,
    TeacherView,
  },
};
</script>
