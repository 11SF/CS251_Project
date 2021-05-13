<template>
  <v-container class="mt-10">
    <v-select
      :items="subjectItems"
      label="เลือกรายวิชา"
      class="pb-5"
      outlined
    ></v-select>
    <table class="table">
      <thead>
        <tr class="d-flex">
          <th class="col-8">ชื่องาน</th>
          <th class="col-2">คะแนนที่ได้</th>
          <th class="col-2">คะแนนเต็ม</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex" v-for="score in subjectScore" :key="score.title">
          <th class="col-8">{{ score.title }}</th>
          <th class="col-2">{{ score.score }}</th>
          <th class="col-2">{{ score.fullScore }}</th>
        </tr>
        <tr class="d-flex">
          <th class="col-8 text-center">รวมคะแนน</th>
          <th class="col-2">{{ calculateScore(subjectScore).cal_score }}</th>
          <th class="col-2">
            {{ calculateScore(subjectScore).cal_fullScore }}
          </th>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      subjectItems: ["อังกฤษ", "ภาษาไทย", "วิทยาศาสตร์", "คณิตศาสตร์"],
      subjectScore: [
        {
          title: "แบบฝึกหัดที่ 1",
          score: 10,
          fullScore: 10,
        },
        {
          title: "แบบฝึกหัดที่ 2",
          score: 12,
          fullScore: 15,
        },
        {
          title: "แบบฝึกหัดที่ 3",
          score: 10,
          fullScore: 10,
        },
      ],
    };
  },
  methods: {
    calculateScore(subjectScore) {
      let cal_score = 0;
      let cal_fullScore = 0;
      subjectScore.forEach((e) => {
        cal_score += e.score;
        cal_fullScore += e.fullScore;
      });
      return { cal_score: cal_score, cal_fullScore: cal_fullScore };
    },
  },
};
</script>
