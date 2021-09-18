import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import  {connect} from  'react-redux'

export class Header extends Component {
    render() {
        return (
            <>
            <header className="blog-header py-3 shadow-none p-3 mb-5 bg-light rounded">
                <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <Link to="/" className="btn btn-danger">All Dishes</Link>                    
                </div> 
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link to="/carts" className="nav-link text-danger">Cart : <span className="btn btn-danger btn-sm rounded-circle">{this.props.numberCart}</span></Link>                  
                </div>
                </div>
            </header> 
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}

export default connect(mapStateToProps,null)(Header)
