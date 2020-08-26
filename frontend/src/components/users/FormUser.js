import React, { useContext, useState, useEffect, Fragment } from 'react';
import UserContext from '../../context/userContext';
import { Link } from 'react-router-dom';



const FormUser = () => {


    //OBTENER FUNCIONES DEL CONTEXT
    const usersContext = useContext(UserContext);
    const { userSelected, errorUser, addUser, validateUser, getUsers, updateUser, cleanUser } = usersContext;

    //DETECTA SI HAY UN USUARIO SELECCIONADO
    useEffect(() => {
        if (userSelected !== null) {
            saveUser(userSelected)
        } else {
            saveUser({
                name: '',
                lastname: '',
                email: '',
                position: ''
            })
        }

    }, [userSelected])

    //STATE DEL FORMULARIO
    const [user, saveUser] = useState({
        name: '',
        lastname: '',
        email: '',
        position: ''
    });

    // EXTRAE DATOS DEL USUARIO POR MEDIO DE DESTRUCTURING
    const { name, lastname, email, position } = user;

    //LEE LOS VLAORES DEL FIORMULARIO
    const handleChange = e => {

        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //VALIDACION
        if (name.trim() === '' || lastname.trim() === '' || position.trim() === '' || email.trim() === '') {
            validateUser();
            return;
        }

        // REVISA SI ES EDICION O USUARIO NUEVO
        if (userSelected === null) {
            //CREANDO USUARIO
            addUser(user);
        } else {
            //ACTUALIZANDO USUARIO
            updateUser(user)

            //ELIMINA USUARIO DEL STATE
            cleanUser();
        }

        //OBTIENE USUARIOS
        getUsers();


        //REINICIA EL FORMULARIO
        saveUser({
            name: '',
            lastname: '',
            email: '',
            position: ''
        })
    }

    return (
        <Fragment>
            <div className="form-user">
                <form
                    onSubmit={onSubmit}
                    className="content-form"
                >
                    <div className="">
                        <input
                            type="text"
                            className=""
                            placeholder="Nombre Usuario"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className=""
                            placeholder="Apellido de usuario"
                            name="lastname"
                            value={lastname}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className=""
                            placeholder="Cargo"
                            name="position"
                            value={position}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className=""
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="submit-user">
                        <input
                            type="submit"
                            className="btn-submit"
                            value={userSelected ? 'Editar Usuario' : 'Agregar Usuario'}
                        />
                    </div>
                </form>
                <Link to="/" className="link-home">Ir a Inicio</Link>
            </div>
            {errorUser ? <p className="message-error">Todos los campos son obligatorios</p> : null}
        </Fragment>
    );
};
export default FormUser;