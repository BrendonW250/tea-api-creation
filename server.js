const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo Mommas Crib',
        'waterTemp': 200,
        'steepTime': 180,
        'caffinated': true,
        'flavor': 'delicious' 
    },

    'matcha': {
        'type': 'green',
        'origin': 'Yo Mommas Crib',
        'waterTemp': 100,
        'steepTime': 180,
        'caffinated': false,
        'flavor': 'delicious' 
    },

    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime': 0,
        'caffinated': 'unknown',
        'flavor': 'unknown' 
    }
}

// exact same thing as a click event but using servers
app.get('/', (request, response)=>{//anything done in here is what happens when the server hears the request
    // going to respond by sending a file
    response.sendFile(__dirname + '/index.html')
})

// /:name is the query parameter for 
app.get('/api/:name', (request,response)=>{
    const teaName = (request.params.name.toLowerCase())
    
    // using brackets because of possible space in user input
    if (tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    response.json(tea)
})

// telling the server to listen
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port: ${PORT}! Betta go catch it!`)
})