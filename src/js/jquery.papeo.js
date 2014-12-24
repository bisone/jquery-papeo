$.widget("ui.soneLeftMenu", {
    options: {
        value: 0
    },

    _create: function() {
        this.element.addClass("wrap");
        var scope = this;

        $.ajax({
            url: "json/left.menu.json",
            type: "GET",
            success: function(mydata) {

                var tpl = ' <div class="sone-left-menu">';
                $.each(mydata, function(n, item){
                    tpl += '<div id="market" class="item item-1">'+
                        '<div class="itm-lv1">'+
                        '<div class="tit">'+
                        '<span class="'+item.iconClass+'"></span>'+
                        '<span>'+item.name+'</span>'+
                        '<s>3</s>'+
                        '</div>'+
                        '<div class="con">'+
                        '<div class="info">';
                    $.each(item.info, function (n,i) {
                        tpl +='<span><b>'+i.value+'</b>'+i.lable+'</span>';
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
                        '</div>'; });

                tpl += '<div class="resizer"><b></b></div>'+
                    '</div>';

                scope.element.html(tpl);

                scope._update(mydata);
            }});
    },

    _setOption: function(key, value) {
        this.options[key] = value;

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

    },

    _destroy:function(){
        this.element
            .removeClass('wrap')
            .text("");
        $.Widget.prototype.destroy.call(this);

    }
});
