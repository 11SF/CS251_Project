<template>
  <v-content>
    <v-container class="mt-10 pb-10">
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
                <v-text-field
                  v-model="user.CitizenID"
                  label="เลขบัตรประชาชน"
                ></v-text-field>
                <div class="d-flex">
                  <v-text-field
                    v-model="user.Nickname"
                    label="ชื่อเล่น"
                  ></v-text-field>
                  <!-- <v-text-field v-model="user.sex" label="เพศ"></v-text-field> -->
                </div>
                <v-select
                  label="กลุ่มสาระ"
                  :items="department"
                  item-text="departmen_name"
                  item-value="department_id"
                  v-model="user.department"
                ></v-select>
                <v-text-field
                  v-model="user.Sub_Type"
                  label="ประเภทย่อย"
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
            <v-text-field
              v-model="user.zip"
              label="รหัสไปรษณีย์"
            ></v-text-field>
            <br />
            <v-divider></v-divider>
            <br />
          </v-card>
        </v-col>
        <div class="text-end">
          <v-btn color="primary" @click="save()" block>บันทึกข้อมูล</v-btn>
        </div>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        FnameTH: "",
        LnameTH: "",
        FnameEN: "",
        LnameEN: "",
        Nickname: "",
        Phone: "",
        Email: "",
        Bdate: "",
        Location: "",
        zip: "",
        Type: "Teacher",
        Sub_Type: "",
        CitizenID: "",
        department: "",
      },
      department: "",
    };
  },
  methods: {
    fetchDepartment() {
      axios
        .get("/user/department/get/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userKey")}`,
          },
        })
        .then((res) => {
          this.department = res.data;
          console.log(this.department);
        });
    },
    save() {
      axios.get("/user/staff/add", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userKey")}`,
        },
        params: {
          CitizenID: this.user.CitizenID,
          Nickname: this.user.Nickname,
          FnameTH: this.user.FnameTH,
          LnameTH: this.user.LnameTH,
          FnameEN: this.user.FnameEN,
          LnameEN: this.user.LnameEN,
          Type: this.user.Type,
          Sub_Type: this.user.Sub_Type,
          Location: this.user.Location,
          zip: this.user.zip,
          Bdate: this.user.Bdate,
          Email: this.user.Email,
          Phone: this.user.Phone,
          department: this.user.department
        },
      }).then(()=> {
        this.$router.push("TeacherView")
      })
    },
  },
  created() {
    this.fetchDepartment();
  },
};
</script>

<style>
</style>