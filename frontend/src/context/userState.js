import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
    ADD_USERS,
    DELETE_USERS,
    GET_USERS,
    UPDATE_USERS,
    VALIDATE_USER,
    CLEAN_USER,
    CURRENT_USER
} from '../types/index';

import clientAxios from '../config/axios';


const UserState = props => {
    const initialState = {
        users: [],
        errorUser: false,
        userSelected: null

    }

    const [state, dispatch] = useReducer(UserReducer, initialState);




    //OBTIENE LOS USUARIOS
    const getUsers = async () => {

        const result = await clientAxios.get('/api/users');
        // console.log(result);
        try {
            dispatch({
                type: GET_USERS,
                payload: result.data.users

            })

        } catch (error) {
            console.log(error)
        }
    }

    //AGREGA USUARIO
    const addUser = async user => {
        try {
            const result = await clientAxios.post('/api/users', user);
            console.log(result)
            dispatch({
                type: ADD_USERS,
                payload: user

            })
        } catch (error) {
            console.log(error);
        }
    }

    //VALIDA Y MUESTRA UN ERRO SI EXISTE
    const validateUser = () => {
        dispatch({
            type: VALIDATE_USER
        })
    }

    //ELIMINA USUARIO POR SU ID
    const deleteUser = async id => {
        try {
            await clientAxios.delete(`/api/users/${id}`);
            dispatch({
                type: DELETE_USERS,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //EDITA UN USUARIO
    const updateUser = async user => {
        try {

            const result = await clientAxios.put(`/api/users/${user._id}`, user);
            dispatch({
                type: UPDATE_USERS,
                payload: result.data.user
            })

        } catch (error) {
            console.log(error);
        }
    }

    // EXTRAE UN USUARIO PARA LA EDICION
    const saveCurrentUser = user => {
        dispatch({
            type: CURRENT_USER,
            payload: user
        })
    }


    //ELIMINA EL USUARIO SELECCIONADO
    const cleanUser = user => {
        dispatch({
            type: CLEAN_USER,
        })
    }

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                errorUser: state.errorUser,
                userSelected: state.userSelected,
                getUsers,
                addUser,
                validateUser,
                deleteUser,
                saveCurrentUser,
                updateUser,
                cleanUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}
export default UserState;