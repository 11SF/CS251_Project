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
            v-model="forms.username"
            required
          />
          <label for="FormControlInput2" class="form-label">รหัสผ่าน</label>
          <input
            type="password"
            class="form-control"
            id="FormControlInput2"
            placeholder="เลขบัตรประชาชน"
            v-model="forms.password"
            required
          />

          <div class="d-grid gap-2 mb-4  justify-content-start">
            <v-radio-group v-model="forms.role" hide-details row>
              <v-radio value="Student" label="Student"></v-radio>
              <v-radio value="Staff" label="Staff"></v-radio>
              <v-radio value="Academic" label="ฝ่ายวิชาการ"></v-radio>
            </v-radio-group>
          </div>
          <div class="d-grid gap-2 mb-2 mt-2">
            <button class="btn btn-primary" type="button" @click="login">
              เข้าสู่ระบบ
            </button>
          </div>
          <p class="text-end ma-0">ลืมรหัสผ่านติดต่อฝ่ายวิชาการ</p>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      forms: {
        username: "",
        password: "",
        role: "Student",
      },
      valid: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("Login", this.forms);
    },
  },
  computed: {
    loginStatus() {
      return this.$store.getters.getLoginStatus;
    },
    userData() {
      return this.$store.getters.getUserData;
    },
  },
  created() {
    if (this.loginStatus == "Login") {
      if (this.userData.role == "Student")
        this.$router.push({ name: "StudentHome" });
      else if (this.userData.role == "Staff")
        this.$router.push({ name: "TeacherHome" });
        else if (this.userData.role == "Academic")
        this.$router.push({ name: "AcademicHome" });
    } else {
      this.$router.push({ name: "Login" });
    }
  },
  watch: {
    loginStatus(newStatus) {
      if (newStatus == "Login") {
        if (this.userData.role == "Student")
          this.$router.push({ name: "StudentHome" });
        else if (this.userData.role == "Staff")
          this.$router.push({ name: "TeacherHome" });
        else if (this.userData.role == "Academic")
          this.$router.push({ name: "AcademicHome" });
      }
    },
  },
};
</script>

<style scoped>

</style>
