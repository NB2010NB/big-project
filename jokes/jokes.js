const joke = document.getElementById("jok")
const jokeText = document.getElementById("textJoke")
const url = "http://api.icndb.com/jokes/random"
async function jokes() {
    let res = await fetch(url)
    let data = await res.json()
    return data
}
async function jokesRnd() {
    let jokesRn = await jokes()
    // console.log(jokesRn, 88);
    jokeText.innerText = jokesRn.value.joke
}
function loadJokes() {
    setInterval(() => { jokesRnd() }, 2000)
} loadJokes()
// const photoJokes = document.getElementById("joke")
// photoJokes.innerHTML = im