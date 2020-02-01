const options = {
  hostname: '//the-one-api.herokuapp.com/.com',
  path: '/v1/movie',
  method: 'GET',
  headers:{
    Authorization: ' Bearer oqY_-y8VBit_ipCuAY7O'            
    }
}

class moviesRepository {
    async getMovies(){
        try {
            const data  = await http.request(options)
            return data
        } catch (error) {
            throw error
        }
    }
}