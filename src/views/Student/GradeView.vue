/* eslint-disable */
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
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เกรดเฉลี่ย</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(5)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(6)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>โหวดอาจารย์ดีเด่น</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pa-0 content">
      <div class="text-center text-muted" v-if="rooms == ''">
        <h1>กำลังโหลด</h1>
      </div>
      <v-container class="pt-10" v-else>
        <v-row>
          <v-col lg="5" cols="12">
            <v-select
              label="ชั้น"
              :items="rooms"
              item-text="Level"
              item-value="ClassroomID"
              v-model="room"
              solo
            ></v-select>
          </v-col>
          <v-col lg="5" cols="12">
            <v-select
              label="ภาคเรียนที่"
              :disabled="room == ''"
              :items="terms"
              v-model="term"
              solo
            ></v-select>
          </v-col>
          <v-col lg="2" cols="12">
            <v-btn
              height="48"
              color="success"
              block
              :disabled="room == '' || term == ''"
              @click="fetchTable(), getRoomNumber(room)"
              >ค้นหา</v-btn
            >
          </v-col>
        </v-row>
        <div class="text-center text-muted mt-16" v-if="table == ''">
          <h1>กรุณาใส่ข้อมูล</h1>
        </div>
        <div class="text-center text-muted mt-16" v-else-if="table == '-'">
          <h1>ไม่พบข้อมูลผลการเรียน</h1>
        </div>
        <v-card class=" pa-lg-10 pa-1 mt-5" rounded="lg" v-else>
          <h2 class="text-center">
            ชั้นมัธยมศึกษาปีที่ {{ room_detail.Level }} ภาคการศึกษาที่
            {{ term + "/" + room_detail.Year }}
          </h2>
          <table class="table">
            <thead>
              <tr class="d-flex">
                <td class="col-2">รหัสวิชา</td>
                <td class="col-5">ชื่อวิชา</td>
                <td class="col-2">ประเภท</td>
                <td class="col-1">หน่วยกิต</td>
                <td class="col-1">คะแนน</td>
                <td class="col-1">เกรด</td>
              </tr>
            </thead>
            <tbody>
              <tr class="d-flex" v-for="i in table" :key="i">
                <td class="col-2">{{ i.SubjectID }}</td>
                <td class="col-5">{{ i.SubjectName }}</td>
                <td class="col-2">{{ getType(i.Type) }}</td>
                <td class="col-1">{{ i.Dredit }}</td>
                <td class="col-1">{{ i.Score }}</td>
                <td class="col-1">{{ i.Grade }}</td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </v-container>
    </v-main>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      rooms: "",
      room: "",
      terms: ["1", "2"],
      term: "",
      table: "",
      room_detail: "",
    };
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "StudentHome" });
      else if (select == 3) this.$router.push({ name: "Score" });
      else if (select == 2) this.$router.push({ name: "StudentInformation" });
      else if (select == 5) this.$router.push({ name: "TeacherInfo" });
      else if (select == 6) this.$router.push({ name: "VoteTeacher" });
    },
    fetchRoom() {
      axios
        .get("/user/student/get/historyRoom", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.$store.getters.getUserData.id,
          },
        })
        .then((res) => {
          this.rooms = res.data;
          console.log(this.rooms);
        });
    },
    fetchTable() {
      axios
        .get("/user/student/get/gpaTable", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
          params: {
            CitizenID: this.$store.getters.getUserData.id,
            ClassroomID: this.room,
            Term: this.term,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data != "") {
            this.table = res.data;
            console.log(this.table);
          } else {
            this.table = "-";
          }
        });
    },
    getRoomNumber(a) {
      this.rooms.forEach((element) => {
        if (element.ClassroomID == a) {
          this.room_detail = element;
        }
      });
    },
    getType(a) {
      if (a == "1") {
        return "พื้นฐาน";
      } else if (a == "2") {
        return "กิจกรรมพัฒนาผู้เรียน";
      }
    },
  },
  created() {
    this.fetchRoom();
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