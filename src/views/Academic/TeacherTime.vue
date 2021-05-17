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

        <v-list-item link @click="menuSelect(3)">
          <v-list-item-icon>
            <v-icon color="blue">mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลการเข้าสอนอาจารย์</v-list-item-title>
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
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0 content">
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
    </v-main>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: ["1", "2", "3"],
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
    },
  },
};
</script>
<style scoped>
.content {
  max-width: 1300px;
  margin: 50px auto;
}
</style>