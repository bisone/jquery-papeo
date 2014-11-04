$.widget("bisone.soneLeftMenu", {
    options: {
        value: 0
    },

    _create: function() {
        this.element.addClass("wrap");
        this._update();
    },

    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    _update: function() {

        var leftMenuTemplate=' <div class="sone-left-menu">'+
        '<div id="market" class="item item-1">'+
          '<div class="itm-lv1">'+
            '<div class="tit">'+
              '<span class="icon icon-ic_play_circle_outline_black_24dp"></span>'+
              '<span>市场</span>'+
              '<s>3</s>'+
            '</div>'+
            '<div class="con">'+
              '<div class="info">'+
                '<span><b>0</b>部门</span>'+
                '<span><b>0</b>品类</span>'+
              '</div>'+
              '<div class="price">'+
                '<strong>1200</strong>万元'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="itm-lv2">'+
            '<ul>'+
              '<li><a href="#">市场行情</a></li>'+
              '<li><a href="#">市场集中度</a></li>'+
              '<li><a href="#">市场竞争强度</a></li>'+
              '<li><a href="#">市场需求度</a></li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
        '<div class="resizer"><div class="icon icon-ic_arrow_forward_black_24dp "></div></div>'+
      '</div>';

        this.element.html(_.template(leftMenuTemplate, {data: this.options}));
        this._initEvents();
    },

    _initEvents: function(element) {
        var _ele = element || this.element;

        $(".resizer", _ele).click(function(){
            $(".wrap").toggleClass("narrow-wrap");
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
            if($(".wrap", _ele).hasClass("narrow-wrap")){
                if($(this).hasClass("item-open")){
                    isOpen=true;
                }
                else{
                    isOpen=false;
                }
                $(this).addClass("item-open").find(".itm-lv2").show();
            }
        },function(){
            if($(".wrap", _ele).hasClass("narrow-wrap")){
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

    },

    _destroy:function(){
        this.element
            .removeClass('wrap')
            .text("");
        $.Widget.prototype.destroy.call(this);

    }
});
