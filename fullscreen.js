/*
 * fullscreen.js
 * author: @TT <ttghost@126.com>
 * version: 0.1.0
 */
;(function (g) {
  /*
   * 不同浏览器对全屏支持的属性
   */
  var STATICS= {
    // 判断是否支持全屏
    FSE: ['fullscreenEnabled', 'mozFullScreenEnabled', 'webkitFullscreenEnabled', 'msFullscreenEnabled'],
    // 全屏事件
    FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
    // 请求全屏方法
    RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
    // 退出全屏方法
    EFS: ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
  };

  /*
   * 判断当前是否为全屏状态
   * 注意：通过js实现的全屏与浏览器F11实现的全屏不一样
   */
  function isFullscreen () {
    var ua = window.navigator.userAgent.toLowerCase();
    var result = false;

    //chrome
    if (ua.indexOf('chrome') > 0){
      result = document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width
    //IE 9+  fireFox
    } else {
      result = window.outerHeight == screen.height && window.outerWidth == screen.width;
    }
    return result;
  }

  /*
   * 判断当前浏览器是否支持全屏模式
   */
  function isFullscreenEnabled () {
    var FSE = STATICS.FSE;
    var result = false;

    for(var i = 0; i < FSE.length; i++) {
      if (FSE[i]) {
        result = true;
        break;
      }
    }
    return result;
  }

  /*
   * 对全屏事件添加监听
   */
  function listenFullScreen(callback) {
    var FSC = STATICS.FSC;

    for(var i = 0; i < FSC.length; i++) {
      var tmp = FSC[i]
      if (('on' + tmp) in document) {
        document.addEventListener(tmp, callback, false)
        break;
      }
    }
  }
  /*
   * 请求全屏
   */
  function requestFullScreen () {
    var docElm = document.documentElement;
    var RFS = STATICS.RFS

    for(var i = 0; i < RFS.length; i++) {
      var tmp = RFS[i]
      if (tmp in docElm) {
        docElm[tmp]();
        break;
      }
    }
  }

  /*
   * 退出全屏
   */
  function exitFullScreen () {
    var EFS = STATICS.EFS;

    for(var i = 0; i < EFS.length; i++) {
      var tmp = EFS[i]
      if (tmp in document) {
        document[tmp]();
        break;
      }
    }
  }
  /*
   * 导出变量
   */
  var fullscreen = {
    STATICS: STATICS,
    is: isFullscreen,
    enabled: isFullscreenEnabled,
    listen: listenFullScreen,
    request: requestFullScreen,
    exit: exitFullScreen
  };

  if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = fullscreen;
  } else {
    g.fullscreen = fullscreen;
  }

})(window);
