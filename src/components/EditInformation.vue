<template>
  <v-content>
    <v-container class="mt-10">
      <h1>ข้อมูลส่วนตัว</h1>
      <v-row class="mt-10" v-if="$store.getters.getStudentSelect != ''">
        <v-col cols="12" lg="6">
          <v-card class="pa-5" rounded="xl">
            <v-row dense>
              <v-col cols="12" lg="5" align-self="center" class="text-center">
                <v-avatar
                  size="180"
                  class="d-flex mx-auto outlined"
                  color="yellow"
                >
                  N
                </v-avatar>
                <v-chip class="ma-2" color="#81c784" dark> Student </v-chip>
              </v-col>
              <v-col cols="12" lg="7" class="pa-5">
                <v-text-field
                  v-model="$store.getters.getStudentSelect[0].profile.FnameTH"
                  label="ชื่อ"
                ></v-text-field>
                <v-text-field
                  v-model="$store.getters.getStudentSelect[0].profile.LnameTH"
                  label="สกุล"
                ></v-text-field>
                <v-text-field
                  v-model="$store.getters.getStudentSelect[0].profile.FnameEN"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="$store.getters.getStudentSelect[0].profile.LnameEN"
                  label="Name"
                ></v-text-field>
                <div class="d-flex">
                  <v-text-field
                    v-model="$store.getters.getStudentSelect[0].profile.Nickname"
                    label="ชื่อเล่น"
                  ></v-text-field>
                  <v-text-field label="เพศ"></v-text-field>
                </div>
                <v-text-field
                  v-model="$store.getters.getStudentSelect[0].profile.ID"
                  label="รหัสนักเรียน"
                ></v-text-field>
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
                      v-model="$store.getters.getStudentSelect[0].profile.phone"
                      label="เบอร์โทรศัพท์"
                    ></v-text-field>
                  </p>
                  <p class="text-center">
                    <v-text-field
                      v-model="$store.getters.getStudentSelect[0].profile.email"
                      label="email"
                    ></v-text-field>
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card class="pa-10" rounded="xl" height="502">
            <v-text-field
              v-model="$store.getters.getStudentSelect[0].profile.Bdate"
              label="วันเดือนปีเกิด"
            ></v-text-field>
            <v-text-field
              v-model="$store.getters.getStudentSelect[0].profile.Location"
              label="ที่อยู่"
            ></v-text-field>
            <br />
            <!-- <v-divider></v-divider> -->
            <br />
            <!-- <h5>ความสามารถพิเศษ</h5> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-10" rounded="xl">
            <h4>ผู้ปกครอง</h4>
            <v-row d-flex justify="center">
              <v-col cols="12" lg="6" align-self="center">
                <div class="px-10">
                  <v-text-field
                    v-model="$store.getters.getStudentSelect[1].dependent.Fname"
                    label="ชื่อ"
                  ></v-text-field>
                  <v-text-field
                    v-model="$store.getters.getStudentSelect[1].dependent.Lname"
                    label="สกุล"
                  ></v-text-field>
                  <v-text-field
                    v-model="$store.getters.getStudentSelect[1].dependent.Nickname"
                    label="ชื่อเล่น"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="$store.getters.getStudentSelect[1].dependent.phone"
                  label="โทรศัพท์"
                ></v-text-field>
                <v-text-field
                  v-model="$store.getters.getStudentSelect[1].dependent.relation"
                  label="ความสัมพันธ์"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-end">
        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="success"
          @click="(snackbar = true), saveData()"
        >
          บันทึกข้อมูล
        </v-btn>
      </div>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        บันทึกสำเร็จ

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",
      snackbar: false,
    };
  },
  methods: {
    saveData() {
      axios.get("/user/update/student", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          Nickname: this.user[0].profile.Nickname,
          FnameTH: this.user[0].profile.FnameTH,
          LnameTH: this.user[0].profile.LnameTH,
          FnameEN: this.user[0].profile.FnameEN,
          LnameEN: this.user[0].profile.LnameEN,
          Location: this.user[0].profile.Location,
          zip: this.user[0].profile.zip,
          Bdate: this.user[0].profile.Bdate,
          email: this.user[0].profile.email,
          phone: this.user[0].profile.phone,
          CitizenID: this.user[0].profile.CitizenID,
        },
      });
      axios.get("/user/update/dependent", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          S_CitizenID: this.user[0].profile.CitizenID,
          Nickname: this.user[1].dependent.Nickname,
          Fname: this.user[1].dependent.Fname,
          Lname: this.user[1].dependent.Lname,
          phone: this.user[1].dependent.phone,
          relation: this.user[1].dependent.relation,
        },
      });
    },
  },
  created() {
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
