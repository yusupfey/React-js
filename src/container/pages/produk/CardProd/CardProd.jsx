import React, { Component } from 'react';
import img from './10.jpg';

class CardProd extends Component {
    state = {
        order: '4'
    }

    cartChange = () => {
        this.props.cart(this.state.order); //mengirimkan data pada produk.jsx
    }

    plus = () => {
        this.setState({
            order: this.state.order + 1
        })
        this.cartChange();
    }
    minus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            });
            this.cartChange();

        }
    }
    render() {
        return (
            <div className="card">
                <div className="img-thumb">
                    <img src={img} alt="" />
                </div>
                <p className="title">Ayam Potong</p>
                <p className="harga">Rp. 50.000</p>
                <div className="act">
                    <button className="minus" onClick={this.minus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="Plus" onClick={this.plus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProd;