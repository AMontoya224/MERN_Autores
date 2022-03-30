const AutorController = require( '../controllers/autor.controller' );




module.exports = function( app ){
    app.post( '/api/autors/new', AutorController.createAutor );
    app.get( '/api/autors', AutorController.getAllAutors);
    app.get( '/api/autors/:id', AutorController.getAutor );
    app.put( '/api/:id/edit', AutorController.updateAutor );
    app.delete( '/api/:id/delete', AutorController.deleteAutor );
}