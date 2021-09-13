import Cookies from 'js-cookie'

const cookie = {
  GetUser: () =>
    new Promise(resolve => {
      const user = Cookies.get('user')
      resolve(user)
    }),
  SetUser: ({ username }) =>
    new Promise(resolve => {
      Cookies.set(
        `user`,
        {
          username
        },
        { domain: 'domain.com', secure: true, expires: 30 }
      )

      resolve(true)
    })
}

export default cookie
