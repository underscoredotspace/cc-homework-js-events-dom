(() => {
  let hue = 0
  const catList = document.querySelector('#cat-list')
  const deleteAllCats = document.querySelector('#delete-all-cats')

  document.querySelector('form#cat').addEventListener('submit', e => {
    e.preventDefault()
    const {cat__name, cat__colour} = e.target

    const catNameElement = createElement('h2', 'cat__name', cat__name.value)
    const catColourElement = createElement('p', 'cat__colour', cat__colour.value)

    const catDeleteElement = createElement('button', 'cat__delete', 'Delete')
    catDeleteElement.addEventListener('click', e => {
      if (confirm('Are you sure?')) {
        e.target.parentElement.remove()
      }
    })

    const catListItem = createElement('div', 'cat-list__item')
    catListItem.style.setProperty('--h', elementHue())
    appendElements(catListItem, [catNameElement, catColourElement, catDeleteElement])
    catList.appendChild(catListItem)

    // e.target.reset()
  })

  function createElement(kind, className, content) {
    const element = document.createElement(kind)
    element.classList.add(className)
    if (content) { element.textContent = content}
    return element
  }

  function appendElements(parent, elementArray) {
    for (const element of elementArray) {
      parent.appendChild(element)
    }
  }

  function elementHue() {
    hue += Math.floor(360/15)
    if (hue >= 360) { hue = 0}
    return hue
  }

})();