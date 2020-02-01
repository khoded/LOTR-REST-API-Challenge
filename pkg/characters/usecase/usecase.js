class characterUseCase {
    constructor(repo){
        this.repo = repo
    }
    async getCharacters(){
        try {
            const data = await this.repo.getCharacters()
            return data
        } catch (error) {
            throw error
        }
    }

}
module.exports = characterUseCase