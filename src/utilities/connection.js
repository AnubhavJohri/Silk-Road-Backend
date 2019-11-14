const { Schema  } = require('mongoose');
const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex' , true);


//THESE URLS ARE WHERE DATABASE IS STORED
//DONT TOUCH THE URLS
//------------------------------------------------------------------------------------------------------------------
//1.)COSMOS MONGODB URL
//OFFLINE ONLY
//FOR OFFLINE USE AND TESTING
//2.)mLab MONGODB URL
//ONLINE ONLY
//FOR DEPLOYEMENT AND CLOUD USE
//------------------------------------------------------------------------------------------------------------------


//USER COLLECTION SCHEMA
const userSchema = Schema({
    userId : { type:String , unique:true , required:[true,"User Id is required"] },
    userFirstName : { type:String , require:[true,"First Name is required"]},
    userMobileNo : { type:String , require:[true,"Mobile Number is required"]},
    userEmailId : { type:String , unique:true , require:[true,"Email Id is required"]},
    userPassword : { type:String , require:[true,"Password is required"]},
    userPosts : [ String ]
} , { collection : "User" , timestamp : true} );





//process.env.MONGOLAB_URI
//1.)GETS POST OBJECT FROM POST DATABASE
let collection = {};
collection.getUserCollection = () =>{
    //return Mongoose.connect(url , { useNewUrlParser: true })
    return Mongoose.connect(MONGOLAB_URI , { useNewUrlParser: true })
    .then(database =>{
        return database.model('User' , userSchema )
    }).catch(() => {
        let e = new Error();
        e.message = "Could not connect to Database";
        e.status = 500;
        throw e;
    })
}
