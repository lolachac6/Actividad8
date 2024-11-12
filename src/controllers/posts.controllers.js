
const { getAllPosts, getById, createPosts, updatePosts, deletePost, getPostsFromAutor } = require("../models/posts.models")


const selectAllPosts = async (req,res,next) =>{
 try {
    const [result] = await getAllPosts()
    res.json(result)
 } catch (error) {
    next(error)
 }
}


const selectById = async (req, res, next) =>{
    const {postId} = req.params
    try {
        const [result] = await getById(postId)
        if(result.length === 0){
            return res.status(404).json({message: "Post no encontrado"})
        }
        res.json(result)
    } catch (error) {
        
    }
}

const selectAllPostsFromAutor = async (req,res,next) =>{
    const {autorId} = req.params
    try {
        
        const [result] = await getPostsFromAutor(autorId)
        if(result.length === 0 ){
            return res.status(404).json({message: "Autor no encontrado"})
        }
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const insertPosts = async (req,res,next) =>{
    try {
        const [result] = await createPosts(req.body)
        const [newPost] = await getById(result.insertId)
        res.json(newPost)
    } catch (error) {
        next(error)
    }
    
}

const changePost = async (req,res,next) =>{
    const {postId} = req.params
    try {
        const [result] = await updatePosts(postId,req.body)
        const [post] = await getById(postId)
        res.json(post)

    } catch (error) {
        next(error)
    }

}


const removePost = async (req,res,next) =>{
    const {postId} = req.params
    try {
        const [postDelete] = await getById(postId)
        const [result] = await deletePost(postId)
        if(result.affectedRows === 0 ){
            return  res.status(404).json({message: "No existe Post con ese id "})
        }
        res.json(postDelete)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    selectAllPosts,
    selectAllPostsFromAutor,
    selectById,
    insertPosts,
    changePost,
    removePost
    
}