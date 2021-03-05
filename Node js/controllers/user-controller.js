const User= require('../models/user');
const router = require('../routes');
module.exports.postUsers= function(req,res){
    console.log("post request",req.body.email);
    
}


module.exports.create= function(req,res){
    if(req.body.password != req.body.confirmPassword){
        console.log("password are not matching")

    }  
    // console.log(req.body.email);
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            // var name=req.body.displayName;
            var email=req.body.email;
            var password= req.body.password;
            var fname=req.body.fname;
            var lname=req.body.lname;
            User.create({email:email, password:password,fname:fname, lname:lname}, function(err,user){
                if (err){console.log('error in creating user while signing up');  return }

                // console.log("user added successf ully")
                res.json("user added successfully");
                return; 
            })
        }
        else{
            console.log("user aalready present")
            return ; 
            
        }
    });

}

module.exports.creteSession= function(req,res){
    
    console.log('Logged in Successfully');
    // return;
    return res.json(200,{
        user:req.user.id
    });
     
}

//test purpose
module.exports.getHomepage=function(req,res){
    return res.render('home')
}

//sign-out controller
module.exports.destroySession= function(req,res){
    //this is by default method provided by passoport 
    req.logout();
    console.log('Logged out Successfully');
    return res.redirect('/');
}

// findall users api
module.exports.findallusers= async (req,res)=>{
    try {
        let docs = await User.find({}).sort({fname: 1});
        res.json(docs);
      } catch (error) {
        res.status(500).json(error.message);
      }
}

module.exports.finduserbyFirstName= async (req, res)=>{
    try {
        const {name}= req.body;
        // console.log(name);
        // return false;
        let docs = await User.aggregate([
            { $match: { $expr: { $eq: ["$fname", name] } } },
          ]);
        //   console.log(docs);
        res.json(docs);

      } catch (error) {
        res.status(500).json(error.message);
      }
}

module.exports.finduserbyLastName= async (req, res)=>{
    try {
        const {name}= req.body;
        // console.log(name);
        // return false;
        let docs = await User.aggregate([
            { $match: { $expr: { $eq: ["$lname", name] } } },
          ]);
        //   console.log(docs);
        res.json(docs);
      } catch (error) {
        res.status(500).json(error.message);
      }
}


module.exports.sortUsers= async (req,res)=>{
    try {
        const {name}= req.body;
        var docs; 
        
        if(name==="fname"){
            docs = await User.find({}).sort({fname: 1});
        }
        if(name==="lname"){
             docs = await User.find({}).sort({lname: 1});
        }if(name==="email"){
             docs = await User.find({}).sort({email: 1});
        }

        res.json(docs);

      } catch (error) {
        res.status(500).json(error.message);
      }
}