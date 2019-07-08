const initialState = {
  isChecked: false
}

const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKBOX_HANDLER':
      state = {
        isChecked: !action.payload
      }
      break
    default:
      break
  }
  return state
}

export default switchReducer
