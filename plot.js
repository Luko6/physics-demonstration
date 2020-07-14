var data = [
        {x: 'Amazon', y: 120},
        {x: 'DZone', y: 60},
        {x: 'Gizmodo', y: 30},
        {x: 'StackOverFlow', y: 80},
        {x: 'CNET', y: 50}
    ];

var chart = anychart.bar();

chart.title('Website Traffic Stats');
chart.xAxis().title("Website");
chart.yAxis().title("Traffic Per Minute");

var series = chart.bar(data);

chart.container("container");

chart.draw();
