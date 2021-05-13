<template>
  <v-container>
    <section class="mb-10">
      <v-sheet height="600" color="green" class="pa-10">
        <h1 class="text-center">พื้นที่สำหรับตารางเรียน</h1>
      </v-sheet>
    </section>
    <v-row>
      <v-col lg="4" cols="12" v-for="alert in 4" :key="alert">
        <v-card color="#26c6da" dark max-width="420">
          <v-card-title>
            <v-icon large left> mdi-bullhorn </v-icon>
            <span class="title font-weight-light"
              >Lorem ipsum dolor sit amet.</span
            >
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis iste
            facere sequi delectus. Expedita, quisquam reprehenderit maiores eius
            minus ipsum?
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
                <v-list-item-title>Lorem, ipsum.</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
