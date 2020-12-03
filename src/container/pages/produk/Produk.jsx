import React, { Component, Fragment } from 'react';
// import img from './10.jpg';
import './Produk.css';
import CardProd from './CardProd/CardProd';

class Produk extends Component {
    state = {
        order: '4'
    }
    cartChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                Halman Product
                <hr />
                <div className="header">
                    <div className="logo">Toko</div>
                    <div className="cart">
                        cart
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProd cart={(value) => this.cartChange(value)} />
            </Fragment>
        );
    }
}


export default Produk;
