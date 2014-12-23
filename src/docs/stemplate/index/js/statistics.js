// JavaScript Document


//demandDegree
$(function() {
var panel=$("#raphael").demandGraph({divID : "raphael"});
	panel.setData(mockData);
	panel.drawBg("#ffb049");
	panel.drawCircle("#4284e2");

});


//echarts
$(function() {
       //--- 地图 ---
	var myChart = echarts.init(document.getElementById('echartsmap'));
	var option = {
		title : {
			text: 'iphone销量',
			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			x:'left',
			data:['iphone3','iphone4','iphone5']
		},
		dataRange: {
			min: 0,
			max: 2500,
			x: 'left',
			y: 'bottom',
			text:['高','低'],           // 文本，默认为数值文本
			calculable : true
		},
		toolbox: {
			show: true,
			orient : 'vertical',
			x: 'right',
			y: 'center',
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		roamController: {
			show: true,
			x: 'right',
			mapTypeControl: {
				'china': true
			}
		},
		series : [
			{
				name: 'iphone3',
				type: 'map',
				mapType: 'china',
				roam: false,
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: Math.round(Math.random()*1000)},
					{name: '天津',value: Math.round(Math.random()*1000)},
					{name: '上海',value: Math.round(Math.random()*1000)},
					{name: '重庆',value: Math.round(Math.random()*1000)},
					{name: '河北',value: Math.round(Math.random()*1000)},
					{name: '河南',value: Math.round(Math.random()*1000)},
					{name: '云南',value: Math.round(Math.random()*1000)},
					{name: '辽宁',value: Math.round(Math.random()*1000)},
					{name: '黑龙江',value: Math.round(Math.random()*1000)},
					{name: '湖南',value: Math.round(Math.random()*1000)},
					{name: '安徽',value: Math.round(Math.random()*1000)},
					{name: '山东',value: Math.round(Math.random()*1000)},
					{name: '新疆',value: Math.round(Math.random()*1000)},
					{name: '江苏',value: Math.round(Math.random()*1000)},
					{name: '浙江',value: Math.round(Math.random()*1000)},
					{name: '江西',value: Math.round(Math.random()*1000)},
					{name: '湖北',value: Math.round(Math.random()*1000)},
					{name: '广西',value: Math.round(Math.random()*1000)},
					{name: '甘肃',value: Math.round(Math.random()*1000)},
					{name: '山西',value: Math.round(Math.random()*1000)},
					{name: '内蒙古',value: Math.round(Math.random()*1000)},
					{name: '陕西',value: Math.round(Math.random()*1000)},
					{name: '吉林',value: Math.round(Math.random()*1000)},
					{name: '福建',value: Math.round(Math.random()*1000)},
					{name: '贵州',value: Math.round(Math.random()*1000)},
					{name: '广东',value: Math.round(Math.random()*1000)},
					{name: '青海',value: Math.round(Math.random()*1000)},
					{name: '西藏',value: Math.round(Math.random()*1000)},
					{name: '四川',value: Math.round(Math.random()*1000)},
					{name: '宁夏',value: Math.round(Math.random()*1000)},
					{name: '海南',value: Math.round(Math.random()*1000)},
					{name: '台湾',value: Math.round(Math.random()*1000)},
					{name: '香港',value: Math.round(Math.random()*1000)},
					{name: '澳门',value: Math.round(Math.random()*1000)}
				]
			},
			{
				name: 'iphone4',
				type: 'map',
				mapType: 'china',
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: Math.round(Math.random()*1000)},
					{name: '天津',value: Math.round(Math.random()*1000)},
					{name: '上海',value: Math.round(Math.random()*1000)},
					{name: '重庆',value: Math.round(Math.random()*1000)},
					{name: '河北',value: Math.round(Math.random()*1000)},
					{name: '安徽',value: Math.round(Math.random()*1000)},
					{name: '新疆',value: Math.round(Math.random()*1000)},
					{name: '浙江',value: Math.round(Math.random()*1000)},
					{name: '江西',value: Math.round(Math.random()*1000)},
					{name: '山西',value: Math.round(Math.random()*1000)},
					{name: '内蒙古',value: Math.round(Math.random()*1000)},
					{name: '吉林',value: Math.round(Math.random()*1000)},
					{name: '福建',value: Math.round(Math.random()*1000)},
					{name: '广东',value: Math.round(Math.random()*1000)},
					{name: '西藏',value: Math.round(Math.random()*1000)},
					{name: '四川',value: Math.round(Math.random()*1000)},
					{name: '宁夏',value: Math.round(Math.random()*1000)},
					{name: '香港',value: Math.round(Math.random()*1000)},
					{name: '澳门',value: Math.round(Math.random()*1000)}
				]
			},
			{
				name: 'iphone5',
				type: 'map',
				mapType: 'china',
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name: '北京',value: Math.round(Math.random()*1000)},
					{name: '天津',value: Math.round(Math.random()*1000)},
					{name: '上海',value: Math.round(Math.random()*1000)},
					{name: '广东',value: Math.round(Math.random()*1000)},
					{name: '台湾',value: Math.round(Math.random()*1000)},
					{name: '香港',value: Math.round(Math.random()*1000)},
					{name: '澳门',value: Math.round(Math.random()*1000)}
				]
			}
		]
	};
  
	myChart.setOption(option);
});

//highcharts
$(function() {
   var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'highcharts3dcolumn',
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Chart rotation demo'
        },
        subtitle: {
            text: 'Test options by dragging the sliders below'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
    

    // Activate the sliders
    $('#R0').on('change', function(){
        chart.options.chart.options3d.alpha = this.value;
        showValues();
        chart.redraw(false);
    });
    $('#R1').on('change', function(){
        chart.options.chart.options3d.beta = this.value;
        showValues();
        chart.redraw(false);
    });

    function showValues() {
        $('#R0-value').html(chart.options.chart.options3d.alpha);
        $('#R1-value').html(chart.options.chart.options3d.beta);
    }
    showValues();
});