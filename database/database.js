const mongoose = require('mongoose');

// const uri =
//   "mongodb+srv://pranshudobhal:Dobhal@1962@shoemeup.xxxj6.mongodb.net/inventory?retryWrites=true&w=majority"
// const mySecret = process.env['DATABASE_URI']
// ;

async function connectToDatabase(){
  try{
    await mongoose.connect(process.env['DATABASE_URI'], {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Connection to database is successfull!')
  } catch (error) {
    console.log('Error connecting to database!!!')
  }
}


module.exports = { connectToDatabase }