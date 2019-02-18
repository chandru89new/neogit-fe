const baseURL = "https://api.github.com"
const tokenAPI = (process.env.NODE_ENV == 'production') ? 'http://18.202.198.215:3000/' : 'http://localhost:3000'
export default {
  user: `${baseURL}/users/`,
  repo: `${baseURL}/repos/`,
  login: `https://github.com/login/oauth/authorize`,
  token: tokenAPI
}