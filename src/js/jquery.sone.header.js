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
				}],
				user: [{
					userImg : './img/avatar3.png',
					userName : '李某某--营销开发部',
					usermes:'Member since Nov. 2012'
				
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
				+ '<form class="navbar-form navbar-left search-bar " role="search">'
				+ '	<div class="form-group">'
				+ '	<input  id="search" class="form-control" type="text" placeholder="Search...">'
				+ '	</div>'
				+ '	<button class="btn btn-default" type="submit" data-original-title="Search"><span class="glyphicon glyphicon-search"></span></button>'
				+ '</form>'
				+ ' <div class="navbar-right">'
				+ ' <ul class=" navbar-nav">'
				+ ' <li class="dropdown  messages-menu">'
				+ '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-envelope"></i><span class="label  label-success">4</span></a>  <ul class="dropdown-menu fore1 " role="menu"><li class="header"> <h4>4个项目正在进行</h4></li></ul>'
				+ ' </li>'
				+ ' <li class="dropdown projects-menu">'
				+ '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-list"></i><span class="label  label-success">4</span></a>  <ul class="dropdown-menu fore2 " role="menu"><li class="header"> <h4>4个项目正在进行</h4></li></ul>'
				+ ' </li>'
				+ ' <li class="dropdown user-menu">'
				+ '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span>李某某</a>  <ul class="dropdown-menu fore3 " role="menu"></ul>'
				+ ' </li>'
				+ ' </ul>'
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

					var item='<li><a href="" class="line"> '+
	                 ' <div class="u-img"><img src="'+v.uImg+'" alt=""></div>'+
	                  '<h4 class="u-name">'+v.uName+'<small class="u-time">'+v.uTime+'</small></h4>'+
	                 ' <div class="u-info">'+v.uInfo+'</div>'+
	                 
                	'</a></li>';
					tpl.find(".navbar-right .fore1 ").append(item);
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
					tpl.find(".navbar-right  .fore2").append(item);
				});
				$.each(this.options.user, function(k, v) {

					var item= '<li  class="text-center">'+
								' <img src="'+v.userImg+'" class="img-circle" alt="">'+
								'<h4 class="text-center">'+v.userName+'</h4>'+
								'<p class="text-center">'+v.usermes+'</p>'+
							  '</li>';
					tpl.find(".navbar-right  .fore3").append(item);
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

		/*$(".messages dl", _ele).click(function(event) {
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
				});*/
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
			$(".nav-option .next", _ele).css("left", (110 * num + 260) + "px");

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
		
		
	
		  $('#search', _ele).typeahead({
     		source: ['Dashboard','Form elements','Common Elements','Validation','Wizard','Buttons','Icons','Interface elements','Support','Calendar','Gallery','Reports','Charts','Graphs','Widgets'],
		items: 4

      
   });
		
		

	},

	


	_destroy : function() {
		this.element.text("");
		$.Widget.prototype.destroy.call(this);

	}
});
