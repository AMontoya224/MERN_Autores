const { Autor } = require( '../models/autor.model' );




const createAutor = ( request, response ) => {
    const { name } = request.body;

    Autor.create({
        name
    })
        .then( autor => response.status( 201 ).json( autor ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the insert.';
            return response.status( 400 ).json( err ) 
        });
};

const getAllAutors = ( request, response ) => {
    Autor.find( {} )
        .then( autors => response.status( 200 ).json( autors ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the find.';
            return response.status( 400 ).json( err ) 
        });
};

const getAutor = ( request, response ) => {
    Autor.findOne( {_id:request.params.id} )
        .then( autor => response.status( 200 ).json( autor ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the findOne.';
            return response.status( 400 ).json( err ) 
        });
};

const updateAutor = ( request, response ) => {
    Autor.findOneAndUpdate( {_id: request.params.id}, request.body, { runValidators: true, new: true } )
        .then( updatedAutor => response.status( 202 ).json( updatedAutor ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the update.';
            return response.status( 400 ).json( err ) 
        });
};

const deleteAutor = ( request, response ) => {
    Autor.deleteOne( { _id: request.params.id } )
        .then( () => response.status( 204 ).end() )
        .catch( err => {
            response.statusMessage = "There was an error executing the delete. ";
            return response.status( 400 ).json( err )
        });
}

const AutorController = {
    createAutor,
    getAllAutors,
    getAutor,
    updateAutor,
    deleteAutor
};

module.exports = AutorController;