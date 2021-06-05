
        onload = function () {
            var data = {

                value: [{
                    "name": "数列通项",
                    "value": 700
                },
                    {
                        "name": "数列求和",
                        "value": 700
                    },
                    {
                        "name": "裂项",
                        "value": 700
                    },
                    {
                        "name": "数列放缩",
                        "value": 700
                    },
                    {
                        "name": "数列不动点",
                        "value": 700
                    },
                    {
                        "name": "生成函数",
                        "value": 900
                    },
                    {
                        "name": "数列收敛",
                        "value": 200
                    },
                    {
                        "name": "数列单调性",
                        "value": 163
                    },
                    {
                        "name": "一阶递推",
                        "value": 1000
                    },
                    {
                        "name": "二阶递推",
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
                        "name": "数列发散",
                        "value": 1437
                    },
                    {
                        "name": "an",
                        "value": 422
                    },
                    {
                        "name": "前n项和",
                        "value": 800
                    },
                    {
                        "name":"等差数列",
                        "value":500
                    },
                    {
                        "name":"等比数列",
                        "value":500
                    },
                    {
                        "name":"等差中项",
                        "value":300
                    },
                    {
                        "name":"等比中项",
                        "value":500
                    },
                    {
                        "name":"等比数列求和",
                        "value":900
                    },
                    {
                        "name":"高斯求和",
                        "value":900
                    },
                    {
                        "name":"公差",
                        "value":500
                    },
                    {
                        "name":"公比",
                        "value":200
                    },
                    {
                        "name":"特征根方程",
                        "value":800
                    },
                    {
                        "name":"数列周期性",
                        "value":900
                    },
                    {
                        "name":"数列收敛准则",
                        "value":600
                    },
                    {
                        "name":"数列极限",
                        "value":300
                    },
                    {
                        "name":"级数求和",
                        "value":300
                    },
                    {
                        "name":"巴塞尔级数",
                        "value":1000
                    },
                    {
                        "name":"求证",
                        "value":200
                    },
                    {
                        "name":"夹逼准则",
                        "value":200
                    },
                    {
                        "name":"首项",
                        "value":150
                    },
                    {
                        "name":"斐波那契数列",
                        "value":150
                    },
                    {
                        "name":"无理数",
                        "value":500
                    },
                    {
                        "name":"等差·等比",
                        "value":600
                    },
                    {
                        "name":"错位相减法",
                        "value":600
                    },
                    {
                        "name":"倒叙相加法",
                        "value":600
                    },
                    {
                        "name":"累加法",
                        "value":600
                    },
                    {
                        "name":"累乘法",
                        "value":600
                    },
                    {
                        "name":"阿贝尔变换",
                        "value":400
                    },
                    {
                        "name":"单调递增",
                        "value":500
                    },
                    {
                        "name":"单调递减",
                        "value":500
                    },
                    {
                        "name":"上界",
                        "value":300
                    },
                    {
                        "name":"下界",
                        "value":400
                    },
                    {
                        "name":"上确界",
                        "value":400
                    },
                    {
                        "name":"下确界",
                        "value":500
                    },
                    {
                        "name":"分组求和法",
                        "value":500
                    },
                    {
                        "name":"函数逼近",
                        "value":500
                    },
                    {
                        "name":"麦克劳林级数",
                        "value":800
                    },
                    {
                        "name":"不等式",
                        "value":1000

                    },
                    {
                        "name":"绝对收敛",
                        "value":1000
                    },
                    {
                        "name":"相对收敛",
                        "value":1000
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
