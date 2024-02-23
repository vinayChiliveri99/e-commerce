import { SEARCH_QUERY } from '../actions/searchActions';

const initialState = {
  searchValue: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
