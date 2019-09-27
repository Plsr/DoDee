<template>
  <div class="wrapper">
    <div class="content">
      <div class="background" />
      <span class="text text-main">It is {{ dateTime }}</span>
      <span class="text">There are still {{ timeLeft }} left in this day</span>
    </div>
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
        conjunction: " and ",
        units: ["h", "m"]
      });
    }
  }
};
</script>

<style scoped>
.text {
  margin-top: 0;
  color: #ffffff;
  display: block;
  font-size: 1.5rem;
}

.text-main {
  font-weight: bold;
}

.content {
  max-width: 600px;
  margin: 0 auto 3rem auto;
  z-index: 0;
  position: relative;
}

.wrapper {
  margin: 3rem 0;
  min-height: 120px;
  position: relative;
  z-index: -1;
}

.wrapper:before {
  content: "";
  position: absolute;
  bottom: -300px;
  right: -300px;
  background: #00d2ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #00d2ff,
    #3a7bd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #00d2ff,
    #3a7bd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 200%;
  height: 200vw;
  border-radius: 50%;
}
</style>
