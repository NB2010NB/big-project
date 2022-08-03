const url = "https://api.tvmaze.com/search/shows?q=1"
async function moviesApi() {
  let res = await fetch(url)
  let movie = await res.json();
  console.log(movie);
  return movie
}
const movieCards = document.getElementById("cards-movie")
async function printData() {
  let dataMovie = await moviesApi()

  movieCards.innerHTML = dataMovie.map((item) => {
    return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.show.image.medium}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">name movie:${item.show.name}</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
  })
} printData()