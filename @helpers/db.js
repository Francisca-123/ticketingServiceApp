const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('Connected to Database');
    }

    catch (error){
        console.log(`Unable to connect to Database: ${error.message}`);
    }
}

module.exports = connectDB