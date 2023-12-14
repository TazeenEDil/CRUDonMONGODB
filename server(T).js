const express=require("express");
const mongoose=require("mongoose");
const {addUser,retrieveUsers,delUser,updateUser}=require("./CRUDonDb");

const app=express();




mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/MongoConnection",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async()=>{
    console.log("Connection Successfull");

    let UserT=await addUser("tazeen","tazeen1998");
    console.log(UserT);
    let user=await retrieveUsers();
    console.log(UserT);
    let DeleteT=await delUser("656c56f5cb655205af7dce1f");
    console.log(DeleteT);
    let UpdateT=await updateUser("656c56f7205d5770dcdfdb82","b4s17","pass123");
    console.log(UpdateT);

}).catch((err)=>{
    console.log("Connection Failed");
    console.log(err.message);
});

app.listen(3030);
