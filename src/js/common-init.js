$('#header').soneHeader();
//iframe auto fit
iFrameResize();

/*$("#sub-nav li").click(function(o){
   //暂时不用二级菜单
   return false;
   
   $('#left-menu').soneLeftMenu('destroy');
   var index=$(this).parent().find("li").index(this);
   var src='echarts/echarts-2.0.4/doc/doc.html';
   var data=bootstrapMenu;
   if(index==0){
      src='stemplate/comboMenu/index.html';
      data=bootstrapMenu;
   }else if(index==1){
      src='bootstrap/bootstrap-3.2.0/docs/index.html';
      data=bootstrapMenu;
   }else if(index==2){
       src='highcharts/Highcharts-4.0.3/index.htm';
       data=highchartsMenu;
   }else if(index==3){
       src='echarts/echarts-2.0.4/doc/doc.html';
       data=echartsMenu;
   }
   $(this).parent().find("li").removeClass("curr");
   $(this).addClass("curr");
   $('#left-menu').soneLeftMenu({
        value:1,
		data:data
   });
   $("#ifm").attr('src',src);

});*/

$('#left-menu').soneLeftMenu({
    value:1
	//data:templateData
});

//header 点击 变色
/*$("#header .nav li").click(function(o){
     if($(o.target).parent().hasClass("curr")){
	    return false;
	 }
     if(o.target.text=='UI标准化模板'){
	      window.location.href="/indexjs.html";
	 }else if(o.target.text=='技术指南'){
		  window.location.href="/docs/indexjs.html";
	 }
});*/

//二级菜单弹出
/*(function(){

	var time = null;
	var list = $("#navlist");
	var box = $("#navbox");
	var lista = list.find("a");
	
	for(var i=0,j=lista.length;i<j;i++){
		if(lista[i].className == "now"){
			var olda = i;
		}
	}
	
	var box_show = function(hei){
		box.stop().animate({
			height:hei,
			opacity:1
		},400);
	}
	
	var box_hide = function(){
		box.stop().animate({
			height:0,
			opacity:0
		},400);
	}
	
	lista.hover(function(){
		lista.removeClass("now");
		$(this).addClass("now");
		clearTimeout(time);
		var index = list.find("a").index($(this));
		box.find(".cont").hide().eq(index).show();
		var _height = box.find(".cont").eq(index).height()+25;
		box_show(_height)
	},function(){
		time = setTimeout(function(){	
			box.find(".cont").hide();
			box_hide();
		},50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});
	
	box.find(".cont").hover(function(){
		var _index = box.find(".cont").index($(this));
		lista.removeClass("now");
		lista.eq(_index).addClass("now");
		clearTimeout(time);
		$(this).show();
		var _height = $(this).height()+25;
		box_show(_height);
	},function(){
		time = setTimeout(function(){		
			$(this).hide();
			box_hide();
		},50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});

})();
//为子菜单添加事件
(function(){
	 $("#left-menu a").click(function(o){
      var link=$(this).attr("href");
	  $("#ifm").attr('src',link);
      return false;
	 });
   
})();*/




