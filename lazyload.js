(function lazyLoad(config) {
    var className, srcProp, lazyElements;
    if(config && config.className){
        className = config.className;
    }
    if(config && config.srcProp){
        srcProp = config.srcProp;
    }else{
        srcProp = "data-src";
    }
    //获取所有lazy加载元素
    lazyElements = document.querySelectorAll(className);
    //判断元素是否在窗口内 
    var elementInWindow = function(){
         for(var i = 0, len = lazyElements.length; i < len; i++){
            var _this = lazyElements[i];
            if(_this.getBoundingClientRect().top < window.innerHeight){
                _this.setAttribute("src", _this.getAttribute(srcProp));
            }
        }
    };
    //初始化调用
    elementInWindow();
    //滚动监听事件
    window.addEventListener("scroll", function(){
       elementInWindow()
    }, false);
    window.lazyLoad = lazyLoad;
})();
