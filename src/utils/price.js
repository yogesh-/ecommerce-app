export const priceItems = (products, price) => {
  let abc = products.filter((item) => item.price <= price);
  console.log("price slider output", abc);
  return abc;
};
