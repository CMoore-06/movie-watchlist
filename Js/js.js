//Delcare Variables
const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const genreSelect = document.getElementById("movie-genre");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

const watchList = {
    // movies: [],
    movies: [{ title: "The Princess Bride", genre: "Adventure", watched: false }],
    toggleWatched(index) {
        // TODO (Step 4)
    },
    removeMovie(index) {
        // TODO (Step 4)
    }
};

//Add Event Listeners


//Functions
function saveMovies() {
  // TODO (Step 6)
}

function loadMovies() {
  // TODO (Step 6)
}

function renderMovies() {
    if(watchList.movies.length == 0) {
        emptyMessage.textContent = "You currently have no movies in your watchlist.";
    }

    else {
        movieList.replaceChildren(); // Remove the old display, not the data.

        watchList.movies.forEach((movie, index) => {
        const card = document.createElement("li");
        const title = document.createElement("h3");
        title.textContent = movie.title;

        const details = document.createElement("p");
        details.textContent = movie.watched ? "Finished" : "Not finished";

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = movie.watched ? "Mark Unfinished" : "Mark Finished";
        button.addEventListener("click", () => {
            watchList.markFinished(index); // 1. change the data
            renderMovies();                   // 2. redraw the list
        });

        card.append(title, details, button);
        movieList.append(card);
        });
    }
}

form.addEventListener("submit", (event) => {
  // TODO (Step 5)
});

loadMovies();
renderMovies();