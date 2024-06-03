const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://nayansigupta29:nayansi260198@todolist.d5pbqpb.mongodb.net/').then(connection => {
    console.log("Connected To Database")
}).catch(err => {
    console.log("Error in database connection.")
})



// module.exports = mongoose.connect('mongodb://localhost:27017/nayansi_db').then(connection => {
//     console.log("Connected To Database")
// }).catch(err => {
//     console.log("Error in database connection.")
// })


