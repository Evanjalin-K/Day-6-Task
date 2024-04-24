class Movie{
    constructor(title, studio, rating = "PG"){
        //console.log("Creating a movie with the given details:", title, studio, rating)
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        //console.log(`${this.title} is released by ${this.studio} and it has ${this.rating} ratings`);
    }
    static getPG(movies){
       return movies.filter(movie => movie.rating === "PG")
          
    }      
}
const movie1 = new Movie("Casino Royale", "Eon Productions","PG:13");
const moviesArray = [
    new Movie("Jumanji", "TriStar Pictures", "PG"),
    new Movie("Finding Nemo", "Pixar Animation Studios", "G"),
    new Movie("Frozen", "Walt Disney Pictures", "PG"),
    new Movie("Scream", "Spyglass Media Group", "R"),
]  
const pgMovies = Movie.getPG(moviesArray,movie1)
console.log("PG Rated Movies:");
pgMovies.forEach(movie => console.log(movie.title));
