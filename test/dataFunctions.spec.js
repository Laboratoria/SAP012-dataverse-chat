import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filterData', () => {
  it('O conteúdo é filtrado pelo valor movieGender', () => {
    const filterBy = 'movieGender';
    const value = 'drama';

    const result = filterData(fakeData, filterBy, value);
    expect(result).toHaveLength(4);
    expect(result.every(movie => movie.facts[filterBy].toLowerCase().includes(value))).toBe(true);
  });
});

describe('filterData', () => {
  it('O conteúdo é filtrado pelo valor movieGender', () => {
    const filterBy = 'movieGender';
    const value = 'policial';

    const result = filterData(fakeData, filterBy, value);
    expect(result).toHaveLength(1);
    expect(result.every(movie => movie.facts[filterBy].toLowerCase().includes(value))).toBe(true);
  });

  it('retorna uma lista vazia caso o valor seja inválido', () => {
    const filterBy = 'movieGender';
    const value = 'comedia';
    const result = filterData(fakeData, filterBy, value);
    expect(result).toHaveLength(0);
  });
});

describe('sortData', () => {
  const getRatings = (movies) => movies.map((movie) => movie.facts.imDbRating);

  it('Deve retornar uma lista ordenada em ordem crescente', () => {
    const sortedData = sortData([...fakeData], 'imDbRating', 'asc');
    const ratings = getRatings(sortedData);
    const expectedOrder = ratings.slice().sort((a, b) => parseFloat(a) - parseFloat(b));
    expect(ratings).toEqual(expectedOrder);
  });

  it('Deve retornar uma lista ordenada em ordem decrescente', () => {
    const sortedData = sortData([...fakeData], 'imDbRating', 'desc');
    const ratings = getRatings(sortedData);
    const expectedOrder = ratings.slice().sort((a, b) => parseFloat(b) - parseFloat(a));
    expect(ratings).toEqual(expectedOrder);
  })
});

describe('computeStats', () => {
  it('Deve retornar o número de itens da lista', () => {
    const stats = [...fakeData].map(item => item.facts.imDbRating).filter(value => !isNaN(value));
    const count = stats.reduce((accumulator) => accumulator + 1, 0);
    expect(count).toBe(computeStats(fakeData));
  })
});
