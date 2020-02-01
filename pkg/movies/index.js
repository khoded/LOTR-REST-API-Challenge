const moviesDelivery = require('./delivery/http/routes/routes')
const repository = require('./repository/lotr_repo');
const usecase = require('./usecase/usecase');

//register news service
const repoInstance = new repository()
const usecaseInstance = new usecase(repoInstance)
moviesDelivery.moviesDelivery(usecaseInstance)

module.exports ={
    moviesService: moviesDelivery.api
}