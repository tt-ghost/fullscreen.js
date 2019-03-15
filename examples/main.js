var fullscreen = require('../src/fullscreen')

// element
var requestBtn = document.getElementById('request')
var exitBtn = document.getElementById('exit')
var statusContainer = document.getElementById('status')
var isSupportContainer = document.getElementById('isSupport')
var logContainer = document.getElementById('log')

isSupportContainer.innerText = fullscreen.enabled() ? 'Yes' : 'No'

function setStatus () {
  statusContainer.innerText = fullscreen.is() ? 'Yes' : 'No'
}

setStatus()

fullscreen.listen(function(){
  setStatus()
  var time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() + ': '
  var html = (fullscreen.is() ? `${time}<b>full screen</b><br/>` : `${time}<b>exit full screen</b><br/>`)
  html += `document.body.scrollHeight: ${document.body.scrollHeight}<br/>
  window.screen.height: ${window.screen.height}<br/>
  document.body.scrollWidth: ${document.body.scrollWidth}<br/>
  window.screen.width: ${window.screen.width}<br/><br/>
  ` + logContainer.innerHTML
  logContainer.innerHTML = html
})

requestBtn.addEventListener('click', function() {
  fullscreen.request();
}, false)

exitBtn.addEventListener('click', function() {
  fullscreen.exit();
}, false)
