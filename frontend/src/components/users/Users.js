import React, { Fragment, useContext } from 'react';
import UserContext from '../../context/userContext';
import User from './User';
import FormUser from './FormUser'




const Users = () => {


    //OBTIENE LOS USUARIOS
    const usersContext = useContext(UserContext);
    const { users, getUsers } = usersContext;

    getUsers();
    return (
        <Fragment>
            <FormUser/>
            <div className="">
                
                    {users.length === 0
                        ? (<p>No hay usuarios</p>)
                        :
                        <div>
                            {users.map(user => (
                            <User
                            user={user}
                            />                               
                            ))}
                        </div>
                      

                    }
             
            </div>
            

        </Fragment>
    );
}

export default Users;