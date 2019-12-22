import React from 'react';
import {connect} from 'react-redux';
import Table from '../componentes/Table';

const Home = (props) => {
    const {
        items,
    } = props;
    return (
        <div className="home">
            <Table
                items={items}
            />
        </div>
    );
};

// simplemente se retorna la parte de los todos al componente
const mapStateToProps = state => state.todos;

export default connect(
    mapStateToProps,
)(Home);