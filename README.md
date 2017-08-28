# fullscreen.js
简单的浏览器全屏库

## 用法

### 脚本方式引入
```html
<script src='./fullscreen.js'></script>
<script>
  fullscreen.request();
</script>
```

### 模块方式引入

```javascript
import fullscreen from 'fullscreen.js';
// or 
var fullscreen = require('fullscreen.js');

fullscreen.resuest();
```

### API

|方法名|类型|参数|说明|示例|
|-----|---|----|---|---|
|`STATICS`|`Object`|无|不同浏览器对全屏支持的属性|`fullscreen.STATICS`|
|`is`|`Function`|无|判断当前是否为全屏状态|`fullscreen.is()`|
|`enabled`|`Function`|无|判断当前浏览器是否支持全屏模式|`fullscreen.enabled()`|
|`listen`|`Function`|`Function`|对全屏事件添加监听|`fullscreen.listen(function(){fullscreen.is()})`|
|`request`|`Function`|无|请求全屏|`fullscreen.request()`|
|`exit`|`Function`|无|退出全屏|`fullscreen.exit()`|


- `FULL_SCREEN` 说明

```javascript
{
  // 判断是否支持全屏
  FSE: ['fullscreenEnabled', 'mozFullScreenEnabled', 'webkitFullscreenEnabled', 'msFullscreenEnabled'],
  // 全屏事件
  FSC: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'],
  // 请求全屏方法
  RFS: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'],
  // 退出全屏方法
  EFS: ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
}
```
