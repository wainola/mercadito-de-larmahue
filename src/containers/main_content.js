import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductos} from '../actions/index';
import {bindActionCreators} from 'redux';
import axios from 'axios';


class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.onFetchData = this.onFetchData.bind(this);
    }
    onFetchData(event){
        // This execute the action.
        // We have mapped the new state that is returned after the actions executes.
        // in the render we get the new state
        this.props.fetchProductos();
    }
    render(){
        console.log("PROPS");
        console.log(this.props.productos);
        return(
            <div className="row justify-content-center">
                <div className="container">
                    <h2 className="text-center">Nuestros Productos</h2>
                    <div className="row">
                        <div className="container">
                            Productos 1
                            <button type="button" onClick={this.onFetchData}>Click me</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({productos}){
    console.log("productos");
    console.log(productos);
    return { productos: productos[0] }; // { productos } === {productos:productos}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchProductos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);