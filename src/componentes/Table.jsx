import React from 'react';

const Table = ({ items }) => {
    return (
        <table className="table">
            <tbody>
                {items.map(item => (
                    <tr key={item}>
                        <td>{item}</td>
                        <td>{item}</td>
                        <td>{item ? 'completada' : 'por completar'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;