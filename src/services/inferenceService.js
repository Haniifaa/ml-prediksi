const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image) {
    try {
        const tensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
            // .div(tf.scalar(255));

        
        const prediction = model.predict(tensor);
        const probabilities = await prediction.data();
        // const confidenceScore = Math.max(...score) * 100;
        // const classes = ['Cancer', 'Non-Cancer'];
        const cancerProbability = probabilities[0];

        const label = cancerProbability > 0.5 ? 'Cancer' : 'Non-cancer';
        //const classResult = tf.argMax(prediction, 1).dataSync()[0];
        //const label = classes[classResult];
//   if (confidenceScore > 90){
//     label= 'Cancer';
//   }
//   else{
//     label= 'Non-cancer';
//   }

  

        let suggestion;

        if (label === 'Cancer') {
            // && confidenceScore > 99
            suggestion = "Segera periksa ke dokter!"
        } 
        // if (label === 'Non-Cancer' && confidenceScore <= 99){
        if (label === 'Non-Cancer') {
            // && confidenceScore <= 90
            suggestion = "Tidak perlu khawatir, tetap jaga kesehatan!"
        }
        return { label, suggestion };
        // , confidenceScore

    } catch (error) {
      console.error('Error in predictClassification:', error);
      throw new InputError(`Error in prediction: ${error.message}`);
    }
}

module.exports = predictClassification;



// const tf = require('@tensorflow/tfjs-node');
// const InputError = require('../exceptions/InputError');

// async function predictClassification(model, image) {
//   try {
//     const tensor = tf.node
//     .decodeJpeg(image)
//     .resizeNearestNeighbor([224, 224])
//     .expandDims()
//     .toFloat()

//     const prediction = model.predict(tensor);
//     const score = await prediction.data();
//     const label = score > 0.5 ? 'Cancer' : 'Non-cancer';

//     let suggestion;
 
//   if (label === 'Cancer') {
    
//     suggestion = "Segera konsultasi dengan dokter terdekat"
//   }
 
//   if (label === 'Non-cancer') {
    
//     suggestion = "Tidak ada cancer yang terdeteksi, tetap jaga kesehatan"
//   }
//   return { label, suggestion };
//   } catch(error){
//     throw new InputError(`${error.message}`)
//   }
// }

// module.exports = predictClassification;
