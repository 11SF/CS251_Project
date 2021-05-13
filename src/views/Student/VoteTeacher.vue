<template>
  <v-container class="mt-10">
    <v-row class="mb-13">
      <v-col cols="12" lg="10">
        <v-text-field v-model="text" label="ค้นหา"></v-text-field
      ></v-col>
      <v-col cols="12" lg="2">
        <v-btn height="48" color="success" block>ค้นหา</v-btn>
      </v-col>
    </v-row>
    <h4>ผลการค้นหา</h4>
    <v-row>
      <v-col cols="12" lg="6" v-for="i in 5" :key="i">
        <v-card class="pa-5 d-flex" width="500">
          <v-avatar class="profile" color="grey" size="164" tile>
            <v-img
              src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/78841364_1483018058513655_7304058187152359424_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHJm9NOLoct9bCHqw-G08ONZK5EAyawzERkrkQDJrDMRLs4hTtJks3WHr1rL5DhFz-PpzMn3CdEjqDCnX0wZoix&_nc_ohc=E6fMG465P24AX8YTGHZ&_nc_ht=scontent.fbkk5-5.fna&oh=94a18ec6ab71c7432efcf19a63f2f8ff&oe=609CF1B7"
            ></v-img>
          </v-avatar>
          <div class="pa-5 flex-fill">
            <h5>Lorem ipsum dolor sit.</h5>
            <p>กลุ่มสาระการเรียนรู้ xxxxxxxxxxx</p>
            <v-btn color="primary" class="mt-8" block @click="dialog = true"
              >โหวต</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> ยืนยัน </v-card-title>
        <v-card-text>ต้องการโหวตอาจารย์ ...</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            ยกเลิก
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            ยืนยัน
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      dialog: false,
      selectTeacher: "",
    };
  },
};
</script>
