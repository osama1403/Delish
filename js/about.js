function addlazyloading(elems) {
  elems.forEach(el => {
    const img = el.querySelector('img')

    function loaded() {
      el.classList.add('loaded')
    }

    if (img.complete) {
      el.classList.add('loaded')
    } else {
      img.addEventListener('load', loaded)
    }

  })
}
const thumbnailDivs = document.querySelectorAll('.thumbnail-div')
addlazyloading(thumbnailDivs)