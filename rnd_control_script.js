// Script.js

// Configuration
const config = {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Data',
            yAxisID: 'y',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: false
            },
            y: {
                stacked: false,
                min: 0,
                max: 50
            }
        },
        plugins: {
            datasource: {
                url: 'your_data.csv'
            }
        }
    }
};

// Create chart
new Chart(document.getElementById('myChart'), config);
