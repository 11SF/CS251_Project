/* eslint-disable */
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
            <v-icon color="blue">mdi-folder</v-icon>
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
          <v-list-item-title>จัดการคะแนน</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect(4)">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ข้อมูลนักเรียน</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0 content">
      <v-container>
        <section class="mb-10">
          <v-sheet height="600" color="green" class="pa-10">
            <h1 class="text-center">พื้นที่สำหรับตารางสอน</h1>
          </v-sheet>
        </section>
        <section class="mb-10">
          <v-card max-width="1300" class="pa-10">
            <h4>เพิ่มประกาศ</h4>
            <v-text-field
              class="mt-10"
              v-model="firstname"
              label="ชื่อเรื่อง"
              required
            ></v-text-field>
            <v-textarea name="input-7-1" label="เนื้อหา"></v-textarea>
            <div class="d-flex justify-content-end">
              <v-btn color="success">ประกาศ</v-btn>
            </div>
          </v-card>
        </section>
        <v-row>
          <v-col lg="4" cols="12" v-for="alert in 4" :key="alert">
            <v-card color="#26c6da" dark max-width="420">
              <v-card-title>
                <v-icon large left> mdi-bullhorn </v-icon>
                <span class="title font-weight-light"
                  >mentos จะทำการฆ่าเจ้าของ</span
                >
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS
                because most gotcha edge cases are type invalid as well."
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      src="https://cdn.discordapp.com/emojis/803877390786494465.png?v=1"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Mentos</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-content>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    menuSelect(select) {
      if (select == 1) this.$router.push({ name: "TeacherHome" });
      else if (select == 2) this.$router.push({ name: "TeacherInformation" });
      else if (select == 3) this.$router.push({ name: "TeacherScore" });
      else if (select == 4) this.$router.push({ name: "StudentView" });
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
