export const ratingItems = (products, rating) => {
  console.log(products);
  let abc = products.filter((item) => item.rating <= rating);
  console.log("from rating.js", abc);
  return abc;
};
