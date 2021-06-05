
        onload = function () {
            var data = {

                value: [{
                    "name": "平行向量",
                    "value": 700
                },
                    {
                        "name": "相交",
                        "value": 700
                    },
                    {
                        "name": "垂直",
                        "value": 700
                    },
                    {
                        "name": "正交",
                        "value": 700
                    },
                    {
                        "name": "平行四边形法则",
                        "value": 700
                    },
                    {
                        "name": "和向量",
                        "value": 900
                    },
                    {
                        "name": "差向量",
                        "value": 200
                    },
                    {
                        "name": "数乘",
                        "value": 1000
                    },
                    {
                        "name": "数量积",
                        "value": 1000
                    },
                    {
                        "name": "笛卡尔坐标系",
                        "value": 800
                    },
                    {
                        "name": "等和线",
                        "value": 500
                    },
                    {
                        "name": "最小值",
                        "value": 900
                    },
                    {
                        "name": "最大值",
                        "value": 1437
                    },
                    {
                        "name": "满足",
                        "value": 700
                    },
                    {
                        "name": "恒成立",
                        "value": 800
                    },
                    {
                        "name":"存在",
                        "value":700
                    },
                    {
                        "name":"模长",
                        "value":1000
                    },
                    {
                        "name":"夹角",
                        "value":1000
                    },
                    {
                        "name":"余弦值",
                        "value":700
                    },
                    {
                        "name":"正弦值",
                        "value":900
                    },
                    {
                        "name":"正切值",
                        "value":900
                    },
                    {
                        "name":"待定系数法",
                        "value":500
                    },
                    {
                        "name":"单位向量",
                        "value":1000
                    },
                    {
                        "name":"正交单位化",
                        "value":800
                    },
                    {
                        "name":"标准基",
                        "value":900
                    },
                    {
                        "name":"极化恒等式",
                        "value":900
                    },
                    {
                        "name":"矩阵大法",
                        "value":700
                    },
                    {
                        "name":"奔驰定理",
                        "value":800
                    },
                    {
                        "name":"柯西不等式",
                        "value":800
                    },
                    {
                        "name":"横坐标",
                        "value":600
                    },
                    {
                        "name":"纵坐标",
                        "value":600
                    },
                    {
                        "name":"零向量",
                        "value":1000
                    },
                    {
                        "name":"交叉相乘",
                        "value":400
                    },
                    {
                        "name":"所成角",
                        "value":500
                    },
                    {
                        "name":"向量加法",
                        "value":600
                    },
                    {
                        "name":"共线向量",
                        "value":600
                    },
                    {
                        "name":"三点共线",
                        "value":600
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
