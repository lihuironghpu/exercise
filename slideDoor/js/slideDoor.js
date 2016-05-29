/**
 * Created by lhr on 16/5/29.
 */
window.onload = function(){
    //容器
    var ulContainer = document.getElementById("container");
    //获得所有li元素
    var liArrEle = ulContainer.getElementsByTagName("li");
    //获得li的宽度
    var liWidth = liArrEle[0].offsetWidth;
    //遮盖露出来的宽度
    var foldWitdh = 160;
    //滑动间距
    var slideWidth = liWidth - foldWitdh;
    //设置容器宽度
    var boxWidth = foldWitdh * (liArrEle.length - 1) + liWidth;
    ulContainer.style.width = boxWidth + 'px';
    //初始化里的位置
    function initPos(){
        for(var i = 1; i < liArrEle.length; i++){
            liArrEle[i].style.left = liWidth + foldWitdh * (i - 1) + 'px';
        }
    }
    initPos();
    //给每个里绑定鼠标移动上去效果
    for(var i = 0; i < liArrEle.length; i++){
        //立即调用函数，循环后还能保持不同的i的值
        (function(i){
            liArrEle[i].onmouseover = function(){
                initPos();
                for(var j = 1; j <= i; j++){
                    liArrEle[j].style.left = parseInt(liArrEle[j].style.left, 10) - slideWidth + 'px';
                }
            }
        })(i);
    }
};