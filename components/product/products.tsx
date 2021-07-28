import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
export default class Products extends Component {
    render() {
        return (
            <div className=" ">
                <div className="flex flex-warp justify-between mx-52 cursor-pointer	">
                    {this.props.products.map(product=> (
                        <div key={product._id}>
                            
                            
                                <div className="font-body">
                                  <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title} width={350}/>
                                    <div className="flex flex-warp justify-between font-semibold mt-6">
                                      <p>
                                        {product.title}
                                      </p>
                                      <p>
                                        {product.price}
                                      </p>
                                    </div>
                                  </a>
                                  <div className="flex flex-warp justify-between mt-2">
                                  <p>
                                     {product.d}
                                    </p>
                                    <button onClick={()=> this.props.addToCart(product)}><FontAwesomeIcon icon={faCartPlus} className="mr-0"/></button>
                                </div>
                                </div>
                                
                            
                        </div>
                      )
                     )
                    }
                </div>
            </div>
        )
    }
}
