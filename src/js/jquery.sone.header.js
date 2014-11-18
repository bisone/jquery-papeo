$.widget("ui.soneHeader", {
	options : {
		modelNames : ['零售罗盘', '供应商罗盘', '零售罗盘', '供应商罗盘', '零售罗盘', '供应商罗盘',
				'零售罗盘', '供应商罗盘'],
		messages : [{
					uImg : 'http://placeholder.qiniudn.com/39x39/f60/fff',
					uName : 'DIvyia',
					uInfo : '刚才看见你的数据，有些想法刚才看见你的数据，有些想法',
					uTime : '2分钟前'
				},{
					uImg : 'http://placeholder.qiniudn.com/39x39/fc0/fff',
					uName : 'DIvyia',
					uInfo : '刚才看见你的数据，有些想法刚才看见你的数据，有些想法',
					uTime : '2分钟前'
				},{
					uImg : 'http://placeholder.qiniudn.com/39x39/f60/fff',
					uName : 'DIvyia',
					uInfo : '刚才看见你的数据，有些想法刚才看见你的数据，有些想法',
					uTime : '2分钟前'
				}],
		projects : [{
					projectName : 'A项目',
					pct : '80%',
					style:'p-type1'
				}, {
					projectName : 'B项目',
					pct : '85%',
					style:'p-type2'
				}, {
					projectName : 'C项目',
					pct : '70%',
					style:'p-type3'
				}]
	},

	_create : function() {
		var scope = this;
		var myData = this.options.modelNames;
		var tpl = $('<div class="header-main"> '
				+ '<div class="logo">UI标准化模版</div>'
				+ '<div class="nav">'
				+ '<ul></ul>'
				+ '</div>'
				+ '<div class="nav-option">'
				+ '<a href="javascript:;" class="prev">&lt;</a>'
				+ ' <a href="javascript:;" class="next">&gt;</a>'
				+ ' </div>'
				+ '<div class="search-bar">'
				+ '  <input type="text"><a href="javascript:;"></a>'
				+ ' </div>'
				+ '<div class="user">'
				+ '  <a href=""><img src="http://placeholder.qiniudn.com/36x36/ee0/fff" width="36" height="36" alt="">David Stevenson</a>'
				+ ' </div>' 
				+ ' <div class="messages">'
				+ ' <dl class="item fore1"><dt><b>5</b></dt><dd> </dd></dl>'
				+ '<dl class="item fore2">'
				+ ' <dt><b>4</b></dt><dd>' + ' <h4>4个项目正在进行</h4>'
				+ ' <ul> </ul></dd>' 
				+ ' </dl>' 
				+ '</div> </div>');

		$.each(this.options.modelNames, function(k, v) {
					var tmp = '';
					if (k == 0) {
						tmp = 'class="curr"';
					}
					tpl.find(".nav ul").append('<li ' + tmp + ' ><a href="">'
							+ v + '</a></li>');
				});
		$.each(this.options.messages, function(k, v) {

					var item='<a href="" class="line"> '+
	                 ' <span class="u-img"><img src="'+v.uImg+'" alt=""></span>'+
	                  '<span class="u-name">'+v.uName+'</span>'+
	                 ' <span class="u-info">'+v.uInfo+'</span>'+
	                 ' <span class="u-time">'+v.uTime+'</span>'+
                	'</a>';
					tpl.find(".messages .item.fore1 dd").append(item);
				});
				
		$.each(this.options.projects, function(k, v) {

					var item= '<li>'+
								'<a href="">'+
								  '<span class="txt">'+
									'<span class="tit">'+v.projectName+'</span>'+
									'<span class="pct">'+v.pct+'</span>'+
								  '</span>'+
								  '<span class="progress '+ v.style+'"><b style="width:'+v.pct+'"></b><s></s></span>'+
								'</a>'+
							  '</li>';
					tpl.find(".messages  .item.fore2 dd ul").append(item);
				});

		scope.element.html(tpl);

		scope._update(myData);
	},

	_setOption : function(key, value) {
		this.options[key] = value;

	},

	_update : function(data) {

		this._initEvents();
	},

	_initEvents : function(element) {
		var _ele = element || this.element;
		$(window).bind("load resize", function() {
			var topOffset = 50;
			var width = (this.window.innerWidth > 0)
					? this.window.innerWidth
					: this.screen.width;
			if (width < 768) {
				$('div.navbar-collapse', _ele).addClass('collapse');
				topOffset = 100; // 2-row-menu
			} else {
				$('div.navbar-collapse', _ele).removeClass('collapse');
			}

			var height = (this.window.innerHeight > 0)
					? this.window.innerHeight
					: this.screen.height;
			height = height - topOffset;
			if (height < 1)
				height = 1;
			if (height > topOffset) {
				$("#page-wrapper", _ele).css("min-height", (height) + "px");
			}
		});

		$(".messages dl", _ele).click(function(event) {
					event.stopPropagation();
					if ($(this).find("dd").css("display") == "none") {
						$(".messages").find("dd").hide();
						$(this).find("dd").show()
					} else {
						$(this).find("dd").hide()
					}
				});
		$(".messages dd", _ele).click(function(event) {
					event.stopPropagation();
				});
		$(document).click(function() {
					$(".messages", _ele).find("dd").hide();
				});
		window.onload = window.onresize = function() {
			var w = $(window).width();
			var n = $(".nav", _ele).find("li").length;
			var num = parseInt((w - 766) / 110);
			var step = 0;
			var isClick = false;
			if (n <= num) {
				num = n;
				$(".nav-option", _ele).hide();
			} else if (n > num) {
				$(".nav-option", _ele).show();
			}
			$(".nav", _ele).css("width", 110 * num + "px");
			$(".nav ul", _ele).css("width", 110 * n + "px");
			$(".nav-option .next", _ele).css("left", (110 * num + 255) + "px");

			$(".nav-option .next", _ele).click(function() {
						if (step < (n - num) && !isClick) {
							step++;
							isClick = true;
							$(".nav ul", _ele).animate({
										"left" : -step * 110 + "px"
									}, 1000);
							setTimeout(function() {
										isClick = false;
									}, 1000);
						}
					});
			$(".nav-option .prev", _ele).click(function() {
						if (step != 0 && !isClick) {
							step--;
							isClick = true;
							$(".nav ul", _ele).animate({
										"left" : -step * 110 + "px"
									}, 1000);
							setTimeout(function() {
										isClick = false;
									}, 1000);
						}
					});
		};

	},

	_destroy : function() {
		this.element.text("");
		$.Widget.prototype.destroy.call(this);

	}
});
