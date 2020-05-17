let fs = require('fs')

window.onload = function () {
  let $btn = this.document.querySelector('#btn')
  let $mybaby = this.document.querySelector('.mybaby')

  $btn.onclick = function () {
    fs.readFile('xiaojiejie.txt', (err, data) => {
      console.log(data)
      $mybaby.innerHTML = data
    })
  }
}