import React from 'react';

const Table = ({users}) => {
    return(
        <table>
            <tbody>
                {   users.map(user  => (
                    <Tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{ user.status ? 'completada' : 'por completar' }</td>
                    </Tr> 
                ))}
            </tbody>
        </table>
    )
}