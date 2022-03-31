export const priceItems = (products, price) => {
  console.log(products);
  let abc = products.filter((item) => item.price <= price);
  console.log(abc);
  return abc;
};
