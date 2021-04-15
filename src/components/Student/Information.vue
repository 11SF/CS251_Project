<template>
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
              <h3>{{ user.th_name }}</h3>
              <h4 class="mb-2 indigo--text text-lighten-2 mb-2">
                {{ user.en_name }}
              </h4>
              <div class="d-flex">
                <p class="pr-7">ชื่อเล่น {{ user.nickname }}</p>
                <p>เพศ {{ user.sex }}</p>
              </div>
              <p>รหัสนักเรียน {{ user.student_id }}</p>
              <p>ห้อง {{ user.class }}</p>
              <p>เลขประจำตัวประชาชน {{ user.citizen_id }}</p>
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-10" rounded="xl">
              <h4>ข้อมูลติดต่อ</h4>
              <div class="px-5 pt-5 d-flex justify-content-around">
                <p class="text-center pr-5">
                  <v-icon class="mr-5" color="indigo lighten-2">
                    mdi-phone
                  </v-icon>
                  {{ user.phone }}
                </p>
                <p class="text-center">
                  <v-icon class="mr-5" color="indigo lighten-2">
                    mdi-email
                  </v-icon>
                  {{ user.email }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card class="pa-10" rounded="xl" height="502">
          <h5>วันเดือนปีเกิด</h5>
          <p class="pl-5">{{ user.birthday }}</p>
          <h5>อายุ</h5>
          <p class="pl-5">{{ user.age }} ปี</p>
          <h5>ที่อยู่</h5>
          <p class="pl-5">{{ user.address }}</p>
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
};
</script>

<style scoped>
.outlined {
  border: 4px dotted #81c784;
  border-radius: 100%;
  padding: 100px;
}
.outlined img {
  padding: 10px;
}
</style>
