<template>
  <v-content>
    <div class="container">
      <v-card class="mb-5 pa-5">
        <v-card-title>เลือกรายวิชา</v-card-title>
        <div class="text-end">
          <v-btn color="primary">เพิ่มรายวิชา</v-btn>
          <v-list subheader two-line flat>
            <v-subheader>รายวิชาที่เลือก</v-subheader>
          </v-list>
        </div>
      </v-card>
      <table class="table table-hover table-bordered border-dark">
        <thead class="text-center">
          <tr>
            <th>วัน\คาบที่</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">จันทร์</th>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
          </tr>
          <tr>
            <th scope="col">อังคาร</th>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
          </tr>
          <tr>
            <th scope="col">พุธ</th>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
          </tr>
          <tr>
            <th scope="col">พฤหัสบดี</th>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
          </tr>
          <tr>
            <th scope="col">ศุกร์</th>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
            <td><v-select></v-select></td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <v-btn color="success">บันทึกข้อมูล</v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
export default {};
</script>

<style>
</style>