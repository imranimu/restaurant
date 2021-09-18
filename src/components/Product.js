import React, { Component } from 'react'
import {ProductsRequest,AddCart} from '../actions'
import {connect} from 'react-redux';
export class Product extends Component {

    constructor(props) {
        super()       
    }

    componentDidMount(){
        this.props.ProductsRequest();
    }
    
    render() {
        const {_products} = this.props._products;
        if(_products.length>0){
           
           return (
                <div className="row mt-4 mb-4">
                    <div className="col-md-12">
                        <div className="row">
                            {_products.map((cat,index)=>(
                                <>
                                <div className="col-md-12">
                                    <h4 className="mb-4">{cat.category_name}</h4>
                                </div>
                                <div key={index} className="col-md-12" style={{marginBottom:'10px'}}>                                    
                                    <div className="row">
                                        {cat.dish.map((item)=>(
                                            <div key={item.dish_id} className="col-md-4 mb-4">
                                                <div className="p-4 card h-100 shadow-lg bg-white rounded">
                                                    <div className="d-flex flex-column h-100">
                                                        <h5>{item.dish_name}</h5>
                                                        <p>{item.dish_description}</p>
                                                        <p className="text-danger">$ {item.dish_price}</p>
                                                    </div>
                                                    <span className="btn btn-success " style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                </>
                            ))}
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        ProductsRequest:()=>dispatch(ProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
