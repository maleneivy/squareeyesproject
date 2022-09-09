const baseUrl = "https://squareeyes.maleneivy.com/wp-json/wc/store/products?per_page=16";

// TODO: Fjern denne metoden. Hvorfor? Den er ikke gjenbrukbar.
const latestMoviesContainer = document.querySelector(".latest-movies");
async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    latestMoviesContainer.innerHTML =
        `<h2 class="h1-220px">Latest Movies</h2>`

    products.forEach(product => {

        latestMoviesContainer.innerHTML +=
            `<div class = "content__latest-movies">
        <img src = "${product.images[0].src}">
        <h2>${product.name}</h2>
        <div>${product.description}</div>
                    <a href="about-the-movie.html">Learn More</a>
                    </div>
        `


        /*  let categories = product.categories.map(category => category.name).join(', ')
          console.log(categories);
          console.log(product['categories'][0]['name']) */
    });
}

async function fetchAllMovies(url) {
    const response = await fetch(url);
    return await response.json();
}

async function insertMovies(movies, tag, sectionTitle, itemClass, htmlContainerQuery) {
    const container = document.querySelector(htmlContainerQuery);

    container.innerHTML = `<h2 class="h1-220px">${sectionTitle}</h2>`

    movies.forEach(movie => {
        const tagNames = movie.tags.map(tag => tag.name)
        if (!tagNames.includes(tag)) {
            return;
        }

        container.innerHTML += `
        <div class="${itemClass}">
            <img src="${movie.images[0].src}">
            <h2>${movie.name}</h2>
            <div>${movie.description}</div>
            <a href="about-the-movie.html">Learn More</a>
        </div>
        `
    });
}

fetchAllMovies(baseUrl).then(movies => {
    console.log(movies);
    insertMovies(movies, "Latest Movies", "Latest movies", "content__latest-movies", ".latest-movies");
    insertMovies(movies, "Top Ten", "The weekly Top 10 Movies", "content__top-10-movies", ".top-10-movies");
});
