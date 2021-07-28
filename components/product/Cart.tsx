import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const {cartItems}= this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                <div>Cart is empty</div>
                ):(
                    <div>
                        You have {cartItems.length} in the cart {""}
                    </div>
                )}
                <div>
                    {cartItems.map(item =>(
                        <a key={item._id}>
                          <img src={item.image} alt={item.title}/>
                          {item.title}
                          {(item.price)+"DT"}
                          <button onClick={()=>this.props.removeFromCart(item)}>
                              Remove
                          </button>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}
