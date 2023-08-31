let express = require('express') // import the express library
let bodyParser = require('body-parser')
let controllers = require('./Controllers/crud')
let dbConnection = require('./DB_Connection')
let {conn} = require('./mongo_db_connection')
let app = express() // define the object of express

// listen function is used to activate and listening the request at a server at specific port.
app.listen(4000, function callback(){
    console.log('Server is started and listening at Port Number 4000')
})
// const mongoose = require('mongoose')
// connectDB()
conn.then(()=>{console.log('Mongo db Connected Successfully.')}).catch((error)=>{console.log('error in connecting mongodb ::', error)})

// Use to add the middleware, It parse the json data into the object, when it comes infront of all the endPoints,  This type of middleware is also called as application middleware.
app.use(bodyParser.json()) // application middleware
// app.use(endPoint, middleware) // route middleware
// when a function pass as a argument in a another function then that function is called as callback function.

dbConnection.dbConnection.authenticate().then(()=>{// send dummy sql query, if the result of this query is positive It's mean db connection successfully otherwise not
    console.log('db Connection Success')
}).catch((error)=> { console.log('error in Connection', error) })

// console.log('mongodb ::', mongodb_connection)
// mongodb_connection
// .then(()=>{console.log('mongo db Connection successfully.')})
// .catch((error)=>{console.log('err in connecting mongo db ::', error)})

// ceate all the table associated with that.
dbConnection.dbConnection.sync().then((data)=>console.log('table create success')).catch((error)=>{console.log('error in table')})

// This is a get api
app.get('/v1/getDetails', controllers.getData)

// This is a post api, route middleware
app.post('/v1/createDetails', controllers.createData)

// Update End Point, to update existing Information
app.put('/v1/update', controllers.updateData)

// Update End Point, to update existing Information
app.delete('/v1/delete', controllers.DeleteData)

// 200 => Read the data from the server
// 201 => Create the resource in the server // exact word is Modification of resource in the database, It may be due to post, update or delete
// 202 => No content found.
// 500 => internal Error.
// 401 => Required Details is Missing ie Unauthorized Error
// 403 => Forbidden Error ie permission error
// 404 => page not found.
// 409 => Already Created Resource.

// How we can create custom middleware ?

// req.query
// req.param

// migration or seeders
