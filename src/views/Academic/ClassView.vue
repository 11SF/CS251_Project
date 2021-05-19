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
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการรายวิชา</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(5)">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
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
      <v-container class="mt-10">
        <h1>จัดการชั้นเรียน</h1>
        <div class="d-flex justify-content-end mt-10">
          <v-btn color="success" @click="addLevel = true">เพิ่มระดับชั้น</v-btn>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">ระดับชั้น</th>
              <th class="text-center">ห้องย่อย</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in LevelList" :key="i">
              <td class="text-center align-middle">
                มัธยมศึกษาปีที่ {{ i.idLevel }}
              </td>
              <td class="text-center align-middle">10</td>
              <td class="text-center">
                <v-btn color="primary" class="mb-5" @click="goClass(i)" block
                  >ดูข้อมูล</v-btn
                >
                <v-btn color="red" dark block>ลบ</v-btn>
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
              <v-toolbar-title>มัธยมศึกษาปีที่ </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false"> ปิด </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-container>
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
                  <tr v-for="i in 10" :key="i">
                    <td class="text-center align-middle">1/{{ i }}</td>
                    <td class="text-center align-middle">
                      Lorem, ipsum dolor.
                    </td>
                    <td class="text-center align-middle">วิทย์-คณิต</td>
                    <td>
                      <v-btn
                        color="primary"
                        class="mb-5"
                        @click="(dialog = true), (classSelect = i)"
                        block
                        >ดูข้อมูล</v-btn
                      >
                      <v-btn color="red" dark block>ลบ</v-btn>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-else>
                <v-row>
                  <v-col cols="12">
                    <v-btn color="success" @click="classSelect = ''"
                      >ย้อนกลับ</v-btn
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-card class="pa-10" rounded="lg">
                      <h1>มัธยมศึกษาปีที่ 1/{{ classSelect }}</h1>
                      <v-select
                        class="mt-5"
                        v-model="planSelect"
                        :items="planItems"
                        label="แผนการเรียน"
                        required
                      ></v-select>
                      <v-text-field
                        v-model="advisor"
                        label="อาจารย์ที่ปรึกษา"
                        required
                      ></v-text-field>
                      <div class="d-flex justify-content-end">
                        <v-btn color="success">save</v-btn>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
                <div class="mt-10 d-flex justify-content-end">
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
                    <tr class="d-flex" v-for="i in 30" :key="i">
                      <td class="col-1 text-center align-middle">{{ i }}</td>
                      <td class="col-2 text-center align-middle">07559</td>
                      <td class="col-5 align-middle">
                        Lorem ipsum dolor sit amet consectetur.
                      </td>
                      <td class="col-4">
                        <v-btn
                          height="30"
                          color="success"
                          @click="dialog1 = true"
                          class="mb-2 mb-lg-0 mr-lg-2"
                          >ดูข้อมูล</v-btn
                        >
                        <v-btn
                          height="30"
                          color="red"
                          dark
                          @click="dialog1 = true"
                          >ลบนักเรียน</v-btn
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
                <v-dialog
                  v-model="dialog1"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
                  <v-card>
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>ข้อมูลนักเรียน</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn dark text @click="dialog1 = false"> ปิด </v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                    <EditStudentInformation />
                  </v-card>
                </v-dialog>
              </div>
            </v-container>
          </v-card>
        </v-dialog>

        <v-dialog
          v-model="addLevel"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="addLevel = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>เพิ่มชั้นเรียน</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="(addLevel = false), save()">
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    class="mt-5"
                    v-model="level.idLevel"
                    label="ระดับชั้น"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="level.head"
                    label="หัวหน้าระดับ"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn width="100%" @click="fetchTeacher()">ค้นหา</v-btn>
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
                        @click="selectTeacher(i)"
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
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      classSelect: "",
      planItems: ["วิทย์-คณิต", "ศิลป์-คำนวน"],
      planSelect: "วิทย์-คณิต",
      LevelList: "",
      addLevel: false,
      level: {
        idLevel: "",
        head: "",
        citizenID: "",
      },
      teacherList: "",
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
    fetchLevel() {
      axios
        .get("/user/level/getAll", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.LevelList = res.data.data;
          console.log(this.LevelList);
        });
    },
    goClass(i) {
      console.log(i);
      this.$router.push({ name: "Class" });
      this.$store.dispatch("classSelect", i.idLevel);
    },
    fetchTeacher() {
      axios
        .get("/user/teacher/get/search", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            keyword: this.level.head,
          },
        })
        .then((res) => {
          this.teacherList = res.data;
          console.log(this.teacherList);
        });
    },
    userImageMock() {
      return (
        "https://randomuser.me/api/portraits/men/" +
        Math.floor(Math.random() * 100) +
        ".jpg"
      );
    },
    selectTeacher(i) {
      this.level.head = i.FnameTH + " " + i.LnameTH;
      this.level.CitizenID = i.CitizenID;
    },
    save() {
      axios
        .get("/user/level/add", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            idLevel: this.level.idLevel,
            CitizenID: this.level.CitizenID,
          },
        })
        .then(() => {
          this.level.idLevel = "";
          this.level.head = "";
          this.level.CitizenID = "";
          this.fetchLevel();
        });
    },
  },
  created() {
    this.fetchLevel();
  },
};
</script>

<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
.table td {
  text-align: center;
}
</style>
