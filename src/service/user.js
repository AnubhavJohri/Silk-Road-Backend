const UserModel = require('../model/user');

let UserService = {};


UserService.register = (userOb) =>{
    //console.log("User Object in service=",userOb);
    return UserModel.register(userOb).then(data => {
        if(data == 1){
            let e = new Error();
            e.message="Entered Email-Id/Mobile Number already exists!";
            e.status = 406;
            throw e;
        }else{
            return data;
        }
    })
}

UserService.deleteUser= (userId) => {
    return UserModel.deleteUser(userId).then( data =>{
        if(data)
        return data;
        else{
            e.message = "Something went wrong , Account not deleted . Either UserId didn't exist or was of wrong format";
            e.status = 500;
            throw e;
        }
    })

}
