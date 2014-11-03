(function(){ 
// 左边菜单功能
$(".resizer").click(function(){
    $(".wrap").toggleClass("narrow-wrap");
    $(".item").find(".itm-lv2").removeAttr("style");
});
$(".item .itm-lv1").click(function(){
    if(!$(".wrap").hasClass("narrow-wrap")){
        if($(this).parent().hasClass("item-open"))
        {
            $(this).parent().removeClass("item-open");
        }
        else{
            $(this).parents(".sone-left-menu").find(".item-open").removeClass("item-open");
            $(this).parent().addClass("item-open");
        }
    }
});
$(".sone-left-menu .item").hover(function(){
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
$(".itm-lv2 a").click(function(){
    $(this).parent().siblings("li").find("a").removeClass("curr");
    $(this).addClass("curr");
});
$(".foldable .fold-bar").click(function(){
    if($(this).siblings(".mc").hasClass("fold-up")){
        $(this).siblings(".mc").removeClass("fold-up").slideUp();
        $(this).addClass("fold-bar-down");
    }
    else{
        $(this).siblings(".mc").addClass("fold-up").slideDown();
        $(this).removeClass("fold-bar-down");
    }
});

$.widget("bisone.progressbar", {
    options: {
        value: 0
    },

    _create: function() {
        this.element.addClass("progressbar");
        this._update();
    },

    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    _update: function() {
        var progress = this.options.value + "%";
        this.element.text(progress);
        //trigger a event when progressbar is complate
        if(this.options.value == 100){
            this._trigger('complete',null,{value:100});
        }
    },

    _destroy:function(){
        this.element
            .removeClass('progressbar')
            .text("");
        $.Widget.prototype.destroy.call(this);

    }
});



})();