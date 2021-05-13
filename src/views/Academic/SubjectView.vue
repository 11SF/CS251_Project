<template>
  <v-container class="mt-10">
    <h1>จัดการรายวิชา</h1>
    <v-row>
      <v-col cols="12" v-for="i in 6" :key="i">
        <v-card class="pa-10" rounded="lg">
          <h4>มัธยมศึกษาปีที่ {{ i }}</h4>
          <v-row>
            <v-col lg="4" cols="12" v-for="i in 7" :key="i">
              <v-card>
                <v-card-title>วิชาภาษาไทย</v-card-title>
                <v-subheader>รหัสวิชา Lorem, ipsum.</v-subheader>
                <v-subheader>ครูผู้สอน Lorem ipsum dolor sit amet.</v-subheader>
                <v-card-actions class="d-flex justify-content-end">
                  <v-btn text color="teal accent-4" @click="reveal = true">
                    แก้ไขข้อมูล
                  </v-btn>
                  <v-btn text color="red" @click="reveal = true">
                    ลบรายวิชา
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <div class="d-flex justify-content-end">
            <v-btn class="mx-2" fab dark large color="cyan">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
