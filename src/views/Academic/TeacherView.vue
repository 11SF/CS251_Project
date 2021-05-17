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
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการชั้นเรียน</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(6)">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
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
        <section>
          <v-select
            label="กลุ่มสาระ"
            :items="department"
            item-text="departmen_name"
            item-value="department_id"
            v-model="depart"
            @input="fetchTeacherList"
          ></v-select>
        </section>
        <section v-if="teacherList != ''">
          <h2 class="text-center">หัวหน้ากลุ่มสาระ</h2>
          <div v-for="i in teacherList" :key="i">
            <v-card width="250" class="mx-auto my-13" v-if="i.Type == 1">
              <v-img :src="userImageMock()" height="200"></v-img>
              <div class="pa-5">
                <h5>{{ i.FnameTH + " " + i.LnameTH }}</h5>
                <p>หัวหน้ากลุ่มสาระ</p>
                <p>กลุ่มสาระการเรียนรู้{{ i.departmen_name }}</p>
                <p>
                  <v-icon class="pr-3">mdi-phone</v-icon>
                  {{ i.phone }}
                </p>
                <p>
                  <v-icon class="pr-3">mdi-email</v-icon>
                  {{ i.email }}
                </p>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="
                      (dialog = true), (teacherSelect = i), fetchProfileData()
                    "
                  >
                    แก้ไขข้อมูล
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div>
        </section>
        <v-divider></v-divider>

        <v-row class="my-13">
          <v-col cols="12" lg="3" v-for="i in teacherList" :key="i">
            <v-card width="250" class="mx-auto" v-if="i.Type == 3">
              <v-img :src="userImageMock()" height="200"></v-img>
              <div class="pa-5">
                <h5>{{ i.FnameTH + " " + i.LnameTH }}</h5>
                <p>กลุ่มสาระการเรียนรู้{{ i.departmen_name }}</p>
                <p>
                  <v-icon class="pr-3">mdi-phone</v-icon>
                  {{ i.phone }}
                </p>
                <p>
                  <v-icon class="pr-3">mdi-email</v-icon>
                  {{ i.email }}
                </p>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="
                      (dialog = true), (teacherSelect = i), fetchProfileData()
                    "
                  >
                    แก้ไขข้อมูล
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>แก้ไขข้อมูลอาจารย์</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false"> ปิด </v-btn>
              <v-btn dark text @click="(dialog = false), saveData()">
                บันทึก
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-container class="mt-10">
            <h1>ข้อมูลส่วนตัว</h1>
            <v-row class="mt-10">
              <v-col cols="12" lg="6">
                <v-card class="pa-5" rounded="xl">
                  <v-row dense>
                    <v-col
                      cols="12"
                      lg="5"
                      align-self="center"
                      class="text-center"
                    >
                      <v-avatar size="208" class="d-flex mx-auto outlined">
                        <img
                          src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-1/p320x320/107698195_2967815813287518_541907919760258090_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeE3aO3DclaFIA835EOawoRtfGJcX_stZBh8Ylxf-y1kGO4umJMtOdZxjXdSJ5N0IJpcc6Rpj9i_eCT85UwALEOj&_nc_ohc=EFiQGU8_0UkAX9LrfQz&_nc_ht=scontent.fbkk5-7.fna&tp=6&oh=bb47ded825db3f157b54119d14141464&oe=609C1869"
                          alt="John"
                        />
                      </v-avatar>
                      <v-chip class="ma-2" color="#3f73ff" dark>
                        Teacher
                      </v-chip>
                    </v-col>
                    <v-col cols="12" lg="7" class="pa-5">
                      <v-text-field
                        v-model="user.FnameTH"
                        label="ชื่อ"
                      ></v-text-field>
                      <v-text-field
                        v-model="user.LnameTH"
                        label="นามสกุล"
                      ></v-text-field>
                      <v-text-field
                        v-model="user.FnameEN"
                        label="Firstname"
                      ></v-text-field>
                      <v-text-field
                        v-model="user.LnameEN"
                        label="Lastname"
                      ></v-text-field>
                      <div class="d-flex">
                        <v-text-field
                          v-model="user.Nickname"
                          label="ชื่อเล่น"
                        ></v-text-field>
                        <v-text-field
                          v-model="user.sex"
                          label="เพศ"
                        ></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
                <v-row>
                  <v-col cols="12">
                    <v-card class="pa-10" rounded="xl">
                      <h4>ข้อมูลติดต่อ</h4>
                      <div class="px-5 pt-5 d-flex justify-content-around">
                        <p class="text-center pr-5">
                          <v-text-field
                            v-model="user.Phone"
                            label="เบอร์โทรศัพท์"
                          ></v-text-field>
                        </p>
                        <p class="text-center">
                          <v-text-field
                            v-model="user.Email"
                            label="email"
                          ></v-text-field>
                        </p>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card class="pa-10" rounded="xl" height="100%">
                  <v-text-field
                    v-model="user.Bdate"
                    label="วัน/เดือน/ปีเกิด"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.Location"
                    label="ที่อยู่"
                  ></v-text-field>
                  <br />
                  <v-divider></v-divider>
                  <br />
                  <v-text-field
                    v-model="user.Sub_Type"
                    label="ประเภทย่อย"
                  ></v-text-field>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      department: "",
      depart: "",
      teacherList: "",
      dialog: false,
      teacherSelect: "",
      user: "",
      departmentSelect: "",
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
    fetchDepartment() {
      axios
        .get("/user/department/get/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.department = res.data;
          console.log(res.data);
        });
    },
    fetchTeacherList() {
      console.log(this.depart);
      axios
        .get("/user/teacher/get/byDepartment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            DepartID: this.depart,
          },
        })
        .then((res) => {
          this.teacherList = res.data;
          console.log(res.data);
        });
    },
    userImageMock() {
      return (
        "https://randomuser.me/api/portraits/men/" +
        Math.floor(Math.random() * 100) +
        ".jpg"
      );
    },
    fetchProfileData() {
      console.log(this.teacherSelect);
      axios
        .get("/user/teacher/get/byCitizenID", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.teacherSelect.CitizenID,
          },
        })
        .then((res) => {
          this.user = res.data[0];
          console.log(this.user);
        });
      axios
        .get("/user/teacher/getAdvisor", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.teacherSelect.CitizenID,
          },
        })
        .then((res) => {
          this.advisor = res.data.data[0];
          console.log(this.advisor);
        });
    },
    saveData() {
      axios.get("/user/staff/edit", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          CitizenID: this.user.CitizenID,
          ID: this.user.ID,
          Nickname: this.user.Nickname,
          FnameTH: this.user.FnameTH,
          LnameTH: this.user.LnameTH,
          FnameEN: this.user.FnameEN,
          LnameEN: this.user.LnameEN,
          Type: "Teacher",
          Sub_Type: this.user.Sub_Type,
          Location: this.user.Location,
          zip: this.user.zip,
          Bdate: this.user.Bdate,
          Email: this.user.Email,
          Phone: this.user.Phone,
        },
      }).then(() => {
        this.teacherSelect = ""
        this.fetchTeacherList()
      })
    },
  },
  created() {
    this.fetchDepartment();
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
.outlined {
  border: 4px dotted #3f73ff;
  border-radius: 100%;
  padding: 100px;
}
.outlined img {
  padding: 10px;
}
</style>