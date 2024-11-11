const pool = require('../config/db')


function getAllPosts(){
    return pool.query('select posts.titulo,posts.descripcion, posts.fecha_creacion, posts.categoria,autores.nombre AS autor_nombre,  autores.email AS autor_email, autores.imagen AS autor_imagen FROM  posts JOIN  autores ON posts.autor_id = autores.id')
  
}

function getById(postId){
    return pool.query('select posts.titulo,posts.descripcion, posts.fecha_creacion, posts.categoria,autores.nombre AS autor_nombre,  autores.email AS autor_email, autores.imagen AS autor_imagen FROM  posts JOIN  autores ON posts.autor_id = autores.id where posts.id = ?',[postId])
}

function createPosts({titulo, descripcion, categoria, autor_id}){
 return pool.query('insert into posts (titulo, descripcion, categoria, autor_id) values(?, ?, ?, ?)',[titulo, descripcion, categoria, autor_id])
}

module.exports = {getAllPosts, getById, createPosts}


