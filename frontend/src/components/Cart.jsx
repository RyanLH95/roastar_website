import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { X } from 'lucide-react'
import { Box, Button, Divider, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades } from '../theme';
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from '../state'
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)
  const isCartOpen = useSelector((state) => state.cart.isCartOpen)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box 
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={101}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
        zIndex={102}
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <h3>SHOPPING BAG ({cart.length})</h3>
            <button 
              style={{
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              onClick={() => dispatch(setIsCartOpen({}))}>
              <X />
            </button>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="123px"
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    {/* ITEM NAME */}
                    <FlexBox mb="5px">
                      <p style={{fontWeight: 'bold'}}>
                        {item.attributes.name}
                      </p>
                      <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <p>{item.attributes.shortDescription}</p>
                    {/* AMOUNT */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() => dispatch(decreaseCount({ id: item.id }))}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <p style={{invisible: item.count === 1}}>{item.count}</p>
                        <IconButton
                          onClick={() => dispatch(increaseCount({ id: item.id }))}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      {/* PRICE */}
                      <p style={{fontWeight: 'bold'}}>
                        £{item.attributes.price}
                      </p>
                    </FlexBox>
                    </Box>
                  </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <p style={{fontWeight: 'bold'}}>SUBTOTAL</p>
              <p style={{fontWeight: 'bold'}}>£{totalPrice}</p>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: 'var(--btn-green)',
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
                letterSpacing: "1.5px"
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart

/*
<div className='cart-card'>
      <div className='cart-container'>
        <h2>PRODUCTS IN CART</h2>
          {data?.map(product => {
            return (
              <div className='item' key={product.id}>
                <img width={100} src={product.image} alt=''/>
                <div className='item-info'>
                  <h3>{product.title}</h3>
                  <p className='price'>£{product.price}</p>
                </div>
                <Trash className='delete' size={18} style={{position: 'relative', top: '1.5rem',}}/>
              </div>
            );
          })}
         <div className='total'>
           <span>SUBTOTAL</span>
           <p>£123</p>
        </div>
        <button className='checkout'>CHECKOUT</button>
        <span className='reset'>RESET CART</span>
      </div>
    </div>
*/