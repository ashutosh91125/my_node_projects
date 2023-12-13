const dbConnect = require("./mongodb");

const updateData = async()=>{
    let data = await dbConnect();
    let result = await data.updateOne({name : 'Divya'},
        {$set: {name: 'Divyanshu', email : 'divyanshu@test.com'}}
    )

    console.warn(result);    
}


updateData();