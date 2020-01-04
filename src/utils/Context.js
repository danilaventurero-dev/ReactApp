import { createContext } from 'react';

const initialContext = {
    titulo: 'Mi Blog',
};
const Context  = createContext(initialContext);
export default Context;