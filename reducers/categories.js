const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        {
          id: nextId++,
          name: action.name,
          description: action.description
        }
      ]

    case 'FETCH_CATEGORIES':
      return action.categories

    default:
      return state
  }
}
export default categories