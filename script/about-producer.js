const movieUrl = "https://squareeyes.maleneivy.com/wp-json/wc/store/products?per_page=16";

const movieContainer = document.querySelector(".latest-movies");

async function fetchMovie() {

    try {
        const response = await fetch(movieUrl);
        const movies = await response.json();

        console.log(movies);
        createHtml(movies);

    }
    catch (error) { }

}
fetchMovie();

function createHtml(movies) {

    movieContainer.innerHTML = `<h2 class="h1-220px">Movies</h2>`

    const threeRandomMovies = [10, 7, 4];
    threeRandomMovies.forEach(movieIndex => {
        movieContainer.innerHTML += `
        <div class="content__latest-movies">
            <img src="${movies[movieIndex].images[0].src}">
            <h2>${movies[movieIndex].name}</h2>
            <div>${movies[movieIndex].description}</div>
            <a href="about-the-movie.html?id=${movies[movieIndex].id}">Learn More</a>
        </div>
        `
    });
};