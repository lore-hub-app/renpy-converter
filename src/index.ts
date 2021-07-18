
const content = `label start:

<breake>

somemore`

export function download () {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))

  element.setAttribute('download', 'renpy-converter.rpy')

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

download()
