// Shopify Storefront Api code here

// Fetch products function for Products.jsx
export const fetchProducts = async () => {
  const response = await fetch(``, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': ''
    },
    body: JSON.stringify({
      query: `
        {
          products(first: 5) {
            edges {
              node {
                id
                title
                descriptionHtml
                images(first: 1) {
                  edges {
                    node {
                      src
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      priceV2 {
                        amount
                      }
                    }
                  }
                } 
              }
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.products.edges;
};