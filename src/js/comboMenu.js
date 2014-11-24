/**
 * comboMenu控件
 * 
 * @author yinjiabin
 */
(function($) {

	function init($target) {

		var options = $target.data('comboMenu').options;
		var data = processData(options.data, options.hasAllData);
		var $popArr = new Array();

		createCombo();
		createPop0();
		createOtherPops();
		if (options.addParentAndLevel) {
			addParentAndLevel(data, null, 0);
		}
		$target.data("comboMenuData", data);
		$target.data("popArr", $popArr);
		changeValue($target, findSelectedValue(data, ""));

		/**
		 * 创建combo
		 */
		function createCombo() {

			$target.addClass("comboMenu in");

			var $prefix = $('<span class="prefix"></span>');
			var $cmbTxt = $('<a href="javascript:void(0);" class="comboMenu_text"></a>');
			var $arrowIn = $('<span class="arrow in" style=""></span>');

			$target.append($prefix).append($cmbTxt).append($arrowIn);

			$target.height(options.height);
			$target.width(options.width);

			$prefix.css("padding-top", (options.height - 21) / 2);
			$cmbTxt.css("padding-top", (options.height - 21) / 2);

			if (options.title && options.title.length > 0) {
				$prefix.append(options.title + ": ");
			}

			$cmbTxt.width($target.width() - $prefix.width() - 30);
			// 因为$cmbTxt的padding-top 和 padding-left的和为6
			$cmbTxt.height(options.height - 6);

			$arrowIn.css("margin-top", (options.height - 25) / 2);

			$cmbTxt.bind("click", function() {
				comboClick($target);
			});
			$arrowIn.bind("click", function() {
				comboClick($target);
			});
		}

		/**
		 * 创建pop0
		 */
		function createPop0() {

			var $pop0 = $('<div class="popup popup_0" index="0" style="display: none;"></div></div>');

			$popArr.push($pop0);

			$pop0.width(options.width + 2);
			$pop0.css("top", options.height);

			$target.append($pop0);

			var $searchDiv = $('<div class="comboMenu_search"><span class="prefix">搜索:</span><input type="text" log="search_cate"><span class="cf"></span></div><div class="search-bottom"></div><div class="popup_wrap"></div>');
			$pop0.append($searchDiv);

			var $search = $pop0.find("[log=search_cate]");
			$search.bind("input protertychange", function(e) {
				searchChanged(e, $target);
			});
			$search.width(options.width - 68);

			if (options.useSearch == false) {
				$searchDiv.each(function() {
					$(this).hide();
				});
			}

			$pop0.append('<div class="popuplist"></div>');
		}

		/**
		 * 创建pop1-pop4
		 */
		function createOtherPops() {

			if (!options.popWidth) {
				options.popWidth = options.width;
			}
			var showTop = options.height;

			if (options.useSearch) {
				showTop = showTop + 34;
			}

			var $pop1 = $('<div class="popup popup_1" index="1" style="display: none;"><div class="popuplist" style="height: auto;"></div></div>');
			var $pop2 = $('<div class="popup popup_2" index="2" style="display: none;"><div class="popuplist" style="height: auto;"></div></div>');
			var $pop3 = $('<div class="popup popup_3" index="3" style="display: none;"><div class="popuplist" style="height: auto;"></div></div>');
			var $pop4 = $('<div class="popup popup_4" index="4" style="display: none;"><div class="popuplist" style="height: auto;"></div></div>');

			$popArr.push($pop1);
			$popArr.push($pop2);
			$popArr.push($pop3);
			$popArr.push($pop4);

			$target.append($pop1);
			$target.append($pop2);
			$target.append($pop3);
			$target.append($pop4);

			$pop1.css("left", options.width);
			$pop1.css("_margin-left", options.width); // 兼容IE6
			$pop1.css("width", options.popWidth);
			$pop1.css("top", showTop);

			$pop2.css("left", options.width + options.popWidth - 1);
			$pop2.css("_margin-left", options.width + options.popWidth - 1); // 兼容IE6
			$pop2.css("width", options.popWidth);
			$pop2.css("top", showTop);

			$pop3.css("left", options.width + options.popWidth + options.popWidth - 2);
			$pop3.css("_margin-left", options.width + options.popWidth + options.popWidth - 2); // 兼容IE6
			$pop3.css("width", options.popWidth);
			$pop3.css("top", showTop);

			$pop4.css("left", options.width + options.popWidth + options.popWidth + options.popWidth - 3);
			$pop4.css("_margin-left", options.width + options.popWidth + options.popWidth + options.popWidth - 3); // 兼容IE6
			$pop4.css("width", options.popWidth);
			$pop4.css("top", showTop);
		}
	}

	/**
	 * 点击combo的事件，需要弹出pop0
	 */
	function comboClick($target) {

		var options = $target.data('comboMenu').options;
		var $popArr = $target.data("popArr");

		if ($popArr[0].css("display") == "none") {
			$popArr[0].find("[log=search_cate]").val("");
			if (options.onShow) {
				var result = options.onShow();
				if (result == false) {
					return;
				}
			}

			var data = $target.data("comboMenuData");

			addMenuItem($target, $popArr[0].find(".popuplist"), data);
			selectValueByLevel($target, 0);
			$popArr[0].show();

			$(document.body).unbind("click", comboMenuOuterClick);
			$(document.body).bind("click", comboMenuOuterClick);

		} else {
			$popArr[0].find("[log=search_cate]").val("");
			hideSubPopFrom($target, 0);
		}
		if (options.onClick) {
			options.onClick();
		}
	}

	/**
	 * 检索事件
	 */
	function searchChanged(e, $target) {

		var data = $target.data("comboMenuData");

		if (!data) {
			return;
		}
		var newValue = e.target.value;
		var $popArr = $target.data("popArr");
		var $popuplist = $popArr[0].find(".popuplist");
		if (newValue && newValue != "") {
			var findList = new Array();
			hideSubPopFrom($target, 1);
			findSearchList(e.target.value, data, findList);
			$popuplist.empty();
			addMenuItem($target, $popuplist, findList, true);
		} else {
			$popuplist.empty();
			addMenuItem($target, $popuplist, data);
		}
		selectValueByLevel($target, 0);
	}

	/**
	 * 查找符合条件的数据
	 */
	function findSearchList(val, levData, findList) {

		for (var i = 0; i < levData.length; i++) {

			var tmpData = levData[i];
			if (tmpData.text && tmpData.text.replace(/ /g, "").toLowerCase().indexOf(val.replace(/ /g, "").toLowerCase()) >= 0) {
				findList.push(tmpData);
			}

			if (tmpData.children && tmpData.children.length > 0) {
				findSearchList(val, tmpData.children, findList);
			}
		}
	}

	/**
	 * 给popuplist添加数据。
	 */
	function addMenuItem($target, $popuplist, dataList, isUserParent) {

		var options = $target.data('comboMenu').options;
		var $popArr = $target.data("popArr");

		if (!dataList) {
			return;
		}

		for (var i = 0; i < dataList.length; i++) {
			var $menuItem = $('<a href="javascript:void(0);" class="comboItem"></a>');
			var itemData = dataList[i];
			if (itemData.children && itemData.children.length > 0) {
				$menuItem.addClass("hasLeaf");
			}
			if (isUserParent) {
				$menuItem.append(getDataString(itemData, options.joinStr));
			} else {
				$menuItem.append(itemData.text);
			}
			$menuItem.data("itemData", itemData);
			$menuItem.attr("keyValue", itemData.value);

			// 绑定click事件
			$menuItem.bind('click', function() {
				var $item = $(this);
				var itemData = $item.data("itemData");

				if (!options.allLeafCanSelect && itemData.children && itemData.children.length > 0) {
					return;
				}
				changeValue($target, itemData);
				hideSubPopFrom($target, 0);
			});

			// 绑定mouseover事件
			$menuItem.bind('mouseover', function() {
				var $item = $(this);
				var itemData = $item.data("itemData");

				var level = parseInt($item.parents(".popup").attr("index")) + 1;

				hideSubPopFrom($target, level);

				if (itemData.children && itemData.children.length > 0) {
					addMenuItem($target, $popArr[level].find(".popuplist"), itemData.children);
					selectValueByLevel($target, level);
					$popArr[level].show();
				}
			});

			$popuplist.append($menuItem);
		}
	}

	/**
	 * 给参数data加上parent，以便于在查找的时候，能够找到parent，以显示出text的路径。
	 * 给参数data加上level，以便在处理的时候知道先把的条目的级别。
	 * 
	 * @author yinjiabin
	 */
	function addParentAndLevel(curDataArr, parent, level) {

		if (!curDataArr) {
			return;
		}

		for (var i = 0; i < curDataArr.length; i++) {
			var tmpData = curDataArr[i];
			tmpData.parent = parent;
			tmpData.level = level;
			if (tmpData.children && tmpData.children.length > 0) {
				addParentAndLevel(tmpData.children, tmpData, level + 1);
			}
		}
	}

	/**
	 * 从level级开始隐藏pop。level后的pop都会被隐藏
	 */
	function hideSubPopFrom($target, level) {

		var options = $target.data('comboMenu').options;
		var $popArr = $target.data("popArr");

		if (level == 0 && options.onHide) {
			options.onHide();
		}

		for (var i = level; i < $popArr.length; i++) {
			hideSubPop($popArr[i]);
		}
	}

	/**
	 * 隐藏pop
	 */
	function hideSubPop($pop) {
		var $list = $pop.find(".popuplist");
		$pop.hide();
		$list.empty();
	}

	/**
	 * 根据当前的选择值，选中级别为level的pop中的item条目，以加上class
	 */
	function selectValueByLevel($target, level) {

		var $popArr = $target.data("popArr");

		$popArr[level].find(".current").removeClass("current");

		var curValue = $target.data("selectedValue");

		if (!curValue) {
			return;
		}
		var resultVal = findValueByLevel(curValue, level);

		if (resultVal) {

			$popArr[level].find("[keyValue='" + resultVal.value + "']").addClass("current");
		}
	}

	/**
	 * 根据级别，找到包括一个json对象的父对象的值。在下拉点开时，以找到当前选择值的父节点值时使用。
	 */
	function findValueByLevel(curValue, level) {

		var resultVal = null;

		if (!curValue) {
			return null;
		}
		if (curValue.level > level) {
			resultVal = findValueByLevel(curValue.parent, level);
			if (resultVal) {
				return resultVal;
			}
		} else if (curValue.level == level) {
			return curValue;
		} else {
			return null;
		}
	}

	/**
	 * 在json数组中找到当前值的json对象
	 */
	function findSelectedValue(dataArr, value) {

		if (!dataArr) {
			return null;
		}

		for (var i = 0; i < dataArr.length; i++) {
			if (dataArr[i].value == value) {
				return dataArr[i];
			} else {
				var val = findSelectedValue(dataArr[i].children, value);
				if (val) {
					return val;
				}
			}
		}

		return null;
	}

	/**
	 * 把当前的json值转为字符串
	 */
	function getDataString(tmpData, joinStr) {

		if (!tmpData) {
			return "";
		}
		var txtArr = new Array();
		txtArr.push(tmpData.text);
		var parent = tmpData.parent;
		while (parent) {
			txtArr.push(parent.text);
			parent = parent.parent;
		}
		return txtArr.reverse().join(joinStr);
	}

	/**
	 * 改变值时的处理。如果设置了监听，会触发onChanged事件。如果onChanged返回false,可以让事件的处理取消，值不改变。
	 */
	function changeValue($target, newValue) {

		var oldValue = $target.data("selectedValue");
		var options = $target.data('comboMenu').options;

		if (options.onChanged && oldValue != newValue) {
			var result = options.onChanged(oldValue, newValue);
			if (result == false) {
				return;
			}
		}

		if (options.showSingleLevel == false) {
			$target.find(".comboMenu_text").html(getDataString(newValue, options.joinStr));
		} else {
			$target.find(".comboMenu_text").html(!newValue ? "" : newValue.text);
		}
		$target.data("selectedValue", newValue);
	}

	/**
	 * 把传过来的data处理一下，在拷贝之前，加上全部数据
	 */
	function processData(data, addAllData) {
		var processData = new Array();
		if (addAllData) {
			processData.push({
				value : "",
				text : "全部数据"
			});
		}
		return processData.concat(copyJsonArray(data));
	}

	/**
	 * 点击comboMenu外的事件，以关闭comboMenu
	 */
	function comboMenuOuterClick(e) {
		if ($(e.target).parents(".comboMenu").length == 0) {
			$(".comboMenu").each(function() {
				$(this).comboMenu("hideCombo");
			});
		} else {
			$(".comboMenu").each(function() {
				if ($(e.target).parents(".comboMenu").attr("id") != $(this).attr("id")) {
					$(this).comboMenu("hideCombo");
				}
			});
		}
	}

	/**
	 * 拷贝json的数组
	 */
	function copyJsonArray(objArr) {
		var copyArr = new Array();
		if (!objArr) {
			return copyArr;
		}
		for (var i = 0; i < objArr.length; i++) {
			copyArr.push($.extend(true, {}, objArr[i]));
		}
		return copyArr;
	}

	$.fn.comboMenu = function(options, param) {

		var $target = $(this);

		if (typeof options == 'string') {
			return $.fn.comboMenu.methods[options]($target, param);
		}

		options = options || {};

		var state = $target.data('comboMenu');
		if (state) {
			$.extend(state.options, options);
		} else {
			state = $target.data('comboMenu', {
				options : $.extend({}, $.fn.comboMenu.defaults, options)
			});
			init($target);
		}
	};

	/**
	 * 定义的comboMenu的方法
	 */
	$.fn.comboMenu.methods = {
		getValue : function($target) {
			return $target.data("selectedValue");
		},
		setValue : function($target, value) {
			var selectedValue = findSelectedValue($target.data("comboMenuData"), value);
			changeValue($target, selectedValue);
		},
		setData : function($target, data) {
			var options = $target.data('comboMenu').options;
			options.data = data;
			var data = processData(options.data, options.hasAllData);
			if (options.addParentAndLevel) {
				addParentAndLevel(data, null, 0);
			}
			$target.data("comboMenuData", data);
		},
		getOptions : function($target) {
			return $target.data('comboMenu').options;
		},
		hideCombo : function($target) {

			var $popArr = $target.data("popArr");

			if ($popArr[0].css("display") != "none") {
				$popArr[0].find("[log=search_cate]").val("");
				hideSubPopFrom($target, 0);
			}
		}
	};

	/**
	 * comboMenu的默认设置
	 */
	$.fn.comboMenu.defaults = {
		height : 30,
		width : 190,
		popWidth : null, // 除了第一级的下拉菜单，其它下拉菜单的宽。如果不设，会默认与width值相等
		showSingleLevel : true, // 是否只显示选择值的单级值。如果是false,则显示其祖先到本级的值
		allLeafCanSelect : false, // 所有的节点都可以选。默认为false，也就是只有最末级的节点可以选
		hasAllData : false, // 是否添加所有数据可以选择的条目，如果设置为true，在下拉里的第一级的第一行会有一个“全部数据”的选项
		joinStr : " > ", // 搜索功能后，父子级之间的连接字符
		title : "",
		useSearch : true, // 是否用搜索功能
		multiple : false, // 是否可以多选。（目前还不可以，留做扩展用）
		addParentAndLevel : true, // 是否需要控件来添加parent和level属性。默认为true。如果数据已经有parent和level属性了，可设置为fale。
		onShow : null,
		onHide : null,
		onClick : null,
		onChanged : null
	};
})(jQuery);