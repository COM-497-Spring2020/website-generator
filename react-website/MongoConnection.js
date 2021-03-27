
const connectionString = 'mongodb+srv://bjorn:bjorn123@project.ihmpb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const express = require('express')
const mongoose = require('mongoose')
const userSchema = require('./userSchema.js')
const User = mongoose.model('user', userSchema, 'user')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/api/form', (req, res) => {
    console.log(req.body);
    db.collection('quotes').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
    })
});
//creating a user based on the input
// async function createUser(username) {
//     return new User({
//         restaurant_name,
//         Phone_number,
//         About,
//         date_opened,
//         street_address,
//         city,
//         state,
//         // Menu,
//         // Logo
//     }).save()
// }

//prevents duplicate user
// async function findUser(username) {
//     return await User.findOne({ username })
// }

// ;(async () => {
//     const connector = mongoose.connect(connectionString)
//     const username = process.argv[2].split('=')[1]

//     let user = await connector.then(async () => {
//         return findUser(username)
//     })

//     if (!user) {
//         user = await createUser(username)
//     }

//     console.log(user)
//     process.exit(0)
// })()