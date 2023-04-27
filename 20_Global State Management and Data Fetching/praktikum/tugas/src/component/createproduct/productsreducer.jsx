const initialState = {
    produk: [
      {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        productFreshness: "Doe",
        productPrice: "Doe",
        image: "Doe",
        additionalDescription: "Doe",
      },
    ],
  };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "DELETE_PRODUCT":
      return state.filter((product) => product.nama !== action.payload);
    default:
      return state;
  }
};

export default productsReducer;