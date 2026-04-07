
const Getdata = async ()=> {
    const request = await fetch('http://localhost:5000/products')
    const response = await request.json()
    RenderList(response)
}
Getdata()
const info = localStorage.getItem("info")
const data = JSON.parse(localStorage.getItem("info")) || []
async function RenderList(maqsulotlar) {
maqsulotlar.map(item =>{
  const parent = document.getElementById('parent')
    const div = document.createElement('div')
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
    <div class="badge badge-accent ${item.count == 0 ? 'badge-error' : ''} ${item.count < 5 ? 'badge-warning' : 'badge-success'}">${item.count}</div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary buybtn">${item.price} $</button>
    </div>
  </div>
</div>
    `

      const buybtn = div.querySelector(".buybtn")
  buybtn.addEventListener("click" ,()=>{
  data.push(item)
  console.log(data);
  
  localStorage.setItem(  "info", JSON.stringify(data))
  })


    parent.append(div)
})
}