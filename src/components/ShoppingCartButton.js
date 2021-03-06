import React, { Component } from 'react'
import { DropButton, Box, Stack, Button } from 'grommet';
import { FaShoppingBag } from 'react-icons/fa'
import CartItemList from './CartItemList'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class ShoppingCartButton extends Component {
  render() {
    return (
      <DropButton
        dropAlign={{
          top: 'bottom',
          right: 'right'
        }}
        dropContent={
          <Box pad="small" width="200px">
            <CartItemList />
            <Link to="/checkout"><Button pad="small" primary>Check Out</Button></Link>
          </Box>
        }
      >
        <Stack
          anchor="top-right"
        >
          <Box pad='xsmall'>
            <FaShoppingBag size={32} />
          </Box>
          <Box
            background="accent-1"
            pad={{ horizontal: 'xsmall' }}
            round
          >
           {0}
          </Box>
        </Stack>
      </DropButton>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    cartItem : state.cart.cartItem
  }
}

export default connect(mapStateToProps)(ShoppingCartButton)