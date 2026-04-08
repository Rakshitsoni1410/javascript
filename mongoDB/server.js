const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/rrs')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));


//model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,

});
const User = mongoose.model('User', userSchema);
//creat 
app.post('/add',async(req,res)=>{
    const data = new User(req.body);
    await data.save();
    res.send(data);
})
//read 
app.get('/users',async(req,res)=>{
    const data = await User.find();
    res.json(data);
});
//update 
app.put('/update/:id',async(req,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(data);
});
//delete 
app.delete('/delete/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
}); 
// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});