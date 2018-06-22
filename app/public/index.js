(() => {
  document.querySelector('form#new-cat').addEventListener('submit', e => {
    e.preventDefault()
    const cat_name = e.target.cat_name.value
    const cat_colour = e.target.cat_colour.value

    console.log(cat_name, cat_colour)

    e.target.reset()
  })
})();