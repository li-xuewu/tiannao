var meng=abc("dsbbb")
var lei=abc("dsbbb2")
for(var i=0;i<meng.length;i++){
	meng[i].aa=i
	meng[i].onmouseover=function(){
		lei[this.aa].style.display="block"
	}
	meng[i].onmouseout=function(){
		lei[this.aa].style.display="none"
	}
}



//小猫头
var changtiaobox=$(".changtiaobox")[0]
var maoli=$("li",changtiaobox)
var maotou=$(".maodong")
for (var j = 0; j < maoli.length; j++) {
	maoli[j].bb=j
	maoli[j].onmouseover=function  () {
		animate(maotou[this.bb],{height:15},200)
	}
	maoli[j].onmouseout=function  () {
		animate(maotou[this.bb],{height:0},200)
	}
};




//第一楼
var haoxianshi=$(".haoxianshi")
for (var q = 0; q < haoxianshi.length; q++) {
	haoxianshi[q].cc=q
	haoxianshi[q].onmouseover=function  () {
		haoxianshi[this.cc].style.cssText="width:248px;height:160px;"
	}
	haoxianshi[q].onmouseout=function  () {
		haoxianshi[this.cc].style.cssText=""
	}
};



//six
var goutou=$(".goutou")
for (var w = 0; w < goutou.length; w++) {
	goutou[w].dd=w
	goutou[w].onmouseover=function  () {
		goutou[this.dd].style.cssText="position:relative;right:5px;"
	}
	goutou[w].onmouseout=function  () {
		goutou[this.dd].style.cssText=""
	}
};
var guitou=$(".guitou")
for (var e = 0; e < guitou.length; e++) {
	guitou[e].ee=e
	guitou[e].onmouseover=function  () {
		guitou[this.ee].style.cssText="position:relative;right:4px;"
	}
	guitou[e].onmouseout=function  () {
		guitou[this.ee].style.cssText=""
	}
};
var guitou1=$(".guitou1")
for (var r = 0; r < guitou1.length; r++) {
	guitou1[r].ff=r
	guitou1[r].onmouseover=function  () {
		guitou1[this.ff].style.cssText="position:relative;right:4px;"
	}
	guitou1[r].onmouseout=function  () {
		guitou1[this.ff].style.cssText=""
	}
};
var goutoushou=$(".goutoushou")[0]
goutoushou.onmouseover=function  () {
	goutoushou.style.cssText="position:relative;right:10px;"
}
goutoushou.onmouseout=function  () {
	goutoushou.style.cssText=""
}



//透明度
var yixue=$(".yixue")
for (var o = 0; o < yixue.length; o++) {
	yixue[o].gg=o
	yixue[o].onmouseover=function  () {
		yixue[this.gg].style.opacity="0.6"
	}
	yixue[o].onmouseout=function  () {
		yixue[this.gg].style.opacity="1"
	}
};