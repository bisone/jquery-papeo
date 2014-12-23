var demoData = [ {
	"value" : "ln",
	"text" : "辽宁",
	"children" : [ {
		"value" : "ln-sy",
		"text" : "沈阳"
	}, {
		"value" : "ln-dl",
		"text" : "大连"
	}, {
		"value" : "ln-yk",
		"text" : "营口",
		"children" : [ {
			"value" : "ln-yk-xs",
			"text" : "西市区"
		}, {
			"value" : "ln-yk-zq",
			"text" : "站前区"
		} ]
	} ]
}, {
	"value" : "bj",
	"text" : "北京",
	"children" : [ {
		"value" : "bj-dc",
		"text" : "东城区"
	}, {
		"value" : "bj-xc",
		"text" : "西城区"
	}, {
		"value" : "bj-hd",
		"text" : "海淀区"
	}, {
		"value" : "bj-cy",
		"text" : "朝阳区"
	}, {
		"value" : "bj-ft",
		"text" : "丰台区"
	}, {
		"value" : "bj-sjs",
		"text" : "石景山区"
	} ]
}, {
	"value" : "jl",
	"text" : "吉林",
	"children" : [ {
		"value" : "jl-cq",
		"text" : "长春"
	}, {
		"value" : "jl-jl",
		"text" : "吉林"
	}, {
		"value" : "jl-ly",
		"text" : "辽源"
	}, {
		"value" : "jl-sp",
		"text" : "四平"
	} ]
} ];

$(function() {
	$("#cmb_1").comboMenu({
		data : demoData
	});

	$("#cmb_2").comboMenu({
		data : demoData,
		title : "地区"
	});

	$("#cmb_3").comboMenu({
		title : "地区"
	});

	$("#cmb_4").comboMenu({
		data : demoData
	});

	$("#cmb_5").comboMenu({
		data : demoData,
		allLeafCanSelect : true,
		hasAllData : true
	});

	$("#cmb_6").comboMenu({
		data : demoData,
		height : 25,
		width : 160,
		popWidth : 120,
		useSearch : false
	});

	$("#cmb_7").comboMenu({
		data : demoData,
		onShow : function() {
			alert("onShow!!");
		},
		onHide : function() {
			alert("onHide!!");
		},
		onClick : function() {
			alert("onClick!!");
		},
		onChanged : function(oldValue, newValue) {
			var oldText = oldValue ? oldValue.text : "";
			var newText = newValue ? newValue.text : "";
			alert("onChanged!! oldValue:" + oldText + ", newValue:" + newText);
		}
	});
});

function btnSetCmb_3_click() {
	$("#cmb_3").comboMenu("setData", demoData);
	$("#cmb_3").comboMenu("setValue", "bj-hd");
}

function btnSetCmb_4_click() {
	var val = $("#cmb_4").comboMenu('getValue');

	if (!val || !val.text) {
		alert("请选择值！！");
	}

	var txtArr = new Array();
	txtArr.push(val.text);
	var parent = val.parent;
	while (parent) {
		txtArr.push(parent.text);
		parent = parent.parent;
	}
	alert(txtArr.reverse().join(" > "));
}

function btnSetCmb_5_click() {
	var val = $("#cmb_5").comboMenu('getValue');
	var txtArr = new Array();
	txtArr.push(val.value);
	var parent = val.parent;
	while (parent) {
		txtArr.push(parent.value);
		parent = parent.parent;
	}
	alert(txtArr.reverse().join(" > "));
}