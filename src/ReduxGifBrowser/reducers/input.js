let initialState = []

const inputTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUTTEXT':
      return state.concat(action.payload)
    default:
      return state
  }
  
}

export default inputTextReducer;