/**
 * Created by zenghe on 2017/7/4.
 */
var imgPath=$(".childPage_banner .carousel-inner img").attr("src").split('/')[2].toString().split('.')[0];
function changeImg() {
    if($(window).width()<768){
        $(".childPage_banner .carousel-inner img").attr("src",'images/slider/'+imgPath+'2.png')
    }else{
        $(".childPage_banner .carousel-inner img").attr("src",'images/slider/'+imgPath+'.png')
    }
}
changeImg();

window.onresize=function () {
    changeImg();
};



