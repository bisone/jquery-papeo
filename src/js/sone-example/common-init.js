$('#header').soneHeader({
   userInfo:{
		userName:'张三',
		logonTime:'2014-12-05 12:34:25'
	}
	/*showSearch:false,
	showNotices:false,
	showTasks:false,*/
	//logoText:'test'

});
//iframe auto fit
iFrameResize();

$('#left-menu').soneLeftMenu({
    value:1,
	listeners:[{
	    'afterrender':function(){alert('afterrender')}
	}],
    afterrender: function(event, data) {
		
	}
	
	
});

		


$(function() {
			var width = window.screen.width-17;
		  $("body").css("width",width);

          
});

