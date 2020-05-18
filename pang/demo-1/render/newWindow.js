const $btn = document.querySelector('#btn')
const BrowserWindow = require('electron').remote.BrowserWindow
const { remote } = require('electron')

window.onload = function () {
  $btn.onclick = () => {
    let newWin = new BrowserWindow({
      width: 1000,
      height: 1000,
      parent: top,
      modal: true,
      show: true
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

// 监听点击事件 通过模板生成右键菜单
window.addEventListener('contextmenu', function (e) {
  e.preventDefault() 
  rightMenu.popup({
    window: remote.getCurrentWindow()
  })
})