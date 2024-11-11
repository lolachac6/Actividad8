const { updateAutor } = require("../models/autores.models")
const { getAllPosts, getById, createPosts } = require("../models/posts.models")


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
        res.json(result)
    } catch (error) {
        
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

const changePosts = async (req,res,next) =>{
    const {postId} = req.params
    try {
        const [result] = await updateAutor(postId,req.body)
        console.log(result)
        const [post] = await getById(postId)
        res.json(post)

    } catch (error) {
        next(error)
    }

}

module.exports = {
    selectAllPosts,
    selectById,
    insertPosts,
    changePosts
}