import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filters ">
                <div className="filter-result">
                {this.props.count} Products
                </div>
                <div className="flex justify-between">
                <div className="filter-sort text-right ml-52 -mt-12 mb-12">
                Order{""}
                 <select value={this.props.sort} onChange={this.props.sortProducts}>
                 <option value="">Latest</option>
                 <option value="Lowest">Lowest</option>
                 <option value="Highest">Highest</option>
                 </select>
                </div>
                <div className="filter-size text-left mr-52 -mt-12 mb-12">
                    Filters{""}
                 <select value={this.props.size} onChange={this.props.filterProducts}>
                     <option value="">ALL</option>
                     <option value="XS">XS</option>
                     <option value="S">S</option>
                     <option value="M">M</option>
                     <option value="L">L</option>
                     <option value="XL">XL</option>
                 </select>
                </div>
            </div>
            </div>
        )
    }
}
