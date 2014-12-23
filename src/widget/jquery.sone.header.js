$.widget("ui.soneHeader", {
	options : {
		//modelNames : ['UI标准化模板'],
		messages : [{
					uImg : './img/avatar3.png',
					uName : 'DIvyia',
					uInfo : '刚才看见你的数据，有些想法刚才看见你的数据，有些想法',
					uTime : '2分钟前'
				}, {
					uImg : './img/avatar3.png',
					uName : 'DIvyia',
					uInfo : '刚才看见你的数据，有些想法刚才看见你的数据，有些想法',
					uTime : '2分钟前'
				}, {
					uImg : './img/avatar3.png',
					uName : 'DIvyia',
					uInfo : '刚才看见你的数据，有些想法刚才看见你的数据，有些想法',
					uTime : '2分钟前'
				}],
		projects : [{
					projectName : 'A项目',
					pct : '80%',
					style : 'p-type1'
				}, {
					projectName : 'B项目',
					pct : '85%',
					style : 'p-type2'
				}, {
					projectName : 'C项目',
					pct : '70%',
					style : 'p-type3'
				}],
		user : [{
					userImg : './img/avatar3.png',
					userName : '李某某--营销开发部',
					usermes : 'Member since Nov. 2012'

				}]
	},

	_create : function() {
		var scope = this;     
		if(this.options.data==null){
			  $.ajax({
				 url: "json/header.json",
				 type: "GET",
				 success:function(mydata) {
					try{
						mydata = $.parseJSON(mydata);
					}catch(e){
					}
					scope.createTemplate(mydata);
				},
				error:function(data){
					alert(data);
				}
			 });
		
		}else{
		    scope.createTemplate(this.options.data);
		}
		
	},
	createTemplate:function(mydata){
	    var tpl = $('<div class="header-main"> '
				+ '<div class="logo">UI标准化模版</div>'
				+ '<div  class="nav" id="navlist">'
				+ '<ul id="navfouce"></ul>'
				+ '</div>'
				+ '<div class="nav-option">'
				+ '<a href="javascript:;" class="prev">&lt;</a>'
				+ ' <a href="javascript:;" class="next">&gt;</a>'
				+ ' </div>'

				+ ' <div class="navbar-right">'
				+ '<form class="navbar-form navbar-left search-bar " role="search">'
				+ '	<div class="form-group">'
				+ '	<input  id="search" class="form-control" type="text" placeholder="Search...">'
				+ '	</div>'
				+ '	<button class="btn btn-default" type="submit" data-original-title="Search"><span class="glyphicon glyphicon-search"></span></button>'
				+ '</form>'
				+ ' <ul class=" navbar-nav">'
				+ ' <li class="dropdown  messages-menu">'
				+ '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-envelope"></i><span class="label  label-success">4</span></a>  <ul class="dropdown-menu fore1 " role="menu"><li class="header"> <h4>4个项目正在进行</h4></li></ul>'
				+ ' </li>'
				+ ' <li class="dropdown projects-menu">'
				+ '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-list"></i><span class="label  label-success">4</span></a>  <ul class="dropdown-menu fore2 " role="menu"><li class="header"> <h4>4个项目正在进行</h4></li></ul>'
				+ ' </li>'
				+ ' <li class="dropdown user-menu">'
				+ '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-user"></i>&nbsp;<i style="font-style:normal ">李某某</i>  <i class="caret"></i></a>  <ul class="dropdown-menu fore3 " role="menu"></ul>'
				+ ' </li>' + ' </ul>' + '</div>'
				//二级菜单
				+'<div class="box" id="navbox" style="height:0px;opacity:0;overflow:hidden;"></div>'
				+' </div>');

		$.each(mydata, function(k, v) {
					var tmp = '';
					if (k == 0) {
						tmp = 'class="curr"';
					}
					tpl.find("#navlist ul").append('<li ' + tmp
							+ ' ><a href="javascript:;" level='+v.level+' sonMenuNum='+v.sonMenuNum+' menuId='+v.id+' url='+ v.url +'>'+ v.name+'</a></li>');
					var secondMenuData=v.children;
					if(secondMenuData!=null){
					   for(var i=0;i<secondMenuData.length;i++){
					    var child=secondMenuData[i];
					    if(i==0){
						    tpl.find("#navbox").append('<div class="cont" style="display:none;"><ul></ul></div>');
						
						}
						tpl.find("#navbox div:last ul").append('<li><a href="#" level='+child.level+' sonMenuNum='+child.sonMenuNum+' menuId='+child.id+' url='+ child.url +'>'+ child.name+'</a></li>');
					   
					   }
					}
						
				});
		$.each(this.options.messages, function(k, v) {


					var item='<li><a href="" class="line"> '+
	                 ' <div class="u-img"><img src="'+v.uImg+'" alt="" class="img-responsive"></div>'+
	                  '<div class="u-name">'+v.uName+'<small class="u-time">'+v.uTime+'</small></div>'+
	                 ' <div class="u-info">'+v.uInfo+'</div>'+
	                 
                	'</a></li>';

					tpl.find(".navbar-right .fore1 ").append(item);
				});

		$.each(this.options.projects, function(k, v) {

					var item = '<li>' + '<a href="">' + '<span class="txt">'
							+ '<span class="tit">' + v.projectName + '</span>'
							+ '<span class="pct">' + v.pct + '</span>'
							+ '</span>' + '<span class="progress ' + v.style
							+ '"><b style="width:' + v.pct
							+ '"></b><s></s></span>' + '</a>' + '</li>';
					tpl.find(".navbar-right  .fore2").append(item);
				});
		$.each(this.options.user, function(k, v) {

			var item = '<li  class="text-center user-header ">'
					+ ' <img src="'
					+ v.userImg
					+ '" class="img-circle" alt="">'
					+ '<h4 class="text-center">'
					+ v.userName
					+ '</h4>'
					+ '<p class="text-center">'
					+ v.usermes
					+ '</p>'
					+ '</li>'
					+ '<li class="user-footer"><div class="pull-left"><a class="btn btn-default btn-flat" href="#">Profile</a></div><div class="pull-right"><a class="btn btn-default btn-flat" href="#">Sign out</a></div></li>';
			tpl.find(".navbar-right  .fore3").append(item);
		});

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
		var _ele = element || this.element;
		$(window).bind("load resize", function() {
			var topOffset = 50;
			var width = (this.window.innerWidth > 0)
					? this.window.innerWidth
					: this.screen.width;
			if (width < 1024) {
				$('#wrapper', _ele).addClass('container');
				topOffset = 100; // 2-row-menu
			} else {
				$('#wrapper', _ele).removeClass('container');
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

		/*
		 * $(".messages dl", _ele).click(function(event) {
		 * event.stopPropagation(); if ($(this).find("dd").css("display") ==
		 * "none") { $(".messages").find("dd").hide(); $(this).find("dd").show() }
		 * else { $(this).find("dd").hide() } }); $(".messages dd",
		 * _ele).click(function(event) { event.stopPropagation(); });
		 * $(document).click(function() { $(".messages",
		 * _ele).find("dd").hide(); });
		 */
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
			/*$(".nav", _ele).css("width", $(document).width() - 817 + "px");*/
			$(".nav", _ele).css("width", 110 * n + "px");
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
			source : ['Dashboard', 'Form elements', 'Common Elements',
					'Validation', 'Wizard', 'Buttons', 'Icons',
					'Interface elements', 'Support', 'Calendar', 'Gallery',
					'Reports', 'Charts', 'Graphs', 'Widgets'],
			items : 4

		});

		this.addFirstMenuEvent();
		this.addSecondMenuEvent();

	},

	_destroy : function() {
		this.element.text("");
		$.Widget.prototype.destroy.call(this);

	},
	addFirstMenuEvent : function() {
	   var scope=this;
       $("#navlist  a").click(function(o){
			 if($(this).parent().hasClass("curr")){
				return false;
			 }
			 //点击一级菜单 隐藏left menu 修改iframe
			 $("#navlist  li").removeClass("curr");
			 $(this).parent().addClass("curr");
			 var url=$(this).attr("url");
			 var menuId=$(this).attr("menuid");
			 var level=$(this).attr("level"); 
			 var sonMenuNum=$(this).attr("sonMenuNum"); 
			 scope.menuClick(level,sonMenuNum,url,menuId);
			 return false;
		});
	},
	// 添加二级菜单
	addSecondMenuEvent : function() {

		var time = null;
		var list = $("#navlist");
		var box = $("#navbox");
		var lista = list.find("a");

		for (var i = 0, j = lista.length; i < j; i++) {
			if (lista[i].className == "now") {
				var olda = i;
			}
		}

		var box_show = function(hei) {
			box.stop().animate({
						height : hei,
						opacity : 1
					}, 40);
		}

		var box_hide = function() {
			box.stop().animate({
						height : 0,
						opacity : 0
					}, 40);
		}

		lista.hover(function() {
					lista.removeClass("now");
					$(this).addClass("now");
					box_hide();
					clearTimeout(time);
					var index = list.find("a").index($(this));
					if(box.find(".cont").hide().eq(index).length>0){
					    box.find(".cont").hide().eq(index).show();
						var _height = box.find(".cont").eq(index).height() + 25;
						box_show(_height);
					}
					
				}, function() {
					time = setTimeout(function() {
								box.find(".cont").hide();
								box_hide();
							}, 50);
					lista.removeClass("now");
					lista.eq(olda).addClass("now");
				});

		box.find(".cont").hover(function() {
					var _index = box.find(".cont").index($(this));
					lista.removeClass("now");
					lista.eq(_index).addClass("now");
					clearTimeout(time);
					$(this).show();
					var _height = $(this).height() + 25;
					box_show(_height);
				}, function() {
					time = setTimeout(function() {
								$(this).hide();
								box_hide();
							}, 50);
					lista.removeClass("now");
					lista.eq(olda).addClass("now");
				});
		//添加二级菜单事件
		var scope=this;
		$("#navbox a").click(function(){
		      $("#navfouce li").removeClass("curr");
		      var index=$("#navbox .cont").index($(this).closest(".cont"));
			  $("#navfouce li").eq(index).addClass("curr");
			  var menuId=$(this).attr("menuid");
			  //重新构建LeftMenu iframe 欢迎界面
		      var url=$(this).attr("url");
			  var level=$(this).attr("level"); 
			  var sonMenuNum=$(this).attr("sonMenuNum"); 
			  scope.menuClick(level,sonMenuNum,url,menuId);
			  return false;
		});
		

	},
	menuClick:function(level,sonMenuNum,url,id){
	    //url空且 有菜单才对;
	    
		//获取二级、三级菜单数据,如果数据为空，隐藏leftmenu iframe 刷新;如果有数据 构造菜单；iframe指向欢迎界面
		if(parseInt(level)==1 && parseInt(sonMenuNum) >0 ){
		    return false;
		}
		$('#left-menu').soneLeftMenu('destroy');
		var menu=$('#left-menu').soneLeftMenu({
					jsonUrl:'json/'+id+'.json'
				});
		/*var empty=menu.soneHeader('getEmpty');
		if(empty){
			$("#left-menu").hide();	
		}else{
		   $("#left-menu").show(); 
		}*/
		if(url!=""){
		    $("#ifm").attr('src', url);
		}else{
		    $("#ifm").attr('src', "/docs/welcome/welcome.html");
		}
		//iFrameResize();
		 
	}
});
