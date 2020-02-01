const axios = require('axios');
const access_token = 'oqY_-y8VBit_ipCuAY7O'
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
class characterRepository {
    async getCharacters(){
        try {
            const response = await axios.get('https://the-one-api.herokuapp.com/v1/character');
            return response.data 
          } catch (error) {
            throw error
          }
        }
    }
module.exports = characterRepository