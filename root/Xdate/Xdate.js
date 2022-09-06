const url = "https://my-json-server.typicode.com/Jeck99/fake-server/users"
const usersPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRUJULNIXjikp0FIZKfI51_wc_-YhQo3BQw&usqp=CAU"
const usersCards = document.getElementById("cardsUsers");
async function allData() {
  const data = await fetch(url)
  const allData = await data.json()
  return allData;
}
let photoArrayUsers = [
  // 'user.jfif',
  // 'user1.jfif',
  // 'user2.jfif',
  // 'user3.jfif',
  // 'user4.jfif',
  // 'user5.jfif',
  // 'user6.jfif',
  // 'user7.jfif',
  // 'user8.jfif',
  // 'user9.jfif',
]
function arrayPhotoRun() {

}
async function createUsers() {
  const users = await allData()
  usersCards.innerHTML += users.map((item) => {
    console.log(users);
    return `<div class="card mb-5" style="width: 18rem ;">
    <img class="card-img-top" src="${usersPhoto}" alt="Card image cap">
    <div class="card-body">
      <h5 class="Friends-card">Friends card</h5>
      <p class="card-text">
      first name: ${item.name.first}<br>
      age: ${item.age}<br>
      email: ${item.email}<br>
      phone: ${item.phone}$<br>
      id: ${item._id}
      </p>
      <a href="#" class="btn btn-primary">Click to send a message</a>
    </div>
  </div>`
  })
}
createUsers()