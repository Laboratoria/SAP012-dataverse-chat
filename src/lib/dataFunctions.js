export const filterData = (data, filterBy, value) => {
    const filteredData = data.filter(item => { // Utiliza o método filter() para iterar sobre o array data e filtrar os itens que satisfazem a condição.
        return item.facts[filterBy].toLowerCase() === value.toLowerCase(); // Verifica se o valor da propriedade detalhes (especificada por filterBy) do item é igual a value, após converter ambos para minúsculas para garantir comparação case-insensitive.
    });
    return filteredData; // Retorna um novo array contendo apenas os itens filtrados.
};

export const sortData = (data, sortBy, sortOrder) => {
    if (sortOrder === 'asc') { // Verifica se a ordenação será ascendente (asc).
        return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy])); // Utiliza o método sort() para ordenar o array data de forma ascendente com base na propriedade especificada por sortBy. A função de comparação (a, b) => a[sortBy].localeCompare(b[sortBy]) compara as strings.
    } else if (sortOrder === 'desc') { // Verifica se a ordenação será descendente (desc)
        return data.slice().sort((a, b) => b[sortBy].localeCompare(a[sortBy])); // Utiliza o método sort() para ordenar o array data de forma descendente com base na propriedade especificada por sortBy. A função de comparação (a, b) => b[sortBy].localeCompare(a[sortBy]) compara as strings.

    } else {
        return data; // Retorna os dados inalterados se a ordem não for especificada corretamente
    }
};

export const computeStats = (data) => {
    const count = data.map(item => item.generoLivro).reduce((accumulator) => accumulator + 1, 0);

    return parseInt(count);
};