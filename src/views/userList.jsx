import React, {useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import {connect,useDispatch} from 'react-redux';
import Table from '../componentes/Table';
import { Container } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/user/get.action';
import Context from '../utils/Context';

const UserList = (props) => {

    const dispatch = useDispatch();
    const jwt = useSelector(store => store.auth.logueo.data );
    const context = useContext(Context)
    const {titulo} = context; 

    useEffect(() => {
        console.log(dispatch(getAll(jwt)))
    }, [dispatch])

    const {
        items
    } = props;
    

    return (
        <Container >
        <h1>{titulo}</h1>
            <Table
                items={items}
            />
        </Container>
    );
};

// simplemente se retorna la parte de los items al componente
const mapStateToProps = state => state.user.items;

export default connect(
    mapStateToProps
)(UserList);