
// 左边菜单功能
$('#left-menu').soneLeftMenu({
    value:1
});
$('#header').soneHeader();

var panel=$("#raphael").demandGraph({divID : "raphael"});
	panel.setData(mockData);
	panel.drawBg("#ffb049");
	panel.drawCircle("#4284e2");
	
   $("#sub-nav .collapseNav i").click(function(){
	   $("#sub-nav ul").toggle(function(){

		 //$("#sub-nav ul").css("height",0);
			 $("#sub-nav .collapseNav i").removeClass("fa-sort-up");	 
			 $("#sub-nav .collapseNav i").addClass("fa-sort-desc");	
		},function(){
			 //$("#sub-nav ul").css("height",44);
			 $("#sub-nav .collapseNav i").removeClass("fa-sort-desc");	 
			 $("#sub-nav .collapseNav i").addClass("fa-sort-up");	
		});
   
   });


/*$(window).bind("load resize", function() {
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
	};    */