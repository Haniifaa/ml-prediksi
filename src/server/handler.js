const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');
const routes = require('../server/routes');

async function postPredictHandler(request, h) {
    const { image } = request.payload;
    const { model } = request.server.app;

    const { label, suggestion } = await predictClassification(model, image);
    // , confidenceScore
    // confidenceScore
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const data = {
        "id": id,
        "result": label,
        "suggestion": suggestion,
        "createdAt": createdAt
    }
    await storeData(id, data);
    const response = h.response({
        status: 'success',
        message:   'Model is predicted successfully' ,
        data
    })
    response.code(201);
    return response;
}
// confidenceScore > 99 ?
// : 'Model is predicted successfully but under threshold. Please use the correct picture'

module.exports = postPredictHandler;





// const predictClassification = require('../services/inferenceService');
// const crypto = require('crypto');
// const storeData = require('../services/storeData');

// async function postPredictHandler(request, h) {
//     const { image } = request.payload;
//     const { model } = request.server.app;

//     if (image.hapi.headers['content-length'] > 1000000) {
//         return h.response({
//             status: 'fail',
//             message: 'Payload content length greater than maximum allowed: 1000000'
//         }).code(413);
//     }

//     try{
//     const { label, suggestion } = await predictClassification(model, image);

//     const id = crypto.randomUUID();
//   const createdAt = new Date().toISOString();
 
//   const data = {
//     "id": id,
//     "result": label,
//     "suggestion": suggestion,
//     "createdAt": createdAt
//   }

//   await storeData (id, data);


//   const response = h.response({
//     status: 'success',
//     message: 'Model is predicted successfully',
//     data
//   })
//   response.code(201);

//   return response;
// } catch (error) {
//     return h.response({
//         status: 'fail',
//         message: 'Terjadi kesalahan dalam melakukan prediksi'
//     }).code(400);
// }

// };
// module.exports = postPredictHandler;