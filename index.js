const express = require("express")
const app = express();
const mongoose = require("mongoose");
const port =3000;
app.use(require('body-parser').urlencoded({ extended: false }));
mongoose.connect('mongodb+srv://sahil:ELrYxSqheHAJXKOT@cluster0.dfuu4wp.mongodb.net/?retryWrites=true&w=majority',

);
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
  });
  const User = mongoose.model("User", UserSchema);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

app.get("/",(req,res) => {
    // res.send("hell");
    // console.log(req);
    const user1= new User({

name:"hello",
age:22344

    });
    user1.save().then(

        function(value){

            res.send(value);
        }
    );
    // user1.name="nksdfjkds";
   

     res.sendFile(__dirname+'/form.html');
     res.render("./form.html");
});
app.post("/sohail",(req,res)=>{

console.log(req.body.fname);
res.send(req.body.fname);


});
app.listen(port,() =>{
    console.log('listning to the port no 3000');
});

// read.....
app.get('/', (req, res) => {
  db.collection('users').find().toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
})
