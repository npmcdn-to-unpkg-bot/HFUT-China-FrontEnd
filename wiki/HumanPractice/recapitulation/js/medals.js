// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('medals'));

// 指定图表的配置项和数据
var option = {
    title : {
        text: 'Medals',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Gold','Sliver','Bronze','Others']
    },
    series : [
        {
            name: 'Access Sources',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:53, name:'Gold'},
                {value:16, name:'Sliver'},
                {value:13, name:'Bronze'},
                {value:18, name:'Others'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);