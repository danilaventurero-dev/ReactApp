import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {connect,useDispatch} from 'react-redux';
import Table from '../componentes/Table';
import { Container } from 'reactstrap';
import { getActionsAsyncCreator as getAll } from '../store/modules/user/get.action';

const UserList = (props) => {

    const dispatch = useDispatch();
    const jwt = useSelector(store => store.auth.logueo.data );
    useEffect(() => {
        console.log(dispatch(getAll(jwt)))
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
const mapStateToProps = state => state.user.items;

export default connect(
    mapStateToProps
)(UserList);