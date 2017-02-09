---
---

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawLeaguePosition);
google.charts.setOnLoadCallback(drawPremierLeaguePosition);
google.charts.setOnLoadCallback(drawWinLossDrawChart);

function drawChart() {
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

var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
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

var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart'));

chart.draw(data, options);
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

var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart_premier_league'));

chart.draw(data, options);
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

var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));

chart.draw(data, options);
      }
