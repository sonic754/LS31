const parent2 = document.getElementById('parent2')
const data = JSON.parse(localStorage.getItem("info")) || []


data.map(item =>{
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.title}</h2>
    <p>${item.description}</p>
    <p>${item.price} $</p>
  </div>
</div>

    `
    parent2.appendChild(div)
})