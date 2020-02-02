class handlers {
    constructor(usecase) {
        this.usecase = usecase
    }

    async getCharacters(req,res){
        try {
            const currentPage = req.query.currentPage
            const pageSize   = req.query.pageSize
            const data = await this.usecase.getCharacters(currentPage, pageSize)
            if(!data){
                res.status(404).json({
                    success: false,
                    message: 'character not found',
                    data: data
                });
            }
            res.status(200).json({
                success: true,
                message: 'character retrieved',
                data: {result: data.paginatedData, meta: data.paginationInfo}
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Error fetchig character",
                data: error
            });
        }
    }

    async getSortedCharacters(req,res) {
        try {
        const currentPage = req.query.currentPage
        const pageSize   = req.query.pageSize
        const race = req.query.race;
        const gender = req.query.gender;
        const order = req.query.order;
        const data = await this.usecase.getCharacters(currentPage, pageSize)
        if(!data){
            res.status(404).json({
                success: false,
                message: 'character not found',
                data: data
            });
        }

        const filterData = data.paginatedData.filter(character =>{
            return character.race === race && character.gender === gender
        })

        if(order === "asc"){
            //sort by _id
            res.status(200).json({
                success: true,
                message: 'character retrieved',
                data: {result: filterData.sort(), meta: data.paginationInfo}
            });
        }else{
            res.status(200).json({
                success: true,
                message: 'character retrieved',
                data: {result: filterData.sort().reverse(), meta: data.paginationInfo}
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error fetchig character",
            data: error
        });
    }
 }
}
module.exports = handlers