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
}
module.exports = handlers