const User=require('../models/users');


//CREANDO EL USUARIO
exports.createUser = async (req, res)=>{

    //EXTRAER CORREO 
    const {email}=req.body;
    try {
        //REVISA QUE SEA UNICO
        let user = await User.findOne({email})
        if (user){
            return res.status(400).json({msg: 'El usuario ya existe'})
        }
        user = new User(req.body);
        await user.save();
        res.json({ msg: 'Usuario creado correctamente' })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//OBTENIENDO USUARIOS
exports.getUsers = async (req, res) => {

    try {
        const users = await User.find(req.body);
        res.json({ users })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')

    }

}

//ACTUALIZANDO USUARUIO
exports.updateUser = async (req, res) => {
    try {
       const {name, lastname, position, email}=req.body
        //SI EL USUARIO EXISTE O NO 
        let user=await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({msg:'No existe esa usuario'});
        }

        //CREAR UN OBJEO CON LA NUEVA INFORMACION
        const newUser={};

        if (name) newUser.name=name;
        if (lastname)newUser.lastname=lastname;
        if (position)newUser.position=position;
        if (email)newUser.email=email;
        
        //GUARDAR EL USUARIO

        user= await User.findOneAndUpdate({_id:req.params.id}, newUser, {new:true});
        res.json({user})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

//ELIMINANDO EL USUARIO
exports.deleteUser=async (req, res)=>{
    try {
        //SI EXISTE EL USUARIO O NO
        let user=await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({msg:'No existe ese usuario'});
        }
        //ELIMINAR
        await User.findOneAndRemove({_id: req.params.id});
        res.json ({msg:'Usuario eliminado'})
    

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}