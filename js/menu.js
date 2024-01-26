import products from '../data/products.js'


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

function createMenuItem(name, price, img, thumbnail) {
  return (
    `<div class="flex h-fit justify-center">
    <div class="w-full item hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300   rounded-2xl max-w-64 border p-2">
      <div class="thumbnail-div w-full aspect-square rounded-xl overflow-hidden border border-slate-10" style="background-image: url(${thumbnail});">
       <img src=${img} alt="" class="w-full h-full object-cover">
      </div>
      <div class="py-2 font-semibold">
        <p class="line-clamp-1 name">${name}</p>
        <p class="text-primary price">$${(price / 100).toFixed(2)}</p>
      </div>
    </div>
  </div>`
  )
}
const menu = document.getElementById('menu')
const menubuttons = document.getElementsByClassName('menubutton')
const activeMenuButtonStyle = "px-5 border border-primary rounded-sm menubutton bg-primary text-white duration-300 transition-all"
const inactiveMenuButtonStyle = "px-5 border border-primary rounded-sm menubutton duration-300 transition-all"

let activeMenu = 'all'

function handlemenufilter() {
  let items = []
  if (activeMenu === 'all') {
    items = products.map(el => createMenuItem(el.name, el.price, el.img, el.thumbnail))
  } else {
    for (const item of products) {
      if (item.type === activeMenu) {
        items.push(createMenuItem(item.name, item.price, item.img, item.thumbnail))
      }

    }
  }
  if (items.length > 0) {
    return items.reduce((p, el) => p + el, '')
  } else {
    return `
    <div class='absolute inset-0 flex justify-center items-center '>
      <h2 class='text-2xl text-zinc-400 '>No Products</h2>
    </div>
    `
  }
}

menu.innerHTML = handlemenufilter()
const elems = menu.querySelectorAll('.thumbnail-div')
addlazyloading(elems)

for (const button of menubuttons) {
  button.addEventListener('click', (e) => {
    for (const button of menubuttons) {
      button.classList = inactiveMenuButtonStyle
    }
    e.target.classList = activeMenuButtonStyle
    activeMenu = e.target.id.toLowerCase()
    menu.innerHTML = handlemenufilter()
    const elems = menu.querySelectorAll('.thumbnail-div')
    addlazyloading(elems)
  });
}

