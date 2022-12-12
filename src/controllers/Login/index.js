const User = require('../../models/User')

const LoginController = {
    async createSession(req,res) {

        const username = req.body.username
        const password = req.body.password

        try{
            const user = await User.findOne({username})     
            
            if(user.password == password)
             {
                res.status(200).redirect('/home')
                

             }else{
                  res.status(400).redirect('/')
             }
            
        } catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = LoginController