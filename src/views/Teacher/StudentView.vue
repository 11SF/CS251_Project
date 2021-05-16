/* eslint-disable */
<template>
  <v-content>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ $store.getters.getUserData.nameTH }}
            </v-list-item-title>
            <v-list-item-subtitle
              >role :
              {{ $store.getters.getUserData.role }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="menuSelect(1)">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้าแรก</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(2)">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลส่วนตัว</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(3)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการคะแนน</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(4)">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลนักเรียน</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0 content">
      <v-container class="mt-10">
        <h1>ข้อมูลนักเรียน</h1>
        <p>มัธยมศึกษาปีที่ {{ advisor.Level + "/" + advisor.Room }}</p>

        <table class="table table-bordered">
          <thead>
            <tr class="d-flex">
              <th class="col-1 text-center">เลขที่</th>
              <th class="col-2 text-center">รหัสนักเรียน</th>
              <th class="col-5 text-center">ชื่อ-สกุล</th>
              <th class="col-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="d-flex" v-for="(i, index) in studentList" :key="i">
              <td class="col-1 text-center">{{ index + 1 }}</td>
              <td class="col-2 text-center">{{ i.ID }}</td>
              <td class="col-5">{{ i.FnameTH + " " + i.LnameTH }}</td>
              <td class="col-4 text-center">
                <v-btn
                  height="30"
                  color="success"
                  @click="(dialog = true), selectStudent(i.CitizenID)"
                  >ดูข้อมูล</v-btn
                >
              </td>
            </tr>
          </tbody>
        </table>
      </v-container>
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      studentList: "",
      advisor: "",
    };
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "TeacherHome" });
      else if (select == 2) this.$router.push({ name: "TeacherInformation" });
      else if (select == 3) this.$router.push({ name: "TeacherScore" });
      else if (select == 4) this.$router.push({ name: "StudentView" });
    },
    fetchData() {
      axios
        .get("/user/teacher/getAdvisor", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.userData.id,
          },
        })
        .then((res) => {
          this.advisor = res.data.data[0];
          axios
            .get("/user/get/student/byClassroom", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userKey")}`,
              },
              params: {
                ClassroomID: res.data.data[0].ClassroomID,
              },
            })
            .then((res) => {
              this.studentList = res.data.data;
              console.log(this.studentList);
            });
        });
    },
    selectStudent(CitizenID) {
      this.$store.dispatch("studentSelect", CitizenID);
      this.$router.push({ name: "Student" });
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
</style>
