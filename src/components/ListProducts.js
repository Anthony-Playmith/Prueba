import React, {Component} from 'react'
import {FaCartArrowDown, FaTrashAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import productsData from '../fake_data'
import './styles.css'

class ListProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      idValuesSelected: [],
      amountProductsPrice: 0,
      productsSelected: [],
    }
  }

  componentDidMount() {
    this.setState({
      products: productsData,
    })
  }

  buyProduct(product) {
    if (this.state.idValuesSelected.includes(product.id)) return

    this.setState(
      ({amountProductsPrice, idValuesSelected, productsSelected}) => ({
        amountProductsPrice: amountProductsPrice + product.price,
        idValuesSelected: [...idValuesSelected, product.id],
        productsSelected: [...productsSelected, product],
      }),
    )
  }

  deleteProduct = productSelected => {
    this.setState(
      ({amountProductsPrice, idValuesSelected, productsSelected}) => ({
        amountProductsPrice: amountProductsPrice - productSelected.price,
        idValuesSelected: idValuesSelected.filter(
          idSelected => idSelected !== productSelected.id,
        ),
        productsSelected: productsSelected.filter(
          product => product.id !== productSelected.id,
        ),
      }),
    )
  }

  renderProductsList = () => {
    return this.state.products.map(product => {
      return (
        <div className="container product" key={product.id}>
          <img
            src={`${product.url}`}
            width="100"
            height="100"
            alt={product.description}
          />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <button
            className="container button buy"
            onClick={this.buyProduct.bind(this, product)}
          >
            <p className="text">{product.price} $</p>
          </button>

          {!this.state.idValuesSelected.includes(product.id) ? null : (
            <button
              className="container button delete"
              onClick={this.deleteProduct.bind(this, product)}
            >
              <FaTrashAlt size={22} />
            </button>
          )}
        </div>
      )
    })
  }

  render() {
    const {productsSelected, amountProductsPrice} = this.state

    return (
      <div>
        <div className="container header">
          <p className="text">CAR SHOPPING</p>
          <Link
            to={{
              pathname: '/carshopping',
              productsSelected: productsSelected,
              amountProductsPrice: amountProductsPrice,
            }}
            className="icon-car"
          >
            <FaCartArrowDown size={26} />
          </Link>
        </div>
        <div className="container">{this.renderProductsList()}</div>
      </div>
    )
  }
}

export default ListProducts
