<template>
  <v-container class="mt-10">
    <section>
      <v-select label="กลุ่มสาระ"></v-select>
    </section>
    <section>
      <h2 class="text-center">หัวหน้ากลุ่มสาระ</h2>
      <v-card width="250" class="mx-auto my-13">
        <v-img
          src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/78841364_1483018058513655_7304058187152359424_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHJm9NOLoct9bCHqw-G08ONZK5EAyawzERkrkQDJrDMRLs4hTtJks3WHr1rL5DhFz-PpzMn3CdEjqDCnX0wZoix&_nc_ohc=E6fMG465P24AX8YTGHZ&_nc_ht=scontent.fbkk5-5.fna&oh=94a18ec6ab71c7432efcf19a63f2f8ff&oe=609CF1B7"
          height="200"
        ></v-img>
        <div class="pa-5">
          <h5>Lorem ipsum dolor sit.</h5>
          <p>กลุ่มสาระการเรียนรู้ xxxxxxxx</p>
          <p>
            <v-icon class="pr-3">mdi-phone</v-icon>
            012 345 6789
          </p>
          <p>
            <v-icon class="pr-3">mdi-email</v-icon>
            xxxxxxxxx@xxxxxx.com
          </p>
        </div>
      </v-card>
    </section>
    <v-divider></v-divider>

    <v-row class="my-13">
      <v-col cols="12" lg="3" v-for="i in 10" :key="i">
        <v-card width="250" class="mx-auto">
          <v-img
            src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/78841364_1483018058513655_7304058187152359424_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHJm9NOLoct9bCHqw-G08ONZK5EAyawzERkrkQDJrDMRLs4hTtJks3WHr1rL5DhFz-PpzMn3CdEjqDCnX0wZoix&_nc_ohc=E6fMG465P24AX8YTGHZ&_nc_ht=scontent.fbkk5-5.fna&oh=94a18ec6ab71c7432efcf19a63f2f8ff&oe=609CF1B7"
            height="200"
          ></v-img>
          <div class="pa-5">
            <h5>Lorem ipsum dolor sit.</h5>
            <p>กลุ่มสาระการเรียนรู้ xxxxxxxxxxxxxxx</p>
            <p>
              <v-icon class="pr-3">mdi-phone</v-icon>
              xxxxxxxxxx
            </p>
            <p>
              <v-icon class="pr-3">mdi-email</v-icon>
              xxxxxx@xxxxx.com
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
