var ctx = document.getElementById("pie-ch");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["item1", "item2"],
    datasets: [
      {
        label: "Skill Level",
        data: [30, 50],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
  },
});

performance.mark("loading-start");

setTimeout(() => {
  performance.mark("loading-finish");
}, 1000);

// Measure login duration
const loadingMeasure = performance.measure(
  "loading-time",
  "loading-start",
  "loading-finish"
);

// Send to analytics endpoint
// or log to the console
console.log(loadingMeasure.duration);
