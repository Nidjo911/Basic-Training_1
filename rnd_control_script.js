// Script.js

// Configuration
const config = {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Data Points',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        },
        plugins: {
            datasource: {
                url: 'PSD_random_control.csv',
                parse: {
                    header: 1,
                    skipEmptyLines: true
                }
            }
        }
    }
};

// Function to process CSV data
async function processData() {
    const csvData = await fetch('PSD_random_control.csv')
        .then(response => response.text())
        .then(text => text.split('\n').slice(1))
        .catch(error => console.error('Error loading CSV:', error));

    return csvData.map(row => {
        const values = row.split(',');
        return {
            x: parseFloat(values[0]),
            y: parseFloat(values[1])
        };
    });
}

// Main execution
window.onload = async () => {
    try {
        const dataPoints = await processData();
        
        // Add data points to the dataset
        config.data.datasets[0].data.push(...dataPoints);
        
        // Create chart
        new Chart(document.getElementById('myChart'), config);
        
        console.log('Chart created successfully');
    } catch (error) {
        console.error('Failed to create chart:', error);
    }
};
