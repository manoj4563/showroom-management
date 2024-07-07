const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/management", { useNewUrlParser: true, useUnifiedTopology: true }); 
mongoose.connection.once('open', () => {
  console.log("mongoose connected");
});

app.listen(3001, () => {
    console.log("Server connected");
});

const loginModel=require('./models/login');

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    loginModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("success");
          } else {
            res.status(401).json("Invalid password");
          }
        } else {
          res.status(404).json("User not found");
        }
      })
      .catch(err => {
        console.error("Server error:", err);
        res.status(500).json("Server error");
      });
  });
  

app.post("/register", (req, res) => {
    loginModel.create(req.body)
        .then(employees => {res.json('sucess')
            console.log(employees);
        })
        .catch(err => res.status(400).json('Error: ' + err)); 
});



const DetailModel = require('./models/detail');

// Route to get details by name
app.get('/detail/:name', (req, res) => {
    const { name } = req.params;  // Correctly extract the name from req.params
    DetailModel.findOne({ name: name })  // Assuming you want to find a single document
        .then(detail => {
            if (detail) {
                res.json(detail);
            } else {
                res.status(404).json({ message: "Detail not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Server error" });
        });
});


const LocationModel = require('./models/location');

app.get('/price', (req, res) => {
    const { location, name } = req.query; // Extract location and name from req.query

    LocationModel.findOne({ location: location, name: name }, 'price') // Find one document matching location and name, select only the price field
        .then(result => {
            if (result) {
                res.json({ price: result.price });
            } else {
                res.status(404).json({ message: "Price not found for the given location and bike name" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Server error" });
        });
});



const BookingModel = require('./models/booking')
 app.post('/booking',(req,res)=>{
    BookingModel.create(req.body)
    .then( res.json('sucess'))
    .catch(err => res.status(400).json('Error: ' + err));
 })