class moviesUseCase {
    constructor(repo){
        this.repo = repo
    }

    async getMovies(){
        try {
            const data = await this.repo.getMovies()

            function bureauDeChange(dollarAmount){
                const fullConv = dollarAmount * Math.pow(10,6)
                const total =  fullConv*350
                return "₦"+total.toLocaleString()
            } 
            const moviesArray = data.docs
            const movies = moviesArray.map(movie => {
                  
                  return{
                        ID:  movie._id,
                        movieName: movie.name,
                        runtime:  movie.runtimeInMinutes,
                        budget: bureauDeChange(movie.budgetInMillions),
                        boxOfficeRevenue: bureauDeChange(movie.boxOfficeRevenueInMillions),
                        nominations: movie.academyAwardNominations,
                        academyWins: movie.academyAwardWins
                }  
            })

            return movies
        } catch (error) {
            throw error        
        }
    }

    async getSortedMovies(sortFilter, order){
        try {
            const data = await this.repo.getMovies()
            const moviesArray = data.docs
      
        if (sortFilter ==="budget" && order === "asc") {
            return   moviesArray.sort((a,b)=> a.budgetInMillions - b.budgetInMillions)
            }else if(sortFilter==="budget" && order === "dsc"){
                return   moviesArray.sort((a,b)=> b.budgetInMillions - a.budgetInMillions)
                }else if(sortFilter==="revenue" && order==="asc"){
                    return  moviesArray.sort((a,b)=> a.boxOfficeRevenueInMillions - b.boxOfficeRevenueInMillions)
                        }else if(sortFilter==="revenue" && order==="dsc"){
                            return  moviesArray.sort((a,b)=> b.boxOfficeRevenueInMillions - a.boxOfficeRevenueInMillions)
                                }else if(sortFilter==="runtime" && order ==="asc" ){
                                    return  moviesArray.sort((a,b)=> a.runtimeInMinutes - b.runtimeInMinutes)
                                        }else if(sortFilter==="runtime" && order ==="dsc"){
                                             return  moviesArray.sort((a,b)=> b.runtimeInMinutes - b.runtimeInMinutes)
                                                 }else{
                                                    return moviesArray
                                                     }    
       
        } catch (error) {
         throw error   
        }
    }

}
module.exports = moviesUseCase;