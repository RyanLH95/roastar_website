import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../theme.js'
import { addToCart } from '../state/index.js';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, SetIsHovered] = useState(false)
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, title, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url }
        }
      }
    }
  } = image;

  return (
    <Box width={width}>
      <Box 
        position='relative' 
        mt='3em'
        onMouseOver={() => SetIsHovered(true)}
        onMouseOut={() => SetIsHovered(true)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(window.location=`/item/${item.id}`)}
          style={{ cursor: 'pointer', objectFit: 'cover'}}
        />
        <Box 
          display={isHovered ? 'block' : 'none'}
          position='absolute'
          bottom='100%'
          left='0'
          width='100%'
          padding='0 5%'
        >
        </Box>
        <Box 
          display='flex' 
          justifyContent='space-between'
          mt='0.5em'
          mb='1em'
        >
          {/* AMOUNT */}
          <Box
            display='flex'
            alignItems='center'
            backgroundColor={shades.neutral[100]}
            borderRadius='3px'
            style={{ fontVariantNumeric: 'tabular-nums'}}
          >
            <IconButton
              onClick={() => setCount(Math.max(count - 1, 1))}
            >
              <RemoveIcon />
            </IconButton>
            <p style={{ color: shades.primary[100] }}>{count}</p>
            <IconButton
              onClick={() => setCount(count + 1)}
            >
              <AddIcon />
            </IconButton>
          </Box>
          {/* BUTTON */}
          <Button
            onClick={() => { 
              dispatch(addToCart({ item: {...item, count}}))
            }}
            sx={{ 
              backgroundColor: 'var(--btn-green)', 
              color: 'white',
              letterSpacing: '1.5px'
            }}
          >
            ADD TO CART
          </Button>
        </Box>
      </Box>

      <Box mt='3px'>
        <p variant='subtitle2' style={{color: neutral.dark}}>
          {category 
            .replace(/([A-Z])/g, (string) => ` ${string.toUpperCase()}`)
            .replace(/^./, (str) => str.toUpperCase())
          }
        </p>
        <p 
          style={{
            color: 'var(--main-green)',
            fontSize: '1.2rem',
            fontWeight: '300',
            letterSpacing: '1.5px'
          }}
        >
          {title}
        </p>
        <p style={{fontWeight: 'bold'}}>£{price}</p>
      </Box>
    </Box>
  )
}

export default Item