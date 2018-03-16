import {combineReducers} from 'redux';
import ProductosReducer from './reducer_productos';
import CarroDeCompras from './reducer_carro_compra';

const rootReducer = combineReducers({
    productos: ProductosReducer,
    carroCompra: CarroDeCompras
});

export default rootReducer;