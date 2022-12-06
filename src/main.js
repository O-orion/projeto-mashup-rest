import { meuCEP, infoTempo  } from '../src/js/cep.js'
const inputCEP = document.querySelector('.inputCEP')

inputCEP.addEventListener('keyup', async (e) => {
    e.preventDefault()
    let value = e.target.value.toString();
   
    if(value.length == 8 && value != "") {
        // 
        const resultado = await meuCEP(value)
        const clima = await infoTempo(resultado.localidade)
    
        preencherCampos(resultado)
        preencherCamposClima(clima)

        return
    }


    
})

function preencherCampos(dadosJSON){

    let cidade = document.getElementById('Cidade')
    let uf = document.getElementById("UF")
    let bairro = document.getElementById("Bairro")
    let logradouro = document.getElementById("Logradouro")
    let cep = document.getElementById("CEP")
    let ibge = document.getElementById("IBGE")

    cidade.value = dadosJSON.localidade;
    logradouro.value = dadosJSON.logradouro
    uf.value = dadosJSON.uf;
    bairro.value = dadosJSON.bairro;
    cep.value = dadosJSON.cep;
    ibge.value = dadosJSON.ibge

}

function preencherCamposClima(clima){

    let localidade = document.getElementById("Location");
    let regiao = document.getElementById("Region");
    let pais = document.getElementById("Country")
    let timeZone = document.getElementById("TZ");
    let dataHora = document.getElementById("LocalTime");
    let temp_c = document.getElementById("Temp_c");
    let temp_f = document.getElementById("Temp_f");
    let condicao = document.getElementById('Condition')
    
    localidade.value = clima.location.name;
    regiao.value = clima.location.region;
    pais.value = clima.location.country
    timeZone.value = clima.location.tz_id
    dataHora.value = clima.location.localtime

    condicao.value = clima.current.condition.text
    temp_c.value = clima.current.temp_c;
    temp_f.value = clima.current.temp_f;

    console.log(clima)
}

