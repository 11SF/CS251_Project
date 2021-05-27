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
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(7)">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ตั้งค่าระบบ</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0 content">
      <v-container>
        <h1>ตั้งค่าระบบ</h1>
        <v-row>
          <v-col cols="12" lg="6">
            <v-card class="pa-5">
              <v-list subheader two-line flat>
                <v-subheader>สถานะระบบโหวตอาจารย์ดีเด่น</v-subheader>
                <v-list-item-group v-model="settings" multiple>
                  <v-list-item>
                    <v-list-item-action>
                      <v-checkbox
                        color="primary"
                        v-model="activePoll"
                        false-value="false"
                        true-value="true"
                      ></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title
                        >ระบบโหวตอาจารย์ดีเด่น</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >เปิดเพื่อให้นักเรียนสามารถโหวตอาจารย์ดีเด่นได้</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-card-action>
                <div>
                  <v-btn
                    block
                    color="success"
                    dark
                    @click="updateState('poll', activePoll, 1)"
                    >บันทึกข้อมูล</v-btn
                  >
                </div>
              </v-card-action>
              <v-divider></v-divider>
              <v-list subheader two-line flat>
                <v-subheader>คะแนนโหวต</v-subheader>
                <v-list-item-group v-model="settings" multiple>
                  <v-list-item v-for="item in topVote" :key="item">
                    <v-list-item-icon>
                      <v-avatar color="yellow">
                        {{ getAvatar(item) }}
                      </v-avatar>
                    </v-list-item-icon>

                    <v-list-item-content>
                      {{ item.FnameTH + " " + item.LnameTH }}
                      <span class="text-muted"
                        >คะแนนโหวต {{ " " + item.VoteScore }}</span
                      >
                    </v-list-item-content>

                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-card-action>
                <div>
                  <v-btn block color="red" @click="deletePollData" dark
                    >ลบข้อมูลการโหวต</v-btn
                  >
                </div>
              </v-card-action>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card class="pa-5">
              <v-list subheader two-line flat>
                <v-subheader>ข้อมูลวิชาการ</v-subheader>
                <v-list-item-group v-model="settings" multiple>
                  <v-list-item>
                    <template v-slot:default="{}">
                      <v-list-item-content>
                        <v-list-item-title>เทอมปัจจุบัน</v-list-item-title>
                        <v-list-item-subtitle
                          >เทอมที่ระบบทำงานอยู่</v-list-item-subtitle
                        >
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-text-field
                          type="number"
                          color="primary"
                          v-model="academicData.Term"
                        ></v-text-field>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:default="{}">
                      <v-list-item-content>
                        <v-list-item-title
                          >ปีการศึกษาปัจจุบัน</v-list-item-title
                        >
                        <v-list-item-subtitle
                          >ปีการศึกษาที่ระบบทำงานอยู่</v-list-item-subtitle
                        >
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-text-field
                          type="number"
                          color="primary"
                          v-model="academicData.Year"
                        ></v-text-field>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-card-action>
                <div class="text-end">
                  <v-btn block color="success" @click="updateState('', '', 2)" dark>บันทึกข้อมูล</v-btn>
                </div>
              </v-card-action>
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
      activePoll: "",
      mockRank: [
        {
          FnameTH: "นวพงศ์",
          LnameTH: "สิตะรุโณ",
        },
        {
          FnameTH: "นวพงศ์",
          LnameTH: "สิตะรุโณ",
        },
      ],
      academicData: this.$store.getters.getAcademicState,
      topVote: "",
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
    getAvatar(i) {
      return i.FnameTH.charAt(0);
    },
    getPollState() {
      if (this.$store.getters.getPollState == "true") {
        this.activePoll = "true";
      } else {
        this.activePoll = "false";
      }
    },
    updateState(name, status, mode) {
      if (mode === 1) {
        axios
          .get("/user/update/state", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userKey")}`,
            },
            params: {
              Name: name,
              Status: status,
            },
          })
          .then(() => {
            this.$store.dispatch("pollState");
            this.$store.dispatch("academicData");
          });
      } else {
        axios
          .get("/user/update/state", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userKey")}`,
            },
            params: {
              Name: "term",
              Status: this.academicData.Term,
            },
          })
          .then(() => {
            axios
              .get("/user/update/state", {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("userKey")}`,
                },
                params: {
                  Name: "year",
                  Status: this.academicData.Year,
                },
              })
              .then(() => {
                this.$store.dispatch("pollState");
                this.$store.dispatch("academicData");
              });
          });
      }
    },
    getTopvote() {
      axios
        .get("/user/poll/topVote", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.topVote = res.data.data;
          console.log(this.topVote);
        });
    },
    deletePollData() {
      axios
        .delete("/user/poll/delete", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then(() => {
          this.$store.dispatch("pollState");
          this.getTopvote();
        });
    },
  },
  created() {
    this.getPollState();
    this.getTopvote();
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