// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('requirement'));

// 指定图表的配置项和数据
var option = {
    title : {
        text: 'How Much Software Meet The Requirement Of These Suggestions',
        x:'center'
    },
    color: ['#009966'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : [
                'Ⅰ', 
                'Ⅱ', 
                'Ⅲ', 
                'Ⅳ', 
                'Ⅴ', 
                'Ⅵ',
                'Ⅶ',
            ],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Access Directly',
            type:'bar',
            barWidth: '60%',
            data:[7,33,14,2,11,8,8]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);