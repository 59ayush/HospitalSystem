const { MongoClient } = require('mongodb');

const url = "mongodb+srv://59ayush:helloabcd1234@teddy.ifueq5k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);


async function mong() {
    try {

        await client.connect();
        const db = client.db('Hospital'); 
        const one = db.collection('One');

        //var data = { time: '9:00am', name: 'Ayush', age:'20', gender: 'Male', bloodgroup: 'A+', ailment: 'Stomachache' };
        //await one.insertOne(data);


        

        for (let i = 9; i < 17; ++i){
            var data = {time: "", name: "", age: "", gender: "", bloodgroup: "", ailment: ""};
            var time = i;
            if (time > 12){
                time -= 12;
                data.time = time + ":00 pm";
            }
            else{
                if (time == 12){
                    data.time = time + ":00 pm";
                }
                else{
                    data.time = time + ":00 am";
                }
            }

            console.log(data);


            await one.insertOne(data);

        }
        
    }
    
    catch(e){
        console.log(e);
    }finally {
        await client.close();
    }
}



mong().catch(console.error);

