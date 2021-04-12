export default function (state = {}, action) {
  switch (action.type) {
    case 'MOVIES_LIST':
      return { ...state, moviesList: action.payload };
    default:
      return state;
  }
}
