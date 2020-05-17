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

  // 加载html页面
  mainWindow.loadFile('./newWindow.html')
  // 关闭
  mainWindow.on('closed', () => {
    mainWindow = null
  })

})

