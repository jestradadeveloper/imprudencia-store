import { setProducts, setCategories, setProductBySlug } from "./productsSlice";

const query = `{
  productCollection{
    items{
      slug
      name
      description
      price
      image{
        url
      }
      stock
      category {
        slug
        name
      }
    }
  }
}`;
export const queryCategories = `{
  categoryCollection{
    items{
      slug
      name
    }
  }
}`;

export const getAllProducts = () => {
  return async (dispatch, getState) => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_KEY}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        const products = data.productCollection.items;
        dispatch(setProducts(products));
      });
  };
};

export const getAllCategories = () => {
  return async (dispatch, getState) => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_KEY}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query: queryCategories }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        const categories = data.categoryCollection.items;
        dispatch(setCategories(categories));
      });
  };
};
export const getAllProductsByCategorySlug = (categorySlug) => {
  return async (dispatch, getState) => {
    const queryProductsByCategorySlug = `{
      categoryCollection(where: {slug:"${categorySlug}"}, limit: 1){
        items{
          name
          slug
          linkedFrom{
            productCollection{
              items{
                slug
                name
                description
                price
                stock
                image{
                  url
                }
                category {
                  name
                  slug
                }
              }
            }
          }
        }
      }}
    `;
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_KEY}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query: queryProductsByCategorySlug }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        const products =
          data.categoryCollection.items[0].linkedFrom.productCollection.items;
        dispatch(setProducts(products));
      });
  };
};

export const getProductBySlug = (productSlug) => {
  return async (dispatch, getState) => {
    const queryProductsBySlug = `{
      productCollection(where: {slug:"${productSlug}"}, limit: 1){
        items{
          slug
          name
          description
          price
          stock
          image{
            url
          }
          category {
            name
            slug
          }
        }
      }}
    `;
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_KEY}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query: queryProductsBySlug }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        const product = data.productCollection.items[0];
        dispatch(setProductBySlug(product));
      });
  };
};
