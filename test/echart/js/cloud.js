
        onload = function () {
            var data = {

                value: [{
                    "name": "奇函数",
                    "value": 700
                },
                    {
                        "name": "偶函数",
                        "value": 700
                    },
                    {
                        "name": "对称",
                        "value": 700
                    },
                    {
                        "name": "周期",
                        "value": 700
                    },
                    {
                        "name": "切线",
                        "value": 700
                    },
                    {
                        "name": "导函数",
                        "value": 900
                    },
                    {
                        "name": "单调递增",
                        "value": 200
                    },
                    {
                        "name": "单调递减",
                        "value": 163
                    },
                    {
                        "name": "函数图像",
                        "value": 1000
                    },
                    {
                        "name": "恒成立",
                        "value": 800
                    },
                    {
                        "name": "最大值",
                        "value": 500
                    },
                    {
                        "name": "最小值",
                        "value": 100
                    },
                    {
                        "name": "极值",
                        "value": 1437
                    },
                    {
                        "name": "f(x)",
                        "value": 422
                    },
                    {
                        "name": "交点",
                        "value": 800
                    },
                    {
                        "name":"相切",
                        "value":500
                    },
                    {
                        "name":"二阶导数",
                        "value":500
                    },
                    {
                        "name":"e^x",
                        "value":300
                    },
                    {
                        "name":"lnx",
                        "value":500
                    },
                    {
                        "name":"泰勒展开",
                        "value":900
                    },
                    {
                        "name":"函数不动点",
                        "value":900
                    },
                    {
                        "name":"极值点",
                        "value":500
                    },
                    {
                        "name":"零点",
                        "value":200
                    },
                    {
                        "name":"零点存在定理",
                        "value":800
                    },
                    {
                        "name":"拉格朗日中值定理",
                        "value":900
                    },
                    {
                        "name":"费马引理",
                        "value":600
                    },
                    {
                        "name":"logx",
                        "value":300
                    },
                    {
                        "name":"反函数",
                        "value":300
                    },
                    {
                        "name":"琴生不等式",
                        "value":1000
                    },
                    {
                        "name":"上凸函数",
                        "value":200
                    },
                    {
                        "name":"下凸函数",
                        "value":200
                    },
                    {
                        "name":"严格单调递增",
                        "value":150
                    },
                    {
                        "name":"严格单调递减",
                        "value":150
                    },
                    {
                        "name":"凹凸性",
                        "value":500
                    },
                    {
                        "name":"x^2",
                        "value":600
                    },
                    {
                        "name":"幂函数",
                        "value":600
                    },
                    {
                        "name":"对数函数",
                        "value":600
                    },
                    {
                        "name":"指数函数",
                        "value":600
                    },
                    {
                        "name":"对勾函数",
                        "value":600
                    },
                    {
                        "name":"隐函数求导",
                        "value":400
                    },
                    {
                        "name":"单调性",
                        "value":500
                    },
                    {
                        "name":"存在",
                        "value":500
                    },
                    {
                        "name":"求导",
                        "value":300
                    },
                    {
                        "name":"斜率",
                        "value":400
                    },
                    {
                        "name":"基本初等函数",
                        "value":400
                    },
                    {
                        "name":"取值范围",
                        "value":800
                    },
                    {
                        "name":"有且仅有",
                        "value":500
                    },
                    {
                        "name":"当且仅当",
                        "value":500
                    },
                    {
                        "name":"e^x>ln(x+1)",
                        "value":800
                    },
                    {
                        "name":"对数均值不等式",
                        "value":1000

                    },
                    {
                        "name":"极值点偏移",
                        "value":1000
                    },
                    {
                        "name":"零点存在问题",
                        "value":1000
                    },
                    {
                        "name":"交点问题",
                        "value":1000
                    },
                    {
                        "name":"辅助函数",
                        "value":700
                    },
                    {
                        "name":"函数极限",
                        "value":600
                    },
                    {
                        "name":"函数与数列",
                        "value":500
                    },
                    {
                        "name":"洛必达法则",
                        "value":800
                    },
                    {
                        "name":"函数不等式",
                        "value":1000
                    },
                    {
                        "name":"定义域",
                        "value":800
                    },
                    {
                        "name":"值域",
                        "value":800
                    },
                    {
                        "name":"集合",
                        "value":400
                    },
                    {
                        "name":"可导",
                        "value":500
                    },
                    {
                        "name":"连续",
                        "value":500
                    }
                ],
                //小鸟图片
            }
            var myChart = echarts.init(document.getElementById('main'));
            //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以

 

                myChart.setOption( {
                    backgroundColor:'#fff',
                    tooltip: {
                        show: false
                    },
                    series: [{
                        type: 'wordCloud',
                        gridSize: 1,
                        sizeRange: [12, 55],
                        rotationRange: [-45, 0, 45, 90],
                        textStyle: {
                            normal: {
                                color: function() {
                                    return 'rgb(' +
                                            Math.round(Math.random() * 255) +
                                            ', ' + Math.round(Math.random() * 255) +
                                            ', ' + Math.round(Math.random() * 255) + ')'
                                }
                            }
                        },
                        left: "center",
                        top: "center",
                        // widh: '96%',
                        // height: '100%',
                        right: null,
                        bottom: null,
                        // width: 300,
                        // height: 200,
                        // top: 20,
                        data: data.value
                    }]
                })
            
 
        }
