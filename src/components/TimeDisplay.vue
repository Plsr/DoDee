<template>
  <div>
    <p>It is {{ dateTime }}</p>
    <p>There are still {{ timeLeft }} left in this day</p>
  </div>
</template>

<script>
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import humanizeDuration from "humanize-duration";

dayjs.extend(advancedFormat);

export default {
  data() {
    return {
      dateTime: "",
      timeLeft: ""
    };
  },
  created() {
    this.dateTime = dayjs().format("dddd, [the] Do MMMM, YYYY");
    this.timeLeft = setInterval(this.updateTimeLeft, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeLeft);
  },
  methods: {
    updateTimeLeft() {
      const milSecsLeft = dayjs()
        .endOf("day")
        .diff(dayjs());
      this.timeLeft = humanizeDuration(milSecsLeft, {
        maxDecimalPoints: 0,
        conjunction: " and "
      });
    }
  }
};
</script>
