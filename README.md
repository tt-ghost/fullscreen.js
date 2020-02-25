# fullscreen.js

> simple browser full screen library, compatible with common mainstream browsers

## Demo
[http://fe1024.com/demos/fullscreen/examples/](http://fe1024.com/demos/fullscreen/examples/)

## Install

```js
npm install fullscreen.js --save
// or
<script src='./fullscreen.min.js'></script>
```

## Usage

```js
import fullscreen from 'fullscreen.js';
// or 
// var fullscreen = require('fullscreen.js');
fullscreen.request();
```

## API
- `fullscreen.is()`: whether it's full screen status
- `fullscreen.enabled()`: whether it's support full screen mode
- `fullscreen.listen(callback)`: add full screen event listener
```js
fullscreen.listen(function(){
  // whether it's full screen status
  fullscreen.is()
})
```
- `fullscreen.request()`: request full screen
- `fullscreen.exit()`: exit full screen
