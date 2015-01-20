/**
 * 
 * messagebox plugins
 * @author songquanwang
 * 
 */

$(function() {
	window.Modal = function() {
		var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm');
		// 定义模板
	    var tplStr='<div id="ycf-alert" class="modal">'+
			      '<div class="modal-dialog modal-sm">'+
			        '<div class="modal-content">'+
			          '<div class="modal-header">'+
			            '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>'+
			            '<h5 class="modal-title"><i class="fa fa-exclamation-circle"></i> [Title]</h5>'+
			          '</div>'+
			          '<div class="modal-body small">'+
			            '<p>[Message]</p>'+
			          '</div>'+
			          '<div class="modal-footer" >'+
			            '<button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>'+
			            '<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>'+
			          '</div>'+
			        '</div>'+
			      '</div>'+
			    '</div>';
		var alr = $("#ycf-alert");
		if (alr.length == 0) {
			alr = $(tplStr);
			$(document.body).append(alr);
		}
		var ahtml = alr.html();

		var _alert = function(title, msg, callback) {
			alr.html(ahtml); // 复原
			alr.find('.ok').removeClass('btn-success').addClass('btn-primary');
			alr.find('.cancel').hide();
			_dialog({
						msg : msg,
						title : title
					});

			if (callback && callback instanceof Function) {
				alr.find('.ok').click(function() {
							callback(true)
						});
			}
		};

		var _confirm = function(title, msg, callback) {
			alr.html(ahtml); // 复原
			alr.find('.ok').removeClass('btn-primary').addClass('btn-success');
			alr.find('.cancel').show();
			_dialog({
						msg : msg,
						title : title
					});

			if (callback && callback instanceof Function) {
				alr.find('.ok').click(function() {
							callback(true)
						});
				alr.find('.cancel').click(function() {
							callback(false)
						});
			}
		};

		var _dialog = function(options) {
			var ops = {
				msg : "提示内容",
				title : "操作提示",
				btnok : "确定",
				btncl : "取消"
			};

			$.extend(ops, options);

			console.log(alr);

			var html = alr.html().replace(reg, function(node, key) {
						return {
							Title : ops.title,
							Message : ops.msg,
							BtnOk : ops.btnok,
							BtnCancel : ops.btncl
						}[key];
					});

			alr.html(html);
			alr.modal({
						width : 500,
						backdrop : 'static'
					});
		}

		var m = {
			alert : _alert,
			confirm : _confirm,
			sAlert : function(message) {
				_alert({
							msg : message,
							title : '提示',
							btnok : '确定',
							btncl : '取消'
						});
			}
		};
		jQuery.extend(m);

	}();
});
