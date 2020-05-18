async function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.setAttribute("src", src)
    document.body.appendChild(script)

    script.onload = resolve
    script.onerror = reject
  })
}

'use strict';

async function loadCSS(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("type", "text/css")
    link.setAttribute("href", href)
    document.head.appendChild(link)

    link.onload = resolve
    link.onerror = reject
  })
}

module.exports = {
  loadScript,
  loadCSS
}