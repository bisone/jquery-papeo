$.widget("ui.soneLeftMenu", {
    //定义数据位空状态
	empty:false,
	options : {
		value : 0,
		jsonUrl : 'json/left.menu.json',
		//以后要给成从url获取
		defaultMenuInfo:[{"label":"PV", "value": ""},{"label":"万","value":1260},{"label":"%","value":4.97},{"label":"","value":12345}],
		listeners:[],
		targetType:'iframe',
		targetDomId:'ifm'
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
								//mydata = $.parseJSON(mydata);
								mydata = eval(mydata);
								
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
		//add listeners
		/*$.each(this.options.listeners, function(k, v) {
			var eventName=null;
			var eventFun=function(){};
			for(var ln in v){
				if(typeof v[ln]==='function'){
					eventName=ln;
					eventFun=v[ln];
					break;
				}
			}
			scope.element.bind(eventName,eventFun);
		});*/

	},
	_init : function() {
		//this._create();
	},
	createTemplate : function(mydata) {
		var scope = this;
		var tpl="";
		if(this.options.navBefore){
			tpl=$(this.options.navBefore);
		}
		var tpl = $('<div class="left-side"> <ul class="sone-left-menu"></ul></div>');

		$.each(mydata, function(n, item) {
			        var menuInfo=null;
		            if(item.infoUrl==""){
		            	menuInfo=scope.options.defaultMenuInfo;
		            }else{
		            	//暂时mock，以后用url获取数据
						menuInfo=item.infoUrl;
		            }
					if (item.type == "high" || item.type == "") {
                        var radioDiffFlag='↓';
						var spanColor='green';
						if(parseInt(menuInfo[2].value) >0){
						    radioDiffFlag='↑';
						    spanColor='red';
						}else if(parseInt(menuInfo[2].value) ==0){
						    radioDiffFlag='<br>';
						    spanColor='white';
						}
                        tpl.find('.sone-left-menu').append('<li class="sidebar-menu item" ></li>');
						
						tpl.find('.sone-left-menu > li:last').append(
						   '<div class="itm-lv1" url="' + item.url + '">'+
							'<div class="tit">'+
								 '<span class="'+item.iconClass+' text-center"></span><br/>'+
								 '<span class="text-center">'+item.name+'</span><s>3</s>'+
							'</div>'+
							'<div class="con">'+
								'<div class="theme-one">'+menuInfo[0].label+'</div>'+
			 				    '<div id="'+item.id+'Measure'+'" class="theme-two">'+menuInfo[1].value+menuInfo[1].label+'</div>'+
			                    '<div class="theme-three">'+
								    '<span style="font-family: \'华文琥珀 Bold\', \'华文琥珀\';width: 10px;color:'+spanColor+'">'+radioDiffFlag+'</span>'+
								    '<span id="'+item.id+'Radio" style="font-size:10px;margin-left: 0px;color:'+spanColor+'">'+menuInfo[2].value+menuInfo[2].label+'</span>'+
								    '<span id="'+item.id+'Diff" style="font-size:10px;margin-left: 8px;color:'+spanColor+'">'+menuInfo[3].value+menuInfo[3].label+'</span>'+
			                    '</div>'+
							'</div>'+
						'</div>');
					
						//add info
						//$.each(menuInfo[0], function (n,i) {
							//tpl.find('.sone-left-menu > li:last .info').append('<span><b>'+i.value+'</b>'+i.lable+'</span>&nbsp;&nbsp;');
						//});
				 	} else {

					    tpl.find('.sone-left-menu').append('<li class="sidebar-menu  item itm-one"></li>');
						tpl.find('.sone-left-menu > li:last').append('<div class="itm-lv1" url="' + item.url + '">'
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

		this._trigger( "afterrender", null);

	},

	_setOption : function(key, value) {
		// this.options[key] = value;
	},

	_update : function(data) {

		this._initEvents();
	},

	_initEvents : function(element) {
	    var scope=this;
		var _ele = element || this.element;

		//菜单折叠
		$(".resizer", _ele).click(function() {
					$(".wrap").toggleClass("narrow-wrap");
					$("#page-wrapper").toggleClass("narrow-content");
					$(".item", _ele).find(".itm-lv2").removeAttr("style");
				});
        //子菜单打开、关闭
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
        //折叠后hover右侧菜单弹出
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
		//二级菜单a 标签点击

		$(".itm-lv2 a", _ele).click(function() {
					$(this).parents(".sone-left-menu").find(".itm-lv2 li").removeClass("curr");
					$(this).closest("li").addClass("curr");
				});
		// 菜单添加点击事件a
		$("#left-menu a").click(function(o) {
					var link = $(this).attr("href");
					if(scope.options.targetType=='iframe'){
					    $("#"+scope.options.targetDomId).attr('src', link);
					}else if(scope.options.targetType=='href'){
					    window.location.href=link;
					}
					
					return false;
				});
		//一级菜单点击
		$("#left-menu div.itm-lv1").click(function(o) {
					var link = $(this).attr("url");
					if(link==""){
					    return false;
					}
					if(scope.options.targetType=='iframe'){
					    $("#"+scope.options.targetDomId).attr('src', link);
					}else if(scope.options.targetType=='href'){
					    window.location.href=link;
					}
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
