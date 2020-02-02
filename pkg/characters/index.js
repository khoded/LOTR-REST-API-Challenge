const characterDelivery = require('./delivery/http/routes/routes')
const repository = require('./repository/lotr_repo');
const usecase = require('./usecase/usecase');

//register character service
const repoInstance = new repository()
const usecaseInstance = new usecase(repoInstance)
characterDelivery.characterDelivery(usecaseInstance)

module.exports ={
    characterService: characterDelivery.api
}
