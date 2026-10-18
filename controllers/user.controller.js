const getAllUsers = async(req, res)=>{
    try{
        const users = await User.find({});
       res.status(200).json(users);
        
    } catch(err){
        console.error(err);
        res.status(500).json({message:"Internal server error", err});
    }
}

module.exports = {getAllUsers}