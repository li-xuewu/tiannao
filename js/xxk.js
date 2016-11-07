
var dsb1=abc("ccjjtt1")
var dsb2=abc("ccjjtt")

var num=0
  function change () {
    num++;
    if (num>=dsb2.length) {
      num=0
    };
    for (var k = 0; k < dsb2.length; k++) {
      dsb2[k].style.opacity=0;
      dsb1[k].id=""
    };
    animate(dsb2[num],{opacity:1})
    dsb1[num].id="xiaohong"
  }
  var t=setInterval(change,2000)
    var banner=abc("bigbanner")[0]
    banner.onmouseover=function  () {
      clearInterval(t)
    }
    banner.onmouseout=function  () {
      t=setInterval(change,2000)
    }
for (var i = 0; i < dsb1.length; i++) {
	dsb1[i].aa=i//记录元素下标
	dsb1[i].onclick=function(){
       //this.aa当前元素下标
       for(var j=0;j<dsb1.length;j++){
              dsb1[j].id=""
       dsb2[j].style.opacity=0;
       }
       this.id="xiaohong"
      animate(dsb2[this.aa],{opacity:1}) 
	
  num=this.aa
      }
};