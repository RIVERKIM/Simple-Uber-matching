const fetch = require('node-fetch');

export async function post(req, res, next) {
    res.setHeader('Content-Type', 'application/json')

    let data = req.body
    console.log(data)
    
    fetch('https://teamh-app1.herokuapp.com/item', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ p: data.p, d: data.d, a: data.a, })
        })
    .then(() => {
        console.log('Info sended to the https://teamh-app1.herokuapp.com/item')
        return res.end(JSON.stringify({ success: true }))
    })
    .catch(err => {
        console.error(err)
        return res.end(JSON.stringify({ success: false }))
    }) 
}