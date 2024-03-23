const exp=require('express')
// mini express app(router) to create express objects
const appr=exp.Router();
const expressasynchandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jsn=require('jsonwebtoken')
const verifytoken=require('./middeware/verifytoken')

//body parser to parse incoming requests with json payloads
appr.use(exp.json())


appr.get('/get-user',expressasynchandler(async (request,response)=>{
    const usercollectionobj=request.app.get('usercollectionobj');
//toArray--send users like pack of array
//await is used for asynchronous operations it  waits until response got for that we should write async

    let usersList=await usercollectionobj.find().toArray()
    response.status(200).send({message:"userslist",payload:usersList})


 })
)
appr.get('/get-user/:id',expressasynchandler(async (request,response)=>{
   

    const usercollectionobj=request.app.get('usercollectionobj');
   const userid=(+request.params.id);
    let userq=await usercollectionobj.findOne({id:userid})
    response.status(200).send({message:"user with id",payload:userq})







}));
appr.post('/create-user',expressasynchandler(async (request,response)=>{
    // to get collection from server.js
    const usercollectionobj=request.app.get('usercollectionobj');
    const newUser=request.body;
    

// check for duplicate user

//  if not hash the password to convert plane to hashed
let haspas=await bcryptjs.hash(newUser.password,5)
// replace actual with hashed password
newUser.password=haspas

// insert user

 await usercollectionobj.insertOne(newUser)
        response.status(201).send({message:"user created"});







}));






appr.put('/update-user',expressasynchandler(async (request,response)=>{

    const usercollectionobj=request.app.get('usercollectionobj');
let modifiedUser=request.body;
console.log(modifiedUser)
     let usq=await usercollectionobj.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
     response.status(200).send({message:"user updated"})


}))

appr.delete('/delete-user/:username',expressasynchandler(async (request,response)=>{



    const usercollectionobj=request.app.get('usercollectionobj');
   const userName=(request.params.username);
    let r=await usercollectionobj.deleteOne({username:userName})
    response.status(200).send("user deleted")

   
}))

//get the user by username

appr.get('/get-name/:username',expressasynchandler(async(request,response)=>{
    const usercollectionobj=request.app.get('usercollectionobj')
    let obj=request.params.username
    let uuserdb=await usercollectionobj.findOne({username:obj})
    if(uuserdb==null)
    {
        response.send({message:"user not found"})
    }
    else{

        //remove password because it is sensitive and also other cannot understand hash code
        delete uuserdb.password 
        response.send({message:"user",payload:uuserdb})

    }
}))


//user login details
appr.post('/user-login',expressasynchandler(async(request,response)=>{
    const usercollectionobj=request.app.get('usercollectionobj')
    const newUser=request.body
    //verify user existed
    let userdb=await usercollectionobj.findOne({username:newUser.Username})
    if(userdb===null)
    {
        console.log("inavlid user")
        response.status(200).send({message:"invalid user"})   
    }
    else{
        //verify password
        let val=await bcryptjs.compare(newUser.Password,userdb.password)
        if(val===false)
        {
            console.log("invalid password")
            response.status(200).send({message:"invalid password"})
        }
        else{

            let jwttoken=jsn.sign({username:userdb.username},"abdjband",{expiresIn:"1d"})
            //delete password
            delete userdb.password
            //send token in response
            response.status(201).send({message:"success",token:jwttoken,user:userdb})

        }
    }
}))

appr.get('/test',verifytoken,(request,response)=>{
response.send({message:"private route"})
})

module.exports=appr