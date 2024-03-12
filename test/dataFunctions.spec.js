import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js'; 

describe('filterData', () => {

  it('returns `livrosDeFicção`', () => {
    const filteredData = filterData(fakeData, 'generoLivro', 'Ficção');
    expect(filteredData.length).toBe(4);
  });

});


describe('sortData', () => {

  it('returns `ordemAscendente`', () => {
    const sortedData = sortData(fakeData, 'name', 'asc')
    expect(sortedData[0].name).toBe('A Poderosa Chefona');
    expect(sortedData[1].name).toBe('Bolsa Blindada');
    expect(sortedData[2].name).toBe('Cinquenta Tons de Cinza');
  });

  it('returns `ordemDescendente`', () => {
    const sortedData = sortData(fakeData, 'name', 'desc')
    expect(sortedData[0].name).toBe('Sempre Vivemos no Castelo');
    expect(sortedData[1].name).toBe('Sejamos Todos Feministas');
    expect(sortedData[2].name).toBe('Quarto de Despejo: Diário de uma Favelada');
  });
});


describe('computeStats', () => {
  it('returns `quantidade de livros`', () => {
    const fakeData = [
      { generoLivro: 'Ficção' },
      { generoLivro: 'Ficção' },
      { generoLivro: 'Ficção' },
    ];

    const expectedCount = 3;
    const result = computeStats(fakeData);

    expect(result).toBe(expectedCount);
  });
});