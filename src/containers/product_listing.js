import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductListing extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 1
        }
        this.renderProductos = this.renderProductos.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
    }
    renderProductos(productos){
        console.log("Render de productos");
        let c = 1;
        return(
            <div className="card border-info" style={{ width: "20rem", marginLeft: "10px", marginBottom: "10px"}} key={productos.id}>
                <img className="img-fluid" src="./productos/cebolla.png" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{productos.product_name}</h4>
                    <p className="card-text">{productos.description}</p>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Seleccionar</label>
                            </div>
                        </div>
                        <div className="col align-middle">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Cantidad</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>1 Kg</option>
                            <option>2 Kg</option>
                            <option>3 Kg</option>
                            <option>4 Kg</option>
                            <option>5 Kg</option>
                            </select>
                        </div>
                        </div>
                        
                    </div>
                    <a href="#" className="btn btn-info">Pedir</a>
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