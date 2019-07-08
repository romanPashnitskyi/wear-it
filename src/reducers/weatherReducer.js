const initialState = {
  city: '',
  country: undefined,
  temp: undefined,
  description: undefined,
  icon: undefined,
  list: null
}

export default function weatherReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      state = {
        city: action.payload.city,
        country: action.payload.country,
        temp: action.payload.temp,
        description: action.payload.description,
        icon: action.payload.icon,
        list: action.payload.list,
        isChecked: !action.payload
      }
      break
    default:
      break
  }
  return state
}
