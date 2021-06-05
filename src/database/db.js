const mongoose = require('mongoose')
// `mongodb+srv://sample_user:<password>Queendom1985/<dbname>?Domsdb`;
const url = 'mongodb+srv://Domino31620:Queendom1985@cluster0.xwfsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })