<template>
  <v-content>
    <div class="container">
      <v-card class="mb-5 pa-5">
        <h3>
          {{
            "ชั้นมัธยมศึกษาปีที่ " + roomSelect.Level + "/" + roomSelect.Room
          }}
        </h3>
        <v-card-title>เลือกรายวิชา</v-card-title>
        <div class="text-end">
          <v-btn color="primary" dark @click="dialog = true">
            เพิ่มรายวิชา
          </v-btn>
          <v-list subheader two-line flat>
            <v-subheader>รายวิชาที่เลือก</v-subheader>
            <v-list-item v-for="i in selectSubject" :key="i">
              <v-list-item-content>
                {{ "วิชา " + i.S_name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-card>
      <!-- <table class="table table-hover table-bordered border-dark" width="100">
        <thead class="text-center">
          <tr>
            <th>วัน\คาบที่</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">จันทร์</th>
            <td class="col-1">
              <v-select
                v-model="table.d1.p1"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p2"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p3"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p4"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p5"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p6"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p7"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p8"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p9"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p10"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p11"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d1.p12"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
          </tr>
          <tr>
            <th scope="col">อังคาร</th>
            <td class="col-1">
              <v-select
                v-model="table.d2.p1"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p2"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p3"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p4"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p5"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p6"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p7"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p8"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p9"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p10"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p11"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d2.p12"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
          </tr>
          <tr>
            <th scope="col">พุธ</th>
            <td class="col-1">
              <v-select
                v-model="table.d3.p1"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p2"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p3"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p4"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p5"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p6"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p7"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p8"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p9"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p10"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p11"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d3.p12"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
          </tr>
          <tr>
            <th scope="col">พฤหัสบดี</th>
            <td class="col-1">
              <v-select
                v-model="table.d4.p1"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p2"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p3"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p4"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p5"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p6"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p7"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p8"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p9"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p10"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p11"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d4.p12"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
          </tr>
          <tr>
            <th scope="col">ศุกร์</th>
            <td class="col-1">
              <v-select
                v-model="table.d5.p1"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p2"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p3"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p4"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p5"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p6"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p7"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p8"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p9"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p10"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p11"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
            <td class="col-1">
              <v-select
                v-model="table.d5.p12"
                :items="selectSubject"
                item-text="S_name"
                item-value="S_ID"
              ></v-select>
            </td>
          </tr>
        </tbody>
      </table> -->
      <!-- <div class="text-end">
        <v-btn color="success">บันทึกข้อมูล</v-btn>
      </div> -->
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <v-card>
          <v-card-title>เลือกรายวิชา</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <v-radio-group v-model="addSubjectValue" value="" column>
              <v-radio
                v-for="i in getSubject()"
                :key="i"
                :label="`${i.SubjectName}`"
                :value="i"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">
              ปิด
            </v-btn>
            <v-btn color="blue darken-1" text @click="addSubject">
              เลือก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      roomSelect: this.$store.getters.getRoomSelect,
      aLLSubject: "",
      selectSubject: "",
      subjectList: {
        m1: [],
        m2: [],
        m3: [],
        m4: [],
        m5: [],
        m6: [],
      },
      table: {
        d1: {
          p1: "",
          p2: "",
          p3: "",
          p4: "",
          p5: "",
          p6: "",
          p7: "",
          p8: "",
          p9: "",
          p10: "",
          p11: "",
          p12: "",
        },
        d2: {
          p1: "",
          p2: "",
          p3: "",
          p4: "",
          p5: "",
          p6: "",
          p7: "",
          p8: "",
          p9: "",
          p10: "",
          p11: "",
          p12: "",
        },
        d3: {
          p1: "",
          p2: "",
          p3: "",
          p4: "",
          p5: "",
          p6: "",
          p7: "",
          p8: "",
          p9: "",
          p10: "",
          p11: "",
          p12: "",
        },
        d4: {
          p1: "",
          p2: "",
          p3: "",
          p4: "",
          p5: "",
          p6: "",
          p7: "",
          p8: "",
          p9: "",
          p10: "",
          p11: "",
          p12: "",
        },
        d5: {
          p1: "",
          p2: "",
          p3: "",
          p4: "",
          p5: "",
          p6: "",
          p7: "",
          p8: "",
          p9: "",
          p10: "",
          p11: "",
          p12: "",
        },
      },
      dialog: false,
      addSubjectValue: "",
    };
  },
  methods: {
    fetchSubject() {
      axios
        .get("/user/subject/getAll", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.groupSubjectbyLevel(res.data.data);
        });
    },
    groupSubjectbyLevel(subjects) {
      subjects.forEach((e) => {
        switch (e.level) {
          case "1":
            this.subjectList.m1.push(e);
            break;
          case "2":
            this.subjectList.m2.push(e);
            break;
          case "3":
            this.subjectList.m3.push(e);
            break;
          case "4":
            this.subjectList.m4.push(e);
            break;
          case "5":
            this.subjectList.m5.push(e);
            break;
          case "6":
            this.subjectList.m6.push(e);
            break;
        }
      });
      console.log(this.subjectList);
    },
    getClassroomSubject() {
      axios
        .get("/user/student/get/subject", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            Term: this.$store.getters.getAcademicState.Term,
            ClassroomID: this.$store.getters.getRoomSelect.ClassroomID,
          },
        })
        .then((res) => {
          if (res.data.status) {
            this.selectSubject = res.data.data;
          }
        });
    },
    getSubject() {
      switch (this.$store.getters.getRoomSelect.Level) {
        case 1:
          return this.subjectList.m1;
        case 2:
          return this.subjectList.m2;
        case 3:
          return this.subjectList.m3;
        case 4:
          return this.subjectList.m4;
        case 5:
          return this.subjectList.m5;
        case 6:
          return this.subjectList.m6;
      }
    },
    addSubject() {
      console.log(this.addSubjectValue);
      axios
        .get("/user/room/addSubject", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ClassroomID: this.$store.getters.getRoomSelect.ClassroomID,
            S_ID: this.addSubjectValue.ID,
            S_name: this.addSubjectValue.SubjectName,
            Term: this.$store.getters.getAcademicState.Term,
          },
        })
        .then(() => {
          this.addSubjectValue = "";
          this.getClassroomSubject();
          this.dialog = false;
        });
    },
  },
  created() {
    this.fetchSubject();
    this.getClassroomSubject();
  },
};
</script>

<style>
</style>