const express = require('express');
const routing = express.Router();
const UserService = require('../service/user');

//1.)
//Used to Setup Dummy data for testing


//2.)
//DUMMY FUNCTIONALITY 
//to test whether functionality is active
routing.get('/' , (req,res,next) => {
    res.json("User module of the Service is up and running @port 1111 , just fine sir!");
})


//4.)
//REGISTER FUNCTIONALITY
//Used to handle SignUp functionality
//Recieves User Information Object from front end and creates account for that particular user
routing.post('/register' , (req,res,next) => {
    const userOb = new UserData(req.body);
    //console.log(userOb);
    UserService.register(userOb)
    .then( result => {
        res.json("message" : "You have been successfully registered! with User-Id "+result);
    })
    .catch( err =>{
        next(err);
    })
    //res.json("COMING SOON!!");
})



//5.)
//DELETE USER ACCOUNT FUNCTIONALITY
//Takes userId that needs to be deleted
routing.delete('/deleteUser/' , (req,res,next) => {
    const userId = req.params.userId;
    UserService.deleteUser(userId)
    .then(userId=>{
        res.json("message":"Your account with UserId "+userId+" has been deleted!");
    })
    .catch(err=>{
        next(err);
    })
})


module.exports = routing;
