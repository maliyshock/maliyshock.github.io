var _$_7458 = ["width", "ready", "reportStatus", "getElementById", "line", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "", "Deliverd", "#3F6BCB", "rgba(57, 93, 196, 0.2)", "Read", "#5DB6EF", "donutChart", "doughnut", "0-24 hrs - 25%", "24-48 hrs - 67.5%", "48-72 hrs - 12.5%", "72+ hrs - 12.5%", "#395DC4", "#98D3F5", "80", "right", "rgba(53, 77, 145, 0.6)", "\"Roboto\", sans-serif"];
$(document)[_$_7458[1]](function () {
    var _0x19AC6 = $(window)[_$_7458[0]]()
});
var ctx = document[_$_7458[3]](_$_7458[2]);
var reportStatus = new Chart(ctx, {
    type: _$_7458[4],
    data: {
        labels: [_$_7458[5], _$_7458[6], _$_7458[7], _$_7458[8], _$_7458[9], _$_7458[10], _$_7458[11], _$_7458[12], _$_7458[13], _$_7458[14]],
        datasets: [{
            data: [150, 105, 122, 150, 118, 100, 125, 110, 100, 140],
            label: _$_7458[15],
            borderColor: _$_7458[16],
            pointBackgroundColor: _$_7458[16],
            pointRadius: 0,
            lineTension: 0,
            backgroundColor: _$_7458[17],
        }, {
            data: [75, 85, 83, 76, 100, 115, 80, 95, 130, 155],
            label: _$_7458[18],
            borderColor: _$_7458[19],
            pointBackgroundColor: _$_7458[19],
            pointRadius: 0,
            lineTension: 0,
            backgroundColor: _$_7458[17]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {padding: {left: 0, right: 0}},
        legend: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    max: 225,
                    min: 0,
                    stepSize: 75,
                    fontColor: "rgba(53, 77, 145, 0.4)",
                    fontSize: "10",
                    padding: 10
                },
                gridLines: {
                    zeroLineColor: 'rgba(239, 239, 239, 0.6)',
                    drawTicks: false
                }
            }],
            xAxes: [{
                ticks: {
                    max: 225,
                    min: 0,
                    stepSize: 75,
                    fontColor: "rgba(53, 77, 145, 0.4)",
                    fontSize: "10",
                    padding: 10
                },
                gridLines: {
                    zeroLineColor: 'rgba(239, 239, 239, 0.6)',
                    drawTicks: false
                }
            }]
        }
    }
});
var ctz = document[_$_7458[3]](_$_7458[20]);
var donutChart = new Chart(ctz, {
    type: _$_7458[21],
    data: {
        labels: [_$_7458[22], _$_7458[23], _$_7458[24], _$_7458[25]],
        datasets: [{
            data: [12.5, 25, 67.5, 12.5],
            backgroundColor: [_$_7458[26], _$_7458[27], _$_7458[19], _$_7458[27]],
            borderColor: [_$_7458[26], _$_7458[27], _$_7458[19], _$_7458[27]],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: _$_7458[28],
        layout: {padding: 0},
        legend: {
            display: false
        },
        tooltips: {
            bodyFontSize: 6
        }
    }
})