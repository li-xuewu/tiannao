document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var LeftSidebar=abc("LeftSidebar")[0]
var rightsidebar=abc("rightsidebar")[0]
var xiaodx=abc("xiaodx")[0]
var fannao=abc("fannaosi")
var lefts=abc("psb")
var colorarr=["#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#ea5f8d","#000"]
var flagtop=1
var flagdown=true
var now=0
window.onscroll=function  () {
	if (obj.scrollTop>=500) {
		if (flagtop==1) {
		    animate(LeftSidebar,{width:38,height:333},400)
		    animate(xiaodx,{top:0},100)
		    flagtop=2
		    flagdown=true
		};
		
	} 
	else{
		if (flagdown==true) {
		    animate(LeftSidebar,{width:0,height:0},400)
		    animate(xiaodx,{top:-50},100)
		    flagtop=1
		    flagdown=false	
		};

	}
	for (var i = 0; i < fannao.length; i++) {
		if (fannao[i].offsetTop<=obj.scrollTop+200) {
			for (var j = 0; j < lefts.length; j++) {
				lefts[j].style.background="#626262"
			};
			lefts[i].style.background=colorarr[i]
			now=i
		};
	};
}
for (var j = 0; j < lefts.length; j++) {
	lefts[j].aa=j
	lefts[j].onclick=function(){
    now=this.aa
    animate(obj,{scrollTop:fannao[this.aa].offsetTop-200},300)
	}
	lefts[j].onmouseover=function(){
		for (var k = 0; k < lefts.length; k++) {
			if (now!=k) {
				lefts[k].style.background="#626262"
			};
		};
		this.style.background=colorarr[this.aa]
	}
	lefts[j].onmouseout=function(){
		for (var h = 0; h < lefts.length; h++) {
			if(now!=h){
				lefts[h].style.background="#626262"
			}
		};
	}
};
 












    var shabi=abc("qqba")[0]
	shabi.onfocus=function  () {
		if (shabi.value=="自然堂点水立方") {
			shabi.value=""
		}
	}
		shabi.onblur=function  () {
			if (shabi.value=="") {
				shabi.value="自然堂点水立方"
			};
		} 

     var sousuo1=$(".sousuo1")[0]
     sousuo1.onfocus=function(){
     	if (sousuo1.value=="搜索 天猫 商品/品牌/店铺") {
     		sousuo1.value=""
     	};
     }
     sousuo1.onblur=function(){
     	if (sousuo1.value=="") {
     		sousuo1.value="搜索 天猫 商品/品牌/店铺"
     	};
     }



     //右侧边
    var youkuang=$(".youkuang")
    var youkuanga=$(".youkuanga")
    for (var i = 0; i < youkuang.length; i++) {
    	youkuang[i].aa=i
    	youkuang[i].onmouseover=function(){
    		animate(youkuanga[this.aa],{left:-90,opacity:1},250)
    	}
    	youkuang[i].onmouseout=function(){
    		animate(youkuanga[this.aa],{left:-150,opacity:0},250)
    	}
    
    };
    var youkuang1=$(".youkuang1")[0]
    var youkuanga1=$(".youkuanga1")[0]
    youkuang1.onmouseover=function(){
    	youkuanga1.style.display="block"
    }
     youkuang1.onmouseout=function(){
    	youkuanga1.style.display="none"
    }

   //banner
   var shangpin=$(".shangpin")[0]
   var shangpina=$("a",shangpin)[0]
   var kuanghuan=$(".kuanghuan")[0]
   var zhubannerLeft=$(".zhubannerLeft")[0]
   var zuohei=$(".zuohei")[0]
   var ww=$(".WW")
   var NvZ=$(".NvZ")[0]
   kuanghuan.onmouseover=function(){
   	zuohei.style.display="block"
   	zhubannerLeft.style.display="none"
   	kuanghuan.style.background="black"
   	shangpin.style.background="#dd2727"
   	shangpina.style.color="white"
   	zuohei.onmouseover=function(){
   		zuohei.style.display="block"
   	}
   }
   shangpin.onmouseover=function(){
   	zuohei.style.display="none"
   	shangpina.style.color="red"
   	shangpin.style.background="white"
   	kuanghuan.style.background="#dd2727"
   	zhubannerLeft.style.display="block"
   }
   for (var i = 0; i < ww.length; i++) {
   	ww[i].aa=i
   	ww[i].onmouseover=function(){
   		ww[this.aa].style.background="white"
   		NvZ.style.display="block"
   		NvZ.onmouseover=function(){
   			NvZ.style.display="block"
   		}
   		NvZ.onmouseout=function(){
   			NvZ.style.display="none"
   		}
   	}
   	ww[i].onmouseout=function(){
   		ww[this.aa].style.background=""
   		NvZ.style.display="none"
   	}
   };

