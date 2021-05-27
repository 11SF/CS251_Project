
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
            <v-icon color="blue">mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลส่วนตัว</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(3)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
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
        <h1>ข้อมูลส่วนตัว</h1>
        <v-row class="mt-10">
          <v-col cols="12" lg="6">
            <v-card class="pa-5" rounded="xl">
              <v-row dense>
                <v-col cols="12" lg="5" align-self="center" class="text-center">
                  <v-avatar
                  size="180"
                  class="d-flex mx-auto outlined"
                  color="#3f73ff"
                >
                </v-avatar>
                  <v-chip class="ma-2" color="#3f73ff" dark> Teacher </v-chip>
                </v-col>
                <v-col cols="12" lg="7" class="pa-5">
                  <h3>{{ user.FnameTH + " " + user.LnameTH }}</h3>
                  <h4 class="mb-2 indigo--text text-lighten-2 mb-2">
                    {{ user.FnameEN + " " + user.LnameEN }}
                  </h4>
                  <div class="d-flex">
                    <p class="pr-7">ชื่อเล่น {{ user.Nickname }}</p>
                    <!-- <p>เพศ {{ user.sex }}</p> -->
                  </div>
                  <p>ประเภท {{ user.Sub_Type }}</p>
                  <p>กลุ่มสาระ {{ user.departmen_name }}</p>
                  <p>เลขประจำตัวประชาชน {{ user.CitizenID }}</p>
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
                      {{ user.Phone }}
                    </p>
                    <p class="text-center">
                      <v-icon class="mr-5" color="indigo lighten-2">
                        mdi-email
                      </v-icon>
                      {{ user.Email }}
                    </p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="pa-10" rounded="xl" height="502">
              <h5>วันเดือนปีเกิด</h5>
              <p class="pl-5">{{ user.Bdate }}</p>
              <!-- <h5>อายุ</h5>
              <p class="pl-5">{{ user.age }} ปี</p> -->
              <h5>ที่อยู่</h5>
              <p class="pl-5">{{ user.Location }}</p>
              <br />
              <v-divider></v-divider>
              <br />
              <h5>หน้าที่</h5>
              <div class="pa-2">
                <v-chip
                  class="ma-2 mr-2"
                  color="blue"
                  dark
                  v-for="i in user.ability"
                  :key="i"
                >
                  {{ i }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-10" rounded="xl">
              <h4>ประจำชั้น</h4>
              <div class="px-5 pt-5 d-block text-center">
                <p>
                  <v-icon class="mr-5" color="indigo lighten-2">
                    mdi-clipboard-multiple
                  </v-icon>
                  {{ "มัธยมศึกษาปีที่ " + advisor.Level + "/" + advisor.Room }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
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
      advisor: "",
      department: "",
    };
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "TeacherHome" });
      else if (select == 2) this.$router.push({ name: "TeacherInformation" });
      else if (select == 3) this.$router.push({ name: "TeacherScore" });
      else if (select == 4) this.$router.push({ name: "StudentView" });
    },
    fetchProfileData() {
      axios
        .get("/user/teacher/get/byCitizenID", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.userData.id,
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
            CitizenID: this.userData.id,
          },
        })
        .then((res) => {
          this.advisor = res.data.data[0];
          console.log(this.advisor);
        });
    },
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
  },
  created() {
    this.fetchProfileData();
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
