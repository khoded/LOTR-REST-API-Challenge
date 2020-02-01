const axios = require('axios');
const access_token = 'oqY_-y8VBit_ipCuAY7O'
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
class moviesRepository {
    async getMovies(){
        try {
            const response = await axios.get('https://the-one-api.herokuapp.com/v1/movie');
            return response.data 
          } catch (error) {
            throw error
          }
        }
    }
module.exports = moviesRepository