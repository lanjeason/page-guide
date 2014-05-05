/*receivable\payable不同时有值*/
$("#2_1").click(function(){
	if(partnersFrame.$("tbody tr").length != 0){
		for(i = 0 ; i<partnersFrame.$("tbody tr").length ; i++){
			var receivable = parseInt($(partnersFrame.$("tbody tr")[i]).find("td").eq(6).text());
			var payable = parseInt($(partnersFrame.$("tbody tr")[i]).find("td").eq(7).text());
			var isZero = receivable * payable
			if(isZero != 0 || (receivable == null && payable == null)){
				alert("错误提示：\n请确保文件内每个商业伙伴“期初应收”和“期初应付”不同时有值，只有一项有值。");
				break;
			}else{
				if(i == partnersFrame.$("tbody tr").length - 1){
					var current_fs, next_fs, previous_fs; //设定当前页面、下个页面和上个页面
					var left, opacity; //设定动画变量
					var animating; //防止快速多点击的flag
					if(animating) return false;
					animating = true;
					current_fs = $("#2_1").parent();
					next_fs = $("#2_1").parent().next();
					$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");//激活当前页面的li
					next_fs.show();//显示当前页面
					current_fs.animate({opacity: 0}, {
						step: function(now, mx) {
							left = (now * 0)+"%";
							opacity = 1 - now;
							next_fs.css({'left': left, 'opacity': opacity});
						}, 
						duration: 100, 
						complete: function(){
							current_fs.hide();//隐藏上个页面
							animating = false;
						}, 
						easing: 'easeInOutBack'
					});
    				$("#storesFrame").attr("src","/static/initialize/stores.html");				
				}else{
					continue;
				}
			}
		}
	}
})
/*receivable\payable不同时有值*/
//流程任意控制和单次加载控制
var current_fs, next_fs, previous_fs; //设定当前页面、下个页面和上个页面
var left, opacity; //设定动画变量
var animating; //防止快速多点击的flag
/*下一页的函数*/
$(".next").click(function(){
	if(animating) return false;
	animating = true;
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");//激活当前页面的li
	next_fs.show();//显示当前页面
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			left = (now * 0)+"%";
			opacity = 1 - now;
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 100, 
		complete: function(){
			current_fs.hide();//隐藏上个页面
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});
/*下一页的函数*/
/*上一页函数*/
$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	previous_fs.show(); 
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			left = ((1-now) * 0)+"%";
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'opacity': opacity});
		}, 
		duration: 100, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});
/*上一页函数*/
/*任意跳转函数*/
$("#progressbar li").eq(0).click(function(){
	$(this).addClass("active");
	$(this).prevAll("li").addClass("active");
	$(this).nextAll("li").removeClass("active");
	$("#companyFieldset").show();
	$("#companyFieldset").css("opacity","1");
	$("#companyFieldset").siblings("fieldset").hide();
})

$("#progressbar li").eq(1).click(function(){
	$(this).addClass("active");
	$(this).prevAll("li").addClass("active");
	$(this).nextAll("li").removeClass("active");
	$("#partnersFieldset").show();
	$("#partnersFieldset").css("opacity","1");
	$("#partnersFieldset").siblings("fieldset").hide();
    $("#partnersFrame").attr("src","/static/initialize/partner_rests.html");
})

$("#progressbar li").eq(2).click(function(){
	$(this).addClass("active");
	$(this).prevAll("li").addClass("active");
	$(this).nextAll("li").removeClass("active");
	$("#storesFieldset").show();
	$("#storesFieldset").css("opacity","1");
	$("#storesFieldset").siblings("fieldset").hide();
    $("#storesFrame").attr("src","/static/initialize/stores.html");
})

$("#progressbar li").eq(3).click(function(){
	$(this).addClass("active");
	$(this).prevAll("li").addClass("active");
	$(this).nextAll("li").removeClass("active");
	$("#productsFieldset").show();
	$("#productsFieldset").css("opacity","1");
	$("#productsFieldset").siblings("fieldset").hide();
    $("#productsFrame").attr("src","/static/initialize/products.html");
})

$("#progressbar li").eq(4).click(function(){
	$(this).addClass("active");
	$(this).prevAll("li").addClass("active");
	$(this).nextAll("li").removeClass("active");
	$("#banksFieldset").show();
	$("#banksFieldset").css("opacity","1");
	$("#banksFieldset").siblings("fieldset").hide();
    $("#banksFrame").attr("src","/static/initialize/bank_rests.html");
})
/*任意跳转函数*/
/*提交公司名称多仓库成本核算方法*/
$("#1_1").click(function(){
	var companyName = $("#companyName")[0].value;
    var memberId = $("#cost_method2")[0].value;
    var step1 = {
        "text":companyName,
        "same_price":memberId,
        "enabled":"0"
    };//enabled一定得传，不传默认为 1 ，传 0 可以继续修改
    step1Json = JSON.stringify(step1);
    if( companyName !== ""){
	    $.ajax({
	        url: "/api/common?action=enabled_set_of_book",
	        type: 'post',
	        dataType: 'json',
	        data: step1Json
	    })
	    .done(function() {
	        alert("公司名称及多仓库成本核算方法提交成功！")
	    })
	    .fail(function() {
	        alert("修改失败！");
	        return;
	    })
	    .always(function() {
	    });
	}else return;
})
/*提交公司名称多仓库成本核算方法*/
/*加载一次函数*/
$("#1_1,#3_0").click(function(){
    $("#partnersFrame").attr("src","/static/initialize/partner_rests.html");
});
$("#4_0").click(function(){
    $("#storesFrame").attr("src","/static/initialize/stores.html");
});
$("#3_1,#5_0").click(function(){
    $("#productsFrame").attr("src","/static/initialize/products.html");
});
$("#4_1").click(function(){
    $("#banksFrame").attr("src","/static/initialize/bank_rests.html");
});
$("#1").click(function(){
    $("#companyName").focus();
});
/*加载一次函数*/
/*提交函数*/
$(".submit").click(function(){
	banksFrame.$(".choose").hide();
	$("#set_of_book_settings").show();
	// top.location = "index.html";
})
$("#yes_set_of_book_settings").click(function(){
		var companyName = $("#companyName")[0].value;
    var memberId = $("#cost_method2")[0].value;
    var step1 = {
        "text":companyName,
        "same_price":memberId,
        "enabled":"1"
    };//enabled一定得传，不传默认为 1 ，传 0 可以继续修改
    step1Json = JSON.stringify(step1);
    if( companyName !== ""){
	    $.ajax({
	        url: "/api/common?action=enabled_set_of_book",
	        type: 'post',
	        dataType: 'json',
	        data: step1Json
	    })
	    .done(function() {
	        top.location = "/";
	        var oldUser = top.Cache.getUser();
	       	oldUser.set_of_book_settings.status = "1";
	        sessionStorage.setItem("c9_userinfo",JSON.stringify(oldUser));
	    })
	    .fail(function() {
	        alert("初始化失败！");
	        return;
	    })
	    .always(function() {
	    });
	}else return;
})
$("#no_set_of_book_settings").click(function(){
	$("#set_of_book_settings").hide();
})
// $("#no_set_of_book_settings").click(function(){
// 	var companyName = $("#companyName")[0].value;
//     var memberId = $("#cost_method2")[0].value;
//     var step1 = {
//         "text":companyName,
//         "same_price":memberId,
//         "enabled":"1"
//     };//enabled一定得传，不传默认为 1 ，传 0 可以继续修改
//     step1Json = JSON.stringify(step1);
//     if( companyName !== ""){
// 	    $.ajax({
// 	        url: "/api/common?action=enabled_set_of_book",
// 	        type: 'post',
// 	        dataType: 'json',
// 	        data: step1Json
// 	    })
// 	    .done(function() {
// 	        console.log("success");
// 	        top.location = "/";
// 	        var oldUser = top.Cache.getUser();
// 	       	oldUser.set_of_book_settings.status = "1";
// 	        sessionStorage.setItem("c9_userinfo",JSON.stringify(oldUser));     
// 	    })
// 	    .fail(function() {
// 	        console.log("error");
// 	        alert("修改失败！");
// 	        return;
// 	    })
// 	    .always(function() {
// 	        console.log("complete");
// 	    });
// 	}else return;
// })
/*提交函数*/

/*partner_rests上传和下载相关*/
$("#dx0").click(function(){
	$(".choose").show();
	$(".choose3").hide();
	$(".upload").hide();
	$(".upload2").hide();
})
$("#dx0_0").click(function(){
	$(".choose3").show();
	$(".choose").hide();
	$(".upload").hide();
	$(".upload2").hide();
})
$(".choose .close").click(function(){
	$(".choose").hide();
})
$(".choose3 .close").click(function(){
	$(".choose3").hide();
})
function lingpai(url){
	var form = $("<form>"); //定义一个form表单
    form.attr('style', 'display:none'); //在form表单中添加查询参数
    form.attr('target', '');
    form.attr('method', 'post');
    form.attr('action', url);
    var input1 = $('<input>');
    input1.attr('type', 'hidden');
    input1.attr('name', 'Token');
    input1.attr('value', top.Cache.getToken());
    form.append(input1); //将查询参数控件提交到表单上
    form.submit();
}//下载的令牌
$(".partner_rests_box #downloadExcel").click(function(){
	var url = "/api/partner_rests?action=download&format=excel";
	lingpai(url);
})
$(".partner_rests_box #uploadExcel").click(function(){
	$(".choose").hide();
	$(".upload").show();
})
$(".upload .close").click(function(){
	$(".upload").hide();
})
/*partner_rests上传和下载相关*/

/*products上传和下载相关*/
$(".products_box #downloadExcel").click(function(){
	var url = "/api/products?action=download&format=excel";
	lingpai(url);
})
$(".products_box #uploadExcel").click(function(){
	$(".choose").hide();
	$(".upload").show();
})//商品资料
$(".products_box2 #downloadExcel2").click(function(){
	var url = "/api/on_hand_rests?action=download&format=excel";
	lingpai(url);
})
$(".products_box2 #uploadExcel2").click(function(){
	$(".choose3").hide();
	$(".upload2").show();
})//商品数量和成本
$(".upload .close").click(function(){
	$(".upload").hide();
})
$(".upload2 .close").click(function(){
	$(".upload2").hide();
})
/*products上传和下载相关*/

/*bank上传和下载相关*/
$(".choose .close").click(function(){
	$(".choose").hide();
})
$(".bank_rests_box #downloadExcel").click(function(){
	var url = "/api/bank_rests?action=download&format=excel";
	lingpai(url);
})
$(".bank_rests_box #uploadExcel").click(function(){
	$(".choose").hide();
	$(".upload").show();
})
$(".upload .close").click(function(){
	$(".upload").hide();
})
/*bank上传和下载相关*/
