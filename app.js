const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://59ayush:helloabcd1234@teddy.ifueq5k.mongodb.net/?retryWrites=true&w=majority";

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

//console.log("Server running");

app.get('/startup', (req, res) => {
    startup().then((item) => res.status(200).json(item));
})

app.post('/newAppointmentData', (req, res) => {
    const data = req.body;
    add(data.time, data.name, data.age, data.gender, data.bloodgroup, data.ailment);
    res.sendFile(path.join(__dirname, 'public/index.html'));
})



async function startup() {
    const client = new MongoClient(uri);
    var temp = [];
    try {


        const database = client.db("Hospital");
        const collection = database.collection("One");

        const data = collection.find({});
        await data.forEach((item) => {
            console.log(item);
            temp.push(item);
        });
        //console.log(temp);

    } finally {
        await client.close();
    }
    console.log(temp);
    return temp;
}

async function add(time, name, age, gender, bloodgroup, ailment){
    const client = new MongoClient(uri);
    try {


        const database = client.db("Hospital");
        const collection = database.collection("One");

        const filter = {time: time};
        const update = {$set: {name: name, age: age, gender: gender, bloodgroup: bloodgroup, ailment: ailment},};
        await collection.updateOne(filter, update);
        
        


    } finally {
        await client.close();
    }
}

// async function add(time, name, age, gender, bloodgroup, ailment){
//     const client = new MongoClient(uri);
//     try {

//         const database = client.db("Hospital");
//         const collection = database.collection("One");
        
//         const data = {time: time, name: name, age: age, gender: gender, bloodgroup: bloodgroup, ailment: ailment};
//         await collection.insertOne(data);


//     } finally {
//         await client.close();
//     }
// }

async function remove(time){
    const client = new MongoClient(uri);
    try {

        const database = client.db("Hospital");
        const collection = database.collection("One");

        const filter = {time: time};
        await collection.deleteOne(filter);


    } finally {
        await client.close();
    }
}


app.listen(port);