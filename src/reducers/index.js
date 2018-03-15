import {combineReducers} from 'redux';
import ProductosReducer from './reducer_productos';

const rootReducer = combineReducers({
    productos: ProductosReducer
});

export default rootReducer;