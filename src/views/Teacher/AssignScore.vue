<template>
  <v-content>
    <v-main class="pa-0 content">
      <v-container class="mt-10">
        <h1>
          {{
            "รายวิชา " +
            SubjectSelect.SubjectName +
            " ห้อง ม." +
            SubjectSelect.Level +
            "/" +
            SubjectSelect.Room
          }}
        </h1>

        <v-container>
          <v-card class="pa-10" rounded="lg">
            <div class="d-flex justify-content-end">
              <v-btn color="primary" @click="newAssign = true">เพิ่มงาน</v-btn>
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
                  v-for="score in assignList"
                  :key="score.title"
                >
                  <td class="col-5">{{ score.AssignName }}</td>
                  <td class="col-2 text-center">{{ score.FullScore }}</td>
                  <td class="col-5 text-center">
                    <v-btn @click="assignmentSelect = score" class="mr-4"
                      >แก้ไขคะแนน</v-btn
                    >
                    <v-btn @click="(dialog = true), (editAssign = score)"
                      >แก้ไขรายละเอียดงาน</v-btn
                    >
                  </td>
                </tr>
                <tr class="d-flex">
                  <td class="col-5 text-center">รวมคะแนน</td>
                  <td class="col-2 text-center">
                    {{ calculateScore(assignList).cal_fullScore }}
                  </td>
                </tr>
              </tbody>
            </table>
          </v-card>
          <section class="mt-10" v-if="assignmentSelect != ''">
            <v-text-field
              v-model="assignmentSelect.AssignName"
              label="ชื่องาน"
            ></v-text-field>
            <v-text-field
              v-model="assignmentSelect.FullScore"
              label="คะแนนเต็ม"
            >
            </v-text-field>

            <table class="table table-bordered mt-8">
              <thead>
                <tr class="d-flex">
                  <th class="col-1 text-center">เลขที่</th>
                  <th class="col-2 text-center">รหัสนักเรียน</th>
                  <th class="col-5 text-center">ชื่อ-สกุล</th>
                  <th class="col-4 text-center">แก้ไขคะแนน</th>
                </tr>
              </thead>
              <tbody>
                <tr class="d-flex" v-for="(i, index) in studentList" :key="i">
                  <td class="col-1 text-center">{{ index + 1 }}</td>
                  <td class="col-2 text-center">{{ i.ID }}</td>
                  <td class="col-5">{{ i.FnameTH + " " + i.LnameTH }}</td>
                  <td
                    class="col-4 text-center d-flex justify-content-center align-center"
                  >
                    <v-btn
                      color="white"
                      @click="
                        (CitizenID = i.CitizenID), (studentSelected = i);
                        fetchStudentScore(i);
                      "
                      ><v-icon>mdi-grease-pencil</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </v-container>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">แก้ไขรายละเอียดงาน</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="ชื่องาน"
                      required
                      v-model="editAssign.AssignName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="คะแนน"
                      type="number"
                      v-model="editAssign.FullScore"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="(dialog = false), (editAssign = '')"
              >
                ปิด
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="(dialog = false), editAssignment()"
              >
                บันทึก
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="newAssign" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">เพิ่มงาน</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="ชื่องาน"
                      required
                      v-model="newAssignment.AssignName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="คะแนน"
                      type="number"
                      v-model="newAssignment.FullScore"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="newAssign = false">
                ปิด
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="(newAssign = false), addAssign()"
              >
                บันทึก
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">จัดการคะแนน</span>
            </v-card-title>
            <v-card-text>
              <div>
                <p>{{"ชื่อ " + studentSelected.FnameTH + " " + studentSelected.LnameTH}}</p>
              </div>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="คะแนน"
                      type="number"
                      v-model="studentSelect.ReceiveScore"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="(dialog2 = false), (studentSelected = '')"
              >
                ปิด
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="(dialog2 = false), addScore()"
                :disabled="CitizenID == ''"
              >
                บันทึก
              </v-btn>
            </v-card-actions>
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
      assignList: "",
      assignmentSelect: "",
      studentList: "",
      dialog: false,
      dialog2: false,
      editAssign: "",
      newAssign: false,
      newAssignment: {
        AssignName: "",
        FullScore: "",
      },
      studentSelect: {
        ReceiveScore: 0,
      },
      CitizenID: "",
      studentSelected: "",
      add: false,
    };
  },
  methods: {
    fetchAssign() {
      // console.log(
      //   this.SubjectSelect.ClassroomID + " " + this.SubjectSelect.S_ID
      // );
      axios
        .get("/user/teacher/get/subject/assignment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ClassroomID: this.SubjectSelect.ClassroomID,
            S_ID: this.SubjectSelect.S_ID,
          },
        })
        .then((res) => {
          this.assignList = res.data.data;
          // console.log(this.assignList);
        });
    },
    calculateScore(assignList) {
      let cal_score = 0;
      let cal_fullScore = 0;
      assignList.forEach((e) => {
        // cal_score += e.score;
        cal_fullScore += e.FullScore;
      });
      return { cal_score: cal_score, cal_fullScore: cal_fullScore };
    },
    fetchStudentList() {
      axios
        .get("/user/get/student/byClassroom", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ClassroomID: this.SubjectSelect.ClassroomID,
          },
        })
        .then((res) => {
          this.studentList = res.data.data;
          // console.log(this.studentList);
        });
    },
    editAssignment() {
      // console.log(this.editAssign);
      axios
        .get("/user/teacher/edit/assignment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            S_ID: this.SubjectSelect.S_ID,
            AssignNo: this.editAssign.AssignNo,
            AssignName: this.editAssign.AssignName,
            FullScore: this.editAssign.FullScore,
            ClassroomID: this.SubjectSelect.ClassroomID,
          },
        })
        .then(() => {
          // console.log("a", res);
          this.fetchAssign();
        });
    },
    addAssign() {
      axios
        .get("/user/teacher/add/subject/assignment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            S_ID: this.SubjectSelect.S_ID,
            AssignName: this.newAssignment.AssignName,
            FullScore: this.newAssignment.FullScore,
            ClassroomID: this.SubjectSelect.ClassroomID,
          },
        })
        .then(() => {
          // console.log(res);
          this.fetchAssign();
        });
    },
    fetchStudentScore() {
      axios
        .get("/user/teacher/edit/subject/assignment/get", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            S_ID: this.SubjectSelect.S_ID,
            AssignNo: this.assignmentSelect.AssignNo,
            Student_CitizenID: this.studentSelected.CitizenID,
          },
        })
        .then((res) => {
          if (res.data.data[0] != undefined) {
            this.studentSelect.ReceiveScore = res.data.data[0].ReceiveScore;
          } else {
            this.studentSelect.ReceiveScore = 0
          }
          this.dialog2 = true;
        });
    },
    addScore() {
      axios
        .get("/user/teacher/edit/subject/assignment/student", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            S_ID: this.SubjectSelect.S_ID,
            AssignNo: this.assignmentSelect.AssignNo,
            Student_CitizenID: this.CitizenID,
            ReceiveScore: this.studentSelect.ReceiveScore,
            ClassroomID: this.SubjectSelect.ClassroomID,
          },
        })
        .then(() => {
          // console.log(res.data);
        });
      this.CitizenID = "";
      this.studentSelect.ReceiveScore = "";
    },
  },
  created() {
    this.fetchAssign();
    this.fetchStudentList();
  },
  computed: {
    SubjectSelect() {
      return this.$store.getters.getSubjectSelect;
    },
  },
};
</script>

<style>
</style>