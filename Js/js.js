//Delcare Variables
const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const genreSelect = document.getElementById("movie-genre");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");
let newMovie;

const watchList = {
    movies: [],
    // movies: [{ title: "The Princess Bride", genre: "Adventure", watched: false }, 
    //         {title: "Godzilla 2014", genre: "Action", watched: true}],
    toggleWatched(index) {
        this.movies[index].watched = !this.movies[index].watched;
    },
    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

//Add Event Listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (titleInput.value.trim() == "") {
    message.textContent = "Please enter a movie title.";
  }

  else if (genreSelect.value == "") {
    message.textContent = "Please select a genre.";
  }

  else {
    message.textContent = "";
    form.addEventListener("submit", saveMovies);
  }
});

//Functions
function saveMovies() {
  newMovie = {
    title: titleInput.value.trim(),
    genre: genreSelect.value,
    watched: false
  };

  watchList.movies.push(newMovie);
  renderMovies();

  localStorage.setItem("movies", JSON.stringify(watchList.movies));
}

function loadMovies() {
    const saved = localStorage.getItem("movies");

    if (saved !== null) {
        try {
            watchList.movies = JSON.parse(saved);
        }

        catch (ex) {
            console.log(ex.message)
        }
    }
}

function renderMovies() {
    movieList.replaceChildren(); // Remove the old display, not the data.

    if(watchList.movies.length == 0) {
        emptyMessage.textContent = "You currently have no movies in your watchlist.";
    }

    else {
        emptyMessage.textContent = "";

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
            watchList.toggleWatched(index); // 1. change the data
            localStorage.setItem("movies", JSON.stringify(watchList.movies)); //2. Save the new data
            renderMovies();                   // 3. redraw the list
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove Movie";
        removeButton.addEventListener("click", () => {
            watchList.removeMovie(index);
            localStorage.setItem("movies", JSON.stringify(watchList.movies));
            renderMovies();
        });

        card.append(title, details, button, removeButton);
        movieList.append(card);
        });
    }
}

loadMovies();
renderMovies();