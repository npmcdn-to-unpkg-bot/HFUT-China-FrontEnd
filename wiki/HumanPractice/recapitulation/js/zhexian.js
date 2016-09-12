// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('zhexian'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['North America','Europe','Asia','Latin America']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['2009','2010','2011','2012','2013','2014','2015','2016']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'North America',
            type:'line',
            data:[4,2,2,3,1,3,2,1]
        },
        {
            name:'Europe',
            type:'line',
            data:[1,2,2,0,1,2,0,0]
        },
        {
            name:'Asia',
            type:'line',
            data:[2,2,3,6,6,5,6,5]
        },
        {
            name:'Latin America',
            type:'line',
            data:[0,0,0,1,0,0,0,0]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);