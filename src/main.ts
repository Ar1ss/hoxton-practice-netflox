import './style.css'

type Movie = {
  id: number
  title: string
  thumbnail: string
  description: string
  coment:string
}

type State = {
  movies: Movie[]
  selectedMovie: Movie | null
}

let state: State = {
  movies: [],
  selectedMovie : null
}

function getMovies(){
  fetch('http://localhost:3001/movies')
  .then(resp => resp.json())
  .then(movies => {
    state.movies = movies
    render()
  }
  )
}

function deselectedMoive(){
  state.selectedMovie = null
  render()
}

function selectMovie(movie: Movie) {
  state.selectedMovie = movie
  render()
}


function renderMoiveDetails() {

  let mainEl = document.querySelector('main')
  if (mainEl === null) return
  if(state.selectedMovie === null) return

  mainEl.textContent = ''

  let backbuttonEl = document.createElement('button')
  backbuttonEl.textContent = 'Back'
  backbuttonEl.addEventListener('click', function () {
    deselectedMoive()
    render()
  })

  let movieEl = document.createElement('li')
  movieEl.className = 'movie movie-detail'

  let thumbnailEl = document.createElement('img')
  thumbnailEl.src = state.selectedMovie.thumbnail
  thumbnailEl.className = 'movie-thumbnail'
  
  let titleEl = document.createElement('h2')
  titleEl.textContent =state.selectedMovie.title
  titleEl.className = 'movie-title'

  let descriptionEl = document.createElement('p')
  descriptionEl.textContent = state.selectedMovie.description
  descriptionEl.className = 'movie-description'

  let comentEl = document.createElement('p')
  comentEl.textContent = state.selectedMovie.coment
  comentEl.className = 'movie-coment'

  movieEl.append(backbuttonEl,thumbnailEl, titleEl, descriptionEl, comentEl)
  mainEl.append(movieEl)
}

function renderMovie(movie: Movie) {
  let movieEl = document.createElement('li')
  movieEl.className = 'movie'

  let thumbnailEl = document.createElement('img')
  thumbnailEl.addEventListener('click', function () {
    selectMovie(movie)
    render()
  })
  thumbnailEl.src = movie.thumbnail
  thumbnailEl.className = 'movie-thumbnail'


  let titleEl = document.createElement('h2')
  titleEl.textContent = movie.title
  titleEl.className = 'movie-title'

  let descriptionEl = document.createElement('p')
  descriptionEl.textContent = movie.description
  descriptionEl.className = 'movie-description'


  let comentEl = document.createElement('p')

  comentEl.textContent = movie.coment
  comentEl.className = 'movie-coment'

  let deleteMovieEl = document.createElement('button')
  deleteMovieEl.textContent = 'Delete'
  deleteMovieEl.addEventListener('click', function () {
    render()
  })


  movieEl.append(thumbnailEl, titleEl, descriptionEl, comentEl, deleteMovieEl)
  return movieEl

}

function renderMovieGrid(mainEl: HTMLElement) {

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Netflox'

  let movieGridEl = document.createElement('ul')
  movieGridEl.className = 'movie-grid'

  for (let movie of state.movies) {
    movieGridEl.append(renderMovie(movie))
  }

  mainEl.append(titleEl, movieGridEl)

}


function render() {
  let mainEl = document.querySelector('main')
  if (mainEl === null) return
  mainEl.textContent = ''

  if (state.selectedMovie) renderMoiveDetails()
  else renderMovieGrid(mainEl)

  
}
render()
getMovies()


