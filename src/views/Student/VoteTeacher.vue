<template>
  <v-content>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> {{$store.getters.getUserData.nameTH}} </v-list-item-title>
            <v-list-item-subtitle>role : {{$store.getters.getUserData.role}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="menuSelect(1)">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <router-link to="/student"></router-link>
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
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>คะแนนรายวิชา</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(4)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เกรดเฉลี่ย</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(5)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(6)" v-if="$store.getters.getPollState == 'true'">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>โหวดอาจารย์ดีเด่น</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pa-0 content" :key="componentKey">
      <v-container class="mt-10" v-if="permission == true">
        <v-row class="mb-13">
          <v-col cols="12" lg="10">
            <v-text-field v-model="keyword" label="ค้นหา"></v-text-field
          ></v-col>
          <v-col cols="12" lg="2">
            <v-btn height="48" color="success" block @click="findTeacher"
              >ค้นหา</v-btn
            >
          </v-col>
        </v-row>
        <div class="text-center text-muted" v-if="teacherList == ''">
          <h1>ค้นหารายชื่อ</h1>
        </div>
        <h4 v-if="teacherList != ''">ผลการค้นหา</h4>
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
                  @click="(dialog = true), (vote = i)"
                  >โหวต</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline"> ยืนยัน </v-card-title>
            <v-card-text
              >ต้องการโหวตอาจารย์{{
                vote.FnameTH + " " + vote.LnameTH
              }}</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="(dialog = false), (vote = '')"
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="(dialog = false), sendVote(),forceRerender()"
              >
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>

      <div class="text-center text-muted" v-else>
        <h1>Status : {{ msg }}</h1>
        <h3>คุณได้โหวด {{ vote.FnameTH + " " + vote.LnameTH }} เรียบร้อยแล้ว</h3>
      </div>
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      dialog: false,
      selectTeacher: "",
      permission: "",
      keyword: "",
      teacherList: "",
      vote: "",
      msg: "",
      componentKey: 0,
    };
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "StudentHome" });
      else if (select == 3) this.$router.push({ name: "Score" });
      else if (select == 4) this.$router.push({ name: "GradeView" });
      else if (select == 5) this.$router.push({ name: "TeacherInfo" });
      else if (select == 2) this.$router.push({ name: "StudentInformation" });
    },
    fetchCheck() {
      axios
        .get("/user/poll/get/permission", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.$store.getters.getUserData.id,
          },
        })
        .then((res) => {
          if (res.data.status) {
            this.permission = true;
            // console.log(res.data.status);
          } else {
            this.permission = false;
            this.msg = res.data.msg;
            if (res.data.msg == "Voted") {
              this.vote = this.getVote();
            }
          }
        });
    },
    findTeacher() {
      axios
        .get("/user/teacher/get/search", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            keyword: this.keyword,
          },
        })
        .then((res) => {
          this.teacherList = res.data;
          // console.log(res.data);
        });
    },
    userImageMock() {
      return (
        "https://randomuser.me/api/portraits/men/" +
        Math.floor(Math.random() * 100) +
        ".jpg"
      );
    },
    sendVote() {
      axios
        .post(
          "/user/poll/vote",
          {
            CitizenID: this.$store.getters.getUserData.id,
            T_CitizenID: this.vote.CitizenID,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userKey")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            this.forceRerender();
            this.fetchCheck()
          }
        });
    },
    getVote() {
      axios
        .get("/user/poll/get/vote", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.$store.getters.getUserData.id,
          },
        })
        .then((res) => {
          axios
            .get("/user/teacher/get/byCitizenID", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("userKey")}`,
              },
              params: {
                CitizenID: res.data.data.T_CitizenID,
              },
            })
            .then((res) => {
              this.vote = res.data[0];
              // console.log(res.data);
            });
        });
    },
    forceRerender() {
      this.componentKey += 1;
    }
  },
  created() {
    this.fetchCheck();
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