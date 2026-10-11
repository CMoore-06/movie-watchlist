# Movie Watchlist Webpage

## Properties

I used the same properties that were given in the assingment details, I didn't change any and built my HTML ids around the already named properties. The only one I added was newMovie, which was an object held the input values from the webpage's form. I used this object to add the new movie to the movies array.

## Saving and Loading

Saving works by adding the newMovie object to the new movies array, and then stringifying the array and saving it in the local storage.

Loading works by parsing the Json string saved in the local storage and saving it in the saved variable. Then I used an if statement to check that saved isn't null, and if it isn't then I set the movies array equal to saved. After that renderMovies() is called and the method adds the array to the <ul>.

## [Repository link](https://github.com/CMoore-06/movie-watchlist)