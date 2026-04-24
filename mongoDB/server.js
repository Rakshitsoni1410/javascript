const express = require('express');
const mogoose = require('mongoose');
const app = express();
app.use(express.json());

mogoose.connect('mongodb://127.0.0.1:27017/userDB')
.then(()=>console.log("Connected" ))
.catch((err)=>console.log(err));


const stSchema = new mogoose.Schema({
    name : String,
    age:Number,
    city:String
})
const User = mogoose.model('User',stSchema);

app.post('/add',async(req,res)=>{
    const data = new User(req.body);
    await data.save();
    res.send("Data added");
})
app.get('/get',async(req,res)=>{
    const data = await User.find();
    res.json(data);
})
app.delete('/delete/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send("Data deleted");
});

app.put('/update/:id', async (req,res)=>{
    const data = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    console.log(data); // 👈 check terminal

    res.json(data);
});


app.listen(4000,()=>console.log("Server is running on port 4000"));