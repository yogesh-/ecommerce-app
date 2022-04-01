export const priceItems = (products, price) => {
  let abc = products.filter((item) => item.price <= price);
  return abc;
};
