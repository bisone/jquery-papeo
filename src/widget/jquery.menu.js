$.widget("ui.soneLeftMenu", {
    //定义数据位空状态
	empty:false,
	options : {
		value : 0,
		jsonUrl : '/left.menu.json'
	},
	_create : function() {
		this.element.addClass("wrap");
		var scope = this;

		if (this.options.data == null) {
			$.ajax({
						url : this.options.jsonUrl,
						type : "GET",
						success : function(mydata) {
							try {
								mydata = $.parseJSON(mydata);
								
							} catch (e) {
							}
                            if(mydata.length==0){
							    this.empty=true;
								$("#left-menu").hide();	
								$("#page-wrapper").css("margin-left",0);
							}else{
							    this.empty=false;
							    scope.createTemplate(mydata);
								$("#left-menu").show();
								$("#page-wrapper").css("margin-left",202);
							}
							
						}
					});

		} else {
			scope.createTemplate(this.options.data);
		}

	},
	_init : function() {
		//this._create();
	},
	createTemplate : function(mydata) {
		var scope = this;
		var tpl = $('<div class="left-side"> <ul class="sone-left-menu"></ul></div>');

		$.each(mydata, function(n, item) {
		            

					if (item.type == "high" || item.type == "") {
                        tpl.find('.sone-left-menu').append('<li class="sidebar-menu item item-1" id="market"></li>');
						tpl.find('.sone-left-menu > li:last').append(
						   '<div class="itm-lv1">'+
							'<div class="tit">'+
								 '<span class="'+item.iconClass+' text-center"></span><br/>'+
								 '<span class="text-center">'+item.name+'</span><s>3</s>'+
							'</div>'+
							'<div class="con">'+
								'<div class="info">'+
								'</div>'+
								'<div class="price">'+
									'<strong>'+item.infoUrl[1].value+'</strong>'+item.infoUrl[1].lable+
								'</div>'+
							'</div>'+
						'</div>');
						//add info
						$.each(item.infoUrl[0], function (n,i) {
							tpl.find('.sone-left-menu > li:last .info').append('<span><b>'+i.value+'</b>'+i.lable+'</span>&nbsp;&nbsp;');
						});
				 	} else {
					    tpl.find('.sone-left-menu').append('<li class="sidebar-menu  item item-1"></li>');
						tpl.find('.sone-left-menu > li:last').append('<div class="itm-lv1 itm-one">'
						+'<span class="'+item.iconClass+' text-center"></span><span class="itm-name">'+item.name + '</span></div>');
						

					}
                    item.children=item.children||[];
					if(item.children.length>0){
					   tpl.find('.sone-left-menu > li:last').append('<div class="itm-lv2"><ul></ul></div>')
					
					}
					$.each(item.children, function(n, ch) {
								tpl.find('.sone-left-menu > li:last .itm-lv2 ul')
										.append('<li><a href="' + ch.url + '">'
												+ ch.name + '</a></li>');
							});

				});
		tpl.find('.sone-left-menu').append('<div class="resizer"><b></b></div>');

		$(scope.element).append(tpl);

		scope._update(mydata);

	},

	_setOption : function(key, value) {
		// this.options[key] = value;

	},

	_update : function(data) {

		this._initEvents();
	},

	_initEvents : function(element) {
		var _ele = element || this.element;

		$(".resizer", _ele).click(function() {
					$(".wrap").toggleClass("narrow-wrap");
					$("#page-wrapper").toggleClass("narrow-content");
					$(".item", _ele).find(".itm-lv2").removeAttr("style");
				});

		$(".item .itm-lv1", _ele).click(function() {
			if (!$(".wrap", _ele).hasClass("narrow-wrap")) {
				if ($(this).parent().hasClass("item-open")) {
					$(this).parent().removeClass("item-open");
				} else {
					$(_ele).find(".item-open").removeClass("item-open");
					$(this).parent().addClass("item-open");
				}
			}
		});

		$(".sone-left-menu .item", _ele).hover(function() {
					if ($(".wrap").hasClass("narrow-wrap")) {
						if ($(this).hasClass("item-open")) {
							isOpen = true;
						} else {
							isOpen = false;
						}
						$(this).addClass("item-open").find(".itm-lv2").show();
					}
				}, function() {
					if ($(".wrap").hasClass("narrow-wrap")) {
						if (!isOpen) {
							$(this).removeClass("item-open");
						}
						$(this).find(".itm-lv2").hide();
					}
				});
		$(".itm-lv2 a", _ele).click(function() {
					$(this).parent().siblings("li").find("a")
							.removeClass("curr");
					$(this).addClass("curr");
				});

		// 菜单添加点击事件
		$("#left-menu a").click(function(o) {
					var link = $(this).attr("href");
					$("#ifm").attr('src', link);
					return false;
				});

	},

	destroy : function() {
		this.element.removeClass('wrap').text("");
		$.Widget.prototype.destroy.call(this);

	},
	getEmpty:function(){
	    return this.options.empty;
	}

});
