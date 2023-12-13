const dbConnect = require('./mongodb');


const deleteData = async ()=>{
    const data = await dbConnect();
    let result = await data.deleteOne({name : 'Aman'});
    console.warn(result);

    if(result.acknowledged){
        console.log("Delete Data");
    }
}

deleteData();