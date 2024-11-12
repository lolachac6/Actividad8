const { getAllAutors, getById, createAutor, updateAutor, deleteAutor} = require("../models/autores.models")

const selectAllAutores = async (req, res, next) =>{
    try {
        const [result] = await getAllAutors()
        res.json(result)
    } catch (error) {
        next(error)
    }

}

const getOneAutor = async (req,res,next) =>{
    const {autorId} = req.params
    try {
        const [result] = await getById(autorId)
        if(result.length === 0){
           return  res.status(404).json({message :'Autor no encontrado'})
          }
        res.json(result)
    
    } catch (error) {
        next(error)
    }
}

const insertAutor = async (req,res,next) =>{

   try {
     const [result] = await createAutor(req.body)
     const [autor] = await getById(result.insertId)
     res.json(autor)
   } catch (error) {
    next(error)
   }

}

const changeAutor = async (req,res,next) =>{
    const {autorId} = req.params
    try {
        const [result] = await updateAutor(autorId,req.body)
        const [autor] = await getById(autorId)
        res.json( autor)
    } catch (error) {
        next(error)
    }
}

const removeAutor = async (req,res,next) =>{
    const {autorId} = req.params
    try {
        const [autorDelete] = await getById(autorId) 
         const [result]  = await deleteAutor(autorId)
         if(result.affectedRows === 0 ){
            return  res.status(404).json({message: "No existe autor con ese id "})
        }
         res.json(autorDelete)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    selectAllAutores,
    getOneAutor,
    insertAutor,
    changeAutor,
    removeAutor
}