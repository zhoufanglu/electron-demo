const { app, BrowserWindow } = require('electron')
const path = require('path')

// 热加载
try {
  require('electron-reloader')(module, {});
} catch (_) { }


function createWindow () {
  //browserWindow主进程来创建网页
  //你定义一个方法用来创建一个带有预加载脚本的新的浏览器窗口，并加载index.html文件进入该窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow() //调用方法，创建了窗口
  //您添加一个新的侦听器，只有当应用程序激活后没有可见窗口时，
  // 才能创建新的浏览器窗口。 例如，在首次启动应用程序后或重启运行中的应用程序。
  app.on('activate', () => {
    console.log('首次加载')
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
//您添加了一个新的侦听器，当应用程序不再有任何打开窗口时试图退出。
// 由于操作系统的 窗口管理行为 ，此监听器在 macOS 上是禁止操作的。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
