<template>
  <v-container class="mt-10">
    <h1>ข้อมูลนักเรียน</h1>
    <p>มัธยมศึกษาปีที่ 6/3</p>

    <table class="table table-bordered">
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
          <td class="col-1 text-center">{{ i }}</td>
          <td class="col-2 text-center">xxxxx</td>
          <td class="col-5">Lorem ipsum dolor sit.</td>
          <td class="col-4 text-center">
            <v-btn height="30" color="success" @click="dialog = true"
              >ดูข้อมูล</v-btn
            >
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
          <v-toolbar-title>ข้อมูลนักเรียน</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> ปิด </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <StudentInformation />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import StudentInformation from "../Student/Information";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    StudentInformation,
  },
};
</script>
