const error = () => {
    const errorElement = document.createElement('div');
    errorElement.innerHTML = "OOOOPPS, PÁGINA DE ERRO!";
    return errorElement;
}

export { error };