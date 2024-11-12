const pool = require('../config/db')


function getAllPosts(){
    return pool.query('select posts.titulo,posts.descripcion, posts.fecha_creacion, posts.categoria,autores.nombre AS autor_nombre,  autores.email AS autor_email, autores.imagen AS autor_imagen FROM  posts JOIN  autores ON posts.autor_id = autores.id')
  
}

function getById(postId){
    return pool.query('select posts.titulo,posts.descripcion, posts.fecha_creacion, posts.categoria,autores.nombre AS autor_nombre,  autores.email AS autor_email, autores.imagen AS autor_imagen FROM  posts JOIN  autores ON posts.autor_id = autores.id where posts.id = ?',[postId])
}

function getPostsFromAutor(autorId){
    return pool.query('select posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria from posts join autores on posts.autor_id = autores.id where autores.id = ?',[autorId])
}

function createPosts({titulo, descripcion, categoria, autor_id}){
 return pool.query('insert into posts (titulo, descripcion, categoria, autor_id) values(?, ?, ?, ?)',[titulo, descripcion, categoria, autor_id])
}

function updatePosts (postId,{titulo,descripcion,autor_id}){
    return pool.query('update posts set titulo = ?, descripcion = ?, autor_id= ? where id = ?',[titulo,descripcion,autor_id,postId])
}


function deletePost(postId){
 return pool.query('delete from posts where id = ?',[postId])
}

module.exports = {getAllPosts, getById, getPostsFromAutor, createPosts,updatePosts,deletePost}


