function tipObj(left,top,pLeft,width,show,state,next,pre,nText,pText,text){
	this.left = left;
	this.top = top;
	this.pLeft = pLeft;
	this.show = show;
	this.state = state;
	this.next = next;
	this.pre = pre;
	this.nText = nText;
	this.pText = pText;
	this.text = text;
	this.width = width;
};//创建tip对象

tipObj.prototype.get = function(){
	var left = this.left;
	var top = this.top;
	var pLeft = this.pLeft;
	var width = this.width;
	var show = this.show;
	var state = this.state;
	var next = this.next;
	var pre = this.pre;
	var nText = this.nText;
	var pText = this.pText;
	var text = this.text;
	var tipArray = [left,top,pLeft,width,show,state,next,pre,nText,pText,text];
	return tipArray;
};//创建tip方法

function tip(funTip){
	var tip = funTip.get();
	top.$("#tip").animate({
		left:tip[0],
		top:tip[1]
	});
	top.$("#tipPic").animate({
		left:tip[2]
	});
	top.$("#tipText").css("width",tip[3]);
	if($("#mask").attr("style") == "display: inline;"){
		if(tip[4] == 1){
			top.$("#tip").show();
		}else{
			top.$("#tip").hide();
		};
	}else{
		if(tip[4] == 1){
			top.$("#tip").hide();
		}else{
			top.$("#tip").show();
		};
	}//如果引导模式，则显示tip，如果自由模式，则不显示tip
	if(tip[5] == 1){
		top.$("#tip").attr("class","yes");
	}else if(tip[5] == 0){
		top.$("#tip").attr("class","no");
	}else if(tip[5] == 2){
		top.$("#tip").attr("class","ok");
	}else if(tip[5] == 3){
		top.$("#tip").attr("class","well");
	};
	if(tip[6] == 1){
		top.$("#nextStep").show();
		top.$("#nextStep").text(tip[8]);
	}else{
		top.$("#nextStep").hide();
	};
	if(tip[7] == 1){
		top.$("#previousStep").show();
		top.$("#previousStep").text(tip[9]);
	}else{
		top.$("#previousStep").hide();
	};
	top.$("#tipText").text(tip[10]);
	top.$("#nextStep").unbind("click");
};//定义一次tip状态

$(document).ready(function() {//自由进入后需要加载整个页面笼罩、关闭按钮、第一步位置
	$("#progressbar").on("click",function(e){
		$("#progressbar").removeClass("zIndex2");
	});//new
	$("#progressbar").on("click","#1",function(e){
		$("#tip").attr("class","yes");//加载第一步位置状态
		step1();
		$(".mask").contents().find("#mask").show();//显示关闭按钮
		$("#cost_method2").removeClass("inputFocus");
		$("#1_1").removeClass("inputFocus");
		$("#tipPic").show();
	});
	$("#progressbar").on("click","#2",function(e){
		$("#tip").attr("class","yes");
		$("#tip").attr("next","success");
		// step2();
		$("#partnersFrame").attr("src","/static/initialize/partner_rests.html");
		top.$("#tipPic").show();
	});
	$("#progressbar").on("click","#3",function(e){
		$("#tip").attr("class","yes");
		$("#tip").attr("next","success");
		// step3();
		$("#storesFrame").attr("src","/static/initialize/stores.html");
		top.$("#tipPic").show();
	});
	$("#progressbar").on("click","#4",function(e){
		$("#tip").attr("class","yes");
		$("#tip").attr("next","success");
		// step4();
		$("#productsFrame").attr("src","/static/initialize/products.html");
		top.$("#tipPic").show();
	});
	$("#progressbar").on("click","#5",function(e){
		$("#tip").attr("class","yes");
		$("#tip").attr("next","success");
		// step5();
		$("#banksFrame").attr("src","/static/initialize/bank_rests.html");
		top.$("#tipPic").show();
	});
	$(".mask").css("display","inline");
	$(".closeMask").fadeIn(1000);
	$(".submit").on("click",function(){
		var funTip = new tipObj("464","420","10","254px",1,1,0,0,"下一步","","启用帐套完成初始化，并且不能再次修改”。");
		tip(funTip);
	});
	$("#no_set_of_book_settings").on("click",function(){
		$("#tip").hide();
	});
	$(".closeMask").on("click",function(){
		$(".closeMask").fadeOut(500);
		$("#tipPic").show();
		$("#progressbar").addClass("zIndex2");
		// $(".mask").hide();//new
		// $("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find("#mask").hide();//new
		$("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find(".Cancel").show();//显示取消
		$("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find(".close_m_box").show();//显示关闭按钮
		$("#companyName").removeClass("inputFocus");
		$("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find("#small_btn_create,#dx1,#dx0").removeClass("inputFocus");//清除焦点class
		$("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find(".right,.c9_left").removeClass("zIndex");//清除焦点class
		$("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find("#tree_2_a,#tree_3_a").removeClass("inputFocus2");//清除焦点class
		var funTip = new tipObj("522","36","20","254px",0,1,1,0,"好的","","若继续向导，可以按最上方的 1 — 5 导航分别进入。");//new
		tip(funTip);
		// $("#tipPic").hide(); new
		$("#nextStep").on("click",function(e) {
			$("#tip").fadeOut(500);
			$(".mask").hide();
		    $("#partnersFrame,#storesFrame,#productsFrame,#banksFrame").contents().find("#mask").hide();//new
		    $("#progressbar").removeClass("zIndex2");//new
		});
	});
});
function step1(){
	$(".mask").show();
	top.$(".mask").show();
	top.$(".closeMask").fadeIn();
	var funTip = new tipObj("20","180","140","254px",0,1,1,0,"已输入","","在这儿输入您公司的名称。");
	tip(funTip);
	$("#companyName").addClass("inputFocus");
	$("#companyName").focus();//初始状态
	$("#nextStep").on("click",function(e) {
		if($("#companyName").val() != ""){
			var funTip = new tipObj("980","180","10","254px",0,1,1,0,"嗯，我知道了","","该方法是指允许同一货品可在不同仓库存在不同成本，暂时不支持其他模式。");
			tip(funTip);
			$("#cost_method2").focus();
			$("#cost_method2").addClass("inputFocus");
			$("#companyName").removeClass("inputFocus");
		}else{
			alert("是不是忘了输入公司名称了？");
		}
		$("#nextStep").on("click",function(e) {
			var funTip = new tipObj("980","180","140","254px",0,1,0,0,"","","点击保存“公司名称”和“成本核算方式”并进行“商业伙伴”初始化吧。");
			tip(funTip);
			$("#1_1").focus();
			$("#1_1").addClass("inputFocus");
			$("#cost_method2").removeClass("inputFocus");
		});
	});
	$("#1_1").on("click",function(){
		var funTip = new tipObj("510","294","234","400px",0,1,1,0,"好的","","这是第二步“商业伙伴初始化，您需要录入商业伙伴的资料和期初应收或期初应付。注：客户和供应商都在这里录入，初始化完成后仍可以在基础资料里添加哟。");
		tip(funTip);
		$("#tipText").css("width","350px");
		$("#tipPic").hide();
	});
};
function step2(){
	top.$("#tipText").css("height","60px");
	if(top.$("#tip").attr("class") == "yes"){
		$(".mask").show();
		top.$(".mask").show();
		top.$(".closeMask").fadeIn();
		top.$("#nextStep").on("click",function(){
			top.$("#tipPic").show();
			var funTip = new tipObj("20","500","36","400px",1,1,0,1,"","开始添加地区","该区域用来添加商业伙伴的所属地区，例如：A公司属于浙江杭州，您可以在这里添加地区“浙江”，在“浙江”的下一级添加地区“杭州”，之后在右侧添加A公司的信息。");
			tip(funTip);
			$(".c9_left").addClass("zIndex");
		});
		if(top.$("#tip").attr("next") == "success"){
			top.$("#tipPic").show();
			var funTip = new tipObj("20","500","36","400px",1,1,0,1,"","开始添加地区","该区域用来添加商业伙伴的所属地区，例如：A公司属于浙江杭州，您可以在这里添加地区“浙江”，在“浙江”的下一级添加地区“杭州”，之后在右侧添加A公司的信息。");
			tip(funTip);
			$(".c9_left").addClass("zIndex");
		};
		top.$("#tip").attr("next","faile");
		top.$("#previousStep").on("click",function(e) {
			var funTip = new tipObj("20","220","36","254px",1,1,0,0,"","","建立您的第一个商业伙伴所属地区。");
			tip(funTip);
			$("#small_btn_create").addClass("inputFocus");
			$(".c9_left").removeClass("zIndex");
			top.$("#previousStep").unbind("click");
		});
		$("#small_btn_create").on("click",function(e){
			if($("#mask").attr("style") == "display: inline;"){
				$(".Cancel").hide();
				$(".close_m_box").hide();
				$("#tree_Save").css({"marginTop":"15px"});
			}else{
				$(".Cancel").show();
				$(".close_m_box").show();
				$("#tree_Save").css({"marginTop":"15px"});
			};
			var text = top.$("#tipText").text();
			var funTip = new tipObj("347","330","234","254px",1,1,0,0,"","","输入您的第一个商业伙伴所属地区,并按确定。");
			tip(funTip);
			$("#small_btn_create").removeClass("inputFocus");
			$("#name").addClass("inputFocus");
			$("#name").css({"border":"#f90 2px solid","outline":"none"});
			$("#tree_Save").on("click",function(e){
				if($("#name").val() == ""){
					alert("是不是忘了输入地区名称了？");
					return(false);
				}else{
					var funTip = new tipObj("20","473","36","254px",1,1,1,0,"查看商业伙伴区域","","您所添加的地区会在这儿显示，开始添加商业伙伴吧。");
					tip(funTip);
					$(".c9_left").addClass("zIndex");
				};
				top.$("#nextStep").on("click",function(e) {
					var funTip = new tipObj("454","488","94","254px",1,1,1,0,"开始添加商业伙伴","","这个区域是您商业伙伴的信息区域，快来添加您的商业伙伴信息吧。");
					tip(funTip);
					$(".right").addClass("zIndex");
					$(".c9_left").removeClass("zIndex");
					top.$("#nextStep").on("click",function(e) {
						var funTip = new tipObj("2","306","80","254px",1,1,0,0,"","","双击刚创建的地区，再添加商业伙伴即可直接添加该区域下的商业伙伴哦。");
						tip(funTip);
						$(".right").removeClass("zIndex");
						$("#tree_3_a").addClass("inputFocus2");
						$("#tree_3_a").on("dblclick",function(e){
							var funTip = new tipObj("954","168","94","254px",1,1,0,0,"","","点我可逐个添加商业伙伴。");
							tip(funTip);
							$("#dx1").addClass("inputFocus");
							$("#tree_3_a").removeClass("inputFocus2");
						});
					});
				});
			});		
		});
		$("#dx1").on("click",function(e) {
			var funTip = new tipObj("786","490","94","254px",1,1,1,0,"我已经添加完成","","完成信息后确认即可创建完成，选中继续添加可连续添加商业伙伴。");
			tip(funTip);
			top.$("#nextStep").on("click",function(e) {
				var funTip = new tipObj("954","168","36","254px",1,1,1,0,"嗯，我知道了","","如果您的商业伙伴信息太多，可以尝试批量导入。下载模板前请仔细查看系统说明。");
				tip(funTip);
				$("#box_div").hide();
				$("#dx0").addClass("inputFocus");
				$("#dx1").removeClass("inputFocus");
				// dx0();
				top.$("#nextStep").on("click",function(e) {
					var funTip = new tipObj("132","536","50","254px",1,1,1,0,"嗯，我知道了","","接下来您可以自由操作，完成后按下一步即可进入“仓库”添加界面。");
					tip(funTip);
					$("#dx0").removeClass("inputFocus");
			    	top.$("#tipText").css("height","42px");
			    	$(".Cancel").show();
	    			$(".close_m_box").show();
	    			top.$("#nextStep").on("click",function(e) {
	    				top.$(".closeMask").click();
	    			})
				});
			});
		});
		top.$("#2_1").on("click",function(){
			var funTip = new tipObj("522","294","234","254px",1,1,1,0,"好的","","您的商业伙伴初始化已经完成，进入仓库初始化。");
			tip(funTip);
			top.$("#tipPic").hide();
			top.$("#tip").show();//导入过后，解决下一步会有引导文字
		});
		top.$("#2_0").on("click",function(){
			top.$("#1").click();
		});
	}else if(top.$("#tip").attr("class") == "ok"){//导入成功或者失败返回时，页面不遮罩
		$(".mask").hide();
		top.$(".mask").hide();
		top.$(".closeMask").fadeOut();
	};
	// else if(top.$("#tip").attr("class") == "no"){//导入失败返回
	// 	var funTip = new tipObj("954","168","36",1,0,0,0,"否，我要依次导入","","点击批量导入商业伙伴。下载模板前请仔细查看系统说明。");
	// 	tip(funTip);
	// 	$("#dx0").addClass("inputFocus");
	// 	dx0();
	// 	// top.$("#nextStep").on("click",function(e) {
	// 	// 	var funTip = new tipObj("954","168","94",1,1,0,0,"否，我要依次导入","","点我试试。");
	// 	// 	tip(funTip);
	// 	// 	$("#dx0").removeClass("inputFocus");
	// 	// 	$("#dx1").addClass("inputFocus");
	// 	// 	$("#tree_Save").css({"marginTop":"-24px","marginRight":"26px"});
	// 	// 	$(".Cancel").show();
	// 	// });
	// };
};
// function dx0(){
// 	$("#dx0").on("click",function(e){
// 		var funTip = new tipObj("366","444","36",1,1,0,0,"否，下一步","","点击下载商业伙伴模版。下载模板前请仔细查看系统说明。");
// 		tip(funTip);
// 		$("#dx0").removeClass("inputFocus");
// 		$(".partner_rests_box #uploadExcel").hide();
// 	});
// 	$(".partner_rests_box #downloadExcel").click(function(e){
// 		top.$("#tipText").text("编辑完模版后导入数据。");
//     	$(".partner_rests_box #downloadExcel").hide();
//     	$(".partner_rests_box #uploadExcel").show();
// 	});
// 	$(".partner_rests_box #uploadExcel").click(function(e){
// 		var funTip = new tipObj("569","216","36",1,1,0,0,"否，下一步","","选择文件后，确定上传。");
// 		tip(funTip);
// 	});
// };
function step3(){
	$(".mask").show();
	top.$(".mask").show();
	top.$(".closeMask").fadeIn();
	top.$("#tipText").css("height","60px");
	// top.$("#tip").css("width","236px");
	top.$("#nextStep").on("click",function(){
		top.$("#tipPic").show();
		var funTip = new tipObj("1000","514","136","254px",1,1,0,0,"","","点击添加您的第一个“仓库”。");
 		tip(funTip);
 		$("#dx1").addClass("inputFocus");
	});
	if(top.$("#tip").attr("next") == "success"){
		top.$("#tipPic").show();
		var funTip = new tipObj("1000","514","136","254px",1,1,0,0,"","","点击添加您的第一个“仓库”。");
 		tip(funTip);
 		$("#dx1").addClass("inputFocus");
	};
	top.$("#tip").attr("next","faile");
 	if($("#mask").attr("style") == "display: inline;"){
		$(".Cancel").hide();
		$(".close_m_box").hide();
		$("#tree_Save").css({"marginTop":"15px"});
	}else{
		$(".Cancel").show();
		$(".close_m_box").show();
		$("#tree_Save").css({"marginTop":"15px"});
	};
 	$("#dx1").on("click",function(e){
 		var funTip = new tipObj("1000","490","136","254px",1,1,1,0,"我已经添加完成","","完成信息后确认即可创建完成，选中继续添加可连续添加仓库。");
 		tip(funTip);
 		top.$("#nextStep").on("click",function(e) {
 			$("#box_div").hide();
	 		var funTip = new tipObj("132","536","50","270px",1,1,1,0,"嗯，我知道了","","接下来您可以自由操作，完成后按下一步即可进入“商品”添加界面。");
			tip(funTip);
			$("#dx1").removeClass("inputFocus");
	    	top.$("#tipText").css("height","42px");
	    	$(".Cancel").show();
			$(".close_m_box").show();
			top.$("#nextStep").on("click",function(e) {
				top.$(".closeMask").click();
			});
 		});
 	});
 	top.$("#3_1").on("click",function(){
		var funTip = new tipObj("432","294","234","500px",0,1,1,0,"好的","","这是第四步“商品初始化”，请您先添加商品的具体资料，再添加商品的库存数量和库存成本。当然，初始化完成之后您也可以通过“进货”的方式完成商品库存数量和成本的添加。");
		tip(funTip);
		top.$("#tipPic").hide();
		top.$("#tip").show();
	});
	top.$("#3_0").on("click",function(){
		top.$("#2").click();
	});
};
function step4(){
	top.$("#tipText").css("height","60px");
	if(top.$("#tip").attr("class") == "yes"){
		$(".mask").show();
		top.$(".mask").show();
		top.$(".closeMask").fadeIn();
		top.$("#nextStep").on("click",function(){
			top.$("#tipPic").show();
			var funTip = new tipObj("20","500","36","254px",1,1,0,1,"","开始添加商品类型","这个区域是您商品类型的显示区域，快来添加您的商品类型吧。");
			tip(funTip);
			$(".c9_left").addClass("zIndex");
		});
		if(top.$("#tip").attr("next") == "success"){
			top.$("#tipPic").show();
			var funTip = new tipObj("20","500","36","254px",1,1,0,1,"","开始添加商品类型","这个区域是您商品类型的显示区域，快来添加您的商品类型吧。");
			tip(funTip);
			$(".c9_left").addClass("zIndex");
		};
		top.$("#tip").attr("next","faile");
		top.$("#previousStep").on("click",function(e) {
			var funTip = new tipObj("20","220","36","254px",1,1,0,0,"","","建立您的第一个商品类型。");
			tip(funTip);
			$("#small_btn_create").addClass("inputFocus");
			$(".c9_left").removeClass("zIndex");
			top.$("#previousStep").unbind("click");
		});
		$("#small_btn_create").on("click",function(e){
			if($("#mask").attr("style") == "display: inline;"){
				$(".Cancel").hide();
				$(".close_m_box").hide();
				$("#tree_Save").css({"marginTop":"15px"});
			}else{
				$(".Cancel").show();
				$(".close_m_box").show();
				$("#tree_Save").css({"marginTop":"15px"});
			};
			var text = top.$("#tipText").text();
			var funTip = new tipObj("347","330","234","254px",1,1,0,0,"","","输入您的第一个商品类型,并按确定。");
			tip(funTip);
			$("#small_btn_create").removeClass("inputFocus");
			$("#name").addClass("inputFocus");
			$("#name").css({"border":"#f90 2px solid","outline":"none"});
			$("#tree_Save").on("click",function(e){
				if($("#name").val() == ""){
					alert("是不是忘了输入类型名称了？");
					return(false);
				}else{
					var funTip = new tipObj("20","473","36","254px",1,1,1,0,"查看商品资料区域","","您所添加的商品类型会在这儿显示，开始添加商品资料吧。");
					tip(funTip);
					$(".c9_left").addClass("zIndex");
				};
				top.$("#nextStep").on("click",function(e) {
					var funTip = new tipObj("454","488","94","254px",1,1,1,0,"开始添加商品资料","","这个区域是您商品资料的显示区域，快来添加您的商品资料吧。");
					tip(funTip);
					$(".right").addClass("zIndex");
					$(".c9_left").removeClass("zIndex");
					top.$("#nextStep").on("click",function(e) {
						var funTip = new tipObj("2","286","80","254px",1,1,0,0,"","","双击刚创建的类型，再添加商品资料即可直接添加该类型下的商品资料哦。");
						tip(funTip);
						$(".right").removeClass("zIndex");
						$("#tree_2_a").addClass("inputFocus2");
						$("#tree_2_a").on("dblclick",function(e){
							var funTip = new tipObj("974","168","94","254px",1,1,0,0,"","","点我可逐个添加商品资料。");
							tip(funTip);
							$("#dx1").addClass("inputFocus");
							$("#tree_2_a").removeClass("inputFocus2");
						});
					});
				});
			});		
		});
		$("#dx1").on("click",function(e) {
			var funTip = new tipObj("786","490","94","254px",1,1,1,0,"我已经添加完成","","完成信息后确认即可创建完成，选中继续添加可连续添加商品资料。");
			tip(funTip);
			top.$("#nextStep").on("click",function(e) {
				var funTip = new tipObj("762","168","36","254px",1,1,1,0,"嗯，我知道了","","如果您的商品资料太多，可以尝试批量导入。下载模板前请仔细查看系统说明。");
				tip(funTip);
				$("#box_div").hide();
				$("#dx0").addClass("inputFocus");
				$("#dx1").removeClass("inputFocus");
				// dx01();
				top.$("#nextStep").on("click",function(e) {
					var funTip = new tipObj("932","168","36","254px",1,1,1,0,"嗯，我知道了","","接下来为刚才添加的商品资料批量录入库存数量和成本。下载模板前请仔细查看系统说明。");
					tip(funTip);
					$("#dx0_0").addClass("inputFocus");
					$("#dx0").removeClass("inputFocus");
					// dx02();
					top.$("#nextStep").on("click",function(e) {
						var funTip = new tipObj("132","536","50","400px",1,1,1,0,"嗯，我知道了","","接下来您可以自由操作，完成后按下一步即可进入“银行账户”添加界面。");
						tip(funTip);
						$("#dx0_0").removeClass("inputFocus");
				    	top.$("#tipText").css("height","42px");
				    	$(".Cancel").show();
		    			$(".close_m_box").show();
		    			top.$("#nextStep").on("click",function(e) {
		    				top.$(".closeMask").click();
		    			});
					});
				});
			});
		});
		top.$("#4_1").on("click",function(){
			var funTip = new tipObj("522","294","234","254px",1,1,1,0,"好的","","您的商品资料初始化已经完成，进入银行账户初始化。");
			tip(funTip);
			top.$("#tipPic").hide();
			top.$("#tip").show();
		});
		top.$("#4_0").on("click",function(){
			top.$("#3").click();
		});
	}
	else if(top.$("#tip").attr("class") == "ok"){
		$(".mask").hide();
		top.$(".mask").hide();
		top.$(".closeMask").fadeOut();};
	// else if(top.$("#tip").attr("class") == "no"){
	// 	var funTip = new tipObj("762","168","36",1,0,0,0,"否，我要依次导入","","点击批量导入商品资料。下载模板前请仔细查看系统说明。");
	// 	tip(funTip);
	// 	$("#dx0").addClass("inputFocus");
		// dx01();
		// top.$("#nextStep").on("click",function(e) {
		// 	var funTip = new tipObj("954","168","94",1,1,0,0,"否，我要依次导入","","点我试试。");
		// 	tip(funTip);
		// 	$("#dx0").removeClass("inputFocus");
		// 	$("#dx1").addClass("inputFocus");
		// 	$("#tree_Save").css({"marginTop":"-24px","marginRight":"26px"});
		// 	$(".Cancel").show();
		// });
	// }else if(top.$("#tip").attr("class") == "well"){
	// 	var funTip = new tipObj("932","168","36",1,3,0,0,"否，下一步","","点击批量导入商品数量和成本。下载模板前请仔细查看系统说明。");
	// 	tip(funTip);
	// 	$("#dx0_0").addClass("inputFocus");
		// dx02();
	// };
};
// function dx01(){
// 	$("#dx0").on("click",function(e){
// 		var funTip = new tipObj("366","444","36",1,1,0,0,"否，下一步","","点击下载商品资料模版。下载模板前请仔细查看系统说明。");
// 		tip(funTip);
// 		$("#dx0").removeClass("inputFocus");
// 		$(".products_box #uploadExcel").hide();
// 	});
// 	$(".products_box #downloadExcel").click(function(e){
// 		top.$("#tipText").text("编辑完模版后导入数据。");
//     	$(".products_box #downloadExcel").hide();
//     	$(".products_box #uploadExcel").show();
// 	});
// 	$(".products_box #uploadExcel").click(function(e){
// 		var funTip = new tipObj("569","216","36",1,1,0,0,"否，下一步","","选择文件后，确定上传。");
// 		tip(funTip);
// 	});
// };
// function dx02(){
// 	$("#dx0_0").on("click",function(e){
// 		var funTip = new tipObj("366","444","36",1,1,0,0,"否，下一步","","点击下载商品数量和成本模版。下载模板前请仔细查看系统说明。");
// 		tip(funTip);
// 		$("#dx0_0").removeClass("inputFocus");
// 		$(".products_box2 #uploadExcel2").hide();
// 	});
// 	$(".products_box2 #downloadExcel2").click(function(e){
// 		top.$("#tipText").text("编辑完模版后导入数据。");
//     	$(".products_box2 #downloadExcel2").hide();
//     	$(".products_box2 #uploadExcel2").show();
// 	});
// 	$(".products_box2 #uploadExcel2").click(function(e){
// 		var funTip = new tipObj("569","216","36",1,1,0,0,"否，下一步","","选择文件后，确定上传。");
// 		tip(funTip);
// 	});
// };
function step5(){
	top.$("#tipText").css("height","60px");
	if(top.$("#tip").attr("class") == "yes"){
		$(".mask").show();
		top.$(".mask").show();
		top.$(".closeMask").fadeIn();
		top.$("#nextStep").on("click",function(){
			top.$("#tipPic").show();
			var funTip = new tipObj("1044","500","136","254px",1,1,0,0,"","","点击添加您的第一个“银行账户”。");
	 		tip(funTip);
	 		$("#dx1").addClass("inputFocus");
		});
		if(top.$("#tip").attr("next") == "success"){
			top.$("#tipPic").show();
			var funTip = new tipObj("1044","500","136","254px",1,1,0,0,"","","点击添加您的第一个“银行账户”。");
	 		tip(funTip);
	 		$("#dx1").addClass("inputFocus");
		};
		top.$("#tip").attr("next","faile");
		if($("#mask").attr("style") == "display: inline;"){
			$(".Cancel").hide();
			$(".close_m_box").hide();
			$("#tree_Save").css({"marginTop":"15px"});
		}else{
			$(".Cancel").show();
			$(".close_m_box").show();
			$("#tree_Save").css({"marginTop":"15px"});
		};
		$("#dx1").on("click",function(e) {
			var funTip = new tipObj("1024","484","94","254px",1,1,1,0,"我已经添加完成","","完成信息后确认即可创建完成，选中继续添加可连续添加银行账户。");
			tip(funTip);
			top.$("#nextStep").on("click",function(e) {
				var funTip = new tipObj("1044","500","78","254px",1,1,1,0,"嗯，我知道了","","如果您的银行账户资料太多，可以尝试批量导入。");
				tip(funTip);
				$("#box_div").hide();
				$("#dx0").addClass("inputFocus");
				$("#dx1").removeClass("inputFocus");
				top.$("#nextStep").on("click",function(e) {
		 			$("#box_div").hide();
			 		var funTip = new tipObj("132","536","50","254px",1,1,1,0,"嗯，我知道了","","接下来您可以自由操作，完成后按完成即可选择是否开启帐套。");
					tip(funTip);
					$("#dx0").removeClass("inputFocus");
			    	top.$("#tipText").css("height","42px");
			    	$(".Cancel").show();
					$(".close_m_box").show();
					top.$("#nextStep").on("click",function(e) {
						top.$(".closeMask").click();
					});
		 		});
			});
		});
		top.$("#5_0").on("click",function(){
			top.$("#4").click();
		});
	}
	else if(top.$("#tip").attr("class") == "ok"){
		$(".mask").hide();
		top.$(".mask").hide();
		top.$(".closeMask").fadeOut();};
	// else if(top.$("#tip").attr("class") == "no"){
	// 	var funTip = new tipObj("1044","500","78",1,0,0,0,"否，我要依次导入","","点击批量导入银行账户。");
	// 	tip(funTip);
	// 	$("#dx0").addClass("inputFocus");
	// 	dx03();
	// };
};
// function dx03(){
// 	$("#dx0").on("click",function(e){
// 		var funTip = new tipObj("366","444","36",1,1,0,0,"否，下一步","","点击下载银行账户模版。");
// 		tip(funTip);
// 		$("#dx0").removeClass("inputFocus");
// 		$(".bank_rests_box #uploadExcel").hide();
// 	});
// 	$(".bank_rests_box #downloadExcel").click(function(e){
// 		top.$("#tipText").text("编辑完模版后导入数据。");
//     	$(".bank_rests_box #downloadExcel").hide();
//     	$(".bank_rests_box #uploadExcel").show();
// 	});
// 	$(".bank_rests_box #uploadExcel").click(function(e){
// 		var funTip = new tipObj("569","216","36",1,1,0,0,"否，下一步","","选择文件后，确定上传。");
// 		tip(funTip);
// 	});
// };