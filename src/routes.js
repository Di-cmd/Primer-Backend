const express=require('express');
const routes=express.Router()


//rutas: Muestra todos los existentes
routes.get('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('SELECT *FROM books', (err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })

})


//rutas: Crea nuevos objetos
routes.post('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('INSERT INTO books set?', [req.body], (err)=>{
            if(err) return res.send(err)
            res.send('Libro ha  sido registrado')
        })
    })
})


//rutas: eliminar
routes.delete('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('DELETE FROM books WHERE idbooks=?', [req.params.id], (err)=>{
            if(err) return res.send(err)
            res.send('Libro ha sido eliminado con exito')
        })
    })
})


//rutas: Actualizar
routes.put('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('UPDATE books set ? WHERE idbooks=?',[req.body, req.params.id], (err)=>{
            if(err) return res.send(err)
            res.send('La informacion se ha actualizado con exito')
        })
    })
})






module.exports=routes