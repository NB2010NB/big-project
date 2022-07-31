const joke = document.getElementById("jok")
const url = "http://api.icndb.com/jokes/random"
async function jokes() {
    let res = await fetch(url)
    let data = await res.json()
    return data
}

async function jokesRnd() {
    let jokesRn = await jokes()
    console.log(jokesRn, 88);
    joke.innerHTML += jokesRn.value.id
    joke.innerHTML += jokesRn.value.joke
    

}
jokesRnd()