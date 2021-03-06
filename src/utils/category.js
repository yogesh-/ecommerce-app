export const categoryItems = (products, workout, tennis, running) => {
  const filterCategory = [];
  if (workout === false && tennis === false && running === false) {
    return products;
  }
  if (workout) {
    let newCategory = products.filter((item) => "workout" === item.category);
    filterCategory.push(...newCategory);
  }
  if (tennis) {
    let newCategory = products.filter((item) => "tennis" === item.category);
    filterCategory.push(...newCategory);
  }

  if (running) {
    let newCategory = products.filter((item) => "running" === item.category);
    filterCategory.push(...newCategory);
  }
  return filterCategory;
};
