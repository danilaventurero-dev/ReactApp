import React from 'react';
import {connect} from 'react-redux';
import Table from '../componentes/Table';
import { Container } from 'reactstrap';

const Home = (props) => {
    const {
        items
    } = props;
    return (
        <Container >
            <Table
                items={items}
            />
        </Container>
    );
};

// simplemente se retorna la parte de los items al componente
const mapStateToProps = state => state.items;

export default connect(
    mapStateToProps
)(Home);