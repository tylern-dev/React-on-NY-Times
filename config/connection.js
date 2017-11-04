import mongoose from 'mongoose';

const mongooseConnection = () => {
    mongoose.Promise = global.Promise;

    process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist',
    {
        useMongoClient: true
    }
}

export default mongooseConnection;