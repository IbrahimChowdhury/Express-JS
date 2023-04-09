let registration_con =(req,res)=>{
    try {
        let {name,email,password,dateOfBirth} = req.body

        let user={
            name:name,
            email:email,
            password:password,
            dateOfBirth:dateOfBirth
        }
        res.status(203).json(user)

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}




let llogin=(req,res)=>{
    try {
        let {email,password} = req.body
        if(email=="ibrahim@gmail.com"  && password=="01734")
        {
            res.send("user is logged in")
        }
        else
        {
            res.send("invalide user")
        }
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}



module.exports={registration_con,llogin}
