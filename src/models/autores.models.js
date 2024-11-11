const pool = require('../config/db')

function getAllAutors(){
  return pool.query('select * from autores')
}


function getById (autorId){

  return pool.query('select * from autores where id = ?',[autorId])
}

function createAutor({nombre, email, imagen}){
    return pool.query('insert into autores (nombre, email, imagen) values (?,?,?)',[nombre,email,imagen])
}

function updateAutor (autorId,{nombre,email,imagen}){
  return pool.query('update autores set nombre = ?, email = ?, imagen = ? where id = ?',[nombre,email,imagen,autorId])
}

function deleteAutor(autorId){
  return pool.query('delete from autores where id = ?',[autorId])
}





module.exports={
    getAllAutors,
    getById,
    createAutor,
    updateAutor,
    deleteAutor
}