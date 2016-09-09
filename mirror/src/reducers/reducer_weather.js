import { FETCH_WEATHER } from '../actions/action_weather'

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return action.payload
    default:
      return state
  }
}
