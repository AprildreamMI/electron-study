let { shell } = require('electron')

let $bilibili = document.querySelector('#bilibili')
let $btn = document.querySelector('#btn')

$bilibili.onclick = function (e) {
  e.preventDefault()

  let href = this.getAttribute('href')

  shell.openExternal(href)
}

$btn.onclick = function (e) {
  window.open('https://jspang.com')
}

