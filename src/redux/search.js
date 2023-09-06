const init = {
  search: "",
  click: false,
};

function searchReducer(state = init, action) {
  if (action.type === "search") {
    return {
      ...state,
      search: action.payload.search,
      click: action.payload.click,
    };
  }
  return state;
}

export default searchReducer;
