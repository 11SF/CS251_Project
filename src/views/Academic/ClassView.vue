<template>
  <v-container class="mt-10">
    <h1>จัดการชั้นเรียน</h1>
    <div class="d-flex justify-content-end mt-10">
      <v-btn color="success">เพิ่มระดับชั้น</v-btn>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">ระดับชั้น</th>
          <th class="text-center">ห้องย่อย</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 6" :key="i">
          <td class="text-center align-middle">มัธยมศึกษาปีที่ {{ i }}</td>
          <td class="text-center align-middle">10</td>
          <td class="text-center">
            <v-btn color="primary" class="mb-5" @click="dialog = true" block
              >ดูข้อมูล</v-btn
            >
            <v-btn color="red" dark block>ลบ</v-btn>
          </td>
        </tr>
      </tbody>
    </table>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>มัธยมศึกษาปีที่ </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> ปิด </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <table class="table" v-if="classSelect == ''">
            <thead>
              <tr>
                <th class="text-center">ห้อง</th>
                <th class="text-center">อาจารย์ที่ปรึกษา</th>
                <th class="text-center">แผนการเรียน</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <td class="text-center align-middle">1/{{ i }}</td>
                <td class="text-center align-middle">Lorem, ipsum dolor.</td>
                <td class="text-center align-middle">วิทย์-คณิต</td>
                <td>
                  <v-btn
                    color="primary"
                    class="mb-5"
                    @click="(dialog = true), (classSelect = i)"
                    block
                    >ดูข้อมูล</v-btn
                  >
                  <v-btn color="red" dark block>ลบ</v-btn>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else>
            <v-row>
              <v-col cols="12">
                <v-btn color="success" @click="classSelect = ''"
                  >ย้อนกลับ</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-card class="pa-10" rounded="lg">
                  <h1>มัธยมศึกษาปีที่ 1/{{ classSelect }}</h1>
                  <v-select
                    class="mt-5"
                    v-model="planSelect"
                    :items="planItems"
                    label="แผนการเรียน"
                    required
                  ></v-select>
                  <v-text-field
                    v-model="advisor"
                    label="อาจารย์ที่ปรึกษา"
                    required
                  ></v-text-field>
                  <div class="d-flex justify-content-end">
                    <v-btn color="success">save</v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <div class="mt-10 d-flex justify-content-end">
              <v-btn color="primary">เพิ่มนักเรียน</v-btn>
            </div>
            <table class="table table-bordered mt-1">
              <thead>
                <tr class="d-flex">
                  <th class="col-1 text-center">เลขที่</th>
                  <th class="col-2 text-center">รหัสนักเรียน</th>
                  <th class="col-5 text-center">ชื่อ-สกุล</th>
                  <th class="col-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="d-flex" v-for="i in 30" :key="i">
                  <td class="col-1 text-center align-middle">{{ i }}</td>
                  <td class="col-2 text-center align-middle">07559</td>
                  <td class="col-5 align-middle">
                    Lorem ipsum dolor sit amet consectetur.
                  </td>
                  <td class="col-4">
                    <v-btn
                      height="30"
                      color="success"
                      @click="dialog1 = true"
                      class="mb-2 mb-lg-0 mr-lg-2"
                      >ดูข้อมูล</v-btn
                    >
                    <v-btn height="30" color="red" dark @click="dialog1 = true"
                      >ลบนักเรียน</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <v-dialog
              v-model="dialog1"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <v-card>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>ข้อมูลนักเรียน</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark text @click="dialog1 = false"> ปิด </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <EditStudentInformation />
              </v-card>
            </v-dialog>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import EditStudentInformation from "../Academic/EditInformation";

export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      classSelect: "",
      planItems: ["วิทย์-คณิต", "ศิลป์-คำนวน"],
      planSelect: "วิทย์-คณิต",
    };
  },
  components: {
    EditStudentInformation,
  },
};
</script>

<style scoped>
.table td {
  text-align: center;
}
</style>
