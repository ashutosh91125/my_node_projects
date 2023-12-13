const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db=await dbConnect();
    const result = await db.insertMany([
        {name: 'Himanshu', city: 'Varanasi', email : 'himanshu@test.com'},
        {name: 'Ankit', city: 'Varanasi', email : 'ankit@test.com'}

    ]);

    if(result.acknowledged){
        console.log('Data Inserted')
    }
}

insert();