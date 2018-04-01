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
        
        ['Aug', 0.946236559139785],
        
        ['Sep', 1.0172711571675301],
        
        ['Oct', 1.0711297071129706],
        
        ['Nov', 0.9411764705882353],
        
        ['Dec', 1.0115511551155116],
        
        ['Jan', 0.9111111111111111],
        
        ['Feb', 1.0418848167539267],
        
        ['Mar', 0.9664694280078896],
        
        ['Apr', 1.0603174603174603],
        
        ['May', 1.1197604790419162],
        
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
        
        ['1893/1894', 9],
        
        ['1894/1895', 8],
        
        ['1895/1896', 7],
        
        ['1896/1897', 10],
        
        ['1897/1898', 5],
        
        ['1898/1899', 7],
        
        ['1899/1900', 8],
        
        ['1900/1901', 7],
        
        ['1901/1902', 4],
        
        ['1902/1903', 3],
        
        ['1903/1904', 2],
        
        ['1904/1905', 10],
        
        ['1905/1906', 12],
        
        ['1906/1907', 7],
        
        ['1907/1908', 15],
        
        ['1908/1909', 6],
        
        ['1909/1910', 18],
        
        ['1910/1911', 10],
        
        ['1911/1912', 10],
        
        ['1912/1913', 20],
        
        ['1913/1914', 3],
        
        ['1914/1915', 5],
        
        ['1919/1920', 10],
        
        ['1920/1921', 9],
        
        ['1921/1922', 17],
        
        ['1922/1923', 11],
        
        ['1923/1924', 19],
        
        ['1924/1925', 20],
        
        ['1925/1926', 2],
        
        ['1926/1927', 11],
        
        ['1927/1928', 10],
        
        ['1928/1929', 9],
        
        ['1929/1930', 14],
        
        ['1930/1931', 1],
        
        ['1931/1932', 2],
        
        ['1932/1933', 1],
        
        ['1933/1934', 1],
        
        ['1934/1935', 1],
        
        ['1935/1936', 6],
        
        ['1936/1937', 3],
        
        ['1937/1938', 1],
        
        ['1938/1939', 5],
        
        ['1946/1947', 13],
        
        ['1947/1948', 1],
        
        ['1948/1949', 5],
        
        ['1949/1950', 6],
        
        ['1950/1951', 5],
        
        ['1951/1952', 3],
        
        ['1952/1953', 1],
        
        ['1953/1954', 12],
        
        ['1954/1955', 9],
        
        ['1955/1956', 5],
        
        ['1956/1957', 5],
        
        ['1957/1958', 12],
        
        ['1958/1959', 3],
        
        ['1959/1960', 13],
        
        ['1960/1961', 11],
        
        ['1961/1962', 10],
        
        ['1962/1963', 7],
        
        ['1963/1964', 8],
        
        ['1964/1965', 13],
        
        ['1965/1966', 14],
        
        ['1966/1967', 7],
        
        ['1967/1968', 9],
        
        ['1968/1969', 4],
        
        ['1969/1970', 12],
        
        ['1970/1971', 1],
        
        ['1971/1972', 5],
        
        ['1972/1973', 2],
        
        ['1973/1974', 10],
        
        ['1974/1975', 16],
        
        ['1975/1976', 17],
        
        ['1976/1977', 8],
        
        ['1977/1978', 5],
        
        ['1978/1979', 7],
        
        ['1979/1980', 4],
        
        ['1980/1981', 3],
        
        ['1981/1982', 5],
        
        ['1982/1983', 10],
        
        ['1983/1984', 6],
        
        ['1984/1985', 7],
        
        ['1985/1986', 7],
        
        ['1986/1987', 4],
        
        ['1987/1988', 6],
        
        ['1988/1989', 1],
        
        ['1989/1990', 4],
        
        ['1990/1991', 1],
        
        ['1991/1992', 4],
        
        ['1992/1993', 10],
        
        ['1993/1994', 4],
        
        ['1994/1995', 12],
        
        ['1995/1996', 5],
        
        ['1996/1997', 3],
        
        ['1997/1998', 1],
        
        ['1998/1999', 2],
        
        ['1999/2000', 2],
        
        ['2000/2001', 2],
        
        ['2001/2002', 1],
        
        ['2002/2003', 2],
        
        ['2003/2004', 1],
        
        ['2004/2005', 2],
        
        ['2005/2006', 4],
        
        ['2006/2007', 4],
        
        ['2007/2008', 3],
        
        ['2008/2009', 4],
        
        ['2009/2010', 3],
        
        ['2010/2011', 4],
        
        ['2011/2012', 3],
        
        ['2012/2013', 4],
        
        ['2013/2014', 4],
        
        ['2014/2015', 3],
        
        ['2015/2016', 2],
        
        ['2016/2017', 5],
        
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
        
        ['1992/1993', 10],
        
        ['1993/1994', 4],
        
        ['1994/1995', 12],
        
        ['1995/1996', 5],
        
        ['1996/1997', 3],
        
        ['1997/1998', 1],
        
        ['1998/1999', 2],
        
        ['1999/2000', 2],
        
        ['2000/2001', 2],
        
        ['2001/2002', 1],
        
        ['2002/2003', 2],
        
        ['2003/2004', 1],
        
        ['2004/2005', 2],
        
        ['2005/2006', 4],
        
        ['2006/2007', 4],
        
        ['2007/2008', 3],
        
        ['2008/2009', 4],
        
        ['2009/2010', 3],
        
        ['2010/2011', 4],
        
        ['2011/2012', 3],
        
        ['2012/2013', 4],
        
        ['2013/2014', 4],
        
        ['2014/2015', 3],
        
        ['2015/2016', 2],
        
        ['2016/2017', 5],
        
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
        ['Wins', 
        
          2077
         
      ],
        ['Draws', 
        
          1130 
         
      ],
        ['Losses', 
        
          1317
         
      ],
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
