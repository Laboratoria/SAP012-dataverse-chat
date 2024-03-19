 export const filterBy = (data, filterBy, value) => {
    const filteredData = data.filter((item) => {
      return item.facts[filterBy] === value;
    });
    return filteredData;
  };
  
  export const sortBy = (data, sortBy, value) => {
    // mais caro
    if (value === "asc") {
      return data.sort((a, b) => {
        return a.facts[sortBy] - b.facts[sortBy];
      });
    } else {
      // mais barato
      return data.sort((a, b) => {
        return b.facts[sortBy] - a.facts[sortBy];
      });
    }
  };
  
  const calcularCustoMedio = (data) => {
    const somaTotal = data.reduce((resultado, data) => {
      resultado = resultado + data.facts.custoParaIniciar;
      return resultado;
    }, 0);
    return parseFloat(somaTotal / data.length);
  };
  const calcularNivelMedioDeDificuldade = (data) => {
    const somaTotal = data.reduce((resultado, data) => {
      resultado = resultado + data.facts.nivelDeDificuldade;
  
      return resultado;
    }, 0);
    return parseFloat(somaTotal / data.length);
  };
  
  export const computeStats = (data) => {
    const mediaCusto = calcularCustoMedio(data);
    const mediaNivelDificuldade = calcularNivelMedioDeDificuldade(data);
    return {
      mediaCusto: mediaCusto.toFixed(2),
      mediaNivelDificuldade: mediaNivelDificuldade.toFixed(2),
    };
  };
  