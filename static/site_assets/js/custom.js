
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2011','2012','2013'],
        datasets: [{
            label: 'Random chart',
            data: [12,39,50],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(25, 39, 132, 1)',
                'rgba(100, 29, 132, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(25, 39, 132, 1)',
                'rgba(100, 29, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



const data = {
    labels: [
      'Order',
      'Pending',
      'Delivered'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [8500, 3630, 4870],
      backgroundColor: [
        'rgb(255, 151, 99)',
        'rgb(99, 107, 255)',
        'rgb(69, 69, 69)'
      ],
      hoverOffset: 4
    }]
  };

const pctx = document.getElementById('myPiChart').getContext('2d');
const myPiChart = new Chart(pctx,{
    type: 'doughnut',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
