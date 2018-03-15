import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductos} from '../actions/index';
import {bindActionCreators} from 'redux';
import ProductListing from './product_listing';
import Navegacion from '../components/navegacion';

class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.onFetchData = this.onFetchData.bind(this);
    }
    componentDidMount(){
        this.onFetchData();
    }
    onFetchData(){
        // This execute the action.
        // We have mapped the new state that is returned after the actions executes.
        // in the render we get the new state
        this.props.fetchProductos();
    }
    render(){
        //console.log(this.props);
        return(
            <div>
                <div className="row justify-content-center">
                    <div className="container">
                        <h2 className="text-center">Nuestros Productos</h2>
                        <br/>
                        <div className="row justify-content-center">
                            <Navegacion/>
                        </div>
                        <div className="row">
                            <div className="container">
                                {/* <button type="button" onClick={this.onFetchData}>Click me</button> */}
                                <ProductListing />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({productos}){
    return {productos}; // { productos } === {productos:productos}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchProductos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);