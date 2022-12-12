const User = require('../../models/User')

const UserController =  {

    async createUser(req,res){
        const bodyData = req.body

        try{
            const newUser = await User.create(bodyData)
            res.status(200).redirect('/')

        } catch(err){
            res.status(400).redirect('/cadastro')
        }
    },
    async getUsers(req,res){

        try{
            const users = await User.find()
            return res.status(200).json(users)

        } catch{err}{

            return res.status(400).json(err)
        }
    },
    async getUserById(req,res){
       
        const {user_id} = req.params

        try{
            const users = await User.findById(user_id)
            return res.status(200).json(users)

        } catch{err}{

            return res.status(400).json(err)
        }
    },
    async updatePassowrd(req,res){


        const bodyData = req.body
        const { user_id} = req.params

        try{
            const updatedUserPassowrd = await User.findByIdAndUpdate(user_id,bodyData,{new:true})


            return res.status(200).json(updatedUserPassowrd)

        } catch(err){

            return res.status(400).json(err)
        }


    },
}

module.exports = UserController