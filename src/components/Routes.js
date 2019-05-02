import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ListProducts from './ListProducts'
import CarShopping from './CarShopping'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListProducts} />
      <Route path="/carshopping" component={CarShopping} />
    </Switch>
  )
}

export default Routes
