(function (document) {
  document.addEventListener('DOMContentLoaded', function () {

    var switcher = document.querySelector('#color-switcher')
    var html = document.querySelector('html')

    switcher.addEventListener('click', function () {
      html.classList.toggle('dark-mode')
      html.classList.toggle('white-mode')

      var textNext = switcher.getAttribute('data-text')
      var textCurrent = switcher.innerText

      switcher.innerText = textNext
      switcher.setAttribute('data-text', textCurrent)
    })
  })
})(document)
