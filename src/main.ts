import './style.css'

type Movie = {
  id: number
  title: string
  thumbnail: string
  description: string
  coment: string
}

type State = {
  movies: Movie[]
  selectedMovie: Movie | null
}

let state: State = {
  movies: [
    {
      id: 1,
      title: 'The Dark Knight',
      thumbnail:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      coment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
      id: 2,
      title: 'Star Wars',
      thumbnail:
        'https://play-lh.googleusercontent.com/7OTx1DboUIszuMbHZwFHhYOLRQspWozEx7xFtYKG674mtGA_PSRPGIdtv7jmR4jQ9d0=w240-h480-rw',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      coment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
      id: 3,
      title: 'The Godfather',
      thumbnail:
        'https://images-na.ssl-images-amazon.com/images/I/714ZOEiVNtL._RI_.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      coment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
      id: 4,
      title: 'Jaws',
      thumbnail:
        'https://m.media-amazon.com/images/M/MV5BN2U1MWE1NTMtYjQ2ZC00MTFmLWFmYjItODMyNGYxOTAyZmEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      coment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    }
  ],
  selectedMovie: null
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
  movieEl.className = 'movie'

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
}

function renderMovie(movie: Movie) {
  let movieEl = document.createElement('li')
  movieEl.className = 'movie'
  movieEl.addEventListener('click', function () {
    selectMovie(movie)
    render()
  })

  let thumbnailEl = document.createElement('img')
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

  movieEl.append(thumbnailEl, titleEl, descriptionEl, comentEl)
  return movieEl
}

function renderMovieGrid(mainEl: HTMLElement) {

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Movies'

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
