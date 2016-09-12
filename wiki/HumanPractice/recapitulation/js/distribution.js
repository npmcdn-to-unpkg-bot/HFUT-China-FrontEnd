// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('distribution'));

// 指定图表的配置项和数据
var option = {
    title : {
        text: 'Distribution Of Software Based On The Number Of Functions',
        x:'center',
        textStyle:{
            fontSize:15,
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['One','Two','Three','Four And More']
    },
    series : [
        {
            name: 'Access Sources',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:43.40, name:'One'},
                {value:30.19, name:'Two'},
                {value:15.09, name:'Three'},
                {value:11.32, name:'Four And More'},
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