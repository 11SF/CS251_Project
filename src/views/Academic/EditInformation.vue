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
      </v-list>
    </v-navigation-drawer>
    <v-main class="content pa-0">
      <v-container class="mt-10">
        <h1>ข้อมูลส่วนตัว</h1>
        <v-row class="mt-10">
          <v-col cols="12" lg="6">
            <v-card class="pa-5" rounded="xl">
              <v-row dense>
                <v-col cols="12" lg="5" align-self="center" class="text-center">
                  <v-avatar size="208" class="d-flex mx-auto outlined">
                    <img
                      src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-1/p320x320/107698195_2967815813287518_541907919760258090_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeE3aO3DclaFIA835EOawoRtfGJcX_stZBh8Ylxf-y1kGO4umJMtOdZxjXdSJ5N0IJpcc6Rpj9i_eCT85UwALEOj&_nc_ohc=EFiQGU8_0UkAX9LrfQz&_nc_ht=scontent.fbkk5-7.fna&tp=6&oh=bb47ded825db3f157b54119d14141464&oe=609C1869"
                      alt="John"
                    />
                  </v-avatar>
                  <v-chip class="ma-2" color="#81c784" dark> Student </v-chip>
                </v-col>
                <v-col cols="12" lg="7" class="pa-5">
                  <v-text-field
                    v-model="user.th_name"
                    label="ชื่อ-สกุล"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.en_name"
                    label="Name"
                  ></v-text-field>
                  <div class="d-flex">
                    <v-text-field
                      v-model="user.nickname"
                      label="ชื่อเล่น"
                    ></v-text-field>
                    <v-text-field v-model="user.sex" label="เพศ"></v-text-field>
                  </div>
                  <v-text-field
                    v-model="user.student_id"
                    label="รหัสนักเรียน"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.class"
                    label="ห้อง"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.citizen_id"
                    label="เลขประจำตัวประชาชน"
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
                        v-model="user.phone"
                        label="เบอร์โทรศัพท์"
                      ></v-text-field>
                    </p>
                    <p class="text-center">
                      <v-text-field
                        v-model="user.email"
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
                v-model="user.birthday"
                label="วันเดือนปีเกิด"
              ></v-text-field>
              <v-text-field v-model="user.age" label="อายุ"></v-text-field>
              <v-text-field
                v-model="user.address"
                label="ที่อยู่"
              ></v-text-field>
              <br />
              <v-divider></v-divider>
              <br />
              <h5>ความสามารถพิเศษ</h5>
              <div class="pa-2">
                <v-chip
                  class="ma-2 mr-2"
                  color="blue"
                  dark
                  v-for="i in user.ability"
                  :key="i"
                >
                  {{ i }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-10" rounded="xl">
              <h4>ครูที่ปรึกษา</h4>
              <div class="px-5 pt-5 d-block text-center">
                <p v-for="i in user.advisor" :key="i">
                  <v-icon class="mr-5" color="indigo lighten-2">
                    mdi-account
                  </v-icon>
                  {{ i }}
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="pa-10" rounded="xl">
              <h4>ผู้ปกครอง</h4>
              <v-row d-flex justify="center">
                <v-col cols="12" lg="6" align-self="center">
                  <div class="px-10">
                    <h4 class="pl-5">{{ user.parent.th_name }}</h4>
                    <h4 class="pl-5">{{ user.parent.en_name }}</h4>
                  </div>
                </v-col>
                <v-col cols="12" lg="6">
                  <p class="pl-5">เพศ {{ user.parent.sex }}</p>
                  <p class="pl-5">โทรศัพท์ {{ user.parent.phone }}</p>
                  <p class="pl-5">ความสัมพันธ์ {{ user.parent.relation }}</p>
                </v-col>
              </v-row>
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
    return {
      user: {
        th_name: "xxxxxxxxxx xxxxxxx",
        en_name: "xxxxxxxxxx xxxxxxx",
        nickname: "xxxxxx",
        student_id: "xxxxx",
        sex: "xxx",
        citizen_id: "x xxxx xxxxx xx x",
        birthday: "xx/xx/xxxx",
        age: "xx",
        class: "ม. x/x",
        phone: "xxxxxxxxxx",
        email: "xxxxxxxxxx xxxxxxx",
        gpa: "x.xx",
        advisor: ["xxxxxxxxxx xxxxxxx", "xxxxxxxxxx xxxxxxx"],
        address: "xxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxx",
        ability: ["xxxx", "xxxxxxx", "xx"],
        parent: {
          th_name: "xxxxxxxxxx xxxxxxx",
          en_name: "aaaaaaaaaaa  aaaaaaaa",
          sex: "xxxx",
          phone: "xxxxxxxxxx",
          relation: "xxxxxx",
        },
      },
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
