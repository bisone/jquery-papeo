(function(){ 
$.widget("ui.soneLeftMenu", {
    options: {
        value: 0
    },

    _create: function() {
        this.element.addClass("wrap");
        var scope = this;

        $.ajax({
            url: "/json/left.menu.json",
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
        console.log(data);



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


// 左边菜单功能
$('#left-menu').soneLeftMenu({
    value:1
});


$(window).bind("load resize", function() {
    topOffset = 50;
    width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    if (width < 768) {
        $('div.navbar-collapse').addClass('collapse');
        topOffset = 100; // 2-row-menu
    } else {
        $('div.navbar-collapse').removeClass('collapse');
    }

    height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
        $("#page-wrapper").css("min-height", (height) + "px");
    }
});

$(".messages dl").click(function(event){
		event.stopPropagation();
		if($(this).find("dd").css("display")=="none"){
			$(".messages").find("dd").hide();
			$(this).find("dd").show()
		}
		else{
			$(this).find("dd").hide()
		}
	});
	$(".messages dd").click(function(event){
		event.stopPropagation();
	});
	$(document).click(function(){
		$(".messages").find("dd").hide();
	});
	window.onload=window.onresize=function(){
		var w=$(window).width();
		var n=$(".nav").find("li").length;
		var num=parseInt((w-766)/110);
		var step=0;
		var isClick=false;
		if(n<=num){
			num=n;
			$(".nav-option").hide();
		}
		else if(n>num){
			$(".nav-option").show();
		}
		$(".nav").css("width",110*num+"px");
		$(".nav ul").css("width",110*n+"px");
		$(".nav-option .next").css("left",(110*num+255)+"px");

		$(".nav-option .next").click(function(){
			if(step<(n-num)&&!isClick){
				step++;
				isClick=true;
				$(".nav ul").animate({"left":-step*110+"px"},1000);
				setTimeout(function(){isClick=false;},1000);
			}
		});
		$(".nav-option .prev").click(function(){
			if(step!=0&&!isClick){
				step--;
				isClick=true;
				$(".nav ul").animate({"left":-step*110+"px"},1000);
				setTimeout(function(){isClick=false;},1000);
			}
		});
	};    
//w2ui
$(function() {
    $('#grid').w2grid({
        name : 'grid',
        header : '列表名称',
        show : {
            toolbar : true,
            footer : true,
            header : true,
            lineNumbers: true,
            selectColumn: true,
            expandColumn: true
        },
        searches : [ {
            field : 'lname',
            caption : '名字',
            type : 'text'
        }, {
            field : 'fname',
            caption : '姓氏',
            type : 'text'
        }, {
            field : 'email',
            caption : '邮箱',
            type : 'text'
        } ],
        sortData : [ {
            field : 'recid',
            direction : 'ASC'
        } ],
        columns : [ {
            field : 'recid',
            caption : 'ID',
            size : '50px',
            sortable : true,
            attr : 'align=center'
        }, {
            field : 'lname',
            caption : '姓氏',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'fname',
            caption : '名字',
            size : '30%',
            sortable : true,
            resizable : true
        }, {
            field : 'email',
            caption : '邮件',
            size : '40%',
            sortable : true,
            resizable : true
        }, {
            field : 'sdate',
            caption : '起始时间',
            size : '120px',
            sortable : true,
            resizable : true
        } ],
        records : [ {
            recid : 1,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 2,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 3,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 4,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 5,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 6,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 7,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 8,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 9,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 20,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 21,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 22,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 23,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 24,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 25,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 26,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 27,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 28,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 31,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 32,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 33,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 34,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 35,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 36,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 37,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 38,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 39,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 40,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 41,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 42,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 43,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 44,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 45,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 46,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 47,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 48,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 51,
            fname : 'John',
            lname : 'doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 52,
            fname : 'Stuart',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 53,
            fname : 'Jin',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 54,
            fname : 'Susan',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 55,
            fname : 'Kelly',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 56,
            fname : 'Francis',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 57,
            fname : 'Mark',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 58,
            fname : 'Thomas',
            lname : 'Bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 59,
            fname : 'Sergei',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 60,
            fname : 'Jill',
            lname : 'Doe',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 61,
            fname : 'Frank',
            lname : 'Motzart',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 62,
            fname : 'Peter',
            lname : 'Franson',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 63,
            fname : 'Andrew',
            lname : 'Ottie',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 64,
            fname : 'Manny',
            lname : 'Silver',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 65,
            fname : 'Ben',
            lname : 'Gatos',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 66,
            fname : 'Doer',
            lname : 'Welldo',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 67,
            fname : 'Shashi',
            lname : 'bahh',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        }, {
            recid : 68,
            fname : 'Av',
            lname : 'Rachmaninov',
            email : 'jdoe@gmail.com',
            sdate : '4/3/2012'
        } ]
        ,
        onExpand: function (event) {
            $('#'+event.box_id).html('<div style="padding: 10px">Expanded content</div>').animate({ 'height': 100 }, 100);
        }
    });
});
})();