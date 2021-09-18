import React from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart,ConfirmOder} from '../actions';

function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart,ConfirmOder}){
    
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }   

    let history = useHistory();

    function callback(){
        history.push("/success");
    }
    
    return(
        <div className="row">
            <div className="col-md-12">
            
            {ListCart.length > 0  ? (
                <>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>                            
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className="text-right">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        ListCart.map((item,key)=>{
                            return(
                                <tr key={key}>    
                                <td className="text-center"><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
                                <td>{item.name}</td>                                 
                                <td>$ {item.price}</td>
                                <td>
                                    <span className="btn btn-light" style={{margin:'3px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-light" style={{margin:'3px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                                </td>
                                <td className="text-right">$ { TotalPrice(item.price,item.quantity)} </td>
                            </tr>
                            )
                        })                            
                    }
                    <tr>
                        <td colSpan="4" className="text-right"><strong>Total : </strong> </td>
                        <td className="text-right"><strong>${Number(TotalCart).toLocaleString('en-US')}</strong></td>
                    </tr>
                    </tbody>
                
                </table>

                <div className="text-right mb-5">
                    <button onClick={ ()=> { ConfirmOder(); callback(); } } className="btn btn-dark">Confirm Order</button> 
                </div>

                </>
            ) : ( 
                <>
                    <h4>Your Cart is empty! </h4>
                </>            
            )}               
            
            </div>
        </div>
    )
}
const mapStateToProps = state =>{   
    return{
        items:state._todoProduct
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart,ConfirmOder})(Cart)
