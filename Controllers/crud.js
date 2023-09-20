const {m_User} = require('../models/m_user')
const multer = require('multer')
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './uploads')
        },
        filename: function (req, file, cb) {
            cb(null , file.originalname)
        }
    })
}).array('file')

async function getData(req, res){
    console.log('cookies ::', req.cookies)
    res.cookie('Test cookies', 'my cookies', {
        httpOnly: true, // default is false
        sameSite: 'lax'
    })
    res.send('cookies sent success')
    // console.log('req.params ::', req.params)
    // console.log('req.query ::', req.query)
    // console.log('req.body ::', req.body)
    // // let data = await User.findAll()
    // let data = await m_User.find().select({
    //     _id:0
    // }).sort({
    //     age: -1
    // })
    // // <key-name>: 1
    // // console.log('Hi Get Request is Trigged', req)
    // res.status(201).send(data)
}

async function createData(req, res){
    // if(!req.body.name){
    //     res.status(401).end('name is Required')
    //     return
    // }

    let name = req.body.name
    // let fc = req.body.favoriteColor
    let age = req.body.age
    let well = req.body.well
    // let cash = req.body.cash

    // let data = await User.create({
    //     name: name,\
    //     favoriteColor: fc,
    //     age: age,
    //     cash: cash
    // })
    let data = await m_User.create({
        name: name,
        age: age,
        well: well
        // unstructured: req.body.unstructure ?? {}
    })
    console.log('req.query', req.query)
    console.log('Create API')
    console.log('body dat ::', req.body)
    res.status(201).send({data: data})
}
// nodemon file.js
async function updateData(req, res){
    console.log('update api')
    console.log('update req body ::', req.body)
    let name = req.query.name
    let updatedName = req.query.updatedName
    let age = req.query.age
    let data = await m_User.updateOne(
        {
            name: name   // conditionjnjifdnjnwjen
        },
        {
            $set: {
                name: updatedName, // valued
                age: age
            }
        }
    ) 
    res.status(201).send(data)
}

async function DeleteData(req, res){
    console.log('delete api')
    console.log('delete req body ::', req.body)
    let name = req.body.name
    let result = await m_User.deleteMany({
        'name': name
    })
    res.status(201).send(result)
}

function uploadFiles(req, res){
    let files = req.files
    res.status(200).send(files)
}

module.exports = { getData, updateData, DeleteData, createData, upload, uploadFiles}