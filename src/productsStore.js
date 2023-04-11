const productsArray = [
  {
    id: "1",
    title: "Coffee",
    price: 49.99
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 499.99
  },
  {
    id: "3",
    title: "Camera",
    price: 39999.99
  }
];

function getProductData(id) {
  let productData = productsArray.find((prod) => prod.id === id);
  if (productData === undefined) {
    console.log("Product data not found for id:", id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
