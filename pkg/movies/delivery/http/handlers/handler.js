class handlers {
    constructor(usecase) {
        this.usecase = usecase
    }

    async getMovies(req,res){
        try {
            const data = await this.usecase.getMovies()
            if(!data){
                res.status(404).json({
                    success: false,
                    message: 'Movies not found',
                    data: data
                });
            }
            res.status(200).json({
                success: true,
                message: 'Movies retrieved',
                data: data
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Error fetchig movies",
                data: error
            });
        }
    }

    async getSortedMovies(req, res){
        try {
            const sortFilter = req.query.sortBy
            const order = req.query.order
            const data = await this.usecase.getSortedMovies(sortFilter, order)
            if(!data){
                res.status(404).json({
                    success: false,
                    message: 'Movies not found',
                    data: data
                });
            }
            function bureauDeChange(dollarAmount){
                const fullConv = dollarAmount * Math.pow(10,6)
                const total =  fullConv*350
                return "₦"+total.toLocaleString()
            } 
            const movies = data.map(movie => {
                  
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
            res.status(200).json({
                success: true,
                message: 'Sorted Movies retrieved',
                data: movies
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Error fetchig movies",
                data: error
            });
        }

    }
}
module.exports = handlers