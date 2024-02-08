var ctx = document.getElementById("re_doubleStackedBarChart").getContext("2d");

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Mortgage Sales",
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            barThickness: 'flex',
            maxBarThickness: 10,
            data: [16203, 17357, 25262, 21769, 27476, 13463, 14533, 16375, 8446, 5577, 5245, 6042]
        },
        {
            label: "Other Sales",
            backgroundColor:  "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            barThickness: 'flex',
            maxBarThickness: 10,
            data: [81505, 62674, 80214, 63883, 85800, 70173, 95015, 105716, 94210, 88184, 88269, 132535]
        }
    ]
};

var options = {
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
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