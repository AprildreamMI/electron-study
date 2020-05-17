const $btn = document.querySelector('#btn')
const BrowserWindow = require('electron').remote.BrowserWindow
const { remote } = require('electron')

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

let rightMenuTemplate = [
  {
    label: '复制',
    accelerator: 'ctrl+c'
  },
  {
    label: '粘贴',
    accelerator: 'ctrl+v'
  }
]

let rightMenu = remote.Menu.buildFromTemplate(rightMenuTemplate)

window.addEventListener('contextmenu', function (e) {
  e.preventDefault() 
  rightMenu.popup({
    window: remote.getCurrentWindow()
  })
})