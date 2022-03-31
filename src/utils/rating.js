export const ratingItems = (products, rating) => {
  let abc = products.filter((item) => item.rating <= rating);
  console.log(" rating.js after filter", abc);
  return abc;
};
