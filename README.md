# fullscreen.js

简单的浏览器全屏库，兼容常见主流浏览器

## 用法

### 安装

- 模块化方式

```javascript
npm install fullscreen.js --save

```

- `script` 方式引入

```html
<script src='./fullscreen.min.js'></script>
```

### 调用

- 脚本方式

```html
<script>
  fullscreen.request();
</script>
```

- 模块化方式

```javascript
import fullscreen from 'fullscreen.js';
// or 
var fullscreen = require('fullscreen.js');

fullscreen.request();
```

### API

|方法名|类型|参数|说明|示例|
|-----|---|----|---|---|
|`is`|`Function`|无|判断当前是否为全屏状态|`fullscreen.is()`|
|`enabled`|`Function`|无|判断当前浏览器是否支持全屏模式|`fullscreen.enabled()`|
|`listen`|`Function`|`Function`|对全屏事件添加监听|`fullscreen.listen(function(){fullscreen.is()})`|
|`request`|`Function`|无|请求全屏|`fullscreen.request()`|
|`exit`|`Function`|无|退出全屏|`fullscreen.exit()`|


