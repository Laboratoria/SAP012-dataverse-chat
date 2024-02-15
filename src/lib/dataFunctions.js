export const filterData = (data, filterBy, value) => {
  const result = data.filter((item) => item.facts[filterBy].toLowerCase().includes(value));
  return result;
};

export const sortData = (data, sortBy, sortOrder) => {

  const orderMultiplier = sortOrder === 'asc' ? 1 : -1;

  return data.slice().sort((a, b) => {
    const valueA = a.facts[sortBy];
    const valueB = b.facts[sortBy];

    const numA = parseFloat(valueA);
    const numB = parseFloat(valueB);

    return (numA - numB) * orderMultiplier;
  });
};


export const computeStats = (data) => {
  const stats = data.map(item => item.facts.imDbRating).filter(value => !isNaN(value));
  const count = stats.reduce((accumulator) => accumulator + 1, 0);
  return count;
}
