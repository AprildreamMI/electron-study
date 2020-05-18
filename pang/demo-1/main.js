const { app, BrowserWindow } = require('electron')

// 声明要打开的主窗口
let mainWindow = null

// 窗口加载好了
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  require('./main/menu.js')
  // 加载html页面
  mainWindow.loadFile('html/link.html')
  // 打开开发者工具
  mainWindow.webContents.openDevTools()
  // 关闭
  mainWindow.on('closed', () => {
    mainWindow = null
  })

})

