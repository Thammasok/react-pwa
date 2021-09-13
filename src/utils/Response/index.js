const handleResponse = {
  Clear: data => {
    const { type, dispatch } = data
    dispatch({
      type
    })
  },
  Success: data => {
    const { type, dispatch, payload } = data
    dispatch({
      type,
      payload
    })
  },
  Error: data => {
    const { type, dispatch, error, errorPage, attach } = data

    if (error.data?.msg === 'Network Error') {
      // Network Error
      // url /error/500 => [,error,500]
      if (errorPage) {
        const path = window.location.pathname.split('/')
        if (path[1] !== 'error') {
          window.location.replace(
            `/error/500?redirect=${window.location.pathname}`
          )
        }
      } else {
        dispatch({
          type,
          payload: {
            error: {
              err: true,
              status: 401,
              data: {
                msg: "Network error or can't access the network, please try again."
              },
              ...attach
            }
          }
        })
      }
    } else if (error.status === 401) {
      // 401 Logout, clear user token
      console.log('TODO: Token Exits')
    } else {
      // Normal Error
      dispatch({
        type,
        payload: {
          error: {
            err: true,
            status: error.status,
            data: {
              ...error
            },
            msg: error.data?.msg,
            ...attach
          }
        }
      })
    }
  }
}

export default handleResponse
