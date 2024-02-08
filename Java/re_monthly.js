document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("re_monthly").getContext("2d");

    var data = {
        labels: ["January", "February", "March","April","May","June","July","August","September","October","November","December"],
        datasets: [
            {
                label: "2020",
                backgroundColor: "rgba(128, 0, 128, 0.6)",
                borderColor: "rgba(128, 0, 128, 1)",
                borderWidth: 1,
                barThickness: 10, // Adjust the value for the bar width
                data: [113615,118753,108670,42783,50936,190012,229357,170408,136744,119574,112483,105981] // Sample data for 2021
            },
            {
                label: "2021",
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
                barThickness: 10, // Adjust the value for the bar width
                data: [70587,81222,111241,95863,59166,134731,107785,141400,147143,137401,178814,226503] // Sample data for 2021
            },
            {
                label: "2022",
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                barThickness: 10, // Adjust the value for the bar width
                data: [88306,97587,134170,133058,122768,150509,93902,123491,113402,102660,117806,207963] // Sample data for 2022
            },
            {
                label: "2023",
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                barThickness: 10, // Adjust the value for the bar width
                data: [97708,80031,105476,85652,113276,83636,109548,122091,102656,93761,93514,138577] // Sample data for 2023
            }
        ]
    };

    var options = {
        scales: {
            x: {
                stacked: false, // Set to false for clustered bars
                barPercentage: 0.6 // Adjust the value for the spacing between bars
            },
            y: {
                stacked: false // Set to false for clustered bars
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    };

    var barChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});