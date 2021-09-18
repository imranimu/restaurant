import React from 'react'  

import { useHistory } from "react-router-dom";

import  {connect} from  'react-redux'

import {OrderAgain} from '../actions';

function Success({Item, OrderAgain}){

    let ListOrder = [];
    let TotalCart=0;
    Object.keys(Item.Orders).forEach(function(item){
        TotalCart+=Item.Orders[item].quantity * Item.Orders[item].price;
        ListOrder.push(Item.Orders[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }

    let history = useHistory();

    function callback(){
        history.push("/");
    }

    return(
        <div className="row">
            <div className="col-md-12">
            
            {ListOrder.length > 0  ? (
                <>
                <div className="alert alert-success" role="alert">
                    <span>Your Order has been completed.</span>
                </div>                 

                <h4>Order Details</h4>

                <table className="table table-stripe">
                    <thead>
                        <tr>
                            <th className="text-center">No.</th>
                            <th>Name</th>                            
                            <th>Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-right">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        ListOrder.map((item,key)=>{
                            return(
                                <tr key={key}>    
                                <td className="text-center">{key + 1}</td>
                                <td>{item.name}</td>                                 
                                <td>$ {item.price}</td>
                                <td className="text-center">                                    
                                    <span>{item.quantity}</span>                                    
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

                <div className="text-left mb-5">
                    <button onClick={()=>{OrderAgain(); callback() }} className="btn btn-info">Order Again</button> 
                </div>

                </>
            ) : ( 
                <>
                    <h4 className="mb-4">Your order history is empty! </h4>

                    <button onClick={()=> callback()} className="btn btn-dark">Order Now</button>
                </>            
            )}               
            
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        Item:state._todoProduct
    }
}

export default connect(mapStateToProps,{OrderAgain})(Success)