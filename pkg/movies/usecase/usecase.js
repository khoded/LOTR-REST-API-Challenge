class moviesUseCase {
    constructor(repo){
        this.repo = repo
    }
}

async getMovies(){
    try {
        const data = await this.repo,getMovies()
        return data
    } catch (error) {
        throw error        
    }
}


module.exports = moviesUseCase;