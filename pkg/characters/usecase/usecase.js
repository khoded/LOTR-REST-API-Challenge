const {calculateLimitAndOffset, paginate} = require('paginate-info')
class characterUseCase {
    constructor(repo){
        this.repo = repo
    }
    async getCharacters(currentPage,pageSize){
        try {
            const data = await this.repo.getCharacters()
            const character = data.docs
            const {limit, offset} = calculateLimitAndOffset(currentPage, pageSize)
            const dataLength = character.length
            const paginatedData = character.slice(offset, offset + limit)
            const paginationInfo = paginate(currentPage, dataLength, paginatedData)
    
            return {paginatedData, paginationInfo}
        } catch (error) {
            throw error
        }
    }

}
module.exports = characterUseCase