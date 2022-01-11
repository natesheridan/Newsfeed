// GETTOPSTORIES
    // Available sections
        // arts, automobiles, books, business, fashion, food, health, home,
        // insider, magazine, movies, nyregion, obituaries, opinion, politics,
        // realestate, science, sports, sundayreview, technology, theater,
        // t-magazine, travel, upshot, us, and world.

const key = "lhqgWqHx4yj8kbfLG8q2gmNiBiKpOD0i"
const getTopStories = (section) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
    .then(response => response.json())
}

export default getTopStories