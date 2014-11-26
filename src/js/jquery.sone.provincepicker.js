/**
 * province picker
 * 地区选择弹出层函数
 * objid 选择区域的ID(input id) showid 弹出DIV的id input_cn 选择区域的ID(input id) input
 * input id 选择地区后将值放在input的隐藏变量中 QSarr strlen
 * 
 * @songquanwang
 */
;
(function($) {
		var areas = [{
			areaName : '华北地区',
			citys : [{
						cityName : '北京',
						cityCode : 'BJ'
					}, {
						cityName : '天津',
						cityCode : 'TJ'
					}, {
						cityName : '河北',
						cityCode : 'HBS'
					}, {
						cityName : '山西',
						cityCode : 'SXS'
					}, {
						cityName : '内蒙古',
						cityCode : 'NMGQ'
					}]
		},

		{
			areaName : '东北地区',
			citys : [{
						cityName : '辽宁',
						cityCode : 'LNS'
					}, {
						cityName : '吉林',
						cityCode : 'JLS'
					}, {
						cityName : '黑龙江',
						cityCode : 'HLJS'
					}]
		},

		{
			areaName : '华东地区',
			citys : [{
						cityName : '上海',
						cityCode : 'SH'
					}, {
						cityName : '江苏',
						cityCode : 'JS'
					}, {
						cityName : '浙江',
						cityCode : 'ZJ'
					}, {
						cityName : '安徽',
						cityCode : 'AHS'
					}, {
						cityName : '福建',
						cityCode : 'FJS'
					}, {
						cityName : '江西',
						cityCode : 'JXS'
					}
					, {
						cityName : '山东',
						cityCode : 'SDS'
					}]
		},

		{
			areaName : '华中地区',
			citys : [{
						cityName : '河南',
						cityCode : 'HNS'
					}, {
						cityName : '湖北',
						cityCode : 'HBS'
					}, {
						cityName : '湖南',
						cityCode : 'HUNS'
					}]
		},

		{
			areaName : '华南地区',
			citys : [{
						cityName : '广东',
						cityCode : 'GDS'
					}, {
						cityName : '广西',
						cityCode : 'GXS'
					}, {
						cityName : '海南',
						cityCode : 'HANS'
					}]
		},

		{
			areaName : '西南地区',
			citys : [{
						cityName : '重庆',
						cityCode : 'CQS'
					}, {
						cityName : '四川',
						cityCode : 'SCS'
					}, {
						cityName : '贵州',
						cityCode : 'GZS'
					}, {
						cityName : '云南',
						cityCode : 'YNS'
					}, {
						cityName : '西藏',
						cityCode : 'XZQ'
					}]
		},

		{
			areaName : '西北地区',
			citys : [{
						cityName : '陕西',
						cityCode : 'SXS'
					}, {
						cityName : '甘肃',
						cityCode : 'GSS'
					}, {
						cityName : '青海',
						cityCode : 'QHS'
					}, {
						cityName : '宁夏',
						cityCode : 'NXS'
					}, {
						cityName : '新疆',
						cityCode : 'XJS'
					}]
		}];

	var methods = {
		init : function(options) {
	        var id=options.showid.substring(1);
			var tpl=$('<div id="'+id+'">'+
					'<div class="OpenFloatBox">'+
						'<div class="modal fade" id="contactUsModal" tabindex="-1" '+
							'role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> '+
							'<div class="modal-dialog"> '+
								'<div class="modal-content"> '+
									'<div class="modal-header"> '+
										'<button type="button" class="close" data-dismiss="modal" '+
											'aria-hidden="true" id="contactAdmin_closeBtn"> '+
											'&times;</button> '+
										'<button id="saleAreaTop" name="area" type="button" '+
											'class="btn btn-primary">销售区域</button> '+
									'</div> '+
									'<div class="modal-body"> '+
										'<div id="sel_district" '+
											'style="border-top: solid 0px; border-color: #C0C0C0;"> '+
											'<div id="saleArea"> '+
												'<table class="table table-condensed" border="0"> '+	
                                                '</table> '+
											'</div> '+
										
											
										'</div> '+									
									'</div> '+
									' <div class="modal-footer">'+
        									'<div class="txt"> '+
												'<div class="selecteditem"></div> '+
											'</div> '+
											'<div class="txt"> '+
												'<div align="center"> '+
													'<button id="confirmName" type="button" data-dismiss="modal" '+
														'name="confirmName" class="btn btn-primary">确定</button> '+
												'</div> '+
											'</div> '+       
      									'</div>'+	
								'</div> '+
							'</div> '+
						'</div> '+
					'</div> '+
				'</div> ');
            $.each(areas, function(k, v) {
            	    var child=v;
            	    var str='<tr><td>'+v.areaName+'</td>';
            	    $.each(v.citys, function(ck, cv) {
            	    	str+='<td>'+
            	    	     '<td> '+
								'<div class="item" id="BJ"> '+
									'<label title='+cv.cityName+' class="titem">  '+
									 '<input type="checkbox" value='+cv.cityCode+'  title='+cv.cityName+'  class="b" /> '+cv.cityName+
									'</label> '+
									'<div class="sitem"></div> '+
								'</div> '+
							'</td> ';
            	    	
            	    });
            	    str+='</tr>'
					tpl.find(".table.table-condensed").append(str);
				});
			tpl.appendTo("body");

			var data = $(this).data('provincepicker');
			//没有配置项
			var opt = $.extend({

			}, options);
     
			this.OpenCategoryLayer(opt.objid, opt.showid, opt.input_cn, opt.input, opt.input_cn2,
				opt.input2, opt.QSarr, opt.strlen);
			return this;

		},

		destroy : function() {

			$(this).removeData('provincepicker');

		},
		OpenCategoryLayer : function(objid, showid, input_cn, input, input_cn2,
				input2, QSarr, strlen) {
			var scope=this;
			$(objid).click(function() {
				$(this).blur();
				$(showid + " .OpenFloatBoxBg").css("opacity", 0.2);
				$(showid).show();
				//$("#contactUsModal").removeClass("modal fade");
				$(showid + " .OpenFloatBox").css({
					"left" : ($(document).width() - $(showid + " .OpenFloatBox")
							.width())
							/ 2,
					"top" : "120",
					"z-index" : "999"
				});
				scope.SetBoxBg(showid);
				$(showid + " .item").unbind().hover(function() {
					$(this).find(".titem").addClass("titemhover");

					var strclass = QSarr[$(this).attr("id")];
					var pid = $(this).attr("id");
					if (strclass) {
						$(this).find(".sitem").css("display", "block");
						if ($(this).find(".sitem").html() == "") {
							$(this).find(".sitem").html(scope.MakeLi(strclass, pid));// 生成LI
						}
					}
					$(showid + " .OpenFloatBox label").unbind().click(
							function() {
								if ($(this).attr("title")) {
									if ($(this).find(":checkbox")
											.attr('checked')) {
										$(this).next().find(":checkbox").attr(
												'checked', true);
									} else {
										$(this).next().find(":checkbox").attr(
												'checked', false);
									}
								} else {
									if ($(this).parent()
											.find(":checkbox:checked").length > 0) {
										$(this).parent().prev()
												.find(":checkbox").attr(
														'checked', false);
									}
								}
								scope.CopyItem(showid);
							});
				}, function() {
					$(this).find(".titem").removeClass("titemhover");
					$(this).find(".sitem").css("display", "none");
				});
				$(showid + " .OpenFloatBox .DialogClose").unbind().hover(
						function() {
							$(this).addClass("spanhover")
						}, function() {
							$(this).removeClass("spanhover")
						});

				$(showid + " .close").click(function() {
							DialogClose(showid);
						});

				// 确定选择 按钮的ID 必须是 confirmName
				$("#confirmName").unbind().click(function() {
					SetInput(showid, input_cn, input, input_cn2, input2, strlen);
				});

				// 关闭
				function DialogClose(showid) {
					$(showid).hide();
				}
				// 设置表单
				function SetInput(showid, input_cn, input, input_cn2, input2,
						strlen) {
					var a_cn = new Array();
					var a_id = new Array();
					var i = 0;
					if ($(showid
							+ " .OpenFloatBox .selecteditem :checkbox:checked").length > 8) {
						alert("不能超过8个选项");
						return false;
					}
					$(showid
							+ " .OpenFloatBox .selecteditem :checkbox:checked")
							.each(function(index) {
								a_cn[index] = $(this).attr("title");
								if ($(this).attr("class") == "s") {
									a_id[i] = $(this).val();
								} else {
									a_id[i] = $(this).attr("id") + "."
											+ $(this).val();
								}
								i++;
							});
					$(input_cn).val(scope.limit(a_cn.join("+"), strlen));
					$(input_cn).attr("title", $(input_cn).val());
					$(input_cn2).val(scope.limit(a_cn.join("+"), strlen));
					if ($(input_cn).val() == "")
						$(input_cn).val("全部数据");
					if ($(input_cn2).val() == "")
						$(input_cn2).val("全部数据");
					$(input).val(a_id.join("-"));
					$(input2).val(a_id.join("-"));
					DialogClose(showid);
					//$("#contactUsModal").addClass("modal fade");
				}
			});
		},
		// 设置阴影
		SetBoxBg : function(showid) {
			var FloatBoxWidth = $(showid + " .OpenFloatBox").width();
			var FloatBoxHeight = $(showid + " .OpenFloatBox").height();
			var FloatBoxLeft = $(showid + " .OpenFloatBox").offset().left;
			var FloatBoxTop = $(showid + " .OpenFloatBox").offset().top;
			$(showid + " .OpenFloatBoxBg").css({
						display : "block",
						width : (FloatBoxWidth + 12) + "px",
						height : (FloatBoxHeight + 12) + "px"
					});
			$(showid + " .OpenFloatBoxBg").css({
						left : (FloatBoxLeft - 5) + "px",
						top : (FloatBoxTop - 5) + "px"
					});
		},
		// 生成小类
		MakeLi : function(val, pid) {
			if (val == "")
				return false;
			arr = val.split("|");
			var htmlstr = '';
			for (x in arr) {
				var v = arr[x].split(",");
				htmlstr += "<label><input type=\"checkbox\" value=\"" + v[0]
						+ "\" title=\"" + v[1] + "\" class=\"s\" id=\"" + pid
						+ "\"/>" + v[1] + "</label><br/>";
			}
			return htmlstr;
		},
		// 拷贝
		CopyItem : function(showid) {
			var scope=this;
			var htmlstr = '&nbsp;&nbsp;&nbsp;已经选择分类：<div class=\"btn-group btn-group-sm\"> <button type=\"button\" class=\"empty btn btn-default\">清空已选</button></div><br/><nobr>';
			$(showid + " .item :checkbox:checked[class='b']").each(
					function(index) {
						htmlstr += "<label>"
								+ "      &nbsp;&nbsp;&nbsp;&nbsp;<input class=\"s\"  type=\"checkbox\" value=\""
								+ $(this).attr("value") + "\" title=\""
								+ $(this).attr("title") + "\" checked/>"
								+ $(this).attr("title") + "</label>";
					})
			$(showid + " .item :checkbox:checked[class='s']").each(
					function(index) {
						if ($(this).parent().parent().prev().find(":checkbox")
								.attr('checked') == false) {
							htmlstr += "<label>"
									+ "   <input class=\"s\"  type=\"checkbox\" id=\""
									+ $(this).attr("id") + "\" value=\""
									+ $(this).attr("value") + "\" title=\""
									+ $(this).attr("title") + "\" checked/>"
									+ $(this).attr("title") + "</label>";
						}
					})
			htmlstr += "<div class=\"clear\"></div></nobr>";
			$(showid + " .selecteditem").html(htmlstr);
			if ($(showid + " .item :checkbox:checked").length > 0) {
				$(showid + " .selecteditem").css("display", "block");
			} else {
				$(showid + " .selecteditem").css("display", "none");
			}
			// 已选项目绑定click
			$(showid + " .selecteditem :checkbox").unbind().click(function() {
				var selval = $(this).val();
				$(showid + " .item :checkbox:checked").each(function() {
					if ($(this).val() == selval) {
						$(this).attr("checked", false);
						if ($(this).attr("class") == "b") {
							$(this).parent().next().find(":checkbox").attr(
									"checked", false);
						}
						// 重新克隆
						scope.CopyItem(showid);
					}
				})
			});
			$(showid + " .OpenFloatBox .item label :checkbox").parent().css(
					"color", "");
			$(showid + " .OpenFloatBox .item label :checkbox:checked")
					.parent().css("color", "#FF6600");
			$(showid + " .OpenFloatBox .sitem :checkbox:checked").each(
					function(index) {
						$(this).parent().parent().prev()
								.css("color", "#FF6600");
					});
			this.SetBoxBg(showid);
			// 清空
			$(showid + " .selecteditem .empty").unbind().click(function() {
				$(showid + " .selecteditem").css("display", "none");
				$(showid + " .selecteditem").html("");
				$(showid + " :checkbox:checked").parent().css("color", "");
				$(showid + " :checkbox:checked").parent().parent().prev().css(
						"color", "");
				$(showid + " :checkbox:checked").attr('checked', false);
				scope.SetBoxBg(showid);
			});
		},
		// 截取字符
		limit : function(objString, num) {
			var objLength = objString.length;
			if (objLength > num) {
				return objString.substring(0, num) + "...";
			}
			return objString;
		},
		// 模拟select
		showmenu : function(menuID, showID, inputname) {
			$(menuID).click(function() {
				$(menuID).blur();
				$(menuID).parent("div").css("position", "relative");
				$(showID).slideToggle("fast");
				// 生成背景
				$(menuID).parent("div")
						.before("<div class=\"menu_bg_layer\"></div>");
				$(".menu_bg_layer").height($(document).height());
				$(".menu_bg_layer").css({
							width : $(document).width(),
							position : "absolute",
							left : "0",
							top : "0",
							"z-index" : "0",
							"background-color" : "#ffffff"
						});
				$(".menu_bg_layer").css("opacity", "0");
				// 生成背景结束
				$(showID + " li").click(function() {
							$(menuID).val($(this).attr("title"));
							$(inputname).val($(this).attr("id"));
							$(".menu_bg_layer").hide();
							$(showID).hide();
							$(menuID).parent("div").css("position", "");
							$(this).css("background-color", "");
						});

				$(".menu_bg_layer").click(function() {
							$(".menu_bg_layer").hide();
							$(showID).hide();
							$(menuID).parent("div").css("position", "");
						});
				$(showID + " li").hover(function() {
							$(this).css("background-color", "#DAECF5");
						}, function() {
							$(this).css("background-color", "");

						});
			});
		}

	};
	

	// 扩展jquery原型
	$.fn.provincepicker = function(method) {
		if (methods[method]) {
			// 传递作用于为el $("el").monthpicker传递作用于为 $("el"),所有方法定义到这个元素
			return methods[method].apply(this, Array.prototype.slice.call(
							arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(methods, arguments);
		} else {
			$.error('Method ' + method
					+ ' does not exist on jQuery.mtz.monthpicker');
		}
	};

})(jQuery);
