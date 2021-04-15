<template>
  <v-row align-content="center" class="content">
    <v-col>
      <v-card max-width="500" class="mx-auto pa-10" rounded="lg" ref="form">
        <h1 class="text-center mb-5">เข้าสู่ระบบ</h1>
        <form>
          <label for="FormControlInput1" class="form-label">ชื่อผู้ใช้</label>
          <input
            type="text"
            class="form-control mb-5"
            id="FormControlInput1"
            placeholder="รหัสนักเรียน"
            v-model="form.username"
          />
          <label for="FormControlInput2" class="form-label">รหัสผ่าน</label>
          <input
            type="text"
            class="form-control mb-5"
            id="FormControlInput2"
            placeholder="เลขบัตรประชาชน"
            v-model="form.password"
          />
          <div class="d-grid gap-2 mb-2">
            <button class="btn btn-primary" type="button">เข้าสู่ระบบ</button>
          </div>
          <p class="text-end">ลืมรหัสผ่านติดต่อ 191</p>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
.content {
  background-image: url("https://cdn.discordapp.com/attachments/821677668311367691/831543855463530496/rose.png");
}
</style>
