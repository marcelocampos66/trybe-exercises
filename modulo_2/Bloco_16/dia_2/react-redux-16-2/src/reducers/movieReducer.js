import categories from '../data';

const INITIAL_STATE = {
  categories,
  selectedMovie: {},
  selectedCategory: {},
}

function movieReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SELECT_MOVIE') {
    return {
      ...state,
      selectedCategory: action.category,
      selectedMovie: action.movie,
    }
  }
  return state;
}

export default movieReducer;