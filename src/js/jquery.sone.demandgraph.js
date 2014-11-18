/**
 * 需求度图谱jquery插件
 * @author songquanwang
 */
 ;var mockData = {
	key : "血糖仪",
	period : "2014-10-14 - 2014-10-14",
	features : [{
				"ratio" : 140,
				"value_r" : 830,
				"value" : 110,
				"feature" : "血糖仪",
				"attrValues" : [],
				"attrName" : "类别",
				"attrDegree" : 3819,
				"attrChange" : 100,
				"attrValue" : "血糖仪",
				"degree" : 2960,
				"change" : 100
			}, {
				"ratio" : 20,
				"value_r" : 841.5,
				"value" : 10,
				"feature" : "试纸",
				"attrValues" : [],
				"attrName" : "类别",
				"attrDegree" : 3819,
				"attrChange" : 100,
				"attrValue" : "试纸",
				"degree" : 829,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 830,
				"value" : 110,
				"feature" : "三诺",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "三诺",
				"degree" : 574,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 630,
				"value" : 310,
				"feature" : "罗氏",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "罗氏",
				"degree" : 555,
				"change" : 100
			}, {
				"ratio" : 20,
				"value_r" : 671.5,
				"value" : 210,
				"feature" : "强生",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "强生",
				"degree" : 134,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 630,
				"value" : 310,
				"feature" : "鱼跃",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "鱼跃",
				"degree" : 124,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 671.5,
				"value" : 210,
				"feature" : "欧姆龙",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "欧姆龙",
				"degree" : 114,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 430,
				"value" : 510,
				"feature" : "罗康全",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "罗康全",
				"degree" : 66,
				"change" : 100
			}, {
				"ratio" : 20,
				"value_r" : 501.5,
				"value" : 410,
				"feature" : "ROCHE",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "ROCHE",
				"degree" : 56,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 430,
				"value" : 510,
				"feature" : "怡成",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "怡成",
				"degree" : 44,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 501.5,
				"value" : 410,
				"feature" : "会好",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "会好",
				"degree" : 42,
				"change" : 100
			}, {
				"ratio" : 380,
				"value_r" : 430,
				"value" : 510,
				"feature" : "艾科",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "艾科",
				"degree" : 34,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 230,
				"value" : 710,
				"feature" : "雅培",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "雅培",
				"degree" : 33,
				"change" : 100
			}, {
				"ratio" : 20,
				"value_r" : 331.5,
				"value" : 610,
				"feature" : "采血针",
				"attrValues" : [],
				"attrName" : "类别",
				"attrDegree" : 3819,
				"attrChange" : 100,
				"attrValue" : "采血针",
				"degree" : 30,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 230,
				"value" : 710,
				"feature" : "拜耳",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "拜耳",
				"degree" : 23,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 331.5,
				"value" : 610,
				"feature" : "九安",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "九安",
				"degree" : 21,
				"change" : 100
			}, {
				"ratio" : 380,
				"value_r" : 230,
				"value" : 710,
				"feature" : "OMRON",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "OMRON",
				"degree" : 14,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 331.5,
				"value" : 610,
				"feature" : "美国会好",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "美国会好",
				"degree" : 12,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 30,
				"value" : 910,
				"feature" : "美迪信",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "美迪信",
				"degree" : 12,
				"change" : 100
			}, {
				"ratio" : 20,
				"value_r" : 161.5,
				"value" : 810,
				"feature" : "进口",
				"attrValues" : [],
				"attrName" : "产地",
				"attrDegree" : 12,
				"attrChange" : 100,
				"attrValue" : "进口",
				"degree" : 11,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 30,
				"value" : 910,
				"feature" : "测利得",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "测利得",
				"degree" : 9,
				"change" : 100
			}, {
				"ratio" : 140,
				"value_r" : 161.5,
				"value" : 810,
				"feature" : "瑞迪恩",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "瑞迪恩",
				"degree" : 8,
				"change" : 100
			}, {
				"ratio" : 380,
				"value_r" : 30,
				"value" : 910,
				"feature" : "BAYER",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "BAYER",
				"degree" : 7,
				"change" : 100
			}, {
				"ratio" : 260,
				"value_r" : 161.5,
				"value" : 810,
				"feature" : "AIKE",
				"attrValues" : [],
				"attrName" : "品牌",
				"attrDegree" : 1895,
				"attrChange" : 100,
				"attrValue" : "AIKE",
				"degree" : 4,
				"change" : 100
			}, {
				"ratio" : 500,
				"value_r" : 30,
				"value" : 910,
				"feature" : "虹吸式",
				"attrValues" : [],
				"attrName" : "采血方式",
				"attrDegree" : 4,
				"attrChange" : 100,
				"attrValue" : "虹吸式",
				"degree" : 4,
				"change" : 100
			}]

};
(function($) {
	var methods = {
		init : function(options) {
			var scope=this;
			// rapher
			var attrs = Raphael._availableAttrs;
			attrs.font = '12px "Arial", "Microsoft Yahei"';
			attrs["font-size"] = "12";
			if (!Raphael.svg)
				attrs.font = '12px "Microsoft Yahei"', attrs["font-size"] = "12";
			this.opts = options;
			this.sets = {
				stsTitl : {},
				stsBgs : {},
				stsTags : {},
				stsValv : {},
				stsPoly : {},
				stsCirc : {},
				stsText : {},
				stsHove : {},
				stsLayer : {}
			};
			this.OPTS = {
				padds : {
					title : 10,
					left : 10,
					right : 20,
					bottom : 20,
					maxR : 9,
					bgLbar : 38,
					bgCright : 15,
					tagHig : 0
				}
			};
			this.paper = Raphael(options.divID);
			this.topN = options.topN || 4;
			this.opts.padds = this.sCopy(this.padds || {}, this.OPTS.padds);
			this.paper.gsid = this.gsid();
			return methods;
		},
		sCopy : function(a, c) {
			for (var d in c)
				d in a || (a[d] = c[d]);
			return a;
		},
		getColor : function(a) {
			var b = ["#6e87d7", "#11c897", "#fa7256", "#b172c5", "#f367a7"],
			c = b.length;
			return b[(a || 0) % c];
		},
		each : function() {
			$.each.apply(this, arguments);
		},
		gsid : function(a) {
			var c = 0;
			a += "_gsid_";
			return function(d) {
				var e = d ? d.id || "" : "";
				if (e === "")
					e = a + c++, d && (d.id = e);
				return e;
			};
		}("auto"),
		drawBg : function() {
			function n(h) {
				var o = l.slice();
				o[13] = o[9] += h;
				o[11] += h;
				return o;
			}
			var j = this.paper, i = $("#" + this.opts.divID);
			j = j.setSize(i.width(), i.height());
			i = this.opts.padds;
			var p = i.width = j.width, x = i.height = j.height, u = i.bgTop = i.title
					+ i.tagHig, y = i.bgWidth = p - i.left - i.right, z = i.bgHeight = x
					- u - i.bottom, C = i.bgRight = p - i.right;
			y = i.bgCwidth = y - i.bgCright - i.bgLbar;
			var c = i.bgBottom = x - i.bottom, a = i.bgMiddle = u + z / 2, d = this.sets, b = d.stsBgs;
			d = d.stsLayer;
			for (var e = b.bgCircs || (b.bgCircs = []), g = ["#dbdfeb",
					"#e4e7f2", "#eaecf5", "#f0f2f8", "#f3f5f9", "#f7f8fa"], f = g.length; f--;)
				(e[f] || (e[f] = j.circle(i.left + i.bgLbar, a, 0).attr({
							stroke : "#ffffff",
							"stroke-weight" : 1
						}))).attr({
							r : y * (f + 1) / 6,
							fill : g[f]
						});
			(b.axisX || (b.axisX = j.path().attr({
						stroke : "#ffffff",
						"stroke-width" : 1
					}))).attr({
						path : ["M", 0, a, p, a]
					});
			p = ["M", -5, -5, "L", -5, 5 + x, 5 + p, 5 + x, 5 + p, c, i.left,
					c, i.left, u, 5 + p, u, 5 + p, -5, -5, -5];
			(b.bgMask || (b.bgMask = j.path().attr({
						fill : "#ffffff",
						stroke : "none"
					}))).attr({
						path : p
					});
			(b.lBar || (b.lBar = j.rect().attr({
						fill : "#f7f8fa",
						stroke : "#dbdfeb",
						"stroke-width" : "0.9"
					}))).attr({
						x : i.left,
						y : u + 1,
						width : i.bgLbar,
						height : z - 2
					});
			var l = ["M", 17, 0, "L", 34, 13, 29, 13, 29, 23, 17, 13, 5, 23, 5,
					13, 0, 13, 17, 0];
			(b.arrUp || (b.arrUp = j.path(n(40)).attr({
						stroke : "none",
						fill : "#ffb049"
					}))).transform("t" + (i.left + 2) + "," + (u + 2));
			(b.arrUp_ex || (b.arrUp_ex = j.path(["M", 0, 0, "L", 24, 0, 24, 24,
					0, 24, 0, 0]).attr({
						stroke : "none",
						fill : "90-#ffffff-#ffb049"
					}))).transform("t" + (i.left + 7) + "," + (u + 45));
			(b.arrDown || (b.arrDown = j.path(n(40)).attr({
						stroke : "none",
						fill : "#606e82"
					}))).transform("t" + (i.left + (Raphael.svg ? 2 : -1))
					+ "," + (c - 40 - 26) + "r180");
			(b.arrDown_ex || (b.arrDown_ex = j.path(["M", 0, 0, "L", 24, 0, 24,
					24, 0, 24, 0, 0]).attr({
						stroke : "none",
						fill : "90-#606e82-#ffffff"
					}))).transform("t" + (i.left + 7) + "," + (c - 40 - 30));
			(b.arrRight || (b.arrRight = j.path(n(66)).attr({
						stroke : "none",
						fill : "#999999"
					}))).transform("t" + (C - 66 - 13) + "," + (a - 33 - 12)
					+ "r90");
			(b.arrRight_ex || (b.arrRight_ex = j.path(["M", 0, 0, "L", 24, 0,
					24, 24, 0, 24, 0, 0]).attr({
						stroke : "none",
						fill : "0-#ffffff-#999999"
					}))).transform("t" + (C - 66 - 45) + "," + (a - 12.5));
			(b.txtUp || (b.txtUp = j.text(0, 0, "上升".split("").join("\n"))
					.attr({
								"text-anchor" : "start",
								fill : "#ffffff"
							}))).attr({
						x : i.left + 13,
						y : u + 32
					});
			(b.txtUp2 || (b.txtUp2 = j
					.text(0, 0, "环比需求变化".split("").join("\n")).attr({
								"text-anchor" : "start",
								fill : "#999999"
							}))).attr({
						x : i.left + 13,
						y : u + 110
					});
			(b.txtDown2 || (b.txtDown2 = j.text(0, 0,
					"环比需求变化".split("").join("\n")).attr({
						"text-anchor" : "start",
						fill : "#999999"
					}))).attr({
						x : i.left + 13,
						y : c - 110
					});
			(b.txtDown || (b.txtDown = j.text(0, 0, "下降".split("").join("\n"))
					.attr({
								"text-anchor" : "start",
								fill : "#ffffff"
							}))).attr({
						x : i.left + 13,
						y : c - 32
					});
			(b.txtRight || (b.txtRight = j.text(0, 0, "需求度变弱").attr({
						"text-anchor" : "start",
						fill : "#ffffff"
					}))).attr({
						x : C - 66 - 26,
						y : a - 1
					});
			(b.circWord || (b.circWord = j
					.circle(i.left + i.bgLbar + 30, a, 55))).attr({
						fill : this.getColor(0),
						stroke : "#ffffff",
						"stroke-width" : 6
					});
			(b.textWord || (b.textWord = j.text(i.left + i.bgLbar + 30, a, "")))
					.attr({
								fill : "#ffffff",
								"font-size" : "14px"
							});
			(b.textNodata || (b.textNodata = j.text(0, 0, "无数据").hide()))
					.attr(this.sCopy({
								x : y / 2,
								y : a
							}, "无数据"));
			if (!d.bg)
				d.bg = j.path();
			return this;
		},
		/**
		 * 设置数据
		 */
		setData : function(n) {
			var maxX = 0;
			var maxY = 0;
			n.items = [];
			$.each(n.features, function(j, i) {
						n.items.push({
									text : i.feature,
									value_r : i.value_r / 1E3,
									xy : [i.value / 1E3, i.ratio / 1E3],
									attrValues : i.attrValues,
									degree : i.degree,
									attrValue : i.attrValue,
									change : i.change,
									attrName : i.attrName,
									attrDegree : i.attrDegree,
									attrChange : i.attrChange
								});
					});
			this.datas = n;
			return this;
		},
		/**
		 * 画数据点
		 */
		drawCircle : function(n) {
			// 定义scope
			var scope = this;
			var j = this.opts.padds, i = j.bgHeight / 2, p = Math
					.sqrt(j.bgCwidth * j.bgCwidth - i * i), x = j.bgCwidth / 6, u = this.paper, y = this.sets, z = y.stsCirc, C = z[""]
					|| (z[""] = []);
			z = y.stsText;
			var c = z[""] || (z[""] = []);
			z = y.stsLayer;
			if (n) {
				y.stsBgs.circWord.attr({
							fill : n
						});
				y.stsBgs.textWord.attr({
							text : this.text_n(this.datas.key)
						});
			}
			if (!this.datas)
				return this;
			$.each(this.datas.items, function(a, d) {
						// 正数增长 负数下降
						var attrText = " 环比增长:";
						var attrValueText = " 环比增长：";
						if (d.attrChange < 0) {
							attrText = " 环比下降：";
							d.attrChange = -d.attrChange;
						}
						if (d.change < 0) {
							attrValueText = " 环比下降：";
							d.change = -d.change;
						}
						var b = d.xy.slice(), e = 0, g = Math
								.floor((1 - d.value_r) * 5);
						g = Math.floor(d.xy[0] * 5);
						if (g > 4)
							g = 4;
						e = j.maxR - g * 1.5;
						b[0] *= p - j.maxR;
						b[1] *= i - j.maxR;
						if (g == 4)
							b[1] = d.xy[1] * (i - j.maxR - 20)
									+ (d.xy[1] >= 0 ? 20 : -20);
						var f = Math.sqrt(x * (g + 2) * x * (g + 2) - b[1]
								* b[1]);
						f -= e;
						var l = Math.abs(b[1]) < x * (g + 1) ? Math.sqrt(x
								* (g + 1) * x * (g + 1) - b[1] * b[1]) : 0;
						l += e;
						b[0] = (f - l) * (d.xy[0] - 0.2 * g) / 0.2 + l;
						b[0] += j.left + j.bgLbar;
						b[1] = j.bgMiddle - b[1];
						(C[a] || (C[a] = u.circle().attr({
									stroke : "#ffffff"
								}).data("posInfo", {
									text : d.text,
									attrValues : d.attrValues,
									"cx" : b[0],
									"cy" : b[1]
								}).hover(function() {
							this.attr("r", this.data("cr") * 1.4);
							var str = scope.createPopTable(
									this.data("posInfo").text, this
											.data("posInfo").attrValues);
							$("#popover div").remove();
							$("#popover").append(str);
							$("#popover div").css({
										display : "block",
										left : this.data("posInfo").cx,
										top : this.data("posInfo").cy,
										"z-index" : "100000000"
									});
						}, function() {
							this.attr("r", this.data("cr"));
							$("#popover div").css({
										display : "none"
									});
						}))).attr({
							cx : b[0],
							cy : b[1],
							r : e,
							fill : d.xy[1] >= 0 ? "#ffb049" : "#606e82",
							"stroke-width" : 2,
							// title : d.text
							title : '"属性" ' + d.attrName + ' 搜索次数：'
									+ d.attrDegree + attrText + d.attrChange
									+ '%\r"属性值 "' + d.attrValue + '搜索次数：'
									+ d.degree + attrValueText + d.change + "%"
						}).data("cr", e).show();

						f = b[0] + e + 3;
						b = b[1];
						if (b + 8 > j.bgBottom)
							b = j.bgBottom - 8;
						else if (b - 8 < j.bgTop)
							b = j.bgTop + 8;
						(c[a] || (c[a] = u.text().attr({
									"text-anchor" : "start"
								}))).attr({
									x : f,
									y : b,
									text : d.text,
									fill : g > 2 ? "#999999" : "#333333",
									title : d.text

								}).show();
						if (g > 3) {
							d = c[a].getBBox().width;
							if (f + d > j.bgRight - j.bgCright) {
								f -= d + e * 2 + 6;
								c[a].attr({
											x : f
										});
							}
						}
					});
			for (n = this.datas.items.length; n < C.length; n++) {
				C[n].hide();
				c[n].hide();
			}
			y.stsBgs.textNodata[this.datas.items.length ? "hide" : "show"]();
			if (!z.circ)
				z.circ = u.path();
			return this;
		},
		/**
		 * 
		 */
		text_n : function(n) {
			for (var j = [], i = n.length, p = 0; p < i - 1; p++)
				if (n.charCodeAt(p) < 256 && n.charCodeAt(p + 1) < 256) {
					j.push(n.slice(p, p + 2));
					p++;
				} else
					j.push(n.slice(p, p + 1));
			p < i && j.push(n.slice(-1));
			if (j.length > 12) {
				j.length = 11;
				j.push("aaa");
			}
			i = j.length;
			i > 6 && j.splice(Math.floor(i / 2), 0, "\n");
			return j.join("");
		},
		/**
		 * 
		 */
		createPopTable : function(attrName, attrValues) {
			// tyle=\"position:absolute;background-color:white;border-radius:
			// 6px;border: 1px solid rgba(0, 0, 0, 0.2);\"
			// 如果没有属性值，不弹出窗口
			if (attrValues.length == 0) {
				return "";
			}
			var tableStr = "<div  style=\"position:absolute;background-color:white;border-radius: 6px;border: 1px solid rgba(0, 0, 0, 0.2);\"class=\" table-responsive\">"
					+ "<table class=\"table table-bordered table-hover table-striped\">"
					+ "<thead>"
					+ "<tr style=\"width:400px\">"
					+ "<th>"
					+ attrName
					+ "</th>"
					+ "<th>搜索次数</th>"
					+ "<th>搜索次数环比变化</th>" + "</thead>" + "<tbody>";

			for (var i = 0; i < attrValues.length; i++) {
				var child = attrValues[i];
				tableStr += "<tr>";
				tableStr += "<td>" + child.attrValue + "</td>";
				tableStr += "<td>" + child.degree + "</td>";
				tableStr += "<td>" + child.change + "</td>";
				tableStr += "</tr>";
			}
			tableStr += "</tbody>";
			tableStr += "</table>";
			tableStr += "</div>";
			// alert(tableStr);

			return tableStr;

		}

	};

	$.fn.demandGraph = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(
							arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(methods, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.demandGraph');
		}

	};

})(jQuery);