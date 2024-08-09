import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Button, Tabs, Tab } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../../theme.js';
import { addToCart } from '../../state/index.js';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item'
import './ItemDetails.css'
import '../../App.css'

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams(); // This will help grab the item id to this page
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState(['']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET"}
    );
    const itemJson = await item.json();
      setItem(itemJson.data);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  };

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='item-details-container'>
      <div className='item-details-content'>
        {/* IMAGES */}
        <div className='item-img'>
          <img
            alt={item?.name}
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
          />
        </div>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Items</Box>
            <Box>Prev Next</Box>
          </Box>
          <Box m="55px 0 25px 0">
            <p 
              style={{
                color: 'var(--main-green)',
                fontSize: '34px',
                fontWeight: '200',
                marginBottom: '0.5em'
              }}
            >
              {item?.attributes?.title}
            </p>
            <p style={{fontWeight: '600', fontSize: '1.5rem', marginBottom: '1em'}}>£{item?.attributes?.price}</p>
            <p>{item?.attributes?.shortDescription}</p>
          </Box>

          { /* COUNT AND BUTTON */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box 
              display="flex" 
              alignItems="center" 
              border={`1.5px solid ${shades.neutral[300]}`} 
              mr="20px"
              p="2px 5px"
              style={{ fontVariantNumeric: 'tabular-nums'}}
            >
              <IconButton 
                onClick={() => setCount(Math.max(count - 1, 1))}
              >
                <RemoveIcon />
              </IconButton>
              <p style={{ padding: '0 5px' }}>{count}</p>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{ 
                backgroundColor: "var(--btn-green)",
                color: 'white',
                borderRadius: 0,
                minWidth: '150px',
                padding: '10px 40px'
              }}
              onClick={() => dispatch(addToCart({ item: {...item, count}}))}
            >
              ADD TO CART
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <p style={{ marginLeft: "5px"}}>ADD TO WISHLIST</p>
            </Box>
            <p>CATEGORIES: {item?.attributes?.category}</p>
          </Box>

          {/* INFORMATION */}
          <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="DESCRIPTION" value="description" />
              <Tab label="REVIEWS" value="reviews" />
            </Tabs>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="15px">
            {value === "description" && (
            <div>{item?.attributes?.longDescription}</div>
            )}
            {value === "reviews" && <div>reviews</div>}
          </Box>

          {/* RELATED ITEMS */}
          <Box mt="50px" width="100%">
            <p style={{ fontWeight: "bold" }}>
              Related Products
            </p>
            <Box
              mt="20px"
              display="flex"
              flexWrap="wrap"
              columnGap="1.33%"
              justifyContent="space-between"
            >
              {items.slice(1, 4).map((item, i) => (
                <Item key={`${item.name}-${i}`} item={item} />
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default ItemDetails