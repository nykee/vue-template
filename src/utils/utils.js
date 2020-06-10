// 防抖
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null)clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}

// 节流throttle代码（定时器）：
function throttle (func, delay) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}

export { debounce,throttle }