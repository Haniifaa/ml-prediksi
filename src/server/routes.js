const postPredictHandler = require('../server/handler');
const getPredictionHistoriesHandler = require('../server/historyhandler');


const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
            //  output: 'data',
            //     parse: true,
                allow: 'multipart/form-data',
                multipart: true,
            }
        }
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: getPredictionHistoriesHandler
    }
]

module.exports = routes;


