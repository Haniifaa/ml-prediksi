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




// const postPredictHandler = require('../server/handler');
 
// const routes = [
//   {
//     path: '/predict',
//     method: 'POST',
//     handler: postPredictHandler,
//     options: {
//       payload: {
        
//         maxBytes: 1000000, // 1MB
//         output: 'stream',
//                 parse: true,
//                 allow: 'multipart/form-data',
//                 multipart: true,
              
        
        // failAction: (request, h, err) => {
        //     if (err.output.statusCode === 413) {
        //         return h.response({
        //             status: 'fail',
        //             message: 'Payload content length greater than maximum allowed: 1000000'
        //         }).code(413).takeover();
        //     }
        //     throw err;
        // }
//       }
//     }
//   }
// ]
 
// module.exports = routes;