<template>
  <v-content>
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
                  <v-text-field v-model="user.sex" label="เพศ"></v-text-field>
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
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style>
</style>