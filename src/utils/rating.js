export const ratingItems = (products, rating) => {
  return products.filter((item) => item.rating <= rating);
};
