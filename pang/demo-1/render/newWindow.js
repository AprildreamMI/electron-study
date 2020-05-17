const $btn = document.querySelector('#btn')
const BrowserWindow = require('electron').remote.BrowserWindow

window.onload = function () {
  $btn.onclick = () => {
    let newWin = new BrowserWindow({
      width: 500,
      height: 500
    })
    // 路径要注意
    newWin.loadFile('html/yellow.html')
    newWin.on('close', () => {
      newWin = null
    })
  }
}