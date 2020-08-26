const express = require ('express');
const router= express.Router();
const userController = require ('../controllers/userController');


//CREAR USUARIO
router.post('/',

    userController.createUser
);

//OBTENER USUARIO
router.get('/',
    
    userController.getUsers
);
//ACTUALIZAR USUARIO
router.put('/:id',

    userController.updateUser

);

//ELIMINAR EL USUARIO
router.delete('/:id',

    userController.deleteUser
);


module.exports=router;