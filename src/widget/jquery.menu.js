$.widget("ui.soneLeftMenu", {
    options: {
        value: 0,
		data:[
			{
				"iconClass": "fa fa-bar-chart-o ",
				"name": "JS 插件",
				"info": [{"lable":"控件", "value": 100},{"lable":"种类","value":10}],
				"price": {"lable":"**","value":1200},
				 "children": [{"name":"Input插件 ","url":"docs/stemplate/index/input.html"},{"name":"table插件","url":"docs/stemplate/index/table.html"},{"name":" 统计插件","url":"docs/stemplate/index/statistics.html"},{"name":" 总插件","url":"docs/stemplate/index/indexjs.html"}]
			},
			  {
				"iconClass": "fa fa-line-chart",
				"name": " css 样式",
				"info": [{"lable":"控件", "value": 100},{"lable":"种类","value":10}],
				"price": {"lable":"**","value":1200},
				"children": [{"name":"css组件","url":"docs/stemplate/indexcss/indexcss.html"},{"name":"窗体小部件","url":"docs/stemplate/indexcss/widgets.html"},{"name":"控件2","url":"#"},{"name":"控件3","url":"#"}]
			},

			{
				"iconClass": "fa fa-line-chart",
				"name": "文档",
				"info": [{"lable":"控件", "value": 100},{"lable":"种类","value":10}],
				"price": {"lable":"**","value":1200},
				"children": [{"name":"comboMenu","url":"docs/stemplate/comboMenu/index.html"},{"name":"标准化说明","url":"docs/stemplate/comboMenu/norm.html"},{"name":"欢迎界面","url":"docs/stemplate/comboMenu/welcome.html"},{"name":"控件3","url":"#"}]
			}
		]
    },

    _create: function() {
        this.element.addClass("wrap");
        var scope = this;
        
		if(this.options.data==null){
		  $.ajax({
            url: "/left.menu.json",
            type: "GET",
            success: function(mydata) {
			try{
                mydata = $.parseJSON(mydata);
			}catch(e){
			}

            scope.createTemplate(mydata);
            }});
		
		}else{
		    scope.createTemplate(this.options.data);
		}
      
    },
	_init:function(){
	    this._create();
	},
    createTemplate:function(mydata){
	    var scope=this;
	    var tpl = '<div class="left-side"> <ul class="sone-left-menu">';

                $.each(mydata, function(n, item){
                    tpl += '<li id="market" class="sidebar-menu item item-1">'+
                        '<div class="itm-lv1">'+
                        '<div class="tit">'+
                        '<span class="'+item.iconClass+' text-center"></span>'+
                        '<span class="text-center">'+item.name+'</span>'+
                        '<s>3</s>'+
                        '</div>'+
                        '<div class="con">'+
                        '<div class="info">';
                    $.each(item.info, function (n,i) {
                        tpl +='<span><b>'+i.value+'</b>'+i.lable+'</span>&nbsp;&nbsp;';
                    });
                    tpl +='</div>'+
                        '<div class="price">'+
                        '<strong>'+item.price.value+'</strong>'+item.price.lable+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '<div class="itm-lv2">'+
                        '<ul>';
                    $.each(item.children, function (n, ch) {
                        tpl += '<li><a href="'+ch.url+'">'+ch.name+'</a></li>';
                    });
                    tpl +='</ul>'+
                        '</div>'+
                        '</li>'; });

                tpl += '<div class="resizer"><b></b></div>'+
                    '</ul></div>';

                scope.element.html(tpl);

                scope._update(mydata);
	
	},
    _setOption: function(key, value) {
       // this.options[key] = value;

    },

    _update: function(data) {
        
        this._initEvents();
    },

    _initEvents: function(element) {
        var _ele = element || this.element;

        $(".resizer", _ele).click(function(){
            $(".wrap").toggleClass("narrow-wrap");
            $("#page-wrapper").toggleClass("narrow-content");
            $(".item", _ele).find(".itm-lv2").removeAttr("style");
        });

        $(".item .itm-lv1", _ele).click(function(){
            if(!$(".wrap", _ele).hasClass("narrow-wrap")){
                if($(this).parent().hasClass("item-open")) {
                    $(this).parent().removeClass("item-open");
                }
                else{
                    $(this).parents(".sone-left-menu", _ele).find(".item-open").removeClass("item-open");
                    $(this).parent().addClass("item-open");
                }
            }
        });

        $(".sone-left-menu .item", _ele).hover(function(){
            if($(".wrap").hasClass("narrow-wrap")){
                if($(this).hasClass("item-open")){
                    isOpen=true;
                }
                else{
                    isOpen=false;
                }
                $(this).addClass("item-open").find(".itm-lv2").show();
            }
        },function(){
            if($(".wrap").hasClass("narrow-wrap")){
                if(!isOpen){
                    $(this).removeClass("item-open");
                }
                $(this).find(".itm-lv2").hide();
            }
        });
        $(".itm-lv2 a", _ele).click(function(){
            $(this).parent().siblings("li").find("a").removeClass("curr");
            $(this).addClass("curr");
        });
		
		//菜单添加点击事件
		$("#left-menu a").click(function(o){
		  var link=$(this).attr("href");
		  $("#ifm").attr('src',link);
		  return false;
		 });

    },

    destroy:function(){
        this.element
            .removeClass('wrap')
            .text("");
        $.Widget.prototype.destroy.call(this);

    }
	
});
