;(function (g) {
  var FULL_SCREEN= {
    // 判断是否支持全屏
    FSE: ['fullscreenEnabled', 'mozFullScreenEnabled', 'webkitFullscreenEnabled', 'msFullscreenEnabled'],
    // 全屏事件
    FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
    // 请求全屏方法
    RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
    // 退出全屏方法
    EFS:  ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
  };
  
  // 通过js实现的全屏与浏览器F11实现的全屏不一样
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

  function isFullscreenEnabled () {
    var FSE = FULL_SCREEN.FSE;
    var result = false;

    for(var i = 0; i < FSE.length; i++) {
      if (FSE[i]) {
        result = true;
        break;
      }
    }
    return result;
  }

  function listenFullScreen() {
    var FSC = FULL_SCREEN.FSC;

    for(var i = 0; i < FSC.length; i++) {
      var tmp = FSC[i]
      if (('on' + tmp) in document) {
        document.addEventListener(tmp, function(){
          console.log(isFullscreen());
        }, false)
        break;
      }
    }
  }

  function requestFullScreen () {
    var docElm = document.documentElement;
    var RFS = FULL_SCREEN.RFS

    for(var i = 0; i < RFS.length; i++) {
      var tmp = RFS[i]
      if (tmp in docElm) {
        docElm[tmp]();
        break;
      }
    }
  }

  function exitFullScreen () {
    var EFS = FULL_SCREEN.EFS;

    for(var i = 0; i < EFS.length; i++) {
      var tmp = EFS[i]
      if (tmp in document) {
        document[tmp]();
        break;
      }
    }
  }

  g.fullscreen = {
    FULL_SCREEN: FULL_SCREEN,
    isFullscreen: isFullscreen,
    isFullscreenEnabled: isFullscreenEnabled,
    listenFullScreen: listenFullScreen,
    requestFullScreen: requestFullScreen,
    exitFullScreen: exitFullScreen
  }

})(window);
