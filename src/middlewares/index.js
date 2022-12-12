const middlewares = {

authenticate(req,res,next){

    const {authentication} = req.headers
    const { user_id} = req.params

    if(authentication !== user_id) return res.status(400).json({message: 'Not Allowed'})

    next()
}

}
module.exports = middlewares