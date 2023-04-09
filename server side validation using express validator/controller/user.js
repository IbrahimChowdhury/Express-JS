let registration=(req,res)=>{
    try {
        
        let {name,password,email,dateOfBirth}=req.body
        let user={
            name:name,
            email:email,
            password:password,
            dateOfBirth:dateOfBirth
        }
        res.status(200).send(user)

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}



let signIn=(req,res)=>{
    try {
        
        let {password,email}=req.body
       if(email=="ibrahim@gmail.com"  && password=="01734")
       {
        res.status(200).send("User is logged in")
       }
       else{
        res.status(200).send("user is invalid")
       }

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

module.exports={registration,signIn}