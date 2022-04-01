export const sortItems = (products, sortBy) => {
  console.log("sorting data before sort", products);
  if (sortBy === "LOW_TO_HIGH") {
    var abc = [...products].sort((item1, item2) => item1.price - item2.price);
    console.log("L2H sort", abc);
    return abc;
  }
  if (sortBy === "HIGH_TO_LOW") {
    var qwe = [...products].sort((item1, item2) => item2.price - item1.price);
    console.log("H2l SORT", qwe);
    return qwe;
  }
  return products;
};
