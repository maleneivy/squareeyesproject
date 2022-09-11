const movieBoxImage = document.querySelector(".box1-about-the-movie");
const movieBoxDescription = document.querySelector(".box2-about-the-movie");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const movieUrl = "https://squareeyes.maleneivy.com/wp-json/wc/store/products/" + id;



async function fetchMovie() {

    try {
        const response = await fetch(movieUrl);
        const movie = await response.json();

        movieBoxImage.innerHTML = "";
        movieBoxDescription.innerHTML = "";
        createHtml(movie);

    }
    catch (error) { }

}
fetchMovie();


function createHtml(movie) {
    movieBoxImage.innerHTML =
        `<div class="movie-poster-about-the-movie">
        <img src = "${movie.images[0].src}">
        <p>${movie.prices.price} ${movie.prices.currency_code}</p>
        <a href="payment.html" class="cta cta-big">watch movie</a>
    </div>`

    const categories = movie.categories.map(category => category.name).join(', ')

    movieBoxDescription.innerHTML =
        `<h1>${movie.name}</h1>
        <p>${categories}</p>
        <a class="links-to-movies-producers" href="about-producer.html">Producers name</a>
        <div>${movie.description}</div>
        
        `

}