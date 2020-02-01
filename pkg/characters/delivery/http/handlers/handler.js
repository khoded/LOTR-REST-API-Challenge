const {calculateLimitAndOffset, paginate} = require('paginate-info')
class handlers {
    constructor(usecase) {
        this.usecase = usecase
    }

    async getCharacters(req,res){
        try {
            const data = await this.usecase.getCharacters()
            if(!data){
                res.status(404).json({
                    success: false,
                    message: 'character not found',
                    data: data
                });
            }
            const character = data.docs
            const currentPage = req.query.currentPage
            const pageSize   = req.query.pageSize
            const {limit, offset} = calculateLimitAndOffset(currentPage, pageSize)
            const dataLength = character.length
            const paginatedData = character.slice(offset, offset + limit)
            const paginationInfo = paginate(currentPage, dataLength, paginatedData)
            
            res.status(200).json({
                success: true,
                message: 'character retrieved',
                data: {result: paginatedData, meta:paginationInfo}
            });
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