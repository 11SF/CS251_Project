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
            <v-icon color="blue">mdi-folder</v-icon>
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
    <v-main v-if="loading">
      <h1 class="text-muted">กำลังโหลด</h1>
    </v-main>
    <v-main class="content pa-0" v-else>
      <v-row>
        <v-col lg="6" cols="12">
          <v-card class="pa-4" color="green" dark>
            <h3>จำนวนนักเรียน</h3>
            <h4>{{ data.student[0]["COUNT(ID)"] }}</h4>
          </v-card>
        </v-col>
        <v-col lg="6" cols="12">
          <v-card class="pa-4" color="indigo" dark>
            <h3>จำนวนอาจารย์</h3>
            <h4>{{ data.staff[0]["COUNT(ID)"] }}</h4>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12">
          <v-card class="pa-4" color="indigo" dark>
            <h3>จำนวนกลุ่มสาระ</h3>
            <h4>{{ data.department[0]["COUNT(department_id)"] }}</h4>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12">
          <v-card class="pa-4" color="indigo" dark>
            <h3>จำนวนรายวิชา</h3>
            <h4>{{ data.subject[0]["COUNT(ID)"] }}</h4>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12">
          <v-card class="pa-4" color="indigo" dark>
            <h3>จำนวนระดับชั้น</h3>
            <h4>{{ data.level[0]["COUNT(idLevel)"] }}</h4>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12">
          <v-card class="pa-4" color="indigo" dark>
            <h3>จำนวนห้องเรียน</h3>
            <h4>{{ data.room[0]["COUNT(ClassroomID)"] }}</h4>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col lg="8" cols="12">
          <v-row>
            <v-col cols="12" lg="6">
              <v-card class="mx-auto" max-width="400" tile>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      ><h2>ข้อมูลวิชาการ</h2></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>เทอมปัจจุบัน</v-list-item-title>
                    <v-list-item-subtitle
                      >เทอม
                      {{
                        " " + $store.getters.getAcademicState.Term
                      }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>ปีการศึกษาปัจจุบัน</v-list-item-title>
                    <v-list-item-subtitle>
                      ปี{{ " " + $store.getters.getAcademicState.Year }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6">
              <v-card class="mx-auto" max-width="400" tile>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><h2>สถานะระบบ</h2></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>ระบบโหวตอาจารย์ดีเด่น</v-list-item-title>
                    <v-list-item-subtitle
                      v-if="$store.getters.getPollState == 'true'"
                      >เปิด</v-list-item-subtitle
                    >
                    <v-list-item-subtitle
                      v-if="$store.getters.getPollState == 'false'"
                      >ปิด</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card max-width="500" class="mx-auto">
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>เจ้าหน้าที่วิชาการ</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list>
              <v-list-item v-for="item in academicList" :key="item">
                <v-list-item-icon>
                  <v-avatar color="yellow"> {{ getAvatar(item) }} </v-avatar>
                </v-list-item-icon>

                <v-list-item-content>
                  {{ item.FnameTH + " " + item.LnameTH }}
                  <span
                    v-if="$store.getters.getUserData.id == item.CitizenID"
                    class="text-muted"
                    >(ฉัน)</span
                  >
                </v-list-item-content>

                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <section class="mb-10 mt-10">
        <v-card max-width="1300" class="pa-10">
          <h4>เพิ่มประกาศ</h4>
          <v-text-field
            class="mt-10"
            v-model="postData.title"
            label="ชื่อเรื่อง"
            required
          ></v-text-field>
          <v-textarea
            name="input-7-1"
            label="เนื้อหา"
            v-model="postData.message"
          ></v-textarea>
          <div class="d-flex justify-content-end">
            <v-btn color="success" @click="post">ประกาศ</v-btn>
          </div>
        </v-card>
      </section>
      <v-row>
        <v-col lg="4" cols="12" v-for="i in postList" :key="i">
          <v-card color="#26c6da" dark max-width="420">
            <v-card-title>
              <v-icon large left> mdi-bullhorn </v-icon>
              <span class="title font-weight-light">{{ i.title }}</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              {{ i.Message }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://cdn.discordapp.com/emojis/803877390786494465.png?v=1"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{
                    i.FnameTH + " " + i.LnameTH
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      academicList: "",
      data: {
        student: "",
        staff: "",
        department: "",
        subject: "",
        level: "",
        room: "",
      },
      loading: true,
      postData: {
        title: "",
        message: "",
      },
      postList: "",
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
    fetchData() {
      axios
        .get("/user/academic/getList", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.academicList = res.data.data;
          axios
            .get("/user/sum/student", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userKey")}`,
              },
            })
            .then((res) => {
              this.data.student = res.data.data;
              axios
                .get("/user/sum/staff", {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("userKey")}`,
                  },
                })
                .then((res) => {
                  this.data.staff = res.data.data;
                  axios
                    .get("/user/sum/department", {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                          "userKey"
                        )}`,
                      },
                    })
                    .then((res) => {
                      this.data.department = res.data.data;
                      axios
                        .get("/user/sum/subject", {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "userKey"
                            )}`,
                          },
                          params: {
                            Term: this.$store.getters.getAcademicState.Term,
                            Year: this.$store.getters.getAcademicState.Year,
                          },
                        })
                        .then((res) => {
                          this.data.subject = res.data.data;
                          axios
                            .get("/user/sum/level", {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                  "userKey"
                                )}`,
                              },
                              params: {
                                Year: this.$store.getters.getAcademicState.Year,
                              },
                            })
                            .then((res) => {
                              this.data.level = res.data.data;
                              axios
                                .get("/user/sum/room", {
                                  headers: {
                                    Authorization: `Bearer ${localStorage.getItem(
                                      "userKey"
                                    )}`,
                                  },
                                  params: {
                                    Year: this.$store.getters.getAcademicState
                                      .Year,
                                  },
                                })
                                .then((res) => {
                                  this.data.room = res.data.data;
                                  this.loading = false;
                                });
                            });
                        });
                    });
                });
            });
        });
    },
    getAvatar(i) {
      return i.FnameTH.charAt(0);
    },
    fetchPost() {
      axios
        .get("/user/post/getPost", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            PostById: this.$store.getters.getUserData.id,
          },
        })
        .then((res) => {
          this.postList = res.data.data;
        });
    },
    post() {
      axios
        .get("/user/post/addPost", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            title: this.postData.title,
            Message: this.postData.message,
            PostById: this.$store.getters.getUserData.id,
            priority: "1",
          },
        })
        .then(() => {
          this.fetchPost();
        });
    },
  },
  created() {
    this.fetchData();
    this.fetchPost();
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
</style>