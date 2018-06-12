const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

let ContactRoutes = require("./routes/ContactRoutes");
app.use(ContactRoutes);

let VehicleRoutes = require("./routes/VehicleRoutes");
app.use(VehicleRoutes);

let CommentRoutes = require("./routes/CommentRoutes");
app.use(CommentRoutes);

let ProductRoutes = require("./routes/ProductRoutes");
app.use(ProductRoutes);

app.listen(3001, (err) => {
    if (err) {console.log('Error', err);}
    console.log('server running');
    });
      
// app.get("/contacts", function(req,res,next){
//     return res.json(contacts);
// });
  
// app.get("/vehicles", function(req,res,next){
//     return res.json(vehicles);
// });

// app.get("/comments", function(req,res,next){
//     return res.json(comments);
// });
   
// app.get("/products", function(req,res,next){
//     return res.json(products);
// });


// app.get("/contacts/:id",function (req,res,next){
//     const contactsID = (contacts.find(user=>user._id == req.params.id));
//     return res.json(contactsID);
// });

// app.get("/vehicles/:id",function (req,res,next){
//     const vehiclesID = (vehicles.find(user=>user._id == req.params.id));
//     return res.json(vehiclesID);
// });

// app.get("/comments/:id",function (req,res,next){
//     const commentsID = (comments.find(user=>user._id == req.params.id));
//     return res.json(commentsID);
// });

// app.get("/products/:id",function (req,res,next){
//     const productsID = (products.find(user=>user._id == req.params.id));
//     return res.json(productsID);
// });


// app.post("/contacts", function(req, res, next)
// {
//    return res.json(contacts.push({}));
// });


// app.post("/vehicles", function(req, res, next)
// {
//    return res.json(vehicles.push({}));
// });


// app.post("/comments", function(req, res, next)
// {
//    return res.json(comments.push({}));
// });

// app.post("/products", function(req, res, next)
// {
//    return res.json(products.push({}));
// });

