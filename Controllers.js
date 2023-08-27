const {User} = require('./models/user')
async function getData(req, res){
    console.log('req.params ::', req.params)
    console.log('req.query ::', req.query)
    console.log('req.body ::', req.body)
    let data = await User.findAll()
    // console.log('Hi Get Request is Trigged', req)
    res.status(201).send(data)
}

async function createData(req, res){
    // if(!req.body.name){
    //     res.status(401).end('name is Required')
    //     return
    // }

    let name = req.body.name
    let fc = req.body.favoriteColor
    let age = req.body.age
    let cash = req.body.cash

    let data = await User.create({
        name: name,
        favoriteColor: fc,
        age: age,
        cash: cash
    })
    console.log('req.query', req.query)
    console.log('Create API')
    console.log('body data ::', req.body)
    res.status(201).send(data)
}

function updateData(req, res){
    console.log('update api')
    console.log('update req body ::', req.body)
    res.status(201).send('Update API is Hit')
}

function DeleteData(req, res){
    console.log('delete api')
    console.log('delete req body ::', req.body)
    res.status(201).send('delete API is Hit')
}

module.exports = { getData, updateData, DeleteData, createData }