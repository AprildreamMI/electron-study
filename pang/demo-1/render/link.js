let { shell } = require('electron')

let $bilibili = document.querySelector('#bilibili')

$bilibili.onclick = function (e) {
  e.preventDefault()

  let href = this.getAttribute('href')

  shell.openExternal(href)
}