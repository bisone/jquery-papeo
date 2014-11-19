//comboMenu
$(function() {
    	var categories = [ {
			"value" : 1,
			"text" : "My Documents",
			"children" : [ {
				"value" : 11,
				"text" : "Photos",
				"children" : [ {
					"value" : 111,
					"text" : "Friend",
					"children" : [ {
						"value" : 1111,
						"text" : "yjb",
						"children" : [ {
							"value" : 11111,
							"text" : "小布丁"
						} ]
					}, {
						"value" : 1112,
						"text" : "zn"
					} ]
				}, {
					"value" : 112,
					"text" : "Wife"
				}, {
					"value" : 113,
					"text" : "Company"
				} ]
			}, {
				"value" : 12,
				"text" : "Program Files",
				"children" : [ {
					"value" : 121,
					"text" : "Intel"
				}, {
					"value" : 122,
					"text" : "Java"
				}, {
					"value" : 123,
					"text" : "Microsoft Office"
				}, {
					"value" : 124,
					"text" : "Games"
				} ]
			}, {
				"value" : 13,
				"text" : "index.html"
			}, {
				"value" : 14,
				"text" : "about.html"
			}, {
				"value" : 15,
				"text" : "welcome.html"
			} ]
		}, {
			"value" : 2,
			"text" : "Your Documents"
		} ];

		$("#cmbDiv").comboMenu({
			height : 32,
			width : 180,
			popWidth : 120,
			useSearch : true,
			title : "品类",
			data : categories,
			onShow : function() {
				// alert("onShow");
			},
			onHide : function() {
				// alert("onHide");
			},
			onClick : function() {
				// alert("onClick");
			},
			onChanged : function(oldValue, newValue) {
				// alert("onChanged：old=" + (!oldValue ? "" : oldValue.value) + "new=" + (!newValue ? "" : newValue.value));
			}
		});
		/*$("#cmbDiv2").comboMenu({
			height : 35,
			width : 180,
			popWidth : 120,
			useSearch : true,
			title : "品类",
			data : categories,
			onShow : function() {
				// alert("onShow");
			},
			onHide : function() {
				// alert("onHide");
			},
			onClick : function() {
				// alert("onClick");
			},
			onChanged : function(oldValue, newValue) {
				// alert("onChanged：old=" + (!oldValue ? "" : oldValue.value) + "new=" + (!newValue ? "" : newValue.value));
			}
		});
		$("#cmbDiv3").comboMenu({
			height : 35,
			width : 180,
			popWidth : 120,
			useSearch : true,
			title : "品类",
			data : categories,
			onShow : function() {
				// alert("onShow");
			},
			onHide : function() {
				// alert("onHide");
			},
			onClick : function() {
				// alert("onClick");
			},
			onChanged : function(oldValue, newValue) {
				// alert("onChanged：old=" + (!oldValue ? "" : oldValue.value) + "new=" + (!newValue ? "" : newValue.value));
			}
		});*/

		$("#cmbDiv").comboMenu("setValue", "113");
		/*$("#cmbDiv2").comboMenu("setValue", "112");
		$("#cmbDiv3").comboMenu("setValue", "111");*/
		
		
    
});