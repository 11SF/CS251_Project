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
                <p class="text-muted">{{ "ม." + item.Level + "/" + item.Room }}</p>
              </div></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-btn color="primary" @click="dialog = true"
                    >แก้ไขคะแนน</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>วิชา .........</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false"> ปิด </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-container>
              <v-card class="pa-10" rounded="lg">
                <div class="d-flex justify-content-end">
                  <v-btn color="primary" @click="newAssign = true"
                    >เพิ่มงาน</v-btn
                  >
                </div>
                <table class="table">
                  <thead>
                    <tr class="d-flex">
                      <th class="col-5 text-center">ชื่องาน</th>
                      <th class="col-2 text-center">คะแนนเต็ม</th>
                      <th class="col-5 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="d-flex"
                      v-for="score in subjectScore"
                      :key="score.title"
                    >
                      <td class="col-5">{{ score.title }}</td>
                      <td class="col-2 text-center">{{ score.fullScore }}</td>
                      <td class="col-5 text-center">
                        <v-btn @click="assignmentSelect = score"
                          >แก้ไขคะแนน</v-btn
                        >
                      </td>
                    </tr>
                    <tr class="d-flex">
                      <td class="col-5 text-center">รวมคะแนน</td>
                      <td class="col-2 text-center">
                        {{ calculateScore(subjectScore).cal_fullScore }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </v-card>
              <section class="mt-10" v-if="assignmentSelect != null">
                <v-text-field
                  v-model="assignmentSelect.title"
                  label="ชื่องาน"
                ></v-text-field>
                <v-text-field
                  v-model="assignmentSelect.fullScore"
                  label="คะแนนเต็ม"
                >
                </v-text-field>

                <table class="table table-bordered mt-8">
                  <thead>
                    <tr class="d-flex">
                      <th class="col-1 text-center">เลขที่</th>
                      <th class="col-2 text-center">รหัสนักเรียน</th>
                      <th class="col-5 text-center">ชื่อ-สกุล</th>
                      <th class="col-4 text-center">คะแนนที่ได้</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="d-flex" v-for="i in 30" :key="i">
                      <td class="col-1 text-center">{{ i }}</td>
                      <td class="col-2 text-center">xxxxx</td>
                      <td class="col-5">Lorem ipsum dolor sit.</td>
                      <td
                        class="col-4 text-center d-flex justify-content-center align-center"
                      >
                        <div style="width: 20px">
                          <v-text-field
                            v-model="assignmentSelect.score"
                          ></v-text-field>
                        </div>
                        / {{ assignmentSelect.fullScore }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-end">
                  <v-btn color="success" @click="assignmentSelect = null"
                    >save</v-btn
                  >
                </div>
              </section>

              <section class="mt-10" v-if="newAssign === true">
                <v-text-field
                  v-model="newAssignJson.title"
                  label="ชื่องาน"
                ></v-text-field>
                <v-text-field
                  v-model="newAssignJson.fullScore"
                  label="คะแนนเต็ม"
                >
                </v-text-field>

                <table class="table table-bordered mt-8">
                  <thead>
                    <tr class="d-flex">
                      <th class="col-1 text-center">เลขที่</th>
                      <th class="col-2 text-center">รหัสนักเรียน</th>
                      <th class="col-5 text-center">ชื่อ-สกุล</th>
                      <th class="col-4 text-center">คะแนนที่ได้</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="d-flex" v-for="i in 30" :key="i">
                      <td class="col-1 text-center">{{ i }}</td>
                      <td class="col-2 text-center">xxxxx</td>
                      <td class="col-5">Lorem ipsum dolor sit.</td>
                      <td
                        class="col-4 text-center d-flex justify-content-center align-center"
                      >
                        <div style="width: 20px">
                          <v-text-field></v-text-field>
                        </div>
                        / {{ newAssignJson.fullScore }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-end">
                  <v-btn color="success" @click="newAssign = false">save</v-btn>
                </div>
              </section>
            </v-container>
          </v-card>
        </v-dialog>
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
      subjectScore: [
        {
          title: "แบบฝึกหัดที่ 1",
          fullScore: 10,
        },
        {
          title: "แบบฝึกหัดที่ 2",
          fullScore: 15,
        },
        {
          title: "แบบฝึกหัดที่ 3",
          fullScore: 10,
        },
      ],
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
    };
  },
  methods: {
    calculateScore(subjectScore) {
      let cal_score = 0;
      let cal_fullScore = 0;
      subjectScore.forEach((e) => {
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
            Term: "1",
            Year: "2561",
          },
        })
        .then((res) => {
          this.subject = res.data.data;
          console.log(this.subject);
        });
    },
  },
  created() {
    this.fetchSubject();
  },
};
</script>
