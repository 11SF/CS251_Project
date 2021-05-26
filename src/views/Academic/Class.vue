<template>
  <v-content>
    <v-container>
      <div
        class="textstart my-5 d-flex justify-content-between"
        v-if="classSelect == ''"
      >
        <v-btn @click="back">ย้อนกลับ</v-btn>
        <v-btn @click="addRoom = true" color="success">เพิ่มห้องเรียน</v-btn>
      </div>
      <table class="table" v-if="classSelect == ''">
        <thead>
          <tr>
            <th class="text-center">ห้อง</th>
            <th class="text-center">อาจารย์ที่ปรึกษา</th>
            <th class="text-center">แผนการเรียน</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in levelList" :key="i">
            <td class="text-center align-middle">
              {{ i.Level + "/" + i.Room }}
            </td>
            <td class="text-center align-middle">{{ i.fullnameTH }}</td>
            <td class="text-center align-middle">{{ i.Plan }}</td>
            <td>
              <v-btn
                color="primary"
                class="mb-5"
                @click="(classSelect = i), fetchData(i)"
                block
                >ดูข้อมูล</v-btn
              >
              <v-btn @click="roomSelect(i)" color="warning" dark block
                >จัดตารางเรียน</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <v-row>
          <v-col cols="12">
            <v-btn color="success" @click="classSelect = ''">ย้อนกลับ</v-btn>
          </v-col>
          <v-col cols="12">
            <v-card class="pa-10" rounded="lg">
              <h1>
                มัธยมศึกษาปีที่ {{ classSelect.Level + "/" + classSelect.Room }}
              </h1>
              <v-select
                class="mt-5"
                v-model="classSelect.Plan"
                :items="planItems"
                label="แผนการเรียน"
                disabled
                required
              ></v-select>
              <v-text-field
                v-model="classSelect.fullnameTH"
                label="อาจารย์ที่ปรึกษา"
                disabled
                required
              ></v-text-field>
              <div class="d-flex justify-content-end">
                <v-btn color="success" @click="(editDialog = true), log()"
                  >แก้ไข</v-btn
                >
                <v-btn
                  class="ml-5"
                  color="warning"
                  @click="(editDialog = true), log()"
                  >เลื่อนระดับชั้น</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="mt-10 mb-3 d-flex justify-content-end">
          <v-btn color="primary">เพิ่มนักเรียน</v-btn>
        </div>
        <table class="table table-bordered mt-1">
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
              <td class="col-1 text-center align-middle">{{ index + 1 }}</td>
              <td class="col-2 text-center align-middle">{{ i.ID }}</td>
              <td class="col-5 align-middle">
                {{ i.FnameTH + " " + i.LnameTH }}
              </td>
              <td class="col-4 text-center">
                <v-btn
                  height="30"
                  color="success"
                  @click="(dialog = true), editStudent(i.CitizenID)"
                  class="mb-2 mb-lg-0 mr-lg-2"
                  >ดูข้อมูล</v-btn
                >
                <v-btn height="30" color="red" dark @click="deleteStudent(i.ID)"
                  >ลบนักเรียน</v-btn
                >
              </td>
            </tr>
          </tbody>
        </table>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>ข้อมูลนักเรียน</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false"> ปิด </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <EditStudentInformation />
          </v-card>
        </v-dialog>

        <v-dialog
          v-model="editDialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="(editDialog = false), clearData()">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>แก้ไขห้องเรียน</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  dark
                  text
                  @click="(editDialog = false), editClassroom(), clearData()"
                >
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-select
                    class="mt-5"
                    :items="planItems"
                    v-model="classSelect.Plan"
                    label="แผนการเรียน"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="classSelect.fullnameTH"
                    label="อาจารย์ที่ปรึกษา"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    width="100%"
                    @click="fetchTeacher(classSelect.fullnameTH)"
                    >ค้นหา</v-btn
                  >
                </v-col>
              </v-row>
              <v-row v-if="teacherList != ''">
                <v-col cols="12" lg="6" v-for="i in teacherList" :key="i">
                  <v-card class="pa-5 d-flex" width="500">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img :src="userImageMock()"></v-img>
                    </v-avatar>
                    <div class="pa-5 flex-fill">
                      <h5>{{ i.FnameTH + " " + i.LnameTH }}</h5>
                      <p>กลุ่มสาระการเรียนรู้{{ i.departmen_name }}</p>
                      <v-btn
                        color="primary"
                        class="mt-8"
                        block
                        @click="selectTeacher(i, 2)"
                        >เลือก</v-btn
                      >
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>
      <v-dialog
        v-model="addRoom"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="(addRoom = false), clearData()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>เพิ่มชั้นเรียน</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="(addRoom = false), save(), clearData()">
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  class="mt-5"
                  v-model="room.Room"
                  label="ห้อง"
                  type="number"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  class="mt-5"
                  :items="planItems"
                  v-model="room.Plan"
                  label="แผนการเรียน"
                  required
                ></v-select>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  v-model="room.Fname"
                  label="อาจารย์ที่ปรึกษา"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-btn width="100%" @click="fetchTeacher(room.Fname)"
                  >ค้นหา</v-btn
                >
              </v-col>
            </v-row>
            <v-row v-if="teacherList != ''">
              <v-col cols="12" lg="6" v-for="i in teacherList" :key="i">
                <v-card class="pa-5 d-flex" width="500">
                  <v-avatar class="profile" color="grey" size="164" tile>
                    <v-img :src="userImageMock()"></v-img>
                  </v-avatar>
                  <div class="pa-5 flex-fill">
                    <h5>{{ i.FnameTH + " " + i.LnameTH }}</h5>
                    <p>กลุ่มสาระการเรียนรู้{{ i.departmen_name }}</p>
                    <v-btn
                      color="primary"
                      class="mt-8"
                      block
                      @click="selectTeacher(i, 1)"
                      >เลือก</v-btn
                    >
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import EditStudentInformation from "../../components/EditInformation";
export default {
  data() {
    return {
      studentList: "",
      levelList: "",
      dialog: false,
      classSelect: "",
      planItems: ["วิทย์-คณิต", "ศิลป์-คำนวน"],
      teacherList: "",
      teacherSelect: "",
      isEditing: false,
      editDialog: false,
      addRoom: false,
      room: {
        ClassroomID: "",
        Level: this.$store.getters.getClassSelect,
        Room: "",
        Plan: "",
        Fname: "",
        CitizenID: "",
      },
      keyword: "",
    };
  },
  methods: {
    fetchData(i) {
      axios
        .get("/user/get/student/byClassroom", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ClassroomID: i.ClassroomID,
          },
        })
        .then((res) => {
          this.studentList = res.data.data;
          console.log(this.$store.getters.getClassSelect);
        });
    },
    fetchRoom() {
      axios
        .get("/user/level/classroom/getByLevel", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            level: this.$store.getters.getClassSelect,
          },
        })
        .then((res) => {
          this.levelList = res.data.data;
          console.log(this.levelList);
        });
    },
    editStudent(i) {
      axios
        .get("/user/student/get/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: i,
          },
        })
        .then((res) => {
          if (res.status) {
            this.$store.dispatch("studentSelect", res.data.data);
          }
        });
    },
    back() {
      this.$router.push({ name: "ClassView" });
    },
    fetchTeacher(keyword) {
      axios
        .get("/user/teacher/get/search", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            keyword: keyword,
          },
        })
        .then((res) => {
          this.teacherList = res.data;
          this.keyword = "";
        });
    },
    editClassroom() {
      axios.get("/user/classroom/edit", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          ClassroomID: this.classSelect.ClassroomID,
          plan: this.classSelect.Plan,
          citizenID: this.classSelect.citizenID,
          fullnameTH: this.classSelect.fullnameTH,
        },
      });
    },
    userImageMock() {
      return (
        "https://randomuser.me/api/portraits/men/" +
        Math.floor(Math.random() * 100) +
        ".jpg"
      );
    },
    selectTeacher(i, j) {
      if (j == 1) {
        this.room.Fname = i.FnameTH + " " + i.LnameTH;
        this.room.CitizenID = i.CitizenID;
      } else {
        this.classSelect.fullnameTH = i.FnameTH + " " + i.LnameTH;
        this.classSelect.citizenID = i.CitizenID;
      }
    },
    save() {
      axios
        .get("/user/classroom/add", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            Plan: this.room.Plan,
            citizenID: this.room.CitizenID,
            fullnameTH: this.room.Fname,
            Level: this.room.Level,
            Room: this.room.Room,
            Year: this.$store.getters.getAcademicState.Year,
          },
        })
        .then(() => {
          this.fetchRoom();
        });
    },
    clearData() {
      this.room.ClassroomID = "";
      this.room.Room = "";
      this.room.Plan = "";
      this.room.Fname = "";
      this.room.CitizenID = "";
      this.classSelect = "";
      this.teacherList = "";
    },
    log() {
      console.log(this.classSelect);
    },
    deleteStudent(ID) {
      axios
        .delete("/user/student/delete", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            ID: ID,
          },
        })
        .then(() => {
          this.fetchData(this.classSelect);
        });
    },
    roomSelect(i) {
      this.$store.dispatch("roomSelect", i);
      this.$router.push("TimeTable")
    },
    addStudent(i) {
      this.$store.dispatch("roomSelect", i);
      this.$router.push("addStudent")
    }
  },
  created() {
    this.fetchRoom();
  },
  components: {
    EditStudentInformation,
  },
};
</script>

<style>
</style>