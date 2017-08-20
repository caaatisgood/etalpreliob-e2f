import * as types from 'constants/actionTypes'
import * as basicService from 'api/basicService'

export const hello = () => dispatch => {
  dispatch({
    type: types.HELLO_REQUEST,
  })

  return basicService.hello()
    .then(data => {
      dispatch({
        type: types.HELLO_REQUEST_DONE,
        message: data,
      })
    })
    .catch(error => {
      dispatch({
        type: types.HELLO_REQUEST_FAILED,
        error,
      })
    })
}
