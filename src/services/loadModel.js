const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/bucket-prediction123/model-in-prod/model.json');
}
module.exports = loadModel;