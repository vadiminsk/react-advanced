export default function (state = {}, action) {
  switch (action.type) {
    case 'MOVIE_LIST':
      return action.payload;
    default:
      return state;
  }
}
