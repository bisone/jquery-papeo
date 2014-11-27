//let jquery listen resize
/*(function($, h, c) {
	var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j
			+ "-special-event", b = "delay", f = "throttleWindow";
	e[b] = 250;
	e[f] = true;
	$.event.special[j] = {
		setup : function() {
			if (!e[f] && this[k]) {
				return false
			}
			var l = $(this);
			a = a.add(l);
			$.data(this, d, {
						w : l.width(),
						h : l.height()
					});
			if (a.length === 1) {
				g()
			}
		},
		teardown : function() {
			if (!e[f] && this[k]) {
				return false
			}
			var l = $(this);
			a = a.not(l);
			l.removeData(d);
			if (!a.length) {
				clearTimeout(i)
			}
		},
		add : function(l) {
			if (!e[f] && this[k]) {
				return false
			}
			var n;
			function m(s, o, p) {
				var q = $(this), r = $.data(this, d);
				r.w = o !== c ? o : q.width();
				r.h = p !== c ? p : q.height();
				n.apply(this, arguments)
			}
			if ($.isFunction(l)) {
				n = l;
				return m
			} else {
				n = l.handler;
				l.handler = m
			}
		}
	};
	function g() {
		i = h[k](function() {
					a.each(function() {
								var n = $(this), m = n.width(), l = n.height(), o = $
										.data(this, d);
								if (m !== o.w || l !== o.h) {
									n.trigger(j, [o.w = m, o.h = l])
								}
							});
					g()
				}, e[b])
	}
})(jQuery, this);*/


$('#header').soneHeader();

/*function dyniframesize(down) {
	var pTar = null;
	if (document.getElementById) {
		pTar = document.getElementById(down);
	} else {
		eval('pTar = ' + down + ';');
	}
	if (pTar && !window.opera) {
		// begin resizing iframe
		pTar.style.display = "block"
		if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight) {
			// ns6 syntax
			pTar.height = pTar.contentDocument.body.offsetHeight + 20;
			pTar.width = pTar.contentDocument.body.scrollWidth + 20;
			//pTar.height = pTar.contentDocument.body.offsetHeight + 20;
			//pTar.width = $("#page-wrapper").width;
		} else if (pTar.Document && pTar.Document.body.scrollHeight) {
			// ie5+ syntax
			pTar.height = pTar.Document.body.scrollHeight;
			pTar.width = pTar.Document.body.scrollWidth;
		  
		}
	}
};
$(document).ready(function(){
   $("#ifm").on("load",$.proxy(function(){dyniframesize('ifm')}, this));
   $("#page-wrapper").on("resize",$.proxy(function(){dyniframesize('ifm')}, this));
});*/
//iframe auto fit
iFrameResize();
//bootstrap menu data 
var bootstrapMenu=[

    {
        "iconClass": "fa-play-circle fa-2x",
        "name": "图标类型",
        "info": [{"lable":"aa", "value": 100},{"lable":"","value":10}],
        "price": {"lable":"bb","value":1200},
		"url":'echarts/echarts-2.0.4/doc/doc.html#图表类型',
        "children": [{"name":"line","url":"#"},{"name":"bar","url":"#"},{"name":"scatter","url":"#"},{"name":"k","url":"#"}]
    }
];	

//highcharts menu data 
var highchartsMenu=[
    {
        "iconClass": "sone-left-menu-icons sone-market",
        "name": "简介",
        "info": [{"lable":"部门", "value": 100},{"lable":"品类","value":10}],
        "price": {"lable":"万元","value":1200},
		"url":'echarts/echarts-2.0.4/doc/doc.html#简介',
		"children": []
       
    }
];	

//echarts menu data 
var echartsMenu=[
    {
        "iconClass": "sone-left-menu-icons sone-market",
        "name": "简介",
        "info": [{"lable":"部门", "value": 100},{"lable":"品类","value":10}],
        "price": {"lable":"万元","value":1200},
		"url":'echarts/echarts-2.0.4/doc/doc.html#简介',
		"children": []
       
    },

    {
        "iconClass": "fa-play-circle fa-2x",
        "name": "名词解释",
        "info": [{"lable":"部门", "value": 100},{"lable":"品类","value":10}],
        "price": {"lable":"万元","value":1200},
		"url":'echarts/echarts-2.0.4/doc/doc.html#名词解析',
		"children": []
    },

    {
        "iconClass": "fa-play-circle fa-2x",
        "name": "图标类型",
        "info": [{"lable":"aa", "value": 100},{"lable":"","value":10}],
        "price": {"lable":"bb","value":1200},
		"url":'echarts/echarts-2.0.4/doc/doc.html#图表类型',
        "children": [{"name":"line","url":"#"},{"name":"bar","url":"#"},{"name":"scatter","url":"#"},{"name":"k","url":"#"}]
    }
];	
$("#sub-nav li").click(function(o){
   $('#left-menu').soneLeftMenu('destroy');
   var index=$(this).parent().find("li").index(this);
   var src='echarts/echarts-2.0.4/doc/doc.html';
   var data=bootstrapMenu;
   if(index==0){
      src='bootstrap/bootstrap-3.2.0/docs/index.html';
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

});

var templateData=[
    {
        "iconClass": "sone-left-menu-icons sone-market",
        "name": "市场",
        "info": [{"lable":"部门", "value": 100},{"lable":"品类","value":10}],
        "price": {"lable":"万元","value":1200},
        "children": [{"name":"市场行情","url":"#"},{"name":"市场集中度","url":"#"},{"name":"市场竞争强度","url":"#"},{"name":"市场需求度","url":"#"}]
    },

    {
        "iconClass": "fa-play-circle fa-2x",
        "name": "市场2",
        "info": [{"lable":"部门", "value": 100},{"lable":"品类","value":10}],
        "price": {"lable":"万元","value":1200},
        "children": [{"name":"市场行情","url":"#"},{"name":"市场集中度","url":"#"},{"name":"市场竞争强度","url":"#"},{"name":"市场需求度","url":"#"}]
    }
];

$('#left-menu').soneLeftMenu({
    value:1,
	data:templateData
});

//header 点击 变色
$("#header .nav li").click(function(o){
     if(o.target.text=='UI标准化模板'){
	      window.location.href="/index.html";
	 }else if(o.target.text=='技术指南'){
		  window.location.href="/docs/index.html";
	 }
});




