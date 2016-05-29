/**
 * Created by lhr on 16/5/29.
 */
function myReady(fn){
    //对于现代浏览器，对DOMContentLoaded事件的处理采用标准的事件绑定方法
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded', fn, false);
    //    false事件冒泡阶段捕获
    }else{
        IEDomReady(fn);
    }
    //IE下模拟DOMContentLoaded
    function IEDomReady(fn){
        var d = window.document;
        var done = false;
        var init = function(){
            if(!done) {
                done = true;
                fn();
            }
        };
        (function(){
            try{
                //IE在DOM未建立之前，执行doScroll会抛出异常
                d.documentElement.doScroll('left');
            }catch(e){
                //延迟再试一次
                setTimeout(arguments.callee, 50);
                return;
            }
            //没有错误，就表示dom树创建完毕。
            init();
        })();
        //监听document的加载状态
        d.onreadystatechange = function (){
            //如果用户在domReady之后绑定的函数，就立即执行
            if(d.readyState == 'complete'){
                d.onreadystatechange = null;
                init();
            }
        }


    }

}