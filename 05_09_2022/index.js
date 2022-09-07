
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

/*
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")



ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.lineTo(75, 50);
ctx.stroke();



ctx.fillRect(25, 25, 100, 100)
ctx.clearRect(45, 45, 60, 60)
ctx.strongRect(50, 50, 50, 50)
*/