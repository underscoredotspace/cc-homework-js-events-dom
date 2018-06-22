(() => {
  const catList = document.querySelector('#cat-list')

  document.querySelector('form#cat').addEventListener('submit', e => {
    e.preventDefault()
    const catName = e.target.cat__name.value
    const catColour = e.target.cat__colour.value

    const catNameElement = newElement('h2', 'cat__name', catName)
    const catColourElement = newElement('p', 'cat__colour', catColour)
    const catDeleteElement = newElement('button', 'cat__delete', 'Delete')
    catDeleteElement.addEventListener('click', e => {
      if (confirm('Are you sure?')) {
        e.target.parentElement.remove()
      }
    })

    const catListItem = newElement('div', 'cat-list__item')

    catListItem.appendChild(catNameElement)
    catListItem.appendChild(catColourElement)
    catListItem.appendChild(catDeleteElement)

    catList.appendChild(catListItem)

    e.target.reset()
  })

  function newElement(kind, className, content) {
    const element = document.createElement(kind)
    element.classList.add(className)
    if (content) { element.textContent = content}
    return element
  }

})();