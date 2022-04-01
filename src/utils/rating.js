export const ratingItems = (products, rating) => {
  console.log("rating.js input", products);
  if (rating) {
    return products.filter((item) => item.rating >= rating);
  }
  console.log("rating.js output", products);
  return products;
};
