class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (
      arguments.length !== 2 ||
      typeof time !== "string" ||
      typeof callback !== "function"
    ) {
      throw new Error("Отсутствуют обязательные аргументы");
      console.log(typeof callback);
    } else {
      if (
        this.alarmCollection.length > 0 &&
        this.alarmCollection.filter(
          (itemAlarmColl) => itemAlarmColl.time === time
        ).length > 0
      ) {
        console.warn("Уже присутствует звонок на это же время");
        this.alarmCollection.push({
          callback: callback,
          time: time,
          canCall: true,
        });
      } else {
        this.alarmCollection.push({
          callback: callback,
          time: time,
          canCall: true,
        });
      }
    }
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (itemAlarmColl) => itemAlarmColl.time !== time
    );
  }
  getCurrentFormattedTime() {
    let nowHour = new Date().getHours();
    let nowMinute = new Date().getMinutes();
    return (
      (nowHour < 10 ? "0" + nowHour : nowHour) +
      ":" +
      (nowMinute < 10 ? "0" + nowMinute : nowMinute)
    );
  }
  start() {
    if (this.intervalId) {
      return;
    } else {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((item) => {
          if (item.time === this.getCurrentFormattedTime() && item.canCall) {
            item.canCall = false;
            item.callback();
          }
        });
      }, 1000);
    }
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((item) => (item.canCall = true));
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
