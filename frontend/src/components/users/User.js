import React, {useContext, Fragment} from 'react';
import UserContext from '../../context/userContext';
import Table from 'react-bootstrap/Table';



const User= ({user}) => {


     //OBTENER FUNCION DEL CONTEXT 
     const usersContext=useContext(UserContext);
     const {deleteUser, getUsers, updateUser, saveCurrentUser}= usersContext;

   
     //FUNCION QUE SE EJECUTA LA PRESIONAR ELIMINAR USUARIO
     const  userDelete=id=>{
            deleteUser(id);
            getUsers();
     }


     // AGREGA UNUSUARIO ACTUAL
      const selectUser = user => {
          saveCurrentUser(user);
          updateUser(user);

      }
    return (

        <Fragment>

           <Table striped bordered hover>
    
                <tbody>                  
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.position}</td>
                            <td>{user.email}</td>
                            <td><button type="button"className="btn btn-primary"onClick= {()=>selectUser(user)}>Editar</button></td>
                            <td><button type="button"className="btn btn-primary"onClick= {()=>userDelete(user._id)}>Eliminar</button></td>

                        </tr>
                </tbody>
            </Table>
   
       </Fragment>

    );
}

export default User;