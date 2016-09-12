// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('valid'));

// 指定图表的配置项和数据
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Validated','Not Validated']
    },
    series : [
        {
            name: 'Access Sources',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:33.3, name:'Validated'},
                {value:66.7, name:'Not Validated'},
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