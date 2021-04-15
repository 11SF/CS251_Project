<template>
  <v-container class="mt-10">
    <h1>ข้อมูลการเข้าสอนอาจารย์</h1>
    <table class="table mt-10">
      <thead>
        <tr class="d-flex">
          <th class="col-7 text-center">ชื่อ-สกุล</th>
          <th class="col-5 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex" v-for="i in 50" :key="i">
          <td class="col-7">คณาธิป จันทร์โอชา</td>
          <td class="col-5">
            <v-btn color="primary" @click="dialog = true" block
              >ดูเวลาเข้าสอน</v-btn
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
          <v-toolbar-title>ข้อมูลการเข้าสอนของอาจารย์...</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> ปิด </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-card class="pa-5 mb-10">
            <h5>ค้นหา</h5>
            <v-row>
              <v-col cols="12" lg="5">
                <v-select :items="items" label="วิชา"></v-select>
              </v-col>
              <v-col cols="12" lg="5">
                <v-select :items="items" label="ห้อง"></v-select>
              </v-col>
              <v-col cols="12" lg="2">
                <v-btn color="success" height="48" block>ค้นหา</v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="pa-10">
            <h2>วิชาภาษาไทย (ท21201)</h2>
            <v-subheader>อาจารย์...............</v-subheader>
            <v-subheader>ห้อง ม...</v-subheader>
            <table class="table table-bordered">
              <thead>
                <tr class="d-flex">
                  <th class="col-1 text-center">คาบที่</th>
                  <th class="col-6 text-center">วันที่</th>
                  <th class="col-5 text-center">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                <tr class="d-flex" v-for="i in 40" :key="i">
                  <td class="col-1 text-center">{{ i }}</td>
                  <td class="col-6 text-center">2/03/2564</td>
                  <td class="col-5 text-center">
                    <v-icon color="success">mdi-check</v-icon>
                  </td>
                </tr>
              </tbody>
            </table>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: ["1", "2", "3"],
    };
  },
};
</script>
