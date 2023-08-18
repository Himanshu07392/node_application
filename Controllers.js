function getData(req, res){
    console.log('req.params ::', req.params)
    console.log('req.query ::', req.query)
    console.log('req.body ::', req.body)
    // console.log('Hi Get Request is Trigged', req)
    res.status(201).send('Hello')
}

function createData(req, res){
    // if(!req.body.name){
    //     res.status(401).end('name is Required')
    //     return
    // }
    console.log('req.query', req.query)
    console.log('Create API')
    console.log('body data ::', req.body)
    res.status(201).send('Create API is Hit')
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