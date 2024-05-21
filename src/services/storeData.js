const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {

//   const firestoreConfig = {
//     projectId: 'submissionmlgc-haniifaaliila',
//     keyFilename: './submissionmlgc-haniifaaliila-7b758834712a.json',
//     databaseId: '(default)', // Tambahkan databaseId di sini
//   };

    const db = new Firestore();
   
    const predictCollection = db.collection('prediction');
    await predictCollection.doc(id).set(data);
  }

module.exports = storeData;