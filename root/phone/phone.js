const card = document.getElementById("cards");
const photoPhone = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7BHzDERlveMVsFMt_mMP0wOTeeajYHwP1SZDNgNLXK82xbGJTpafli1GQowXoS_jPjU&usqp=CAU"
const url = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
async function devices() {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
async function createCards() {
  let phones = await devices()
  card.innerHTML = phones.map((item) => {
    console.log(item);
    return `<div class="card" style="width: 18rem ;">
  <img class="card-img-top" src="${photoPhone}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Official Importer</h5>
    <p class="card-text">
    brand: ${item.brand}<br>
    createdAt: ${item.createdAt}<br>
    id: ${item.id}<br>
    isAvailable: ${item.isAvailable}<br>
    price: ${item.price}$<br>
    color: ${item.color}
    </p>
    <a href="#" class="btn btn-primary">click to buy</a>
  </div>
</div>`
  })
}
createCards()

