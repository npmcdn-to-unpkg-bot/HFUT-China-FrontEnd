// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('distribution1'));

// 指定图表的配置项和数据
var option = {
    title : {
        text: 'Distribution Of Software Based On The Categories Of Functions',
        x:'center'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '45%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLabel:{
                rotate:-45, //刻度旋转45度角
                interval:0,
                textStyle:{
                    fontWeight:'bold',
                },
            },
            data : [
                'Search', 
                'Simulation and easy design', 
                'Automatic design for genetic circuits', 
                'Analysis, Evaluation and Recommendation', 
                'Sharing and Collaboration', 
                'Experimental tools',
                'Visualization',
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
            data:[16,24,7,16,15,14,7]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);