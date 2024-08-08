import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../../state'
import Item from '../../../components/Item'
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'

const Products = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  console.log('items', items)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson =  await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );

  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );

  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <div className="product-container">
      <div className='product-content'>
        <Tabs
          textColor='primary'
          indicatorColor='primary'
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{ sx: { display: isNonMobile ? 'block' : "none"}}}
          sx={{
            m: "25px",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap"
            }
          }}
        >
          <Tab label="ALL" value="all"/>
          <Tab label="NEW ARRIVALS" value="newArrivals"/>
          <Tab label="BEST SELLERS" value="bestSellers"/>
          <Tab label="TOP RATED" value="topRated"/>
        </Tabs>
        <div className='product-grid'>
          {value === "all" && items.map((item, index) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "newArrivals" && newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "bestSellers" && bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "topRated" && topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products