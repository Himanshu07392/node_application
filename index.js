// const { EventEmitter } = require('events')

// const eventEmitter = new EventEmitter() // create instance of eventEmitter.

// console.log('starting')
// // inbuilt package = It is developed by node js
// // fs, path, os, stream, EventEmitter
// // functionName()

// // addListener = It will register the custom event in the node js server using the event emitter Instance.

// // eventEmitter.addListener('myEvent', (name, lastName)=>{
// //     console.log('Hello World jndsdnj')
// //     console.log(`Hello ${name} ${lastName}`)
// // })

// // on = It will do same things as addListener.

// // eventEmitter.on('myEvent', (name, lastName)=>{
// //     console.log(`Hello ${name} ${lastName}`)
// // })

// // once = It will also do same work expect It execute only one time.
// eventEmitter.once('oneEvent', ()=>{
//     console.log('once time events')
// })

// // emit = It will invoke the custom events.
// // eventEmitter.emit('oneEvent', 'Himanshu', 'Agrawal')
// // eventEmitter.emit('oneEvent', 'Abdul', 'Basha')
// // eventEmitter.emit('oneEvent', 'Vedha', 'Mam')
// eventEmitter.emit('oneEvent')
// eventEmitter.emit('oneEvent')
// // Event driven Architecture = Executing the code on the basis of event occured.

// const http = require('http')  // core package of node js to create the server.

// let server = http.createServer((req, res)=>{
//     console.log('server is started.')
//     // res.write(200)
//     console.log('url ::', req.url)
//     if(req.url == '/home')
//         //home
//         res.end('welcome in home')
//     if(req.url == '/contact')
//         res.end('welcome in contact')

//     res.end('Hello')
// })

// // we have to linkup to the network so that we can accept the request.

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('server is listening at port 8000')
// })

// 1 know the basic of the language and its function