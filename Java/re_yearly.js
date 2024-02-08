document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("re_yearly").getContext("2d");

    var data = {
        labels: ["2013","2014","2015","2016","2017","2018","2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "",
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                barThickness: 10,
                data: [1157190,1165381,1289320,1341453,1409314,1375398,1348729,1499316,1491856,1485622,1225926]
            }
        ]
    };

    var options = {
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false
            }
        },
        plugins: {
            legend: {
                display: false, // Set display to false to hide the legend
            }
        }
    };

    new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});