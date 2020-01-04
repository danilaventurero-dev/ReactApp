import React, {Component} from 'react';
import{Table as TableS} from 'reactstrap';

class TableClase extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <TableS striped>
        <thead>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Url_image</th>
            </tr>
        </thead>
        <tbody>
            {this.props.items.map(item => (
                
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td> <img src={item.image_url} alt="" width="50"/></td>
                </tr>
            ))}
        </tbody>
    </TableS>
      )
    }
  }

  export default TableClase;