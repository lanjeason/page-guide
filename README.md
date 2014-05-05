page-guide
==========

A JavaScript language page guide, mainly is to generate a tip object, the object is defined for each step of the guide.

主要文件是intro.js文件，该文件代码主要实现页面导航的功能。因为该代码是直接从项目中截取出来的，并且导航过程中包含ajax等动态代码，目前还不能够静态运行，请见谅。

代码编写主要思想，主要是intro.js 文件，而initialize.js主要是一个分页把整个项目导航分为5大块的实现，使导航可以分段导航。
-------
###通过构建对象和对象函数

function tipObj(left,top,pLeft,width,show,state,next,pre,nText,pText,text){
	this.left = left;//框左边距
	this.top = top;//框上边距
	this.pLeft = pLeft;//框箭头左边距
	this.show = show;//框是否显示
	this.state = state;//框的状态
	this.next = next;//框的下一步是否显示
	this.pre = pre;//框的上一步是否显示
	this.nText = nText;//框的下一步显示的文字
	this.pText = pText;///框的上一步显示的文字
	this.text = text;//框内提示文字
	this.width = width;//框的宽度
};//通过这些属性创建tip对象

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
};//创建tip方法，以备后面调用

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
};//通过tip的属性和方法定义一次tip状态

var funTip = new tipObj("464","420","10","254px",1,1,0,0,"下一步","","启用帐套完成初始化，并且不能再次修改”。");
tip(funTip);//通过这两句实现建立对象和对象赋值，实现一次提示框。
