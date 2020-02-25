/*
 * fullscreen.js
 */

/*
 * attributes supported by different browsers for fullscreen
 */
var STATICS= {
  // determine whether it's supported
  FSE: ['fullscreenEnabled', 'mozFullScreenEnabled', 'webkitFullscreenEnabled', 'msFullscreenEnabled'],
  // full screen change event
  FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
  // request full screen method
  RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
  // exit full screen method
  EFS: ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
};

/*
 * determine whether it's currently full screen
 * Notice: it's diffrence about js and F11 hot key
 */
function isFullscreen () {
  return ['fullscreen', 'webkitIsFullScreen', 'mozFullScreen'].some(name => document[name])
}

/*
 * is support fullscreen api on current browser
 */
function isFullscreenEnabled () {
  var FSE = STATICS.FSE;
  var result = false
  for(var i = 0; i < FSE.length; i++) {
    if (FSE[i] in document) {
      result = true
      break;
    }
  }
  return result
}

/*
 * add listener for fullscreen event
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
 * request full screen
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
 * exit fullscreen method
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
 * export global object
 */
var fullscreen = {
  STATICS: JSON.parse(JSON.stringify(STATICS)),
  is: isFullscreen,
  enabled: isFullscreenEnabled,
  listen: listenFullScreen,
  request: requestFullScreen,
  exit: exitFullScreen
};
module.exports = fullscreen
