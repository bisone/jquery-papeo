$.widget("ui.demandTable", {
	options : {
		data : {
			keySearch : [{
						key : '淘宝',
						number : 77.74560837643858,
						percent : 1
					}, {
						key : '淘宝',
						number : 77.74560837643858,
						percent : 0.888728041882193
					}, {
						key : '淘宝',
						number : 14.840078801476722,
						percent : 0.5742003940073837
					}, {
						key : '淘宝',
						number : 12.846709212871465,
						percent : 0.5642335460643573
					}, {
						key : '淘宝',
						number : 11.646697145007332,
						percent : 0.5582334857250366
					}, {
						key : '淘宝',
						number : 1.145727839913078,
						percent : 0.5057286391995653
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.5031630657570794
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.500813791672629
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.5007360485748292
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.5003852033634143
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.500330504438816
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.5002938744904417
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.5002108349411597
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.500080152124227
					}, {
						key : '淘宝',
						number : 1,
						percent : 0.5000609022048365
					}],
			increamentRatio : [{
						key : '淘宝',
						number :1000
					}, {
						key : '淘宝',
						number : 987
					}, {
						key : '淘宝',
						number : 982
					}, {
						key : '淘宝',
						number : 977
					}, {
						key : '淘宝',
						number : 974
					}, {
						key : '淘宝',
						number : 971
					}, {
						key : '淘宝',
						number : 970
					}, {
						key : '淘宝',
						number : 969
					}, {
						key : '淘宝',
						number : 968
					}, {
						key : '淘宝',
						number : 962
					}, {
						key : '淘宝',
						number : 954
					}, {
						key : '淘宝',
						number : 954
					}]

		}
	},
	_create : function() {
		var scope = this;
		if (this.options.data != null) {
			scope.createTemplate(this.options.data);
		} else if (this.options.url != null) {
			$.ajax({
						url : this.options.url,
						type : "GET",
						success : function(mydata) {
							try {
								// mydata = $.parseJSON(mydata);
								mydata = eval(mydata);
							} catch (e) {
							}
							scope.createTemplate(mydata);
						},
						error : function(data) {
							alert(data);
						}
					});

		}

	},
	createTemplate : function(mydata) {

		var tplStr = '<div class="tabConts hotWords" >'
				+ '<div class="tabCont gColor0" style="zoom: 1;">'
				+ '<div style="float: left; width: 50%;">'
				+ '<p style="color: #999; margin-bottom: 5px; padding: 5px 0 10px 0;">相关检索词</p>'
				+ '<table id="leftTable" class="listN1" style="width: 97%;"></table>'
				+ '</div>'
				+ '<div style="float: right; width: 46%;">'
				+ '<p style="color: #999; margin-bottom: 5px; padding: 5px 0 10px 0;">上升最快检索词</p>'
				+ '<table id="rightTable" class="listN1" style="width: 97%;"></table>'
				+ '</div>' + '</div>' + '</div>';
		var tpl = $(tplStr);
		var leftData = mydata.keySearch;
		var leftTable = '<colgroup>' + '<col>' + '<col>' + '<col width="30">'
				+ '<col width="30%">' + '</colgroup>';
		$.each(leftData, function(k, v) {
					leftTable += '<tr>'
							+ '<td class="rank">'
							+ k
							+ '.</td>'
							+ '<td><div class="mhref toe">'
							+ '<a class="hotWord" href="javascript:;">'
							+ v.key
							+ '</a>'
							+ '<a class="icons search" href="javascript:;;"></a>'
							+ '</div></td>' + '<td>热度</td>'
							+ '<td><div class="psBox">'
							+ '<div class="psBar" style="width: ' + v.number
							+ '%; opacity: ' + v.percent + ';"></div>'
							+ '</div></td>' + '</tr>';
				});
		tpl.find("#leftTable").append($(leftTable));
		var rightData = mydata.increamentRatio;
		var rightTable = '<colgroup>' + '<col>' + '<col>' + '<col width="30%">'
				+ '</colgroup>';
		$.each(rightData, function(k, v) {
			rightTable += '<tr>'
					+ '<td class="rank">'
					+ k
					+ '.</td>'
					+ '<td><div class="mhref toe">'
					+ '<a class="hotWord" href="javascript:;">'
					+ v.key
					+ '</a> '
					+ '<a class="icons search" href="javascript:;;"></a>'
					+ '</div></td>'
					+ '<td class="txr"><span class="ratUp">'+v.number+'</span></td>'
					+ '</tr>';
		});
		tpl.find("#rightTable").append($(rightTable));
		this.element.html(tpl);

		this._update(mydata);

	},

	_setOption : function(key, value) {
		this.options[key] = value;

	},

	_update : function(data) {
		this._initEvents();
	},

	_initEvents : function(element) {

	},

	_destroy : function() {
		this.element.text("");
		$.Widget.prototype.destroy.call(this);

	}

});
