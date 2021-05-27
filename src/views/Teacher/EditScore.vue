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
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการคะแนน</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(4)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลนักเรียน</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0 content">
      <v-container class="mt-10">
        <h1>แก้ไขคะแนนรายวิชา</h1>
        <v-expansion-panels class="mt-10" focusable>
          <v-expansion-panel v-for="(item, i) in subject" :key="i">
            <v-expansion-panel-header
              ><div>
                <h5>{{ item.S_name }}</h5>
                <p class="text-muted">
                  {{ "ม." + item.Level + "/" + item.Room }}
                </p>
              </div></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-btn color="primary" @click="subjectSelect(item)"
                    >เข้าสู่รายวิชา</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
      assignmentSelect: null,
      newAssignJson: {
        title: "",
        fullScore: "",
      },
      newAssign: false,
      subjects: "",
      subject: "",
      term: "",
      terms: ["1", "2"],
      assignSelect: "",
      assignList: ""
    };
  },
  methods: {
    calculateScore(assignList) {
      let cal_score = 0;
      let cal_fullScore = 0;
      assignList.forEach((e) => {
        cal_score += e.score;
        cal_fullScore += e.fullScore;
      });
      return { cal_score: cal_score, cal_fullScore: cal_fullScore };
    },
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "TeacherHome" });
      else if (select == 2) this.$router.push({ name: "TeacherInformation" });
      else if (select == 3) this.$router.push({ name: "TeacherScore" });
      else if (select == 4) this.$router.push({ name: "StudentView" });
    },
    fetchSubject() {
      axios
        .get("/user/teacher/get/subject", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.$store.getters.getUserData.id,
            Term: this.$store.getters.getAcademicState.Term,
            Year: this.$store.getters.getAcademicState.Year,
          },
        })
        .then((res) => {
          this.subject = res.data.data;
          console.log(this.subject);
        });
    },
    subjectSelect(i) {
      this.$store.dispatch('SubjectSelect',i)
      this.$router.push({name:'AssignScore'})
    }
  },
  created() {
    this.fetchSubject();
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
</style>
