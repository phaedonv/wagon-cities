export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) { // mutiway branch to case, istead of else if idiom
    case "SET_CITIES":
      return action.payload;
    default:
      return state;
  }
}
