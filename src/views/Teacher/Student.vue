/* eslint-disable */
<template>
  <v-content>
    <v-main class="pa-0 content">
        <div class="flex mb-5">
            <v-btn @click="goBack" >ย้อนกลับ</v-btn>
        </div>
      <v-container v-if="user != 'Loading'">
        <h1>ข้อมูลส่วนตัว</h1>
        <v-row class="mt-10">
          <v-col cols="12" lg="6">
            <v-card class="pa-5 mb-4" rounded="xl">
              <v-row dense>
                <v-col cols="12" lg="5" align-self="center" class="text-center">
                  <v-avatar size="208" class="d-flex mx-auto outlined">
                    <img
                      src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/107698195_2967815813287518_541907919760258090_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE3aO3DclaFIA835EOawoRtfGJcX_stZBh8Ylxf-y1kGO4umJMtOdZxjXdSJ5N0IJpcc6Rpj9i_eCT85UwALEOj&_nc_ohc=OtV9XSYMS7IAX8YU1tP&_nc_ht=scontent.fbkk5-7.fna&oh=2fb19b59f5eb1c7f0e3709ae9da02a35&oe=60C4AAF6"
                      alt="John"
                    />
                  </v-avatar>
                  <v-chip class="ma-2" color="#81c784" dark> Student </v-chip>
                </v-col>
                <v-col cols="12" lg="7" class="pa-5">
                  <h3>
                    {{
                      user[0].profile.FnameTH + " " + user[0].profile.LnameTH
                    }}
                  </h3>
                  <h4 class="mb-2 indigo--text text-lighten-2 mb-2">
                    {{
                      user[0].profile.FnameEN + " " + user[0].profile.LnameEN
                    }}
                  </h4>
                  <div class="d-flex">
                    <p class="pr-7">ชื่อเล่น {{ user[0].profile.Nickname }}</p>
                    <p>เพศ {{ user[0].profile.sex }}</p>
                  </div>
                  <p>รหัสนักเรียน {{ user[0].profile.ID }}</p>
                  <p>
                    ห้อง ม.{{
                      " " + classroom[0].Level + "/" + classroom[0].Room
                    }}
                  </p>
                  <p>เลขประจำตัวประชาชน {{ user[0].profile.CitizenID }}</p>
                </v-col>
              </v-row>
            </v-card>
            <v-row>
              <v-col cols="12">
                <v-card class="pa-10" rounded="xl">
                  <h4>ข้อมูลติดต่อ</h4>
                  <div class="px-5 pt-5 d-flex justify-content-around">
                    <p class="text-center pr-5">
                      <v-icon class="mr-5" color="indigo lighten-2">
                        mdi-phone
                      </v-icon>
                      {{ user[0].profile.phone }}
                    </p>
                    <p class="text-center">
                      <v-icon class="mr-5" color="indigo lighten-2">
                        mdi-email
                      </v-icon>
                      {{ user[0].profile.email }}
                    </p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="pa-10" rounded="xl" height="502">
              <h5>วันเดือนปีเกิด</h5>
              <p class="pl-5">{{ user[0].profile.Bdate }}</p>
              <h5>อายุ</h5>
              <p class="pl-5">ยังไม่ได้คิด ปี</p>
              <h5>ที่อยู่</h5>
              <p class="pl-5">{{ user[0].profile.Location }}</p>
              <br />
              <v-divider></v-divider>
              <br />
              <h5>ความสามารถพิเศษ</h5>
              <div class="pa-2">
                <v-chip
                  class="ma-2 mr-2"
                  color="blue"
                  dark
                  v-for="i in user[2].Ability"
                  :key="i"
                >
                  {{ i.Ability }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-10" rounded="xl">
              <h4>ครูที่ปรึกษา</h4>
              <div class="px-5 pt-5 d-block text-center">
                <p v-for="i in advisor" :key="i">
                  <v-icon class="mr-5" color="indigo lighten-2">
                    mdi-account
                  </v-icon>
                  {{ i.fullnameTH }}
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="pa-10" rounded="xl">
              <h4>ผู้ปกครอง</h4>
              <v-row d-flex justify="center">
                <v-col cols="12" lg="6" align-self="center">
                  <div class="px-10">
                    <h4 class="pl-5">
                      {{
                        user[1].dependent.Fname + " " + user[1].dependent.Lname
                      }}
                    </h4>
                    <h4 class="pl-5">{{ user[1].dependent.Nickname }}</h4>
                  </div>
                </v-col>
                <v-col cols="12" lg="6">
                  <p class="pl-5">โทรศัพท์ {{ user[1].dependent.phone }}</p>
                  <p class="pl-5">
                    ความสัมพันธ์ {{ user[1].dependent.relation }}
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <h1>ข้อมูลส่วนตัว</h1>
        <div class="text-center text-muted py-16">
          <h1>กำลังโหลด</h1>
        </div>
      </v-container>
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",
      classroom: "",
      advisor: "",
    };
  },
  methods: {
    async fetchProfileData() {
      axios
        .get("/user/student/get/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.studentSelect,
          },
        })
        .then((res) => {
          if (res.status) {
            this.user = res.data.data;
            // console.log(this.user);
            axios
              .get("/user/student/get/advisor", {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("userKey")}`,
                },
                params: {
                  ClassroomID: this.user[0].profile.ClassroomID,
                },
              })
              .then((res) => {
                if (res.status) {
                  this.advisor = res.data.data;
                }
              });

            axios
              .get("/user/student/classroom", {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("userKey")}`,
                },
                params: {
                  ClassroomID: this.user[0].profile.ClassroomID,
                },
              })
              .then((res) => {
                if (res.status) {
                  this.classroom = res.data.data;
                  // console.log(this.classroom);
                }
              });
          }
        });
    },
    goBack() {
        this.$router.push({name: 'StudentView'})
    }
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
    studentSelect() {
      return this.$store.getters.getStudentSelect;
    },
  },
  created() {
    if (!this.studentSelect) {
      this.$router.push({ name: "StudentView" });
    } else {
      this.fetchProfileData();
    }
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