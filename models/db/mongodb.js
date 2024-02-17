const mongoose = require('mongoose');
//TODO - Replace you Connection String here
const DB_USER = process.env.DB_USER || "sa"
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD || 'pF5Z8ww9JtATIsp2';
const DB_CLUSTER = process.env.DB_CLUSTER || 'cluster0.7wn4nmp.mongodb.net';
const DB_NAME = process.env.DB_NAME || 'w2024_comp3133s';

const mongodb_atlas_url = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = () => {
    
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    try {
      mongoose.connect(mongodb_atlas_url, connectionParams);
      console.log('Success Mongodb connection')
    } catch (er) {
        console.log('Error Mongodb connection')
    }
};