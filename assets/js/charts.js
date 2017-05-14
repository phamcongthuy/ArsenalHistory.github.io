---
---

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(victoriesPerMonthChart);
google.charts.setOnLoadCallback(drawLeaguePosition);
google.charts.setOnLoadCallback(drawPremierLeaguePosition);
google.charts.setOnLoadCallback(drawWinLossDrawChart);

function renderChart(type, id, options, data){

    var element = document.getElementById(id);
    if (element === null) {
        return;
    }

    var chart;
    switch (type) {
        case "LineChart":
            chart = new google.visualization.LineChart(element);
            break;
        case "ScatterChart":
            chart = new google.visualization.ScatterChart(element);
            break;
        case "PieChart":
            chart = new google.visualization.PieChart(element);
            break;
    }

     chart.draw(data, options);
}

function victoriesPerMonthChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Points'],
        {% for data in site.data.victories-per-month %}
        ['{{data.Month}}', {{data.PointsPerMonth }}],
        {% endfor %}
    ]);

    var options = {
        title: 'Points per month in the League (1893 - present)',
        curveType: 'function',
        legend: { position: 'bottom' },
        series: {
            0: { color: '#EA323D' },
        }
    };

    renderChart('LineChart','curve_chart', options, data);
}

function drawLeaguePosition() {
    var data = google.visualization.arrayToDataTable([
        ['Season', 'Position'],
        {% for data in site.data.season-finishes %}
        ['{{data.Season}}', {{data.Position }}],
        {% endfor %}
    ]);

    var options = {
        title: 'Season finishes (1893 - present)',
        curveType: 'function',
        legend: { position: 'bottom' },
        series: {
            0: { color: '#EA323D' },
        },
        vAxis: {
            direction: -1, viewWindow: {
                min: 0,
                max: 20
            }
        }
    };

    renderChart('ScatterChart','scatter_chart', options, data);
}

function drawPremierLeaguePosition() {
    var data = google.visualization.arrayToDataTable([
        ['Season', 'Position'],
        {% for data in site.data.season-finishes-premier-league %}
        ['{{data.Season}}', {{data.Position }}],
        {% endfor %}
    ]);

    var options = {
        title: 'Season finishes in premier league (1992 - present)',
        curveType: 'function',
        legend: { position: 'bottom' },
        series: {
            0: { color: '#EA323D' },
        },
        vAxis: {
            direction: -1, viewWindow: {
                min: 0,
                max: 20
            }
        }
    };

    renderChart('ScatterChart','scatter_chart_premier_league', options, data);
}

function drawWinLossDrawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Results', 'Def'],
        {% for data in site.data.win-loss-record %}
        ['Wins', {{data.Wins }}],
        ['Draws', {{data.Draws }}],
        ['Losses', {{data.Losses }}],
        {% endfor %}
    ]);

    var options = {
        title: 'Win/Draw/Loss record since 1893 in the League',
        curveType: 'function',
        legend: { position: 'bottom' },
    };

    renderChart('PieChart','pie_chart', options, data);
}


$(window).resize(function(){
    victoriesPerMonthChart();
    drawLeaguePosition();
    drawPremierLeaguePosition();
    drawWinLossDrawChart();
});
