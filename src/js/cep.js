export async function meuCEP (cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const resultado = await dados.json();

    return resultado;
}

export async function infoTempo (cidade) {
    let url = `http://api.weatherapi.com/v1/current.json?key=a6bb50718382475796a210805220612&q=${cidade}&aqi=yes&lang=pt`;
    const dadosClima = await fetch(url);
    const resultado = await dadosClima.json();

    return resultado;
}