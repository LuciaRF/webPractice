const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", generateJoe);

generateJoe();


//USING ASYNC/AWAIT METHOD
async function generateJoe() {
    const config = {
        headers: {
            Accept: "application/json",
        }
    };

    const res = await fetch('https://icanhazdadjoke.com/', config) /*fetch is sync, with await we make it async and we have to put async in the function*/
    const data = await res.json(); /*we have to wait for the response to be converted to json*/
    jokeElement.innerHTML = data.joke;
}


//USING .then() METHOD
// function generateJoe() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         }
//     };
//     fetch('https://icanhazdadjoke.com/', config).
//     then(response => response.json().
//     then(data => {jokeElement.innerHTML = data.joke}))
// }
