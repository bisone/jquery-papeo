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

			$cmbTxt.width($target.width() - $prefix.width() - 31);
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

		// 如果是只读状态，不响应点击事件
		if (options.readOnly) {
			return;
		}

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
			if (!options.multiple) {
				getSelectedValueSingle($target, 0);
			}
			$popArr[0].show();

			$(document).unbind("click", comboMenuOuterClick);
			$(document).bind("click", comboMenuOuterClick);

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
		var options = $target.data('comboMenu').options;

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
		if (!options.multiple) {
			getSelectedValueSingle($target, 0);
		}
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

			if (options.multiple) {
				$menuItem.addClass(getItemClass(itemData));
			}

			$menuItem.data("itemData", itemData);
			$menuItem.attr("keyValue", itemData.value);

			// 绑定click事件
			$menuItem.bind('click', function() {
				menuItemClick($target, $(this));
			});

			// 绑定mouseover事件
			$menuItem.bind('mouseover', function() {
				var $item = $(this);
				var itemData = $item.data("itemData");

				var level = parseInt($item.parents(".popup").attr("index")) + 1;

				hideSubPopFrom($target, level);

				if (itemData.children && itemData.children.length > 0) {

					addMenuItem($target, $popArr[level].find(".popuplist"), itemData.children);

					if (!options.multiple) {
						getSelectedValueSingle($target, level);
					}
					$popArr[level].show();
				}
			});

			$popuplist.append($menuItem);
		}
	}

	/**
	 * 条目点击事件
	 */
	function menuItemClick($target, $item) {

		var options = $target.data('comboMenu').options;
		var $popArr = $target.data("popArr");
		var itemData = $item.data("itemData");

		// 单选处理
		if (!options.multiple) {
			// 如果只能选择末级叶子节点，那么如果条目有子节点，则不响应点击事件
			if (!options.allLeafCanSelect && itemData.children && itemData.children.length > 0) {
				return;
			}
			changeValue($target, itemData);
			hideSubPopFrom($target, 0);
		}
		// 多选处理
		else {

			var $allDataItem = $popArr[0].find("[keyValue='']");
			var allDataItemData = $target.data("comboMenuData")[0];

			// 多选时，只能选择最末级叶子节点
			if (itemData.children && itemData.children.length > 0) {
				var childLevel = itemData.level + 1;
				var childrenItem = $popArr[childLevel].find(".comboItem");
				if ($item.hasClass("current")) {
					$item.removeClass("current");
					childrenItem.removeClass("current parentCurrent");
					selectItemDataAndChildren(itemData, 0);
				} else if ($item.hasClass("parentCurrent")) {
					// 如果是搜索状态，可以没有“全部数据”
					if ($allDataItem) {
						$allDataItem.removeClass("current");
					}
					allDataItemData.selected = 0;
					$item.removeClass("parentCurrent");
					childrenItem.removeClass("parentCurrent");
					$item.addClass("current");
					childrenItem.addClass("current");
					selectItemDataAndChildren(itemData, 1);
				} else { // 如果是搜索状态，可以没有“全部数据”
					if ($allDataItem) {
						$allDataItem.removeClass("current");
					}
					allDataItemData.selected = 0;
					$item.addClass("current");
					childrenItem.addClass("current");
					selectItemDataAndChildren(itemData, 1);
				}
			} else {
				// itemData如果是全部数据
				if (itemData.value == "") {
					if ($allDataItem.hasClass("current")) {
						return;
					} else {
						$popArr[0].find("[keyValue!='']").removeClass("current parentCurrent");
						// 如果是搜索状态，可以没有“全部数据”
						if ($allDataItem) {
							$allDataItem.addClass("current");
						}
						clearSelectedStates($target.data("comboMenuData"));
						itemData.selected = 1;
					}
				} else if ($item.hasClass("current")) {
					$item.removeClass("current");
					selectItemDataAndChildren(itemData, 0);
				} else {
					// 如果是搜索状态，可以没有“全部数据”
					if ($allDataItem) {
						$allDataItem.removeClass("current");
					}
					allDataItemData.selected = 0;
					$item.addClass("current");
					selectItemDataAndChildren(itemData, 1);
				}
			}

			var itemParent = null;

			for (var i = itemData.level - 1; i >= 0; i--) {
				if (!itemParent) {
					itemParent = itemData.parent;
				} else {
					itemParent = itemParent.parent;
				}

				var parentClass = getItemClass(itemParent);

				$popArr[i].find("[keyValue='" + itemParent.value + "']").removeClass("current parentCurrent").addClass(parentClass);
			}

			var oldValue = $target.data("selectedValue");
			var newValue = getMutipleSelectedValue($target);

			if (!newValue || newValue.length == 0) {
				newValue = [ allDataItemData ];
				allDataItemData.selected = 1;
				// 如果是搜索状态，可以没有“全部数据”
				if ($allDataItem) {
					$allDataItem.addClass("current");
				}
			}

			if (options.onChanged) {
				options.onChanged(oldValue, newValue);
			}
			showMutipleText($target, options, newValue);
			$target.data("selectedValue", newValue);
		}
	}

	/**
	 * 选择全部数据时，清除所有数据的选择状态
	 */
	function clearSelectedStates(itemDatas) {
		if (itemDatas) {
			for (var i = 0; i < itemDatas.length; i++) {
				itemDatas[i].selected = 0;
				clearSelectedStates(itemDatas[i].children);
			}
		}
	}

	/**
	 * 选择/取消选择 条目及其子条目
	 */
	function selectItemDataAndChildren(itemData, selected) {
		itemData.selected = selected;
		if (itemData.children) {
			for (var i = 0; i < itemData.children.length; i++) {
				selectItemDataAndChildren(itemData.children[i], selected);
			}
		}
	}

	/**
	 * 根据子节点来判断当前节点的样式
	 */
	function getItemClass(parentItemData) {

		parentItemData.selected = getMultipleStateByChildren(parentItemData);

		if (parentItemData.selected == 2) {
			return "parentCurrent";
		} else if (parentItemData.selected == 1) {
			return "current";
		}
		return "";
	}

	/**
	 * 处理多选状态
	 */
	function processMultipleStates(comboItemData) {

		if (comboItemData.children && comboItemData.children.length > 0) {
			for (var i = 0; i < comboItemData.children.length; i++) {
				processMultipleStates(comboItemData.children[i]);
			}
			comboItemData.selected = getMultipleStateByChildren(comboItemData);
		}
	}

	/**
	 * 根据子节点来判断当前节点的选择状态
	 */
	function getMultipleStateByChildren(parentItemData) {

		var selectedFlg = false;
		var unSelectedFlg = false;
		var halfSelectedFlg = false;
		var child = null;

		if (!parentItemData) {
			return 0;
		}

		if (!parentItemData.children || parentItemData.children.length == 0) {
			return parentItemData.selected;
		}

		for (var i = 0; i < parentItemData.children.length; i++) {
			child = parentItemData.children[i];
			if (child.selected == 1) {
				selectedFlg = true;
			} else if (child.selected == 2) {
				halfSelectedFlg = true;
			} else {
				unSelectedFlg = true;
			}

			// 如果子节点有一个半选，或者既有全选又有全不选的，则父为半选
			if (halfSelectedFlg || (selectedFlg && unSelectedFlg)) {
				return 2;
			}
		}

		if (selectedFlg) {
			return 1;
		}

		return 0;
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
			tmpData.selected = 0;
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
		var i = 0;

		if (level == 0 && options.onHide) {
			options.onHide();
		}

		for (i = level; i < $popArr.length; i++) {
			hideSubPop($popArr[i]);
		}
	}

	/**
	 * 多选的时候，显示text的值
	 */
	function showMutipleText($target, options, values) {

		var showText = new Array();

		for (i = 0; i < values.length; i++) {
			if (options.showSingleLevel == false) {
				showText.push(getDataString(values[i], options.joinStr));
			} else {
				showText.push(!values[i] ? "" : values[i].text);
			}
		}
		var text = showText.join(",");
		$target.find(".comboMenu_text").html(text);
		$target.attr("title", text);
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
	 * 取多选的选择值
	 */
	function getMutipleSelectedValue($target) {

		var selectedValue = new Array();
		var comboMenuData = $target.data("comboMenuData");

		addSelectedDataMutiple(selectedValue, comboMenuData);

		return selectedValue;
	}

	/**
	 * 添加多选的数据到selectedValue
	 */
	function addSelectedDataMutiple(selectedValue, itemDatas) {

		if (!itemDatas) {
			return;
		}

		for (var i = 0; i < itemDatas.length; i++) {
			if ((!itemDatas[i].children || itemDatas[i].children.length == 0) && itemDatas[i].selected == 1) {
				selectedValue.push(itemDatas[i]);
			} else {
				addSelectedDataMutiple(selectedValue, itemDatas[i].children);
			}
		}
	}

	/**
	 * 根据当前的选择值，选中级别为level的pop中的item条目，以加上class（单选的时候使用）
	 */
	function getSelectedValueSingle($target, level) {

		var $popArr = $target.data("popArr");
		var curValue = $target.data("selectedValue");
		var isSearch = $popArr[0].find("[log=search_cate]").val() != "";
		var i = 0;

		if (!curValue) {
			return;
		}

		$popArr[level].find(".current").removeClass("current");
		for (i = level; i <= curValue.level; i++) {
			var resultVal = findValueByLevel(curValue, i);
			if (!resultVal) {
				return;
			}
			$popArr[level].find("[keyValue='" + resultVal.value + "']").addClass("current");
			if (!isSearch) {
				break;
			}
		}
	}

	/**
	 * 根据当前的选择值，选中级别为level的pop中的item条目，以加上class（多选的时候使用）
	 */
	function getSelectedValueMultiple(itemDatas, level) {

		var $popArr = $target.data("popArr");

		$popArr[level].find(".current").removeClass("current parentCurrent");
		for (i = 0; i <= itemDatas.length; i++) {
			var resultVal = itemDatas[i];
			var parentClass = getItemClass(resultVal);
			$popArr[level].find("[keyValue='" + resultVal.value + "']").addClass(parentClass);
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
	 * 在json数组中找到当前值的json对象
	 */
	function findSelectedValues(selectedValue, dataArr, values) {
		if (!dataArr || !values) {
			return;
		}
		for (var i = 0; i < dataArr.length; i++) {
			dataArr[i].selected = 0;
			if (!dataArr[i].children || dataArr[i].children.length == 0) {
				for (var j = 0; j < values.length; j++) {
					var value = values[j];
					if (dataArr[i].value == value) {
						dataArr[i].selected = 1;
						selectedValue.push(dataArr[i]);
						break;
					}
				}
			} else {
				findSelectedValues(selectedValue, dataArr[i].children, values);
			}
		}
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

		var text = "";

		if (options.showSingleLevel == false) {

			text = getDataString(newValue, options.joinStr);
		} else {
			text = !newValue ? "" : newValue.text;
		}

		$target.find(".comboMenu_text").html(text);
		$target.attr("title", text);
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

		// 如果支持多选，强制显示全部数据
		if (options.multiple && options.multiple == true) {
			options.hasAllData = true;
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
		// 返回comboMenu的选择值，如果是单选，返回json对象。如果是多选，返回的是json数组
		getValue : function($target) {
			return $target.data("selectedValue");
		},
		// 设置comboMenu的选择值，如果是单选，设置json对象。如果是多选，设置的是json数组
		setValue : function($target, value) {

			var comboMenuData = $target.data("comboMenuData");
			var selectedValue = null;
			var options = $target.data('comboMenu').options;

			// 单选处理，单选的话，value是一个json对象
			if (!options.multiple) {
				selectedValue = findSelectedValue(comboMenuData, value);
			}
			// 多选处理，如果是多选，在找到选择值的同时，还要给该值设上selected=1（选择），并处理它们的父节点到祖先的节点状态
			else {
				selectedValue = new Array();

				// 如果设置的值是空，空字符、空数据，则把值当成“全部数据”处理。
				if (!value || value == "" || ($.isArray(value) && value.length == 0)) {
					value = [ "" ];
				}
				// 如果不是数组，返回
				else if (!$.isArray(value)) {
					return;
				}
				// 如果包含空字符，也按全部数据来处理
				else {
					for (var i = 0; i < value.length; i++) {
						if (value[i] == "") {
							value = [ "" ];
							break;
						}
					}
				}

				findSelectedValues(selectedValue, comboMenuData, value);
				if (comboMenuData && comboMenuData.length > 0) {
					for (var i = 0; i < comboMenuData.length; i++) {
						processMultipleStates(comboMenuData[i]);
					}
				}

				showMutipleText($target, options, selectedValue);
			}

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
		setReadOnly : function($target, readOnly) {
			var options = $target.data('comboMenu').options;
			options.readOnly = readOnly;
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
		title : "", // 标题
		useSearch : true, // 是否用搜索功能
		multiple : false, // 是否支持多选，如果支持多选，只能选择最末级的条目。
		readOnly : false, // 是否为只读状态。
		addParentAndLevel : true, // 是否需要控件来添加parent和level属性。默认为true。如果数据已经有parent和level属性了，可设置为false。
		onChanged : null, // onChanged事件，如果是单选，返回false可以取消事件，多选不可以取消事件。只会触发
		onShow : null,
		onHide : null,
		onClick : null
	};
})(jQuery);