// What's ahead is not pretty, but good enough for now.
// This is supposed to be rewritten as a real project soon.
document.addEventListener("DOMContentLoaded", () => {
  const toTwoDigits = (target) => {
    if (+target < 10) {
      return "0" + target
    }

    return "" + target
  }

  const updateTime = () => {
    const now = new Date()

    const dayElement = document.getElementById("day")
    const timeElement = document.getElementById("time")

    dayElement.innerText =
      now.getFullYear()
        + "-" + toTwoDigits((now.getMonth() + 1))
        + "-" + toTwoDigits(now.getDate());

    timeElement.innerText =
      toTwoDigits(now.getHours()) + ":" + toTwoDigits(now.getMinutes())

  }

  updateTime()

  setInterval(updateTime, 1000)
})
