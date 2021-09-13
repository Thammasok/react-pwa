import axios from 'axios'

const postService = {
  GetPostLists: async () => {
    let response = null

    try {
      const responseData = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )

      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  }
}

export default postService
