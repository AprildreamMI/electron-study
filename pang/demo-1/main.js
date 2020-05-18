const { app, BrowserWindow, BrowserView } = require('electron')

// 声明要打开的主窗口
let mainWindow = null

// 窗口加载好了
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 菜单
  require('./main/menu.js')
  // 加载html页面
  mainWindow.loadFile('./html/select-file.html')

  /* // 在窗口嵌入一个网页
  let view = new BrowserView()
  mainWindow.setBrowserView(view)
  view.setBounds({
    x: 0,
    y: 120,
    width: 1000,
    height: 680
  })
  view.webContents.loadURL('https://jspang.com') */

  // 打开开发者工具
  mainWindow.webContents.openDevTools()
  // 关闭
  mainWindow.on('closed', () => {
    mainWindow = null
  })

})

