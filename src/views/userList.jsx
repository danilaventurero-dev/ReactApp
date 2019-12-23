import React, {useEffect} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import {connect,useDispatch} from 'react-redux';
import Table from '../componentes/Table';
import { Container } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/user/get.action';

const UserList = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(getAll()))
    }, [dispatch])

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
)(UserList);