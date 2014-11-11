//daterangepicker
$(function() {
	var cb = function(start, end, label) {
					$('#rangePicker span').html(
							start.format('YYYY-MM-D') + ' - '
									+ end.format('YYYY-MM-D'));
				};

	var optionSet1 = {
		startDate : moment().subtract(29, 'days'),
		endDate : moment(),
		minDate : '01/01/2000',
		maxDate : '12/31/2020',
		//dateLimit: { days: 60 },
		showDropdowns : true,
		showWeekNumbers : true,
		timePicker : true,
		timePickerIncrement : 1,
		timePicker12Hour : true,
		ranges : {
			'今天' : [ moment(), moment() ],
			'昨天' : [ moment().subtract(1, 'days'),
					moment().subtract(1, 'days') ],
			'最近 7 天' : [ moment().subtract(6, 'days'),
					moment() ],
			'最近 30 天' : [ moment().subtract(29, 'days'),
					moment() ],
			'本月' : [ moment().startOf('month'),
					moment().endOf('month') ],
			'上月' : [
					moment().subtract(1, 'month').startOf(
							'month'),
					moment().subtract(1, 'month').endOf(
							'month') ]
		},
		opens : 'right',
		buttonClasses : [ 'btn btn-default' ],
		applyClass : 'btn-small btn-primary',
		cancelClass : 'btn-small',
		format : 'MM/DD/YYYY',
		separator : ' to ',
		locale : {
			applyLabel : '确定',
			cancelLabel : '取消',
			fromLabel : '从',
			toLabel : '到',
			customRangeLabel : '自定义',
			customs:[{label:'按月',type:'monthcalendar'},{label:'按周',type:'weekcalendar'},{label:'按天',type:'singlecalendar'}],
			customRangeLabelWeek : "按周",
			daysOfWeek : [ '周日', '周一', '周二', '周三', '周四',
					'周五', '周六' ],
			monthNames : [ '一月', '二月', '三月', '四月', '五月',
					'六月', '七月', '八月', '九月', '十月', '十一月',
					'十二月' ],
			firstDay : 1
		}
	};

	$('#rangePicker span').html(
			moment().subtract(29, 'days').format(
					'YYYY-MM-D')
					+ ' - ' + moment().format('YYYY-MM-D'));

	$('#rangePicker').daterangepicker(optionSet1, cb);
		
		
    
});