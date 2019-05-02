import React from 'react'
import {Link} from 'react-router-dom'
import {FaCheck, FaCartArrowDown} from 'react-icons/fa'
import './styles.css'

const CarShopping = ({location}) => {
  const renderDescriptionProducts = () => {
    if (!location.productsSelected) return

    return location.productsSelected.map(product => (
      <li className="li-product" key={product.id}>
        {product.description}
      </li>
    ))
  }

  return (
    <div>
      <div className="container header">
        <p className="text">CAR SHOPPING</p>
        <div className="icon-car">
          <FaCartArrowDown size={26} />
        </div>
      </div>
      <div className="space-horizontal">
        <h1>Description of your products</h1>
        <ul className="list-products">{renderDescriptionProducts()}</ul>
        <h3 className="text-pay">
          Total to pay: {location.amountProductsPrice} $
        </h3>
      </div>

      <div className="space-horizontal">
        <Link to="/" className="container button check-ready">
          <FaCheck />
        </Link>
      </div>
    </div>
  )
}

export default CarShopping
