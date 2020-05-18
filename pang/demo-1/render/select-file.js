const { dialog } = require('electron').remote

let $btn = document.querySelector('#btn')
let $img = document.querySelector('#img')

$btn.onclick = function (e) {
  dialog.showOpenDialog({
    title: '请选择你喜欢的图片',
    defaultPath: 'xiaojiejie.jpg',
    // 扩展
    filters: [
      {
        name: 'img',
        extensions: ['jpg']
      }
    ],
    // 选择文件按钮的文字
    buttonLabel: '打开图片'
  }).then(result => {
    console.log('图片的返回', result)
    $img.setAttribute('src', result.filePaths[0])
  }).catch(error => {
    console.log(error)
  })
}