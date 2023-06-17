const vm = new Vue({
    el: '#sum',
    data() {
        return {
            flag: ['零秒', '一秒', '二秒', '三秒', '四秒', '五秒', '六秒', '七秒', '八秒', '九秒', '十秒', '十一秒', '十二秒', '十三秒', '十四秒', '十五秒', '十六秒', '十七秒', '十八秒', '十九秒', '二十秒', '二十一秒', '二十二秒', '二十三秒', '二十四秒', '二十五秒', '二十六秒', '二十七秒', '二十八秒', '二十九秒', '三十秒', '三十一秒', '三十二秒', '三十三秒', '三十四秒', '三十五秒', '三十六秒', '三十七秒', '三十八秒', '三十九秒', '四十秒', '四十一秒', '四十二秒', '四十三秒', '四十四秒', '四十五秒', '四十六秒', '四十七秒', '四十八秒', '四十九秒', '五十秒', '五十一秒', '五十二秒', '五十三秒', '五十四秒', '五十五秒', '五十六秒', '五十七秒', '五十八秒', '五十九秒'],
            flag_minute: ['零分', '一分', '二分', '三分', '四分', '五分', '六分', '七分', '八分', '九分', '十分', '十一分', '十二分', '十三分', '十四分', '十五分', '十六分', '十七分', '十八分', '十九分', '二十分', '二十一分', '二十二分', '二十三分', '二十四分', '二十五分', '二十六分', '二十七分', '二十八分', '二十九分', '三十分', '三十一分', '三十二分', '三十三分', '三十四分', '三十五分', '三十六分', '三十七分', '三十八分', '三十九分', '四十分', '四十一分', '四十二分', '四十三分', '四十四分', '四十五分', '四十六分', '四十七分', '四十八分', '四十九分', '五十分', '五十一分', '五十二分', '五十三分', '五十四分', '五十五分', '五十六分', '五十七分', '五十八分', '五十九分'],
            flag_hour: ['十二时', '一时', '二时', '三时', '四时', '五时', '六时', '七时', '八时', '九时', '十时', '十一时'],
            flag_mouth: [{
                name: '一月',
                flag: false
            }, {
                name: '二月',
                flag: false
            }, {
                name: '三月',
                flag: false
            }, {
                name: '四月',
                flag: false
            }, {
                name: '五月',
                flag: false
            }, {
                name: '六月',
                flag: false
            }, {
                name: '七月',
                flag: false
            }, {
                name: '八月',
                flag: false
            }, {
                name: '九月',
                flag: false
            }, {
                name: '十月',
                flag: false
            }, {
                name: '十一月',
                flag: false
            }, {
                name: '十二月',
                flag: false
            }],
            flag_solar: [{
                name: '立春',
                flag: false,
            }, {
                name: '雨水',
                flag: false,
            }, {
                name: '惊蛰',
                flag: false,
            }, {
                name: '春分',
                flag: false,
            }, {
                name: '清明',
                flag: false,
            }, {
                name: '谷雨',
                flag: false,
            }, {
                name: '立夏',
                flag: false,
            }, {
                name: '小满',
                flag: false,
            }, {
                name: '芒种',
                flag: false,
            }, {
                name: '夏至',
                flag: false,
            }, {
                name: '小暑',
                flag: false,
            }, {
                name: '大暑',
                flag: false,
            }, {
                name: '立秋',
                flag: false,
            }, {
                name: '处暑',
                flag: false,
            }, {
                name: '白露',
                flag: false,
            }, {
                name: '秋分',
                flag: false,
            }, {
                name: '寒露',
                flag: false,
            }, {
                name: '霜降',
                flag: false,
            }, {
                name: '立冬',
                flag: false,
            }, {
                name: '小雪',
                flag: false,
            }, {
                name: '大雪',
                flag: false,
            }, {
                name: '冬至',
                flag: false,
            }, {
                name: '小寒',
                flag: false,
            }, {
                name: '大寒',
                flag: false,
            }],
            Arrays: [],
            flag_data: [{
                name: '一号',
                flag: false
            }, {
                name: ' 二号',
                flag: false
            }, {
                name: '三号',
                flag: false
            }, {
                name: ' 四号',
                flag: false
            }, {
                name: '五号',
                flag: false
            }, {
                name: '六号',
                flag: false
            }, {
                name: '七号',
                flag: false
            }, {
                name: '八号',
                flag: false
            }, {
                name: '九号',
                flag: false
            }, {
                name: ' 十号',
                flag: false
            }, {
                name: '十一号',
                flag: false
            }, {
                name: '  十二号',
                flag: false
            }, {
                name: '   十三号',
                flag: false
            }, {
                name: '    十四号',
                flag: false
            }, {
                name: '   十五号',
                flag: false
            }, {
                name: ' 十六号',
                flag: false
            }, {
                name: '  十七号',
                flag: false
            }, {
                name: '   十八号',
                flag: false
            }, {
                name: '    十九号',
                flag: false
            }, {
                name: '     二十号',
                flag: false
            }, {
                name: '二十一号',
                flag: false
            }, {
                name: ' 二十二号',
                flag: false
            }, {
                name: '  二十三号',
                flag: false
            }, {
                name: '   二十四号',
                flag: false
            }, {
                name: '二十五号',
                flag: false
            }, {
                name: ' 二十六号',
                flag: false
            }, {
                name: ' 二十七号',
                flag: false
            }, {
                name: '  二十八号',
                flag: false
            }, {
                name: '   二十九号 ',
                flag: false
            }, {
                name: '   三十号 ',
                flag: false
            }, {
                name: '   三十一号 ',
                flag: false
            }],
            flag_AP: [{
                name: '上午'
            }, {
                name: '下午'
            }],
            NllNumber: []
        }
    },
    methods: {
        showMsg: function(index) {
            var this_ = this
            var sum = this_.flag_solar
            var a = 0
            var b = 12
            var newObject
            var strings = sum[index].msg
            var arrayy = strings.split('')
            var length = arrayy.length
            var arrayOne
            var stringOne = ''
            for (var i = 0; i < 10; i++) {
                arrayOne = arrayy.slice(a, b)
                if (arrayOne.length !== 0) {
                    stringOne = arrayOne.join()
                    newObject = stringOne.replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '').replace(',', '')
                    this.Arrays.push(newObject)
                }
                if (i === 0) {
                    a += 12
                    b += 20
                } else {
                    a += 20
                    b += 20
                }
            }
        },
        hideMsg: function() {
            this.Arrays = []
            this.NllNumber = []
        }
    }
})
var number = 0

function sell() {
    var data = new Date()
    var second = data.getSeconds() + 1
    number = second * -6
    document.getElementById('second').setAttribute('style', '-webkit-transform:rotate' + '(' + number + 'deg)')
    var myVar = setInterval(function() {
        sell_one()
    }, 1000)
}

function sell_one() {
    document.getElementById('second').setAttribute('style', '-webkit-transform:rotate' + '(' + number + 'deg)')
    number += -6
}
sell()
var number_minute = 0

function minutes() {
    var myVar = setInterval(function() {
        sell_two()
    }, 1000)
}

function sell_two() {
    var data = new Date()
    var minute = data.getMinutes()
    number_minute = minute * -6
    document.getElementById('minute').style.webkitTransform = 'rotate' + '(' + number_minute + 'deg)'
}
minutes()
var number_hour = 0

function hours() {
    var myVar = setInterval(function() {
        sell_three()
    }, 1000)
}

function sell_three() {
    var data = new Date()
    var hour = data.getHours()
    number_hour = hour * -30
    document.getElementById('hour').style.webkitTransform = 'rotate' + '(' + number_hour + 'deg)'
}
hours()

function year() {
    var data = new Date()
    var year = data.getFullYear()
    document.getElementById('yearAll').innerHTML = year + '年'
}
year()

function solarAndMouth() {
    var data = new Date()
    var mouth = data.getMonth()
    var number_mouth = mouth * -30
    document.getElementById('mouth').style.webkitTransform = 'rotate' + '(' + number_mouth + 'deg)'
    document.getElementById('solar').style.webkitTransform = 'rotate' + '(' + number_mouth + 'deg)'
}
solarAndMouth()

function dates() {
    var data = new Date()
    var date = data.getDate()
    var number_date = date * -11.25 + 11.25
    document.getElementById('data').style.webkitTransform = 'rotate' + '(' + number_date + 'deg)'
}
dates()

function APS() {
    var data = new Date()
    var ap = data.getHours()
    if (ap > 12) {
        document.getElementById('AP').style.webkitTransform = 'rotate(180deg)'
    } else {
        document.getElementById('AP').style.webkitTransform = 'rotate(0deg)'
    }
}
APS()