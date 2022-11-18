// adding API here //
// import axios from 'axios';

export const planetChartData = {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Today"],
      datasets: [
        {
          label: "Emotion Score",
          type: "bar",
          data: [0.51, 0.32, 0.64, 0.93, 0.76],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1
        },
        {
          label: "Average emotion score",
          type: "line",
          data: [0.44,0.45,0.54,0.56,0.53],
          backgroundColor: "#ED7E7E",
          borderColor: "#D13B3B",
          borderWidth: 2
        }
      ]
    },
  };
  
  export default planetChartData;