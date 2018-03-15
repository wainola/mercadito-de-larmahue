import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductListing extends Component{
    constructor(props){
        super(props);
        this.renderProductos = this.renderProductos.bind(this);
    }
    renderProductos(productos){
        console.log("Render de productos");
        console.log(productos);
        return(
            <div className="card" style={{ width: "20rem", marginLeft: "10px", marginBottom: "10px"}} key={productos.id}>
                <img className="" src="" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{productos.product_name}</h4>
                    <p className="card-text">{productos.description}</p>
                    <a href="#" className="btn btn-primary">Pedir</a>
                </div>
            </div>
            
        );
    }
    render(){
        //console.log(this.props.productos[0] ? this.props.productos[0] : "nada aun");
        // if(this.props.productos[0]){
        //     this.renderProductos(this.props.productos[0]);
        // }
        return(
            <div>
                <hr/>
                <div className="container-fluid">
                    {this.props.productos[0] 
                    ?
                    <div className="row justify-content-center">
                        {this.props.productos[0].map(this.renderProductos)}
                    </div>
                    :
                    <p> Cargando ..</p>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps({productos}){
    return {productos};
}

export default connect(mapStateToProps)(ProductListing);