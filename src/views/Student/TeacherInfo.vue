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
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลอาจารย์</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(6)" v-if="$store.getters.getPollState == 'true'">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>โหวดอาจารย์ดีเด่น</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pa-0 content">
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
      department: "",
      depart: "",
      teacherList: "",
    };
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "StudentHome" });
      else if (select == 3) this.$router.push({ name: "Score" });
      else if (select == 4) this.$router.push({ name: "GradeView" });
      else if (select == 2) this.$router.push({ name: "StudentInformation" });
      else if (select == 6) this.$router.push({ name: "VoteTeacher" });

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
  border: 4px dotted #81c784;
  border-radius: 100%;
  padding: 100px;
}
.outlined img {
  padding: 10px;
}
</style>