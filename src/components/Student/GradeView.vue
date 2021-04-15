<template>
  <v-container class="pt-10">
    <v-row>
      <v-col lg="5" cols="12">
        <v-select label="ชั้น" solo></v-select>
      </v-col>
      <v-col lg="5" cols="12">
        <v-select label="ภาคเรียนที่" solo></v-select>
      </v-col>
      <v-col lg="2" cols="12">
        <v-btn height="48" color="success" block>ค้นหา</v-btn>
      </v-col>
    </v-row>
    <v-card class="pa-10 mt-5" rounded="lg">
      <h2 class="text-center">ชั้นมัธยมศึกษาปีที่ 4 ภาคการศึกษาที่ 1/2564</h2>
      <table class="table">
        <thead>
          <tr class="d-flex">
            <td class="col-2">รหัสวิชา</td>
            <td class="col-5">ชื่อวิชา</td>
            <td class="col-2">ประเภท</td>
            <td class="col-1">หน่วยกิต</td>
            <td class="col-1">คะแนน</td>
            <td class="col-1">เกรด</td>
          </tr>
        </thead>
        <tbody>
          <tr class="d-flex">
            <td class="col-2">ท21201</td>
            <td class="col-5">ภาษาไทยพื้นฐาน</td>
            <td class="col-2">พื้นฐาน</td>
            <td class="col-1">1.5</td>
            <td class="col-1">79</td>
            <td class="col-1">3.5</td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>
