import React  from 'react';
import { Table as TableRS } from 'reactstrap';

const Table = ({ items }) => {
    return (
        <TableRS striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.id ? 'completada' : 'por completar'}</td>
                    </tr>
                ))}
            </tbody>
        </TableRS>
    );
}

export default Table;