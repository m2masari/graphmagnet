document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the line chart
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'House Sales',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [65, 59, 80, 81, 56],
            fill: false
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Get the canvas element
    var ctx = document.getElementById('lineChart').getContext('2d');

    // Create and render the line chart
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});
