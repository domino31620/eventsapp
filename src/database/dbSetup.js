const mongoose = require('mongoose')

module.exports = () => {
    const uri =
        'mongodb+srv://domino31620:Queendom1985@cluster0.ycij0.mongodb.net/admin?authSource=admin&replicaSet=atlas-dacybw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
    mongoose.connect(
        uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
        err => {
            if (err) throw err
            console.log('connected to Atlas Remote Database')
        }
    )
}


'mongodb + srv: //domino31620:Queendom1985@cluster0.ycij0.mongodb.net/admin?authSource=admin&replicaSet=atlas-dacybw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}