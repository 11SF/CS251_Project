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
      <v-container class="mt-10">
        <h1>Setting Page</h1>
      </v-container>
    </v-main>
  </v-content>
</template>

<script>
export default {
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