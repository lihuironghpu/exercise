/**
 * Created by lhr on 16/5/30.
 * 事件绑定和解绑的方法
 */
var eventUtil = {
    //绑定事件
    addEvent: function(eleName, eventName, fnName){
        if(eleName.addEventListener){
            eleName.addEventListener(eventName, fnName, false);
        }else if(eleName.attachEvent){
            eleName.attachEvent('on'+eventName, fnName);
        }else{
            eleName['on'+eventName] = fnName;
        }
    },
    //删除事件
    removeEvent: function(eleName, eventName, fnName){
        if(eleName.addEventListener){
            eleName.removeEventListener(eventName, fnName, false);
        }else if(eleName.attachEvent){
            eleName.detachEvent('on'+eventName, fnName);
        }else{
            eleName['on'+eventName] = null;
        }
    },
    //获得事件
    getEvent: function(event){
        return event ? event : window.event;
    },
    //获得事件的类型
    getEventType: function(event){
        return event.type;
    },
    //获得事件点击的元素
    getEventElement: function(event){
        return event.target || event.srcElement;
    },
    //阻止默认行为
    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //阻止事件冒泡
    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}