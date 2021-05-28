/* eslint-disable */
<template>
  <v-content>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> {{$store.getters.getUserData.nameTH}} </v-list-item-title>
            <v-list-item-subtitle>role : {{$store.getters.getUserData.role}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="menuSelect(1)">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <router-link to="/student"></router-link>
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
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>คะแนนรายวิชา</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(4)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เกรดเฉลี่ย</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(5)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(6)" v-if="$store.getters.getPollState == 'true'">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>โหวดอาจารย์ดีเด่น</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pa-0 content">
      <v-container class="mt-10">
        <v-select
          :items="subjectItems"
          v-model="subject"
          label="เลือกรายวิชา"
          item-text="S_name"
          item-value="S_ID"
          class="pb-5"
          outlined
          @input="fetchAssign"
        ></v-select>
        <div class="text-center text-muted pt-10" v-if="subject == null">
          <h1>เลือกรายวิชาที่ต้องการ</h1>
        </div>
        <table class="table" v-else>
          <thead>
            <tr class="d-flex">
              <th class="col-8">ชื่องาน</th>
              <th class="col-2">คะแนนที่ได้</th>
              <th class="col-2">คะแนนเต็ม</th>
            </tr>
          </thead>
          <tbody>
            <tr class="d-flex" v-for="score in subjectScore" :key="score.title">
              <tb class="col-8">{{ score.AssignName }}</tb>
              <tb class="col-2">{{ score.ReceiveScore }}</tb>
              <tb class="col-2">{{ score.FullScore }}</tb>
            </tr>
            <tr class="d-flex">
              <tb class="col-8 text-center">รวมคะแนน</tb>
              <tb class="col-2">
                {{ calculateScore(subjectScore).cal_score }}
              </tb>
              <tb class="col-2">
                {{ calculateScore(subjectScore).cal_fullScore }}
              </tb>
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
      subjectItems: "",
      subject: null,
      subjectScore: "",
    };
  },
  methods: {
    calculateScore(subjectScore) {
      let cal_score = 0;
      let cal_fullScore = 0;
      subjectScore.forEach((e) => {
        cal_score += e.ReceiveScore;
        cal_fullScore += e.FullScore;
      });
      return { cal_score: cal_score, cal_fullScore: cal_fullScore };
    },
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "StudentHome" });
      else if (select == 2) this.$router.push({ name: "StudentInformation" });
      else if (select == 4) this.$router.push({ name: "GradeView" });
      else if (select == 5) this.$router.push({ name: "TeacherInfo" });
      else if (select == 6) this.$router.push({ name: "VoteTeacher" });
    },
    fetchSubject() {
      axios
        .get("/user/student/get/subject", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ClassroomID: this.$store.getters.getUserData.ClassroomID,
            Term: this.$store.getters.getAcademicState.Term,
          },
        })
        .then((res) => {
          this.subjectItems = res.data.data;
        });
    },
    fetchAssign() {
      // console.log(this.subject);
      axios
        .get("/user/student/get/assignments", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.$store.getters.getUserData.id,
            S_ID: this.subject,
          },
        })
        .then((res) => {
          this.subjectScore = res.data.data;
        });
    },
  },
  created() {
    this.fetchSubject();
    // console.log(this.$store.getters.getUserData.ClassroomID);
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
.outlined {
  border: 4px dotted #81c784;
  border-radius: 100%;
  padding: 100px;
}
.outlined img {
  padding: 10px;
}
</style>