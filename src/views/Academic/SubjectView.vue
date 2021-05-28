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

        <v-list-item link @click="menuSelect(4)">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการรายวิชา</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(5)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการชั้นเรียน</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(6)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(7)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ตั้งค่าระบบ</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="content pa-0">
      <h1 class="text-muted" v-if="loading">กำลังโหลด</h1>
      <v-container class="mt-10" v-else>
        <h1>จัดการรายวิชา</h1>
        <div class="d-flex justify-content-end">
          <v-btn
            class="mx-2"
            fab
            dark
            large
            color="cyan"
            @click="addSubject = true"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </div>
        <v-row>
          <v-col cols="12" v-for="i in subjectList" :key="i">
            <v-card class="pa-10" rounded="lg">
              <h4 v-if="i != ''">มัธยมศึกษาปีที่ {{ i[0].level }}</h4>
              <v-row v-if="i != ''">
                <v-col lg="4" cols="12" v-for="j in i" :key="j">
                  <v-card>
                    <v-card-title>{{ j.SubjectName }}</v-card-title>
                    <v-subheader>รหัสวิชา{{ " " + j.SubjectID }}</v-subheader>
                    <v-subheader
                      >ครูผู้สอน{{ " " + j.TeacherName }}</v-subheader
                    >
                    <v-card-actions class="d-flex justify-content-end">
                      <v-btn
                        text
                        color="teal accent-4"
                        @click="(reveal = true), fetchSubjectSelect(j)"
                      >
                        แก้ไขข้อมูล
                      </v-btn>
                      <v-btn
                        text
                        color="red"
                        @click="(reveal = true), deleteSubject(j)"
                      >
                        ลบรายวิชา
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog
          v-model="addSubject"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>เพิ่มรายวิชา</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="addSubject = false"> ปิด </v-btn>
                <v-btn
                  dark
                  text
                  @click="(addSubject = false), addSubjectForm()"
                >
                  บันทึก
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-container class="mt-10">
              <v-card class="pa-10">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="ชื่อวิชา"
                      v-model="form.SubjectName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="รหัสวิชา"
                      v-model="form.SubjectID"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="ประเภท"
                      v-model="form.Type"
                      :items="TypeList"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="หน่วยกิต"
                      type="number"
                      v-model="form.Credit"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="คะแนนเต็ม"
                      type="number"
                      v-model="form.Score"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="ระดับชั้น"
                      v-model="form.level"
                      :items="levelList"
                      item-text="idLevel"
                      item-value="idLevel"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="กลุ่มสาระการเรียนรู้"
                      v-model="form.department"
                      :items="departmentList"
                      item-text="departmen_name"
                      item-value="department_id"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="ครูผู้สอน"
                      v-model="form.TeacherCitizenID"
                      :items="teacherList"
                      item-text="FnameTH"
                      item-value="CitizenID"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="เทอม"
                      v-model="form.Term"
                      :items="termList"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ปีการศึกษา"
                      type="number"
                      v-model="form.Year"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
          </v-card>
        </v-dialog>

        <v-dialog
          v-model="updateSubjectDialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>เพิ่มรายวิชา</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="updateSubjectDialog = false">
                  ปิด
                </v-btn>
                <v-btn dark text @click="updateSubject()"> บันทึก </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-container class="mt-10">
              <v-card class="pa-10">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="ชื่อวิชา"
                      v-model="form.SubjectName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="รหัสวิชา"
                      v-model="form.SubjectID"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="หน่วยกิต"
                      type="number"
                      v-model="form.Dredit"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="คะแนนเต็ม"
                      type="number"
                      v-model="form.Score"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="ครูผู้สอน"
                      v-model="form.TeacherCitizenID"
                      :items="teacherList"
                      item-text="FnameTH"
                      item-value="CitizenID"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ปีการศึกษา"
                      type="number"
                      v-model="form.Year"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
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
      subjectList: {
        m1: [],
        m2: [],
        m3: [],
        m4: [],
        m5: [],
        m6: [],
      },
      levelList: "",
      tab: "",
      addSubject: false,
      form: {
        SubjectName: "",
        SubjectID: "",
        Type: "",
        Dredit: "",
        Score: "",
        level: "",
        Term: "",
        Year: "",
        department: "",
        TeacherName: "",
        TeacherCitizenID: "",
      },
      departmentList: "",
      teacherList: "",
      teacher: {
        TeacherCitizenID: "",
        TeacherName: "",
      },
      TypeList: ["พื้นฐาน", "กิจกรรมพัฒนาผู้เรียน"],
      termList: ["1", "2"],
      updateSubjectDialog: false,
      loading: true
    };
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "AcademicHome" });
      else if (select == 2) this.$router.push({ name: "AcademicInformation" });
      else if (select == 3) this.$router.push({ name: "TeacherTime" });
      else if (select == 4) this.$router.push({ name: "SubjectView" });
      else if (select == 5) this.$router.push({ name: "ClassView" });
      else if (select == 6) this.$router.push({ name: "TeacherView" });
      else if (select == 7) this.$router.push({ name: "Setting" });
    },
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
      // console.log(this.subjectList);
      this.loading = false
    },
    fetchLevel() {
      axios
        .get("/user/level/getAll", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.levelList = res.data.data;
        });
    },
    addSubjectForm() {
      this.getType();
      this.getName();
      axios
        .get("/user/subject/add", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            SubjectName: this.form.SubjectName,
            SubjectID: this.form.SubjectID,
            Type: this.form.Type,
            Dredit: this.form.Dredit,
            Score: this.form.Score,
            level: this.form.level,
            Term: this.form.Term,
            Year: this.form.Year,
            DepartID: this.form.department,
            TeacherName: this.form.TeacherName,
            TeacherCitizenID: this.form.TeacherCitizenID,
          },
        })
        .then(() => {
          this.subjectList.m1 = [];
          this.subjectList.m2 = [];
          this.subjectList.m3 = [];
          this.subjectList.m4 = [];
          this.subjectList.m5 = [];
          this.subjectList.m6 = [];
          this.fetchSubject();
        });
    },
    fetchDepartment() {
      axios
        .get("/user/department/get/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.departmentList = res.data;
        });
    },
    fetchTeacher() {
      axios
        .get("/user/teacher/get/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.teacherList = res.data;
          // console.log(this.teacherList);
        });
    },
    getType() {
      if (this.form.Type == "พื้นฐาน") {
        this.form.Type = 1;
      } else {
        this.form.Type = 2;
      }
    },
    getName() {
      this.teacherList.forEach((e) => {
        if (this.form.TeacherCitizenID == e.CitizenID) {
          this.form.TeacherName = e.FnameTH + " " + e.LnameTH;
        }
      });
    },
    deleteSubject(i) {
      axios
        .delete("/user/subject/delete", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ID: i.ID,
          },
        })
        .then(() => {
          this.subjectList.m1 = [];
          this.subjectList.m2 = [];
          this.subjectList.m3 = [];
          this.subjectList.m4 = [];
          this.subjectList.m5 = [];
          this.subjectList.m6 = [];
          this.fetchSubject();
        });
    },
    fetchSubjectSelect(i) {
      // console.log(i);
      axios
        .get("/user/subject/getById", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ID: i.ID,
          },
        })
        .then((res) => {
          this.form = res.data.data[0];
          this.updateSubjectDialog = true;
          // console.log(this.form);
        });
    },
    updateSubject() {
      axios
        .get("/user/subject/edit", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ID: this.form.ID,
            SubjectName: this.form.SubjectName,
            SubjectID: this.form.SubjectID,
            Type: this.form.Type,
            Dredit: this.form.Dredit,
            Score: this.form.Score,
            level: this.form.level,
            Term: this.form.Term,
            Year: this.form.Year,
            DepartID: this.form.DepartID,
            TeacherName: this.form.TeacherName,
            TeacherCitizenID: this.form.TeacherCitizenID,
          },
        })
        .then(() => {
          this.updateSubjectDialog = false;
          this.subjectList.m1 = [];
          this.subjectList.m2 = [];
          this.subjectList.m3 = [];
          this.subjectList.m4 = [];
          this.subjectList.m5 = [];
          this.subjectList.m6 = [];
          this.fetchSubject();
        });
    },
  },
  created() {
    this.fetchSubject();
    this.fetchLevel();
    this.fetchTeacher();
    this.fetchDepartment();
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
</style>